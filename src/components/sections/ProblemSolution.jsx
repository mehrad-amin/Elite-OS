"use client";

import React from "react";
import { dictionary } from "@/data/translations";
import {
  IconScale,
  IconCheck,
  IconClose,
  IconAlertTriangle,
} from "@/components/ui/Icons";

export default function ProblemSolution({ currentLang = "ar" }) {
  // اطمینان از انتخاب دقیق دیکشنری بر اساس زبان جاری
  const dict = dictionary[currentLang] || dictionary.ar;
  const t = dict.problemSolution || dictionary.ar.problemSolution;

  return (
    <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
      {/* سربرگ بخش */}
      <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-white/10 bg-white/[0.03] text-zinc-300 text-xs font-mono mb-4">
          <IconScale className="w-4 h-4 text-zinc-400" />
          <span>{t.badge}</span>
        </div>
        <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
          {t.title}
        </h2>
        <p className="mt-4 text-sm sm:text-base text-zinc-400 leading-relaxed">
          {t.desc}
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 items-stretch">
        {/* کارت وضعیت دستی سنتی */}
        <div className="rounded-3xl border border-red-500/20 bg-gradient-to-b from-red-950/[0.12] to-transparent p-6 sm:p-10 backdrop-blur-xl relative flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-6 mb-6 border-b border-red-500/10">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-red-400">
                  {t.manualTitle}
                </h3>
                <p className="text-xs text-zinc-400 mt-1">{t.manualSubtitle}</p>
              </div>
              <span className="w-10 h-10 rounded-2xl bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-400">
                <IconClose className="w-5 h-5 text-red-400" />
              </span>
            </div>

            <ul className="space-y-5">
              {t.manualPoints.map((point, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3.5 text-xs sm:text-sm text-zinc-300 leading-relaxed"
                >
                  <span className="w-5 h-5 rounded-full bg-red-500/10 text-red-400 flex items-center justify-center shrink-0 mt-0.5">
                    <IconClose className="w-3.5 h-3.5 text-red-400" />
                  </span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8 pt-4 border-t border-red-500/10 flex items-center gap-2 text-[11px] font-mono text-red-400/80">
            <IconAlertTriangle className="w-4 h-4 text-red-400" />
            <span>{t.manualFooter}</span>
          </div>
        </div>

        {/* کارت سیستم مدرن با ELITE OS */}
        <div className="rounded-3xl border border-[#22c55e]/30 bg-gradient-to-b from-[#22c55e]/[0.08] to-transparent p-6 sm:p-10 backdrop-blur-xl shadow-[0_0_50px_rgba(34,197,94,0.06)] relative flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-6 mb-6 border-b border-[#22c55e]/15">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#22c55e]">
                  {t.automatedTitle}
                </h3>
                <p className="text-xs text-zinc-300 mt-1">
                  {t.automatedSubtitle}
                </p>
              </div>
              <span className="w-10 h-10 rounded-2xl bg-[#22c55e]/15 border border-[#22c55e]/30 flex items-center justify-center text-[#22c55e]">
                <IconCheck className="w-5 h-5 text-[#22c55e]" />
              </span>
            </div>

            <ul className="space-y-5">
              {t.automatedPoints.map((point, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3.5 text-xs sm:text-sm text-zinc-200 leading-relaxed"
                >
                  <span className="w-5 h-5 rounded-full bg-[#22c55e]/15 text-[#22c55e] flex items-center justify-center shrink-0 mt-0.5">
                    <IconCheck className="w-3.5 h-3.5 text-[#22c55e]" />
                  </span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8 pt-4 border-t border-[#22c55e]/15 flex items-center gap-2 text-[11px] font-mono text-[#22c55e]">
            <span className="w-2 h-2 rounded-full bg-[#22c55e] animate-ping" />
            <span>{t.automatedFooter}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
