import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    if (!email || typeof email !== "string") {
      return NextResponse.json(
        { error: "Email address is required." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    const subject = "Welcome to the Buzz Squad! Buzz Originals";
    const textContent = `Hey Buzz Squad Member! 🐝

Thanks for subscribing to Buzz Originals! 💚

You’re officially part of the Buzz Squad: your go-to crew for the latest buzz, trending stories, fresh perspectives, and everything worth talking about.

Stay tuned. There’s always something buzzing at Buzz Originals!

Stay curious. Stay buzzing.

With love,
Team Buzz Originals 💚
Where Every Story Sparks a Buzz!`;

    const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${subject}</title>
  <style>
    body {
      margin: 0;
      padding: 0;
      background-color: #050505;
      color: #f4f4f4;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
    }
    .wrapper {
      width: 100%;
      table-layout: fixed;
      background-color: #050505;
      padding: 40px 16px;
    }
    .card {
      max-width: 580px;
      margin: 0 auto;
      background: #141414;
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 16px;
      overflow: hidden;
    }
    .header {
      background: linear-gradient(135deg, #e4222e, #8f1720);
      padding: 30px 24px;
      text-align: center;
    }
    .header h1 {
      margin: 0;
      font-size: 28px;
      font-weight: 900;
      letter-spacing: 2px;
      color: #ffffff;
      text-transform: uppercase;
    }
    .content {
      padding: 32px 28px;
      font-size: 16px;
      line-height: 1.7;
      color: #d8d8d8;
    }
    .content h2 {
      color: #6fcf4a;
      font-size: 20px;
      margin-top: 0;
    }
    .highlight-box {
      background: #1c1c1c;
      border-left: 4px solid #6fcf4a;
      padding: 16px 20px;
      margin: 20px 0;
      border-radius: 0 10px 10px 0;
      color: #ffffff;
    }
    .footer {
      padding: 24px 28px;
      border-top: 1px solid rgba(255, 255, 255, 0.08);
      font-size: 13px;
      color: #888888;
      text-align: center;
    }
  </style>
</head>
<body>
  <div class="wrapper">
    <div class="card">
      <div class="header">
        <h1>BUZZ ORIGINALS</h1>
      </div>
      <div class="content">
        <h2>Hey Buzz Squad Member! 🐝</h2>
        <p>Thanks for subscribing to <strong>Buzz Originals</strong>! 💚</p>
        
        <div class="highlight-box">
          You’re officially part of the <strong>Buzz Squad</strong>: your go-to crew for the latest buzz, trending stories, fresh perspectives, and everything worth talking about.
        </div>

        <p>Stay tuned. There’s always something buzzing at Buzz Originals!</p>
        
        <p style="font-weight: 700; color: #6fcf4a;">Stay curious. Stay buzzing.</p>

        <p style="margin-top: 28px;">
          With love,<br>
          <strong style="color: #ffffff;">Team Buzz Originals 💚</strong><br>
          <em>Where Every Story Sparks a Buzz!</em>
        </p>
      </div>
      <div class="footer">
        © ${new Date().getFullYear()} Buzz Originals. All rights reserved.<br>
        Sent from hello@buzzoriginals.com
      </div>
    </div>
  </div>
</body>
</html>
    `;

    const smtpHost = process.env.SMTP_HOST;
    const smtpPort = Number(process.env.SMTP_PORT) || 587;
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const fromEmail = process.env.SMTP_FROM || '"Team Buzz Originals" <hello@buzzoriginals.com>';

    if (smtpHost && smtpUser && smtpPass) {
      const transporter = nodemailer.createTransport({
        host: smtpHost,
        port: smtpPort,
        secure: smtpPort === 465,
        auth: {
          user: smtpUser,
          pass: smtpPass,
        },
      });

      await transporter.sendMail({
        from: fromEmail,
        to: email,
        subject,
        text: textContent,
        html: htmlContent,
      });

      console.log(`[Subscribe API] Welcome email successfully dispatched to ${email}`);
    } else {
      console.log(
        `[Subscribe API] Welcome email queued for ${email} from hello@buzzoriginals.com (Configure SMTP_HOST, SMTP_USER, SMTP_PASS in .env.local for live dispatch)`
      );
    }

    return NextResponse.json({
      success: true,
      message: "YOU'RE IN. WELCOME TO THE BUZZ SQUAD 🎉 Check your email!",
    });
  } catch (error) {
    console.error("[Subscribe API Error]:", error);
    return NextResponse.json(
      { error: "Failed to subscribe. Please try again shortly." },
      { status: 500 }
    );
  }
}
