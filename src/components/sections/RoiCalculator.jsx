"use client";

import React, { useState } from "react";
import { dictionary } from "@/data/translations";
import {
  IconCalculator,
  IconCheck,
  IconLightning,
} from "@/components/ui/Icons";

export default function RoiCalculator({ currentLang = "ar" }) {
  const activeDict = dictionary[currentLang] || dictionary.ar;
  const t = activeDict.roiCalculator || dictionary.ar.roiCalculator;

  // لیست جامع ارزهای منطقه (خلیج فارس، شامات، شمال آفریقا و بین‌الملل)
  const currencies = [
    {
      code: "USD",
      symbol: "$",
      labelAr: "دولار أمريكي (USD)",
      labelEn: "US Dollar ($)",
      defaultPrice: 150,
      min: 20,
      max: 2000,
      step: 10,
    },
    {
      code: "AED",
      symbol: "AED",
      labelAr: "درهم إماراتي (AED)",
      labelEn: "UAE Dirham (AED)",
      defaultPrice: 600,
      min: 50,
      max: 5000,
      step: 25,
    },
    {
      code: "SAR",
      symbol: "SAR",
      labelAr: "ريال سعودي (SAR)",
      labelEn: "Saudi Riyal (SAR)",
      defaultPrice: 600,
      min: 50,
      max: 5000,
      step: 25,
    },
    {
      code: "KWD",
      symbol: "KWD",
      labelAr: "دينار كويتي (KWD)",
      labelEn: "Kuwaiti Dinar (KWD)",
      defaultPrice: 50,
      min: 10,
      max: 400,
      step: 5,
    },
    {
      code: "QAR",
      symbol: "QAR",
      labelAr: "ريال قطري (QAR)",
      labelEn: "Qatari Riyal (QAR)",
      defaultPrice: 600,
      min: 50,
      max: 5000,
      step: 25,
    },
    {
      code: "BHD",
      symbol: "BHD",
      labelAr: "دينار بحريني (BHD)",
      labelEn: "Bahraini Dinar (BHD)",
      defaultPrice: 60,
      min: 10,
      max: 500,
      step: 5,
    },
    {
      code: "OMR",
      symbol: "OMR",
      labelAr: "ريال عماني (OMR)",
      labelEn: "Omani Rial (OMR)",
      defaultPrice: 60,
      min: 10,
      max: 500,
      step: 5,
    },
    {
      code: "JOD",
      symbol: "JOD",
      labelAr: "دينار أردني (JOD)",
      labelEn: "Jordanian Dinar (JOD)",
      defaultPrice: 70,
      min: 15,
      max: 500,
      step: 5,
    },
    {
      code: "IQD",
      symbol: "IQD",
      labelAr: "دينار عراقي (IQD)",
      labelEn: "Iraqi Dinar (IQD)",
      defaultPrice: 100000,
      min: 25000,
      max: 1000000,
      step: 5000,
    },
    {
      code: "EGP",
      symbol: "EGP",
      labelAr: "جنيه مصري (EGP)",
      labelEn: "Egyptian Pound (EGP)",
      defaultPrice: 2500,
      min: 300,
      max: 20000,
      step: 100,
    },
    {
      code: "MAD",
      symbol: "MAD",
      labelAr: "درهم مغربي (MAD)",
      labelEn: "Moroccan Dirham (MAD)",
      defaultPrice: 1200,
      min: 200,
      max: 10000,
      step: 50,
    },
  ];

  const [selectedCurrency, setSelectedCurrency] = useState(currencies[1]); // پیش‌فرض درهم امارات
  const [packagePrice, setPackagePrice] = useState(600);
  const [monthlyVisitors, setMonthlyVisitors] = useState(150);

  const handleCurrencySelect = (code) => {
    const curr = currencies.find((c) => c.code === code) || currencies[0];
    setSelectedCurrency(curr);
    setPackagePrice(curr.defaultPrice);
  };

  // محاسبه درآمد با نرخ تبدیل محافظه‌کارانه ۲٪
  const calculatedClients = monthlyVisitors * 0.05;
  const displayClients =
    calculatedClients >= 1 ? Math.round(calculatedClients) : 1;
  const estimatedRevenue = Math.round(displayClients * packagePrice);

  return (
    <section
      id="calculator"
      className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto relative"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-[#22c55e]/10 to-transparent blur-3xl -z-10 rounded-3xl" />

      {/* سربرگ */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#22c55e]/30 bg-[#22c55e]/10 text-[#22c55e] text-xs font-mono mb-4">
          <IconCalculator className="w-4 h-4 text-[#22c55e]" />
          <span>{t.badge}</span>
        </div>
        <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight leading-tight">
          {t.title}
        </h2>
        <p className="mt-4 text-sm sm:text-base text-zinc-400 leading-relaxed">
          {t.desc}
        </p>
      </div>

      <div className="rounded-3xl border border-white/10 bg-[#0c1017]/90 p-6 sm:p-12 backdrop-blur-2xl shadow-2xl relative">
        <div className="space-y-8">
          {/* انتخابگر ریسپانسیو ارز */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-white/[0.08]">
            <label className="text-xs sm:text-sm font-mono text-zinc-300 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#22c55e]" />
              {t.currencyLabel}
            </label>

            <div className="relative w-full sm:w-72">
              <select
                value={selectedCurrency.code}
                onChange={(e) => handleCurrencySelect(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/15 text-white font-mono text-xs sm:text-sm focus:outline-none focus:border-[#22c55e] transition appearance-none cursor-pointer"
              >
                {currencies.map((curr) => (
                  <option
                    key={curr.code}
                    value={curr.code}
                    className="bg-[#0c1017] text-white"
                  >
                    {currentLang === "ar" ? curr.labelAr : curr.labelEn}
                  </option>
                ))}
              </select>
              <div className="absolute top-1/2 end-3.5 -translate-y-1/2 pointer-events-none text-zinc-400 text-xs">
                ▼
              </div>
            </div>
          </div>

          {/* فیلد ۱: قیمت پکیج مربی */}
          <div className="space-y-3">
            <div className="flex flex-wrap justify-between items-center gap-2 text-xs sm:text-sm font-mono">
              <span className="text-zinc-300">{t.priceLabel}</span>
              <div className="flex items-center gap-2">
                <input
                  type="number"
                  min="1"
                  value={packagePrice}
                  onChange={(e) =>
                    setPackagePrice(Math.max(0, Number(e.target.value)))
                  }
                  className="w-28 sm:w-32 px-3 py-1.5 rounded-lg bg-white/[0.05] border border-white/15 text-[#22c55e] font-mono font-bold text-center text-sm sm:text-base focus:outline-none focus:border-[#22c55e]"
                />
                <span className="text-zinc-400 font-bold">
                  {selectedCurrency.symbol}
                </span>
              </div>
            </div>

            <input
              type="range"
              min={selectedCurrency.min}
              max={selectedCurrency.max}
              step={selectedCurrency.step}
              value={packagePrice}
              onChange={(e) => setPackagePrice(Number(e.target.value))}
              className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-[#22c55e] focus:outline-none"
            />
            <div className="flex justify-between text-[11px] font-mono text-zinc-500">
              <span>
                {selectedCurrency.min.toLocaleString()}{" "}
                {selectedCurrency.symbol}
              </span>
              <span className="text-zinc-400">{t.typeDirectly}</span>
              <span>
                {selectedCurrency.max.toLocaleString()}+{" "}
                {selectedCurrency.symbol}
              </span>
            </div>
          </div>

          {/* فیلد ۲: تعداد مخاطبان (گام ۱ عددی و پذیرش اعداد دقیق مثل ۴۷) */}
          <div className="space-y-3">
            <div className="flex flex-wrap justify-between items-center gap-2 text-xs sm:text-sm font-mono">
              <span className="text-zinc-300">{t.visitorsLabel}</span>
              <div className="flex items-center gap-2">
                <input
                  type="number"
                  min="1"
                  value={monthlyVisitors}
                  onChange={(e) =>
                    setMonthlyVisitors(Math.max(0, Number(e.target.value)))
                  }
                  className="w-28 sm:w-32 px-3 py-1.5 rounded-lg bg-white/[0.05] border border-white/15 text-[#22c55e] font-mono font-bold text-center text-sm sm:text-base focus:outline-none focus:border-[#22c55e]"
                />
                <span className="text-zinc-400">{t.visitorsUnit}</span>
              </div>
            </div>

            <input
              type="range"
              min="10"
              max="2500"
              step="1"
              value={monthlyVisitors}
              onChange={(e) => setMonthlyVisitors(Number(e.target.value))}
              className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-[#22c55e] focus:outline-none"
            />
            <div className="flex justify-between text-[11px] font-mono text-zinc-500">
              <span>10 {t.visitorsUnit}</span>
              <span className="text-zinc-400">{t.typeDirectly}</span>
              <span>2,500+ {t.visitorsUnit}</span>
            </div>
          </div>

          {/* خروجی افزایش درآمد */}
          <div className="mt-10 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#22c55e]/15 via-[#22c55e]/5 to-transparent border border-[#22c55e]/30 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-start space-y-2">
              <span className="text-xs font-mono uppercase tracking-wider text-zinc-400 block">
                {t.resultLabel}
              </span>
              <div className="flex items-baseline justify-center md:justify-start gap-2">
                <span className="text-3xl sm:text-5xl font-black text-[#22c55e] font-mono tracking-tight">
                  +{estimatedRevenue.toLocaleString()}
                </span>
                <span className="text-sm font-mono text-zinc-300 font-bold">
                  {selectedCurrency.symbol}
                </span>
              </div>
              <p className="text-xs text-zinc-500 max-w-sm">{t.resultNote}</p>
            </div>

            <div className="flex flex-col items-center md:items-end gap-3 w-full md:w-auto">
              <div className="px-4 py-2 rounded-xl bg-white/[0.04] border border-white/10 text-xs font-mono text-zinc-300 flex items-center gap-2">
                <IconLightning className="w-3.5 h-3.5 text-[#22c55e]" />
                <span>
                  {t.newClientsLabel}{" "}
                  <strong className="text-[#22c55e]">+{displayClients}</strong>
                </span>
              </div>
              <div className="px-4 py-2 rounded-xl bg-[#22c55e]/10 border border-[#22c55e]/20 text-[11px] font-mono text-[#22c55e] flex items-center gap-1.5 text-center">
                <IconCheck className="w-3.5 h-3.5 text-[#22c55e]" />
                <span>{t.guaranteeBadge}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
