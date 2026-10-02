"use client";

import React from "react";
import { dictionary } from "@/data/translations";
import {
  IconCalculator,
  IconSlider,
  IconTarget,
  IconMail,
  IconGlobe,
  IconExternalLink,
} from "@/components/ui/Icons";

export default function FeaturesGrid({ currentLang = "ar" }) {
  const activeDict = dictionary[currentLang] || dictionary.ar;
  const t = activeDict.featuresGrid;
  const liveSiteUrl = "https://gym-arabic.vercel.app";

  // آیکون‌ها متناسب با هر ویژگی
  const featureIcons = [
    <IconCalculator key="1" className="w-6 h-6 text-[#22c55e]" />,
    <IconSlider key="2" className="w-6 h-6 text-[#22c55e]" />,
    <IconTarget key="3" className="w-6 h-6 text-[#22c55e]" />,
    <IconMail key="4" className="w-6 h-6 text-[#22c55e]" />,
    <IconGlobe key="5" className="w-6 h-6 text-[#22c55e]" />,
  ];

  // مقاصد کاربردی کلیک برای هر کارت
  const cardActions = [
    {
      href: liveSiteUrl,
      external: true,
      labelAr: "معاينة الحاسبة الحية ↗",
      labelEn: "Test Live Engine ↗",
    },
    {
      href: "#lead-form",
      external: false,
      labelAr: "تخصيص هويتك ",
      labelEn: "Customize Identity",
    },
    {
      href: "#lead-form",
      external: false,
      labelAr: "طلب نظام الفلترة ↗",
      labelEn: "Get Lead Filter ↗",
    },
    {
      href: "#lead-form",
      external: false,
      labelAr: "تفعيل الربط المباشر ↗",
      labelEn: "Activate Pipeline ↗",
    },
    {
      href: liveSiteUrl,
      external: true,
      labelAr: "تجربة المنظومة ↗",
      labelEn: "Experience Portal ↗",
    },
  ];

  return (
    <section
      id="features"
      className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative"
    >
      {/* سربرگ بخش */}
      <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#22c55e]/30 bg-[#22c55e]/10 text-[#22c55e] text-xs font-mono mb-4">
          <span>{t.badge}</span>
        </div>
        <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
          {t.title}
        </h2>
        <p className="mt-4 text-sm sm:text-base text-zinc-400 leading-relaxed">
          {t.desc}
        </p>
      </div>

      {/* شبکه کارت‌ها */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {t.features.map((feature, index) => {
          const isWideCard = index === 3;
          const action = cardActions[index] || cardActions[0];
          const actionText =
            currentLang === "ar" ? action.labelAr : action.labelEn;

          return (
            <div
              key={index}
              className={`rounded-3xl border border-white/10 bg-gradient-to-b from-[#0c1017]/90 to-[#07090e]/90 p-8 backdrop-blur-xl relative group hover:border-[#22c55e]/40 transition-all duration-300 hover:shadow-[0_0_30px_rgba(34,197,94,0.1)] flex flex-col justify-between ${
                isWideCard ? "md:col-span-2 lg:col-span-2" : ""
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center justify-center group-hover:scale-110 group-hover:border-[#22c55e]/40 transition duration-300">
                    {featureIcons[index]}
                  </div>
                  <span className="text-[11px] font-mono text-[#22c55e] px-3 py-1 rounded-full bg-[#22c55e]/10 border border-[#22c55e]/20">
                    {feature.tag}
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-white mb-3 group-hover:text-[#22c55e] transition">
                  {feature.title}
                </h3>

                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                  {feature.desc}
                </p>
              </div>

              {/* نوار پایینی و لینک کلیک‌پذیر واقعی */}
              <div className="mt-8 pt-4 border-t border-white/[0.05] flex items-center justify-between text-xs text-zinc-500 font-mono">
                <span>SYSTEM CORE 0{index + 1}</span>

                <a
                  href={action.href}
                  target={action.external ? "_blank" : undefined}
                  rel={action.external ? "noopener noreferrer" : undefined}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/[0.03] group-hover:bg-[#22c55e]/15 border border-transparent group-hover:border-[#22c55e]/40 text-zinc-400 group-hover:text-[#22c55e] font-bold transition-all duration-300 transform group-hover:translate-x-0.5"
                >
                  <span>{actionText}</span>
                  <IconExternalLink className="w-3.5 h-3.5 text-[#22c55e]" />
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
