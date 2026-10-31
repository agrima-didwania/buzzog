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

// In-memory fallback cache
let memorySubscribers: SubscriberRecord[] = [];

// Choose writable directory (/tmp on Vercel/Lambda serverless functions, .data locally)
const isServerless = process.env.VERCEL === "1" || Boolean(process.env.AWS_LAMBDA_FUNCTION_NAME);
const DATA_DIR = isServerless ? "/tmp" : path.join(process.cwd(), ".data");
const SUBSCRIBERS_FILE = path.join(DATA_DIR, "subscribers.json");

// In-memory rate limiting map: ipHash -> timestamps array
const rateLimitMap = new Map<string, number[]>();

function hashIp(ip: string): string {
  return crypto.createHash("sha256").update(ip + "buzz_salt_2026").digest("hex").slice(0, 16);
}

export function checkRateLimit(ip: string, maxRequests = 10, windowMs = 10 * 60 * 1000): boolean {
  const ipHash = hashIp(ip);
  const now = Date.now();
  const timestamps = rateLimitMap.get(ipHash) || [];

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
    // Silently fall back to in-memory store if disk is read-only
    console.warn("[SubscriberStore] Disk not writable, using memory cache:", err);
  }
}

export async function getSubscribers(): Promise<SubscriberRecord[]> {
  try {
    await ensureDataFile();
    const data = await fs.readFile(SUBSCRIBERS_FILE, "utf8");
    const parsed = JSON.parse(data);
    if (Array.isArray(parsed)) {
      memorySubscribers = parsed;
      return parsed;
    }
  } catch {
    // Return memory cache
  }
  return memorySubscribers;
}

export async function addSubscriber(
  email: string,
  ip = "127.0.0.1",
  source = "website_footer"
): Promise<{ success: boolean; isNew: boolean; error?: string }> {
  try {
    const normalizedEmail = email.trim().toLowerCase();
    const subscribers = await getSubscribers();
    const existing = subscribers.find((s) => s.email === normalizedEmail);

    const now = new Date().toISOString();
    const ipHash = hashIp(ip);

    if (existing) {
      if (existing.status === "active") {
        return { success: true, isNew: false };
      }
      existing.status = "active";
      existing.updatedAt = now;
      existing.ipHash = ipHash;
      try {
        await fs.writeFile(SUBSCRIBERS_FILE, JSON.stringify(subscribers, null, 2), "utf8");
      } catch {}
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
    memorySubscribers = subscribers;

    try {
      await fs.writeFile(SUBSCRIBERS_FILE, JSON.stringify(subscribers, null, 2), "utf8");
    } catch {}

    return { success: true, isNew: true };
  } catch (err) {
    console.error("[SubscriberStore] Error adding subscriber:", err);
    // Never fail the user: return success so welcome email and UI proceed smoothly
    return { success: true, isNew: true };
  }
}
