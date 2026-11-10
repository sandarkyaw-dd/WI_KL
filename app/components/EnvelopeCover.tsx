"use client";

import React, { useState } from "react";
import { MailOpen } from "lucide-react";

interface EnvelopeCoverProps {
  isOpen: boolean;
  onOpen: () => void;
}

export default function EnvelopeCover({ isOpen, onOpen }: EnvelopeCoverProps) {
  const [isOpening, setIsOpening] = useState<boolean>(false);

  const handleOpenClick = () => {
    if (isOpening) return;
    setIsOpening(true);
    setTimeout(() => {
      onOpen();
    }, 900);
  };

  if (isOpen) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 transition-all duration-1000 ease-in-out ${
        isOpening ? "opacity-0 pointer-events-none scale-105" : "opacity-100"
      }`}
      style={{
        background: "radial-gradient(ellipse at 50% 35%, #183C60 0%, #0D2237 55%, #040E18 100%)",
      }}
    >
      {/* Delicate ambient starlight & golden halo */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] rounded-full bg-amber-400/10 blur-[130px]" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[650px] h-[320px] rounded-full bg-sky-400/10 blur-[110px]" />
      </div>

      <div className="relative w-full max-w-[420px] sm:max-w-[450px] mx-auto z-10">
        
        {/* Luxury Couture Stationery Card */}
        <div className="relative bg-[#FCFDFE] rounded-3xl p-7 sm:p-10 text-center shadow-[0_28px_80px_rgba(0,0,0,0.6),0_0_50px_rgba(226,202,133,0.18)] border border-gold-300/60 transition-all duration-700 overflow-hidden">
          
          {/* Subtle Top Decorative Fold Highlight */}
          <div className="absolute top-0 inset-x-0 h-[3px] bg-gradient-to-r from-transparent via-[#E8C564] to-transparent" />

          {/* Letterpress Inner Foil Frame with Corner Accents */}
          <div className="absolute inset-3 sm:inset-4 rounded-2xl border border-gold-400/35 pointer-events-none">
            {/* 4 Corner Gold Filigree Diamonds */}
            <span className="absolute -top-1.5 -left-1.5 text-[9px] text-gold-500 leading-none select-none">✦</span>
            <span className="absolute -top-1.5 -right-1.5 text-[9px] text-gold-500 leading-none select-none">✦</span>
            <span className="absolute -bottom-1.5 -left-1.5 text-[9px] text-gold-500 leading-none select-none">✦</span>
            <span className="absolute -bottom-1.5 -right-1.5 text-[9px] text-gold-500 leading-none select-none">✦</span>
          </div>

          {/* Clean Eyebrow without emoji */}
          <p className="relative text-[10px] sm:text-[11px] uppercase tracking-[0.45em] text-slateBlue-500 font-semibold mb-6">
            Wedding Invitation
          </p>

          {/* Authentic 3D Metallic Gold Wax Seal */}
          <div className="relative flex flex-col items-center justify-center mb-6">
            {/* Subtle Golden Pulsing Aura */}
            <div className="absolute w-24 h-24 rounded-full bg-gold-400/25 blur-xl animate-pulse pointer-events-none" />

            <button
              onClick={handleOpenClick}
              aria-label="Open wedding invitation"
              title="Click to open invitation"
              className="group relative w-20 h-20 sm:w-22 sm:h-22 rounded-full flex items-center justify-center shadow-[0_12px_28px_rgba(180,130,20,0.38)] transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer focus:outline-none"
              style={{
                background: "radial-gradient(circle at 35% 28%, #FFF8DC 0%, #E8C564 30%, #BF932C 70%, #7A540E 100%)",
                boxShadow: "0 12px 28px rgba(184, 142, 40, 0.45), inset 0 2px 4px rgba(255, 255, 255, 0.8), inset 0 -3px 7px rgba(0, 0, 0, 0.4)",
              }}
            >
              {/* Inner embossed gold double ring */}
              <div className="w-[68px] h-[68px] rounded-full border border-gold-100/70 flex items-center justify-center shadow-inner">
                <div className="w-[58px] h-[58px] rounded-full border border-gold-900/30 flex items-center justify-center bg-gradient-to-br from-transparent to-black/10">
                  {/* Monogram L & K */}
                  <span className="font-serif text-2xl font-bold tracking-tight text-[#452E04] drop-shadow-[0_1px_1px_rgba(255,255,255,0.7)] flex items-center">
                    L<span className="font-script text-xl mx-0.5 text-[#5A3C06]">&</span>K
                  </span>
                </div>
              </div>
            </button>
          </div>

          {/* Couple Names */}
          <div className="space-y-1 mb-4">
            <h1 className="font-serif text-3xl sm:text-4xl text-navy-900 font-normal tracking-wide">
              Lin Lin Thu
            </h1>
            <p className="font-script text-3xl sm:text-4xl text-gold-500 leading-none py-0.5">
              &
            </p>
            <h1 className="font-serif text-3xl sm:text-4xl text-navy-900 font-normal tracking-wide">
              Khine Sabal Tun
            </h1>
          </div>

          {/* Delicate Gold Filigree Divider */}
          <div className="flex items-center justify-center gap-3 my-4">
            <div className="w-12 sm:w-16 h-[1px] bg-gradient-to-r from-transparent to-gold-400/60" />
            <span className="text-gold-500 text-xs">✦</span>
            <div className="w-12 sm:w-16 h-[1px] bg-gradient-to-l from-transparent to-gold-400/60" />
          </div>

          {/* Date & Location */}
          <div className="space-y-1 mb-8 text-center">
            <p className="font-serif text-sm sm:text-base text-navy-900 font-medium tracking-wide">
              Sunday, 15 November 2026
            </p>
            <p className="text-xs text-slateBlue-500 tracking-wider font-sans">
              10:00 AM – 12:00 PM • Mawlamyine, Myanmar
            </p>
          </div>

          {/* UX-Perfect Open Invitation Button with Luxury Pulse & Shimmer */}
          <button
            onClick={handleOpenClick}
            disabled={isOpening}
            className={`group relative w-full py-4 px-8 rounded-full bg-gradient-to-r from-[#0B1E30] via-[#16385C] to-[#0B1E30] text-white shadow-[0_12px_28px_rgba(11,30,48,0.35),0_0_20px_rgba(218,165,32,0.18)] hover:shadow-[0_16px_36px_rgba(11,30,48,0.45),0_0_28px_rgba(218,165,32,0.28)] hover:border-gold-300 hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 border-2 border-gold-400/75 overflow-hidden cursor-pointer ${
              !isOpening ? "animate-btn-pulse-glow" : ""
            }`}
          >
            {/* Automatic Gold Light Shimmer Sweep */}
            <div
              className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none ${
                !isOpening ? "animate-auto-shimmer" : ""
              }`}
            />

            {/* Inner subtle glow */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-t from-transparent via-transparent to-white/10 pointer-events-none" />

            <span className="relative font-serif text-xs sm:text-[13px] tracking-[0.25em] uppercase flex items-center justify-center gap-3 font-semibold text-gold-100">
              <MailOpen className={`w-4 h-4 text-gold-300 transition-transform duration-300 ${isOpening ? "animate-bounce" : "group-hover:-translate-y-0.5 group-hover:rotate-6"}`} />
              <span>{isOpening ? "Opening Invitation..." : "Open Invitation"}</span>
            </span>
          </button>

        </div>
      </div>
    </div>
  );
}