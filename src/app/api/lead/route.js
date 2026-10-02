import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const data = await request.json();
    const { name, instagram, country, whatsapp, trackingId } = data;

    // تمیز کردن شماره تلفن برای ساخت لینک مستقیم واتس‌اپ
    const cleanPhone = (whatsapp || "").replace(/[^0-9]/g, "");

    // متن پیام نوتیفیکیشن با فرمت زیبای تلگرام
    const message = `🔥 *لید جدید ثبت شد (ELITE OS)*
━━━━━━━━━━━━━━━━━
🆔 *کد پیگیری:* \`#${trackingId}\`
👤 *نام مربی:* ${name}
📷 *اینستاگرام:* ${instagram}
📍 *کشور:* ${country}
📞 *شماره تماس:* \`${whatsapp}\`
━━━━━━━━━━━━━━━━━
💬 [شروع چت با یک کلیک در واتس‌اپ](https://wa.me/${cleanPhone})`;

    const token = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    if (token && chatId) {
      const response = await fetch(
        `https://api.telegram.org/bot${token}/sendMessage`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            chat_id: chatId,
            text: message,
            parse_mode: "Markdown",
            disable_web_page_preview: true,
          }),
        },
      );

      if (!response.ok) {
        console.error("Telegram API Error:", await response.text());
      }
    } else {
      console.warn(
        "Telegram BOT_TOKEN or CHAT_ID is not configured in .env.local",
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error sending lead to Telegram:", error);
    // حتی در صورت خطا 200 برمی‌گردانیم تا تجربه کاربری لندینگ خراب نشود
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
