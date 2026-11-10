"use client";

import React from "react";
import { Shirt } from "lucide-react";

export default function DressCode() {
  const colors = [
    { name: "Royal Navy", hex: "#0F2537", border: "border-slate-300" },
    { name: "Celestial Blue", hex: "#6BA4D9", border: "border-slate-300" },
    { name: "Soft Sky Blue", hex: "#BFDBFE", border: "border-slate-300" },
    { name: "Pure White", hex: "#FFFFFF", border: "border-slate-300" },
    { name: "Champagne Gold", hex: "#D4AF37", border: "border-slate-300" },
  ];

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-white via-slateBlue-50/40 to-white relative">
      <div className="max-w-3xl mx-auto text-center">
        
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slateBlue-50 text-slateBlue-700 text-xs font-semibold mb-3 border border-slateBlue-100">
          <Shirt className="w-3.5 h-3.5 text-gold-500" />
          <span>Attire Palette</span>
        </div>

        <h2 className="font-serif text-2xl sm:text-3xl text-navy-850 font-semibold mb-3">
          Dress Code: Classic White & Blues
        </h2>

        <p className="text-sm text-slate-500 max-w-lg mx-auto mb-8 font-serif leading-relaxed">
          We warmly invite our esteemed guests to celebrate with us in elegant white, sky blue, navy, or pastel tones. Traditional Myanmar attire or formal western dress are both warmly welcomed.
        </p>

        {/* Color Palette Swatches */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mb-6">
          {colors.map((c, idx) => (
            <div key={idx} className="flex flex-col items-center gap-2">
              <div
                className={`w-12 h-12 sm:w-14 sm:h-14 rounded-full shadow-md border-2 ${c.border} transition-transform hover:scale-110`}
                style={{ backgroundColor: c.hex }}
              />
              <span className="text-[11px] font-medium text-slate-700">
                {c.name}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
