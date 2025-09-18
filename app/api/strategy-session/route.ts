// app/api/strategy-session/route.ts
import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

const TELEGRAM_TOKEN = process.env.TELEGRAM_TOKEN;
const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID;
const DEBUG = process.env.DEBUG === "true";

/** small helper to escape user-provided text for HTML parse_mode */
function escapeHtml(str: string | undefined) {
  if (!str) return "";
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const {
      firstName,
      lastName,
      email,
      phone,
      age,
      currentState,
      primaryGoal,
      timeFrame,
      experience,
      availability,
      hasMedicalCondition,
      medicalDetails,
      motivation,
    } = body;

    // ✅ Basic validation
    if (!firstName || !lastName || !email || !phone || !age) {
      console.warn("[API] Missing required fields:", {
        firstName,
        lastName,
        email,
        phone,
        age,
      });
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // ✅ Save to DB
    const application = await prisma.coachingApplication.create({
      data: {
        firstName,
        lastName,
        email,
        phone,
        age: parseInt(String(age), 10),
        currentState,
        primaryGoal,
        timeFrame,
        experience,
        availability,
        hasMedicalCondition,
        medicalDetails,
        motivation,
        status: "pending",
      },
    });

    // ✅ Build admin link
    const adminUrlBase = process.env.ADMIN_URL || "";
    const adminLink = `${adminUrlBase.replace(/\/$/, "")}/dashboard/applications/${application.id}`;

    // ✅ Build Telegram message (HTML parse mode)
    const safeFirst = escapeHtml(firstName);
    const safeLast = escapeHtml(lastName);
    const safeLink = escapeHtml(adminLink);

    const message = `<b>📩 New application received!</b>\n` +
      `👤 <b>Name:</b> ${safeFirst} ${safeLast}\n` +
      `📧 <b>Email:</b> ${escapeHtml(email)}\n` +
      `📞 <b>Phone:</b> ${escapeHtml(phone)}\n` +
      `🔗 <a href="${safeLink}">View application</a>`;

    // ✅ Send Telegram notification (non-blocking for end-user but we await to log)
    if (!TELEGRAM_TOKEN || !TELEGRAM_CHAT_ID) {
      console.warn("[Telegram] TELEGRAM_TOKEN or TELEGRAM_CHAT_ID not set — skipping notification.");
    } else {
      try {
        if (DEBUG) console.log("[Telegram] Sending message:", { chat_id: TELEGRAM_CHAT_ID, text: message });

        const tgRes = await fetch(`https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            chat_id: TELEGRAM_CHAT_ID,
            text: message,
            parse_mode: "HTML",
            disable_web_page_preview: true,
          }),
        });

        const tgData = await tgRes.json();
        if (!tgRes.ok || !tgData.ok) {
          console.error("[Telegram] Failed to send message:", tgData);
        } else {
          console.log("[Telegram] Notification sent ✅ message_id:", tgData.result?.message_id);
        }
      } catch (tgErr) {
        console.error("[Telegram] Error while sending message:", tgErr);
      }
    }

    // ✅ Response to client
    return NextResponse.json(
      { message: "Application submitted successfully", id: application.id },
      { status: 201 }
    );
  } catch (error) {
    console.error("[API] Error creating coaching application ❌", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
