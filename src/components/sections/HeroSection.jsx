"use client";

import React, { useState } from "react";
import { dictionary } from "@/data/translations";
import {
  IconLightning,
  IconCheck,
  IconDeviceMobile,
  IconLock,
  IconExternalLink,
} from "@/components/ui/Icons";

export default function HeroSection({ currentLang = "ar" }) {
  const activeDict = dictionary[currentLang] || dictionary.ar;
  const t = activeDict.hero;
  const liveSiteUrl = "https://gym-arabic.vercel.app";

  // استیت پالت‌های رنگی برای نمایش شخصی‌سازی تم موکاپ
  const [activeTheme, setActiveTheme] = useState("green");

  // تعریف استایل و فیلتر بصری برای هر تم
  const themeStyles = {
    green: {
      filter: "none",
      accent: "#22c55e",
      glow: "rgba(34, 197, 94, 0.25)",
      badgeClass: "border-[#22c55e]/40 text-[#22c55e] bg-[#22c55e]/10",
      btnClass: "border-[#22c55e] bg-[#22c55e]/15 text-[#22c55e]",
    },
    gold: {
      filter: "hue-rotate(315deg) saturate(1.2)",
      accent: "#eab308",
      glow: "rgba(234, 179, 8, 0.25)",
      badgeClass: "border-yellow-500/40 text-yellow-400 bg-yellow-500/10",
      btnClass: "border-yellow-500 bg-yellow-500/15 text-yellow-400",
    },
    rose: {
      filter: "hue-rotate(185deg) saturate(1.15)",
      accent: "#ec4899",
      glow: "rgba(236, 72, 153, 0.25)",
      badgeClass: "border-pink-500/40 text-pink-400 bg-pink-500/10",
      btnClass: "border-pink-500 bg-pink-500/15 text-pink-400",
    },
  };

  const currentTheme = themeStyles[activeTheme];

  return (
    <section className="relative pt-16 sm:pt-24 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col items-center text-center">
      {/* نشان بالای تیتر */}
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#22c55e]/30 bg-[#22c55e]/10 text-[#22c55e] text-xs sm:text-sm font-medium mb-8 backdrop-blur-md shadow-[0_0_15px_rgba(34,197,94,0.15)]">
        <IconLightning className="w-4 h-4 text-[#22c55e]" />
        <span>{t.badge}</span>
      </div>

      {/* تیتر اصلی */}
      <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white max-w-5xl leading-[1.25] sm:leading-[1.2]">
        {t.titleLine1} <br className="hidden sm:inline" />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#22c55e] via-emerald-300 to-teal-400">
          {t.titleLine2}
        </span>
      </h1>

      {/* توضیحات */}
      <p className="mt-6 sm:mt-8 text-base sm:text-lg lg:text-xl text-zinc-400 max-w-3xl leading-relaxed">
        {t.desc}
      </p>

      {/* دکمه‌های اقدام */}
      <div className="mt-10 flex flex-wrap items-center justify-center gap-4 w-full sm:w-auto">
        <a
          href="#lead-form"
          className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#22c55e] text-black font-extrabold text-sm sm:text-base hover:bg-[#16a34a] hover:shadow-[0_0_35px_rgba(34,197,94,0.45)] transition-all duration-300 transform hover:-translate-y-0.5 flex items-center justify-center gap-2"
        >
          <span>{t.primaryCta}</span>
          <IconLightning className="w-4 h-4 text-black fill-current" />
        </a>
        <a
          href={liveSiteUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:w-auto px-8 py-4 rounded-xl border border-white/15 bg-white/[0.04] hover:bg-white/[0.08] hover:border-[#22c55e]/40 text-white font-medium text-sm sm:text-base transition duration-300 backdrop-blur-md flex items-center justify-center gap-2"
        >
          <IconDeviceMobile className="w-4 h-4 text-[#22c55e]" />
          <span>{t.secondaryCta}</span>
        </a>
      </div>

      {/* نشان‌های اعتماد با تاکید روی انحصار هویت بصری */}
      <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm text-zinc-400">
        <div className="flex items-center gap-2">
          <IconCheck className="w-4 h-4 text-[#22c55e]" />
          <span>{t.trustFast}</span>
        </div>
        <div className="flex items-center gap-2">
          <IconCheck className="w-4 h-4 text-[#22c55e]" />
          <span className="text-zinc-200 font-medium">{t.trustBilingual}</span>
        </div>
        <div className="flex items-center gap-2">
          <IconCheck className="w-4 h-4 text-[#22c55e]" />
          <span>{t.trustWhatsapp}</span>
        </div>
      </div>

      {/* موکاپ با سوییچر زنده تم هویت بصری */}
      <div className="mt-16 sm:mt-20 w-full max-w-5xl relative">
        {/* نوار انتخاب پوسته و پالت رنگی برای مربی */}
        <div className="mb-4 flex flex-col sm:flex-row items-center justify-between gap-3 px-2">
          <span className="text-xs font-mono text-zinc-400 flex items-center gap-2">
            <span
              className="w-2 h-2 rounded-full"
              style={{ backgroundColor: currentTheme.accent }}
            />
            {t.themeLabel}
          </span>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setActiveTheme("green")}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono transition border ${
                activeTheme === "green"
                  ? "border-[#22c55e] bg-[#22c55e]/20 text-[#22c55e] font-bold"
                  : "border-white/10 bg-white/[0.03] text-zinc-400 hover:text-white"
              }`}
            >
              {t.themeGreen}
            </button>
            <button
              type="button"
              onClick={() => setActiveTheme("gold")}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono transition border ${
                activeTheme === "gold"
                  ? "border-yellow-400 bg-yellow-400/20 text-yellow-300 font-bold"
                  : "border-white/10 bg-white/[0.03] text-zinc-400 hover:text-white"
              }`}
            >
              {t.themeGold}
            </button>
            <button
              type="button"
              onClick={() => setActiveTheme("rose")}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono transition border ${
                activeTheme === "rose"
                  ? "border-pink-500 bg-pink-500/20 text-pink-400 font-bold"
                  : "border-white/10 bg-white/[0.03] text-zinc-400 hover:text-white"
              }`}
            >
              {t.themeRose}
            </button>
          </div>
        </div>

        {/* هاله نور داینامیک پشت موکاپ متناسب با تم انتخابی */}
        <div
          className="absolute inset-0 blur-3xl -z-10 rounded-3xl transition-all duration-500"
          style={{
            background: `radial-gradient(ellipse at top, ${currentTheme.glow}, transparent 70%)`,
          }}
        />

        <div className="relative rounded-3xl border border-white/15 bg-[#0c1017]/95 p-3 sm:p-5 shadow-2xl backdrop-blur-2xl">
          <div className="flex items-center justify-between pb-3.5 mb-3.5 border-b border-white/[0.08] px-2 sm:px-4">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#ff5f56] inline-block opacity-80" />
              <span className="w-3 h-3 rounded-full bg-[#ffbd2e] inline-block opacity-80" />
              <span className="w-3 h-3 rounded-full bg-[#27c93f] inline-block opacity-80" />
            </div>

            <div className="flex items-center gap-2 px-4 py-1.5 rounded-lg bg-white/[0.04] border border-white/[0.06] text-xs font-mono text-zinc-400">
              <IconLock
                className="w-3.5 h-3.5"
                style={{ color: currentTheme.accent }}
              />
              <span>{liveSiteUrl}</span>
            </div>

            <div
              className="hidden sm:flex items-center gap-2 text-[11px] font-mono"
              style={{ color: currentTheme.accent }}
            >
              <span
                className="w-2 h-2 rounded-full animate-ping"
                style={{ backgroundColor: currentTheme.accent }}
              />
              <span>LIVE BESPOKE SYSTEM</span>
            </div>
          </div>

          {/* فریم آی‌فریم مجهز به فیلتر رنگی داینامیک */}
          <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full rounded-2xl overflow-hidden bg-black border border-white/[0.08] group">
            <iframe
              src={liveSiteUrl}
              title="Real Fitness Landing Page Live Preview"
              className="w-full h-full border-0 pointer-events-auto bg-[#07090e] transition-all duration-500"
              style={{ filter: currentTheme.filter }}
              loading="lazy"
            />

            <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none flex items-center justify-center">
              <a
                href={liveSiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="pointer-events-auto px-6 py-3 rounded-2xl bg-[#0c1017] border text-white font-mono text-sm font-bold shadow-2xl flex items-center gap-3 transform hover:scale-105 transition"
                style={{ borderColor: currentTheme.accent }}
              >
                <IconExternalLink
                  className="w-4 h-4"
                  style={{ color: currentTheme.accent }}
                />
                <span>{t.mockupCtaHover}</span>
              </a>
            </div>
          </div>

          {/* ۳ نشان مزیت زیر موکاپ */}
          <div className="mt-4 grid grid-cols-3 gap-2 text-center text-[10px] sm:text-xs text-zinc-400 font-mono">
            <div className="py-2 px-1 rounded-lg bg-white/[0.02] border border-white/[0.04] flex items-center justify-center gap-1.5">
              <IconCheck className="w-3.5 h-3.5 text-[#22c55e]" />
              <span>{t.mockupStat1}</span>
            </div>
            <div className="py-2 px-1 rounded-lg bg-white/[0.02] border border-white/[0.04] flex items-center justify-center gap-1.5">
              <IconCheck className="w-3.5 h-3.5 text-[#22c55e]" />
              <span>{t.mockupStat2}</span>
            </div>
            <div className="py-2 px-1 rounded-lg bg-white/[0.02] border border-white/[0.04] flex items-center justify-center gap-1.5">
              <IconCheck className="w-3.5 h-3.5 text-[#22c55e]" />
              <span>{t.mockupStat3}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
