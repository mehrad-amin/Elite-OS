"use client";

import React, { useState } from "react";
import Header from "@/components/layout/Header";
import HeroSection from "@/components/sections/HeroSection";
import ProblemSolution from "@/components/sections/ProblemSolution";
import FeaturesGrid from "@/components/sections/FeaturesGrid";
import RoiCalculator from "@/components/sections/RoiCalculator";
import LeadFormSection from "@/components/sections/LeadFormSection";

export default function HomePage() {
  const [currentLang, setCurrentLang] = useState("ar");
  const isRTL = currentLang === "ar";

  return (
    <div
      dir={isRTL ? "rtl" : "ltr"}
      className="min-h-screen bg-[#07090e] text-slate-100 flex flex-col transition-all duration-300 relative overflow-hidden"
    >
      <Header
        currentLang={currentLang}
        onLanguageChange={(newLang) => setCurrentLang(newLang)}
      />

      <main className="flex-1">
        <HeroSection currentLang={currentLang} />
        {/* کلید key باعث ری‌رندر قطعی کامپوننت به محض تغییر زبان می‌شود */}
        <ProblemSolution key={`ps-${currentLang}`} currentLang={currentLang} />
        <FeaturesGrid key={`fg-${currentLang}`} currentLang={currentLang} />
        <RoiCalculator key={`roi-${currentLang}`} currentLang={currentLang} />
        <LeadFormSection
          key={`lead-${currentLang}`}
          currentLang={currentLang}
        />
      </main>

      <footer className="py-6 border-t border-white/[0.06] text-center text-xs text-zinc-600 font-mono">
        ELITE OS • Fitness Coaching Automation Platform
      </footer>
    </div>
  );
}
