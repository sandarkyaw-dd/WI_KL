"use client";

import React from "react";
import Image from "next/image";
import { Heart } from "lucide-react";

export default function CoupleSection() {
  return (
    <section
      id="couple"
      className="py-16 sm:py-24 px-3 sm:px-4 bg-gradient-to-b from-[#F0F5FA] via-white to-white relative"
    >
      <div className="max-w-4xl mx-auto">
        
        {/* Section Heading */}
        <div className="text-center max-w-xl mx-auto mb-10 sm:mb-16">
          <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.35em] text-slateBlue-500 font-semibold mb-2">
            The Happy Couple
          </p>
          <h2 className="font-serif text-2xl sm:text-4xl text-navy-850 font-normal tracking-wide mb-3 sm:mb-4">
            Groom & Bride
          </h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-gold-400 to-transparent mx-auto" />
        </div>

        {/* Both Cards On The SAME ROW on Mobile & Desktop (grid-cols-2) */}
        <div className="grid grid-cols-2 gap-3 sm:gap-8 md:gap-10 max-w-3xl mx-auto mb-10 sm:mb-14 items-stretch">
          
          {/* Groom Card */}
          <div className="flex flex-col items-center justify-between text-center p-3.5 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl bg-white border border-slateBlue-100 shadow-[0_8px_25px_-5px_rgba(15,37,55,0.06)] hover:shadow-xl transition-all duration-300 relative group">
            
            <div className="flex flex-col items-center w-full">
              {/* Groom Badge */}
              <span className="px-2.5 sm:px-4 py-0.5 sm:py-1 rounded-full text-[9px] sm:text-[10px] uppercase tracking-wider sm:tracking-widest font-semibold bg-navy-850 text-gold-300 border border-gold-400/40 mb-3 sm:mb-5 shadow-sm">
                The Groom
              </span>

              {/* Groom Solo Photo Frame */}
              <div className="relative w-full max-w-[150px] sm:max-w-[200px] md:max-w-[220px] aspect-[4/5] rounded-2xl overflow-hidden border border-slateBlue-100 sm:border-2 shadow-sm sm:shadow-md mb-3 sm:mb-5 bg-slateBlue-50">
                <Image
                  src="/images/groom-solo.jpg"
                  alt="Lin Lin Thu"
                  fill
                  className="object-cover object-[center_15%] scale-[2.2] origin-top"
                  priority
                />
              </div>

              {/* Name */}
              <h3 className="font-serif text-base sm:text-2xl md:text-3xl text-navy-900 font-medium mb-1.5 sm:mb-2 tracking-wide leading-tight">
                Lin Lin Thu
              </h3>
            </div>

            {/* Degree */}
            <div className="mt-1">
              <span className="text-[10px] sm:text-xs font-semibold text-slateBlue-700 tracking-tight sm:tracking-wider uppercase bg-slateBlue-50/80 px-2.5 sm:px-4 py-1 sm:py-1.5 rounded-full border border-slateBlue-200/60 inline-block whitespace-nowrap">
                B.Tech (Civil)
              </span>
            </div>

          </div>

          {/* Bride Card */}
          <div className="flex flex-col items-center justify-between text-center p-3.5 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl bg-white border border-slateBlue-100 shadow-[0_8px_25px_-5px_rgba(15,37,55,0.06)] hover:shadow-xl transition-all duration-300 relative group">
            
            <div className="flex flex-col items-center w-full">
              {/* Bride Badge */}
              <span className="px-2.5 sm:px-4 py-0.5 sm:py-1 rounded-full text-[9px] sm:text-[10px] uppercase tracking-wider sm:tracking-widest font-semibold bg-navy-850 text-gold-300 border border-gold-400/40 mb-3 sm:mb-5 shadow-sm">
                The Bride
              </span>

              {/* Bride Solo Photo Frame */}
              <div className="relative w-full max-w-[150px] sm:max-w-[200px] md:max-w-[220px] aspect-[4/5] rounded-2xl overflow-hidden border border-slateBlue-100 sm:border-2 shadow-sm sm:shadow-md mb-3 sm:mb-5 bg-slateBlue-50">
                <Image
                  src="/images/bride-solo.jpg"
                  alt="Khine Sabal Tun"
                  fill
                  className="object-cover object-[center_15%] scale-[2.2] origin-[center_26%]"
                  priority
                />
              </div>

              {/* Name */}
              <h3 className="font-serif text-base sm:text-2xl md:text-3xl text-navy-900 font-medium mb-1.5 sm:mb-2 tracking-wide leading-tight">
                Khine Sabal Tun
              </h3>
            </div>

            {/* Degree */}
            <div className="mt-1">
              <span className="text-[10px] sm:text-xs font-semibold text-slateBlue-700 tracking-tight sm:tracking-wider uppercase bg-slateBlue-50/80 px-2.5 sm:px-4 py-1 sm:py-1.5 rounded-full border border-slateBlue-200/60 inline-block whitespace-nowrap">
                B.A (Myanmar)
              </span>
            </div>

          </div>

        </div>

        {/* Subtle decorative bottom divider */}
        <div className="flex items-center justify-center gap-3 mt-8 sm:mt-12 text-slateBlue-300">
          <div className="h-[1px] w-20 bg-slateBlue-200" />
          <Heart className="w-4 h-4 text-gold-500 fill-gold-500" />
          <div className="h-[1px] w-20 bg-slateBlue-200" />
        </div>

      </div>
    </section>
  );
}
