"use client";

import React, { useState } from "react";
import { dictionary } from "@/data/translations";

export default function Header({ currentLang = "ar", onLanguageChange }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = dictionary[currentLang] || dictionary.ar;
  const isRTL = currentLang === "ar";

  const handleToggleLang = () => {
    const nextLang = currentLang === "ar" ? "en" : "ar";
    if (onLanguageChange) {
      onLanguageChange(nextLang);
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-xl bg-[#07090e]/80 border-b border-white/[0.08] transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* برند و لوگوی شیشه‌ای لوکس */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="relative">
            {/* هاله نور نئونی سبز پشت نشان */}
            <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-[#22c55e] rounded-xl blur opacity-35 group-hover:opacity-75 transition duration-500" />

            {/* باکس شیشه‌ای آیکون */}
            <div className="relative w-11 h-11 rounded-xl bg-[#0c1017]/90 border border-white/15 flex items-center justify-center shadow-inner">
              <span className="text-[#22c55e] font-black text-l font-mono tracking-tighter">
                CR
              </span>
            </div>
          </div>

          <div className="flex flex-col">
            <span className="text-xl font-extrabold tracking-wider font-mono text-white">
              {t.brandName}
              <span className="text-[#22c55e]">{t.brandSuffix}</span>
            </span>
            <span className="text-[10px] text-zinc-400 font-mono tracking-wider">
              {t.tagline}
            </span>
          </div>
        </a>

        {/* لینک‌های منوی دسکتاپ */}
        <nav className="hidden md:flex items-center gap-8">
          <a
            href="#features"
            className="text-sm text-zinc-400 hover:text-[#22c55e] transition duration-200"
          >
            {t.nav.features}
          </a>
          <a
            href="#live-demo"
            className="text-sm text-zinc-400 hover:text-[#22c55e] transition duration-200"
          >
            {t.nav.liveDemo}
          </a>
          <a
            href="#calculator"
            className="text-sm text-zinc-400 hover:text-[#22c55e] transition duration-200"
          >
            {t.nav.calculator}
          </a>
        </nav>

        {/* دکمه‌های سمت راست / سوییچ زبان و دکمه رزرو */}
        <div className="flex items-center gap-3 sm:gap-4">
          {/* دکمه سوییچ زبان */}
          <button
            type="button"
            onClick={handleToggleLang}
            className="px-3.5 py-1.5 rounded-lg border border-white/10 bg-white/[0.03] hover:border-[#22c55e]/50 hover:bg-[#22c55e]/5 transition text-xs font-mono text-zinc-300 flex items-center gap-1.5"
            aria-label="Toggle Language"
          >
            <span className="text-[#22c55e]">🌐</span>
            <span>{t.switchLang}</span>
          </button>

          {/* دکمه CTA اصلی هدر */}
          <a
            href="#lead-form"
            className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 rounded-xl bg-[#22c55e] text-black font-bold text-xs sm:text-sm hover:bg-[#16a34a] hover:shadow-[0_0_25px_rgba(34,197,94,0.4)] transition-all duration-300"
          >
            {t.ctaButton}
          </a>

          {/* دکمه همبرگری موبایل */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg border border-white/10 text-zinc-300 hover:text-white"
            aria-label="Open Menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* منوی بازشونده موبایل */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-white/[0.08] bg-[#07090e]/95 px-6 py-5 flex flex-col gap-4">
          <a
            href="#features"
            onClick={() => setMobileMenuOpen(false)}
            className="text-sm text-zinc-300 hover:text-[#22c55e] py-1"
          >
            {t.nav.features}
          </a>
          <a
            href="#live-demo"
            onClick={() => setMobileMenuOpen(false)}
            className="text-sm text-zinc-300 hover:text-[#22c55e] py-1"
          >
            {t.nav.liveDemo}
          </a>
          <a
            href="#calculator"
            onClick={() => setMobileMenuOpen(false)}
            className="text-sm text-zinc-300 hover:text-[#22c55e] py-1"
          >
            {t.nav.calculator}
          </a>
          <a
            href="#lead-form"
            onClick={() => setMobileMenuOpen(false)}
            className="w-full text-center py-3 rounded-xl bg-[#22c55e] text-black font-bold text-sm mt-2"
          >
            {t.ctaButton}
          </a>
        </div>
      )}
    </header>
  );
}
