"use client";

import React, { useState, useEffect } from "react";
import { Clock, CalendarCheck } from "lucide-react";

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // Target: 15 November 2026, 10:00:00 AM Myanmar Time
    const targetDate = new Date("2026-11-15T10:00:00+06:30").getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleAddToCalendar = () => {
    const title = encodeURIComponent("Wedding of Lin Lin Thu & Khine Sabal Tun");
    const details = encodeURIComponent(
      "Wedding Ceremony & Reception of Lin Lin Thu and Khine Sabal Tun.\nTime: 10:00 AM - 12:00 PM\nLocation: No(246), KyarInn, Mawlamyine"
    );
    const location = encodeURIComponent("No(246), KyarInn, Mawlamyine, Myanmar");
    const dates = "20261115T033000Z/20261115T053000Z";
    const googleCalUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${dates}&details=${details}&location=${location}`;

    window.open(googleCalUrl, "_blank");
  };

  return (
    <section id="countdown" className="py-20 px-4 bg-gradient-to-b from-white via-[#F4F8FC] to-white relative overflow-hidden">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[360px] bg-slateBlue-100/40 rounded-full blur-[110px] pointer-events-none" />

      <div className="max-w-3xl mx-auto text-center relative z-10">
        
        {/* Subtle Pill Tag */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slateBlue-200/80 shadow-sm mb-4">
          <Clock className="w-3.5 h-3.5 text-gold-500" />
          <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.3em] text-slateBlue-600 font-semibold">
            Counting Down To Our Special Day
          </span>
        </div>

        {/* Section Heading */}
        <h2 className="font-serif text-3xl sm:text-4xl text-navy-900 font-normal tracking-wide mb-3">
          Save Our Date
        </h2>

        <p className="text-xs sm:text-sm text-slateBlue-500 font-serif italic mb-10">
          Sunday, 15 November 2026 • 10:00 AM – 12:00 PM
        </p>

        {/* High-Contrast Luxury Highlight Cards */}
        <div className="grid grid-cols-4 gap-2.5 sm:gap-5 max-w-xl mx-auto mb-10">
          {[
            { label: "Days", value: timeLeft.days },
            { label: "Hours", value: timeLeft.hours },
            { label: "Minutes", value: timeLeft.minutes },
            { label: "Seconds", value: timeLeft.seconds },
          ].map((item, idx) => {
            const isSeconds = item.label === "Seconds";
            return (
              <div
                key={idx}
                className={`relative flex flex-col items-center justify-center p-3 sm:p-5 md:p-6 rounded-2xl transition-all duration-300 overflow-hidden ${
                  isSeconds
                    ? "bg-gradient-to-b from-[#14324D] via-[#10283E] to-[#0B1B2A] border-2 border-gold-400/85 shadow-[0_14px_35px_rgba(218,165,32,0.28)] ring-2 ring-gold-400/30 scale-[1.03]"
                    : "bg-gradient-to-b from-[#0F2537] via-[#122B44] to-[#0A1A28] border border-gold-400/35 shadow-[0_12px_30px_rgba(10,25,47,0.25)]"
                }`}
              >
                {/* Gold Top Light Bar */}
                <div
                  className={`absolute top-0 inset-x-0 ${
                    isSeconds
                      ? "h-[3px] bg-gradient-to-r from-transparent via-gold-300 to-transparent shadow-[0_0_8px_#F5D061]"
                      : "h-[2px] bg-gradient-to-r from-transparent via-[#F3E5AB] to-transparent"
                  }`}
                />

                {/* Center hairline divider */}
                <div className="absolute inset-x-2 top-1/2 h-[1px] bg-white/10 pointer-events-none" />

                {/* Crystal-Clear Luminous Number (No dark muddy gradient clips) */}
                <span
                  className={`relative font-serif text-[26px] sm:text-4xl md:text-5xl font-semibold tracking-tight z-10 leading-none my-1 tabular-nums ${
                    isSeconds
                      ? "text-[#FFF6D6] drop-shadow-[0_0_14px_rgba(255,246,214,0.7)]"
                      : "text-[#FFF8E7] drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]"
                  }`}
                >
                  {String(item.value).padStart(2, "0")}
                </span>

                {/* Label with active live indicator on Seconds */}
                <div className="flex items-center justify-center gap-1 mt-2 sm:mt-2.5 z-10">
                  {isSeconds && (
                    <span className="w-1.5 h-1.5 rounded-full bg-gold-400 animate-pulse shadow-[0_0_6px_#E8C564]" />
                  )}
                  <span
                    className={`text-[9px] sm:text-[10px] uppercase tracking-[0.25em] ${
                      isSeconds
                        ? "text-gold-300 font-semibold"
                        : "text-slateBlue-200 font-medium"
                    }`}
                  >
                    {item.label}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Calendar Action Button */}
        <button
          onClick={handleAddToCalendar}
          className="inline-flex items-center gap-2.5 px-7 py-3 rounded-full bg-gradient-to-r from-[#0C1E30] via-[#16385A] to-[#0C1E30] text-white text-xs font-medium uppercase tracking-wider hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all shadow-md border border-gold-400/40"
        >
          <CalendarCheck className="w-4 h-4 text-gold-400" />
          <span>Add To Google Calendar</span>
        </button>

      </div>
    </section>
  );
}
