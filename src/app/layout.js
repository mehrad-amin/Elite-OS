import { Cairo, Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

// فونت پرقدرت و لوکس عربی
const cairo = Cairo({
  subsets: ["arabic", "latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-cairo",
  display: "swap",
});

// فونت مدرن انگلیسی (سبک آژانس‌های اپل و لینیر)
const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-jakarta",
  display: "swap",
});

// فونت مخصوص اعداد، ماشین‌حساب و تگ‌های مونو
const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["500", "700"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata = {
  title: "ELITE OS | Fitness Coaching Automation Agency",
  description:
    "Luxury sales automation and high-converting portals for elite fitness coaches in the GCC.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl" className="dark scroll-smooth">
      <body
        className={`${cairo.variable} ${jakarta.variable} ${mono.variable} font-sans bg-[#07090e] text-slate-100 antialiased selection:bg-[#22c55e] selection:text-black overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
