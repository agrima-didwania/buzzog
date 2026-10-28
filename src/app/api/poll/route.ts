import { NextResponse } from "next/server";
import { getPoll, recordVote } from "@/lib/poll-store";
import { checkRateLimit } from "@/lib/newsletter-store";

export async function GET() {
  try {
    const poll = await getPoll();
    const safePoll = {
      id: poll.id,
      question: poll.question,
      category: poll.category,
      options: poll.options,
      totalVotes: poll.totalVotes,
      updatedAt: poll.updatedAt,
    };
    return NextResponse.json(safePoll);
  } catch (error) {
    console.error("[Poll API GET Error]:", error);
    return NextResponse.json(
      { error: "Failed to fetch poll data." },
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  try {
    const forwardedFor = req.headers.get("x-forwarded-for");
    const ip = forwardedFor ? forwardedFor.split(",")[0].trim() : "127.0.0.1";

    // Rate limit voting attempts: max 10 per minute per IP
    const allowed = checkRateLimit(ip + "_poll", 10, 60 * 1000);
    if (!allowed) {
      return NextResponse.json(
        { error: "Too many voting requests. Please wait a moment." },
        { status: 429 }
      );
    }

    const body = await req.json().catch(() => null);
    if (!body || typeof body.optionId !== "string") {
      return NextResponse.json(
        { error: "Invalid vote payload." },
        { status: 400 }
      );
    }

    // Client voter token if provided, fallback to IP
    const voterId = (typeof body.voterToken === "string" && body.voterToken) || ip;

    const result = await recordVote(body.optionId, voterId);
    if (!result.success) {
      return NextResponse.json(
        { error: result.error || "Failed to record vote." },
        { status: 400 }
      );
    }

    const safePoll = {
      id: result.poll.id,
      question: result.poll.question,
      category: result.poll.category,
      options: result.poll.options,
      totalVotes: result.poll.totalVotes,
      updatedAt: result.poll.updatedAt,
    };

    return NextResponse.json({
      success: true,
      alreadyVoted: result.alreadyVoted,
      poll: safePoll,
    });
  } catch (error) {
    console.error("[Poll API POST Error]:", error);
    return NextResponse.json(
      { error: "Failed to process vote." },
      { status: 500 }
    );
  }
}
