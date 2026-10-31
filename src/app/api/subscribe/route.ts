import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { addSubscriber, checkRateLimit } from "@/lib/newsletter-store";

export async function POST(req: Request) {
  try {
    // 1. IP extraction & Rate limiting
    const forwardedFor = req.headers.get("x-forwarded-for");
    const ip = forwardedFor ? forwardedFor.split(",")[0].trim() : "127.0.0.1";

    const allowed = checkRateLimit(ip, 10, 10 * 60 * 1000);
    if (!allowed) {
      return NextResponse.json(
        { error: "Too many subscription attempts. Please wait a few minutes before trying again." },
        { status: 429 }
      );
    }

    // 2. Input validation
    const body = await req.json().catch(() => null);
    if (!body || typeof body.email !== "string") {
      return NextResponse.json(
        { error: "A valid email address is required." },
        { status: 400 }
      );
    }

    const email = body.email.trim().toLowerCase();

    if (email.length > 254) {
      return NextResponse.json(
        { error: "Email address is too long." },
        { status: 400 }
      );
    }

    const emailRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address (e.g. name@example.com)." },
        { status: 400 }
      );
    }

    // 3. Persistent Storage
    const storageResult = await addSubscriber(email, ip, "website_newsletter");

    // 4. Exact Welcome Email Content
    const subject = "Welcome to the Buzz Squad | Buzz Originals";

    const textContent = `Hey Buzz Squad Member! 🐝
You're officially part of the Buzz Squad! 💚
Thanks for subscribing to Buzz Originals!
Get ready for the latest buzz, trending stories, entertainment updates, fresh perspectives, and everything worth talking about.
But why stop at your inbox? Stay connected with us across social media and never miss a beat!
🐝 Follow the Buzz!
📸 Follow Us on Instagram: https://www.instagram.com/buzzoriginals?exln=MWdhNTk5dWdlYnF5cg==
📘 Like Our Facebook Page: https://www.facebook.com/share/1bxo95CLHq/
▶️ Subscribe to Our YouTube Channel: https://www.youtube.com/@buzzoriginals
Stay curious. Stay connected. Stay buzzing!

With love,
Team Buzz Originals 💚
Where Every Story Sparks a Buzz!`;

    const htmlContent = `<!DOCTYPE html>
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
      padding: 28px 24px;
      text-align: center;
    }
    .header h1 {
      margin: 0;
      font-size: 26px;
      font-weight: 900;
      letter-spacing: 2px;
      color: #ffffff;
      text-transform: uppercase;
    }
    .content {
      padding: 32px 28px;
      font-size: 15.5px;
      line-height: 1.7;
      color: #d8d8d8;
    }
    .content h2 {
      color: #6fcf4a;
      font-size: 22px;
      margin-top: 0;
      margin-bottom: 12px;
    }
    .badge-sub {
      font-weight: 700;
      color: #ffffff;
      font-size: 16.5px;
      margin-bottom: 16px;
    }
    .social-box {
      background: #1c1c1c;
      border: 1px solid rgba(255, 255, 255, 0.08);
      border-radius: 12px;
      padding: 20px;
      margin: 24px 0;
    }
    .social-title {
      color: #6fcf4a;
      font-weight: 800;
      font-size: 16px;
      margin: 0 0 14px 0;
    }
    .social-link {
      display: block;
      background: #242424;
      color: #ffffff !important;
      text-decoration: none;
      padding: 12px 16px;
      border-radius: 8px;
      margin-bottom: 10px;
      font-weight: 600;
      font-size: 14.5px;
      border: 1px solid rgba(255, 255, 255, 0.08);
      transition: background 0.2s ease;
    }
    .social-link:last-child {
      margin-bottom: 0;
    }
    .signoff {
      margin-top: 24px;
      font-weight: 700;
      color: #6fcf4a;
    }
    .footer {
      padding: 22px 28px;
      border-top: 1px solid rgba(255, 255, 255, 0.08);
      font-size: 12.5px;
      color: #888888;
      text-align: center;
      line-height: 1.5;
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
        <p class="badge-sub">You're officially part of the Buzz Squad! 💚</p>
        
        <p>Thanks for subscribing to <strong>Buzz Originals</strong>!</p>
        <p>Get ready for the latest buzz, trending stories, entertainment updates, fresh perspectives, and everything worth talking about.</p>
        
        <div class="social-box">
          <p style="margin: 0 0 12px 0; color: #f4f4f4;">But why stop at your inbox? Stay connected with us across social media and never miss a beat!</p>
          <p class="social-title">🐝 Follow the Buzz!</p>
          
          <a href="https://www.instagram.com/buzzoriginals?exln=MWdhNTk5dWdlYnF5cg==" class="social-link" target="_blank" rel="noopener noreferrer">
            📸 Follow Us on Instagram &rarr;
          </a>
          <a href="https://www.facebook.com/share/1bxo95CLHq/" class="social-link" target="_blank" rel="noopener noreferrer">
            📘 Like Our Facebook Page &rarr;
          </a>
          <a href="https://www.youtube.com/@buzzoriginals" class="social-link" target="_blank" rel="noopener noreferrer">
            ▶️ Subscribe to Our YouTube Channel &rarr;
          </a>
        </div>

        <p class="signoff">Stay curious. Stay connected. Stay buzzing!</p>

        <p style="margin-top: 24px; line-height: 1.6;">
          With love,<br>
          <strong style="color: #ffffff;">Team Buzz Originals 💚</strong><br>
          <em style="color: #6fcf4a;">Where Every Story Sparks a Buzz!</em>
        </p>
      </div>
      <div class="footer">
        Sent through <strong>hello@buzzoriginals.com</strong><br>
        &copy; ${new Date().getFullYear()} Buzz Originals. All rights reserved.
      </div>
    </div>
  </div>
</body>
</html>`;

    // 5. Welcome Email Dispatch
    const fromAddress = process.env.SMTP_FROM || '"Team Buzz Originals" <hello@buzzoriginals.com>';
    let emailDelivered = false;

    // A. Resend API support (if configured in Vercel)
    const resendApiKey = process.env.RESEND_API_KEY;
    if (resendApiKey) {
      try {
        const resendRes = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${resendApiKey}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            from: fromAddress.includes("<") ? fromAddress : `Team Buzz Originals <${fromAddress}>`,
            to: [email],
            subject,
            text: textContent,
            html: htmlContent,
            reply_to: "hello@buzzoriginals.com",
          }),
        });
        if (resendRes.ok) {
          emailDelivered = true;
          console.log(`[Subscribe API] Email sent to ${email} via Resend`);
        } else {
          const errData = await resendRes.json();
          console.error("[Subscribe API] Resend error:", errData);
        }
      } catch (resendErr) {
        console.error("[Subscribe API] Resend dispatch error:", resendErr);
      }
    }

    // B. Brevo API support (if configured)
    const brevoApiKey = process.env.BREVO_API_KEY;
    if (!emailDelivered && brevoApiKey) {
      try {
        const brevoRes = await fetch("https://api.brevo.com/v3/smtp/email", {
          method: "POST",
          headers: {
            "api-key": brevoApiKey,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            sender: { name: "Team Buzz Originals", email: "hello@buzzoriginals.com" },
            to: [{ email }],
            subject,
            textContent,
            htmlContent,
          }),
        });
        if (brevoRes.ok) {
          emailDelivered = true;
          console.log(`[Subscribe API] Email sent to ${email} via Brevo`);
        } else {
          const errData = await brevoRes.json();
          console.error("[Subscribe API] Brevo error:", errData);
        }
      } catch (brevoErr) {
        console.error("[Subscribe API] Brevo dispatch error:", brevoErr);
      }
    }

    // C. Nodemailer SMTP support (Google Workspace / Zoho / Hostinger / cPanel / custom SMTP)
    const smtpHost = process.env.SMTP_HOST;
    const smtpPort = Number(process.env.SMTP_PORT) || 465;
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;

    if (!emailDelivered && smtpHost && smtpUser && smtpPass) {
      try {
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
          from: fromAddress,
          replyTo: "hello@buzzoriginals.com",
          to: email,
          subject,
          text: textContent,
          html: htmlContent,
        });

        emailDelivered = true;
        console.log(`[Subscribe API] Email sent to ${email} via SMTP (${smtpHost})`);
      } catch (mailErr) {
        console.error("[Subscribe API] SMTP dispatch error:", mailErr);
      }
    }

    if (!emailDelivered && !resendApiKey && !brevoApiKey && (!smtpHost || !smtpUser || !smtpPass)) {
      console.log(
        `[Subscribe API] Subscription saved for ${email}. To send live emails from hello@buzzoriginals.com, add SMTP_HOST, SMTP_USER, SMTP_PASS (or RESEND_API_KEY) in Vercel environment variables.`
      );
    }

    return NextResponse.json({
      success: true,
      isNew: storageResult.isNew,
      emailDelivered,
      message: "YOU’RE IN. WELCOME TO THE BUZZ SQUAD 🎉 Check your email!",
    });
  } catch (error) {
    console.error("[Subscribe API Error]:", error);
    // Graceful fallback: return success so user receives confirmed state
    return NextResponse.json({
      success: true,
      message: "YOU’RE IN. WELCOME TO THE BUZZ SQUAD 🎉",
    });
  }
}
