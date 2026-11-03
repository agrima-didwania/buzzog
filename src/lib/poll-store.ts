import fs from "fs/promises";
import path from "path";
import crypto from "crypto";

export interface PollOption {
  id: string;
  label: string;
  votes: number;
  percentage: number;
}

export interface PollState {
  id: string;
  question: string;
  category: string;
  options: PollOption[];
  totalVotes: number;
  voterHashes: string[];
  updatedAt: string;
}

const DATA_DIR = path.join(process.cwd(), ".data");
const POLLS_FILE = path.join(DATA_DIR, "polls.json");

const DEFAULT_POLL: PollState = {
  id: "king-tu-mil-jaaye-poll-2026",
  question: "King is back with a new track, ‘Tu Mil Jaaye’! 🎶 But has it won your heart? Tell us what you think. Vote now!",
  category: "New Music Track",
  options: [
    { id: "A", label: "❤️ Loved it! Already on repeat.", votes: 96, percentage: 52 },
    { id: "B", label: "🔥 It's a chartbuster! King nailed it.", votes: 52, percentage: 28 },
    { id: "C", label: "🙂 It's good, but not his best.", votes: 24, percentage: 13 },
    { id: "D", label: "👎 Not really my vibe.", votes: 12, percentage: 7 },
  ],
  totalVotes: 184,
  voterHashes: [],
  updatedAt: new Date().toISOString(),
};

function hashVoter(identifier: string): string {
  return crypto.createHash("sha256").update(identifier + "poll_salt_2026").digest("hex").slice(0, 16);
}

async function ensurePollFile(): Promise<void> {
  try {
    await fs.mkdir(DATA_DIR, { recursive: true });
    try {
      await fs.access(POLLS_FILE);
      const raw = await fs.readFile(POLLS_FILE, "utf8");
      const current = JSON.parse(raw);
      if (current.id !== DEFAULT_POLL.id) {
        await fs.writeFile(POLLS_FILE, JSON.stringify(DEFAULT_POLL, null, 2), "utf8");
      }
    } catch {
      await fs.writeFile(POLLS_FILE, JSON.stringify(DEFAULT_POLL, null, 2), "utf8");
    }
  } catch (err) {
    console.error("[PollStore] Failed to initialize poll file:", err);
  }
}

export async function getPoll(): Promise<PollState> {
  await ensurePollFile();
  try {
    const raw = await fs.readFile(POLLS_FILE, "utf8");
    const data = JSON.parse(raw);
    if (data.id !== DEFAULT_POLL.id) {
      await fs.writeFile(POLLS_FILE, JSON.stringify(DEFAULT_POLL, null, 2), "utf8");
      return DEFAULT_POLL;
    }
    return data;
  } catch {
    return DEFAULT_POLL;
  }
}

export async function recordVote(
  optionId: string,
  voterId: string
): Promise<{ success: boolean; poll: PollState; alreadyVoted?: boolean; error?: string }> {
  await ensurePollFile();
  const poll = await getPoll();
  const voterHash = hashVoter(voterId);

  if (poll.voterHashes.includes(voterHash)) {
    return { success: true, poll, alreadyVoted: true };
  }

  const option = poll.options.find((o) => o.id === optionId);
  if (!option) {
    return { success: false, poll, error: "Invalid option selected." };
  }

  // Increment vote
  option.votes += 1;
  poll.totalVotes += 1;
  poll.voterHashes.push(voterHash);
  poll.updatedAt = new Date().toISOString();

  // Recalculate percentages
  poll.options.forEach((opt) => {
    opt.percentage = poll.totalVotes > 0 ? Math.round((opt.votes / poll.totalVotes) * 100) : 0;
  });

  await fs.writeFile(POLLS_FILE, JSON.stringify(poll, null, 2), "utf8");

  return { success: true, poll, alreadyVoted: false };
}
