import fs from "fs/promises";
import path from "path";
import crypto from "crypto";

export interface SubscriberRecord {
  id: string;
  email: string;
  status: "active" | "unsubscribed";
  createdAt: string;
  updatedAt: string;
  ipHash?: string;
  source: string;
}

const DATA_DIR = path.join(process.cwd(), ".data");
const SUBSCRIBERS_FILE = path.join(DATA_DIR, "subscribers.json");

// In-memory rate limiting map: ipHash -> timestamps array
const rateLimitMap = new Map<string, number[]>();

function hashIp(ip: string): string {
  return crypto.createHash("sha256").update(ip + "buzz_salt_2026").digest("hex").slice(0, 16);
}

export function checkRateLimit(ip: string, maxRequests = 5, windowMs = 10 * 60 * 1000): boolean {
  const ipHash = hashIp(ip);
  const now = Date.now();
  const timestamps = rateLimitMap.get(ipHash) || [];

  // Filter timestamps within the window
  const recent = timestamps.filter((t) => now - t < windowMs);

  if (recent.length >= maxRequests) {
    return false;
  }

  recent.push(now);
  rateLimitMap.set(ipHash, recent);
  return true;
}

async function ensureDataFile(): Promise<void> {
  try {
    await fs.mkdir(DATA_DIR, { recursive: true });
    try {
      await fs.access(SUBSCRIBERS_FILE);
    } catch {
      await fs.writeFile(SUBSCRIBERS_FILE, JSON.stringify([], null, 2), "utf8");
    }
  } catch (err) {
    console.error("[SubscriberStore] Failed to initialize storage:", err);
  }
}

export async function getSubscribers(): Promise<SubscriberRecord[]> {
  await ensureDataFile();
  try {
    const data = await fs.readFile(SUBSCRIBERS_FILE, "utf8");
    return JSON.parse(data);
  } catch {
    return [];
  }
}

export async function addSubscriber(
  email: string,
  ip = "127.0.0.1",
  source = "website_footer"
): Promise<{ success: boolean; isNew: boolean; error?: string }> {
  await ensureDataFile();
  const normalizedEmail = email.trim().toLowerCase();

  const subscribers = await getSubscribers();
  const existing = subscribers.find((s) => s.email === normalizedEmail);

  const now = new Date().toISOString();
  const ipHash = hashIp(ip);

  if (existing) {
    if (existing.status === "active") {
      return { success: true, isNew: false };
    }
    // Reactivate unsubscribed member
    existing.status = "active";
    existing.updatedAt = now;
    existing.ipHash = ipHash;
    await fs.writeFile(SUBSCRIBERS_FILE, JSON.stringify(subscribers, null, 2), "utf8");
    return { success: true, isNew: true };
  }

  const newRecord: SubscriberRecord = {
    id: crypto.randomUUID(),
    email: normalizedEmail,
    status: "active",
    createdAt: now,
    updatedAt: now,
    ipHash,
    source,
  };

  subscribers.push(newRecord);
  await fs.writeFile(SUBSCRIBERS_FILE, JSON.stringify(subscribers, null, 2), "utf8");

  return { success: true, isNew: true };
}
