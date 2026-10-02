"use client";

import React, { useState } from "react";
import { dictionary } from "@/data/translations";
import {
  IconLightning,
  IconCheck,
  IconExternalLink,
} from "@/components/ui/Icons";

export default function LeadFormSection({ currentLang = "ar" }) {
  const activeDict = dictionary[currentLang] || dictionary.ar;
  const t = activeDict.leadForm || dictionary.ar.leadForm;

  const defaultCountry =
    t.countries && t.countries.length > 0
      ? t.countries[0]
      : currentLang === "ar"
        ? "الإمارات العربية المتحدة"
        : "United Arab Emirates";

  const [formData, setFormData] = useState({
    name: "",
    instagram: "",
    country: defaultCountry,
    whatsapp: "",
  });

  // تعریف استیت‌ها جهت جلوگیری از ارور ReferenceError
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [trackingId, setTrackingId] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const randomId = "ELITE-" + Math.floor(1000 + Math.random() * 9000);
    setTrackingId(randomId);

    try {
      await fetch("/api/lead", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          trackingId: randomId,
        }),
      });
    } catch (error) {
      console.error("Submission network error:", error);
    } finally {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }
  };

  const handleOpenWhatsApp = () => {
    const yourWhatsAppNumber = "989395002816"; // شماره واتس‌اپ خودتان بدون صفر اول یا علامت پلاس

    const textMessage =
      currentLang === "ar"
        ? `مرحباً، تم تسجيل طلبي عبر الموقع بنجاح.
رقم التتبع: #${trackingId}
الاسم: الكوتش ${formData.name}
حساب الإنستغرام: ${formData.instagram}
الدولة: ${formData.country}

أريد تأكيد الطلب فوراً وتخصيص نسختي الخاصة من منظومة ELITE OS.`
        : `Hello, I have submitted my request on the platform.
Tracking ID: #${trackingId}
Name: Coach ${formData.name}
Instagram: ${formData.instagram}
Country: ${formData.country}

I want to fast-track my setup for the bespoke ELITE OS platform.`;

    const encodedMessage = encodeURIComponent(textMessage);
    window.open(
      `https://wa.me/${yourWhatsAppNumber}?text=${encodedMessage}`,
      "_blank",
    );
  };

  return (
    <section
      id="lead-form"
      className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto relative"
    >
      {/* نور پس‌زمینه فرم */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#22c55e]/15 via-transparent to-transparent blur-3xl -z-10 rounded-3xl" />

      {/* سربرگ بخش فرم */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#22c55e]/30 bg-[#22c55e]/10 text-[#22c55e] text-xs font-mono mb-4">
          <IconLightning className="w-4 h-4 text-[#22c55e]" />
          <span>{t.badge}</span>
        </div>
        <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight leading-tight">
          {t.title}
        </h2>
        <p className="mt-4 text-sm sm:text-base text-zinc-400 leading-relaxed">
          {t.desc}
        </p>
      </div>

      {/* پنل فرم شیشه‌ای */}
      <div className="rounded-3xl border border-white/10 bg-[#0c1017]/95 p-6 sm:p-12 backdrop-blur-2xl shadow-2xl relative transition-all duration-300">
        {isSubmitted ? (
          /* حالت نمایش تاییدیه و نوتیفیکیشن ثبت موفق */
          <div className="py-6 flex flex-col items-center text-center space-y-6">
            <div className="w-20 h-20 rounded-full bg-[#22c55e]/15 border border-[#22c55e]/40 flex items-center justify-center text-[#22c55e] shadow-[0_0_40px_rgba(34,197,94,0.3)]">
              <IconCheck className="w-10 h-10 text-[#22c55e]" />
            </div>

            <div className="space-y-2 max-w-lg">
              <h3 className="text-xl sm:text-2xl font-black text-white">
                {t.successTitle ||
                  (currentLang === "ar"
                    ? "تم استلام طلبك وتوليد ملف المنظومة بنجاح!"
                    : "Request Received Successfully!")}
              </h3>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                {t.successDesc ||
                  (currentLang === "ar"
                    ? "شكراً كوتش. تم تسجيل بياناتك في قائمة التجهيز الفوري، وسيقوم فريقنا بمراجعة حسابك والتواصل معك."
                    : "Thank you Coach. Your details have been queued for deployment.")}
              </p>
            </div>

            <div className="px-5 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 font-mono text-xs text-zinc-300 flex items-center gap-3">
              <span>
                {t.trackingLabel ||
                  (currentLang === "ar" ? "رقم تتبع الطلب:" : "Tracking ID:")}
              </span>
              <strong className="text-[#22c55e] text-sm tracking-wider font-bold">
                #{trackingId}
              </strong>
            </div>

            <div className="w-full max-w-md p-6 rounded-2xl bg-[#22c55e]/[0.06] border border-[#22c55e]/25 mt-4 space-y-4">
              <p className="text-xs text-zinc-300">
                {t.whatsappCtaNotice ||
                  (currentLang === "ar"
                    ? "هل ترغب في بدء التجهيز فوراً وتجاوز قائمة الانتظار؟"
                    : "Want to fast-track your setup and skip the queue?")}
              </p>

              <button
                type="button"
                onClick={handleOpenWhatsApp}
                className="w-full py-3.5 px-4 rounded-xl bg-[#22c55e] hover:bg-[#16a34a] text-black font-extrabold text-xs sm:text-sm shadow-[0_0_25px_rgba(34,197,94,0.3)] transition flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>
                  {t.whatsappDirectBtn ||
                    (currentLang === "ar"
                      ? "فتح محادثة واتساب (تسريع الطلب)"
                      : "Open Priority WhatsApp Chat")}
                </span>
                <IconExternalLink className="w-4 h-4 text-black" />
              </button>
            </div>

            <button
              type="button"
              onClick={() => setIsSubmitted(false)}
              className="text-xs font-mono text-zinc-500 hover:text-zinc-300 transition underline underline-offset-4 pt-2 cursor-pointer"
            >
              {t.resetBtn ||
                (currentLang === "ar"
                  ? "تعديل البيانات أو إرسال طلب جديد"
                  : "Submit another request")}
            </button>
          </div>
        ) : (
          /* حالت پیش‌فرض: فرم ثبت‌نام */
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* نام مربی */}
              <div className="space-y-2">
                <label className="text-xs font-mono uppercase tracking-wider text-zinc-300 block">
                  {t.nameLabel}
                </label>
                <input
                  type="text"
                  required
                  placeholder={t.namePlaceholder}
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-4 py-3.5 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-zinc-600 text-sm focus:outline-none focus:border-[#22c55e] transition"
                />
              </div>

              {/* آیدی اینستاگرام */}
              <div className="space-y-2">
                <label className="text-xs font-mono uppercase tracking-wider text-zinc-300 block">
                  {t.instagramLabel}
                </label>
                <input
                  type="text"
                  required
                  placeholder={t.instagramPlaceholder}
                  value={formData.instagram}
                  onChange={(e) =>
                    setFormData({ ...formData, instagram: e.target.value })
                  }
                  className="w-full px-4 py-3.5 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-zinc-600 text-sm font-mono focus:outline-none focus:border-[#22c55e] transition"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* انتخاب کشور */}
              <div className="space-y-2">
                <label className="text-xs font-mono uppercase tracking-wider text-zinc-300 block">
                  {t.countryLabel}
                </label>
                <div className="relative">
                  <select
                    value={formData.country}
                    onChange={(e) =>
                      setFormData({ ...formData, country: e.target.value })
                    }
                    className="w-full px-4 py-3.5 rounded-xl bg-[#0c1017] border border-white/10 text-white text-sm focus:outline-none focus:border-[#22c55e] transition appearance-none cursor-pointer"
                  >
                    {t.countries &&
                      t.countries.map((country, idx) => (
                        <option
                          key={idx}
                          value={country}
                          className="bg-[#0c1017] text-white"
                        >
                          {country}
                        </option>
                      ))}
                  </select>
                  <div className="absolute top-1/2 end-4 -translate-y-1/2 pointer-events-none text-zinc-400 text-xs">
                    ▼
                  </div>
                </div>
              </div>

              {/* شماره تماس */}
              <div className="space-y-2">
                <label className="text-xs font-mono uppercase tracking-wider text-zinc-300 block">
                  {t.whatsappLabel}
                </label>
                <input
                  type="tel"
                  required
                  placeholder={t.whatsappPlaceholder}
                  value={formData.whatsapp}
                  onChange={(e) =>
                    setFormData({ ...formData, whatsapp: e.target.value })
                  }
                  className="w-full px-4 py-3.5 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-zinc-600 text-sm font-mono focus:outline-none focus:border-[#22c55e] transition"
                />
              </div>
            </div>

            {/* دکمه ارسال فرم */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 mt-2 rounded-xl bg-[#22c55e] text-black font-extrabold text-sm sm:text-base hover:bg-[#16a34a] hover:shadow-[0_0_35px_rgba(34,197,94,0.4)] transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
            >
              {isSubmitting ? (
                <span>
                  {t.submitBtnLoading ||
                    (currentLang === "ar"
                      ? "جاري تسجيل وتأكيد الطلب..."
                      : "Processing & Submitting...")}
                </span>
              ) : (
                <>
                  <span>{t.submitBtn}</span>
                  <IconLightning className="w-5 h-5 text-black fill-current" />
                </>
              )}
            </button>

            {/* نشان‌های اعتماد زیر دکمه */}
            <div className="pt-6 border-t border-white/[0.06] grid grid-cols-1 sm:grid-cols-3 gap-3 text-center sm:text-start text-xs text-zinc-400 font-mono">
              <div className="flex items-center gap-2 justify-center sm:justify-start">
                <IconCheck className="w-4 h-4 text-[#22c55e] shrink-0" />
                <span>{t.trust1}</span>
              </div>
              <div className="flex items-center gap-2 justify-center sm:justify-start">
                <IconCheck className="w-4 h-4 text-[#22c55e] shrink-0" />
                <span>{t.trust2}</span>
              </div>
              <div className="flex items-center gap-2 justify-center sm:justify-start">
                <IconCheck className="w-4 h-4 text-[#22c55e] shrink-0" />
                <span>{t.trust3}</span>
              </div>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}
