"use client";

import React from "react";
import Image from "next/image";
import { ChevronDown, Calendar, MapPin } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 pt-20 pb-20 overflow-hidden bg-gradient-to-b from-[#F4F8FC] via-white to-[#F0F5FA]">
      
      {/* Background delicate ambient lighting */}
      <div className="absolute top-0 inset-x-0 h-64 bg-gradient-to-b from-sky-100/40 via-transparent to-transparent pointer-events-none" />
      <div className="absolute top-24 left-1/2 -translate-x-1/2 w-[550px] h-[280px] bg-slateBlue-100/30 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto flex flex-col items-center z-10 w-full">
        
        <p className="text-[11px] sm:text-xs uppercase tracking-[0.4em] text-slateBlue-600 font-semibold mb-4 sm:mb-6">
          The Wedding Celebration Of
        </p>

        {/* Couple Names */}
        <div className="space-y-1 sm:space-y-2 mb-6">
          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl text-navy-900 font-normal tracking-wide">
            Lin Lin Thu
          </h1>
          <p className="font-script text-3xl sm:text-4xl text-gold-500 leading-none">
            &
          </p>
          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl text-navy-900 font-normal tracking-wide">
            Khine Sabal Tun
          </h1>
        </div>

        {/* Date & Location Badges */}
        <div className="flex flex-wrap items-center justify-center gap-3 text-xs sm:text-sm font-medium text-navy-800 mb-10">
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slateBlue-100 shadow-sm">
            <Calendar className="w-4 h-4 text-slateBlue-500" />
            <span>Sunday, 15 November 2026</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slateBlue-100 shadow-sm">
            <MapPin className="w-4 h-4 text-slateBlue-500" />
            <span>No(246), KyarInn, Mawlamyine</span>
          </div>
        </div>

        {/* Main Iconic Couple Photo - Clean, Classic Border */}
        <div className="relative w-full max-w-sm sm:max-w-md aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slateBlue-50 group">
          <Image
            src="/images/couple-kiss.jpg"
            alt="Lin Lin Thu & Khine Sabal Tun"
            fill
            className="object-cover object-center group-hover:scale-103 transition-transform duration-700"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-transparent to-transparent pointer-events-none" />
          
          <div className="absolute bottom-6 inset-x-6 text-center text-white">
            <p className="font-serif text-xl sm:text-2xl font-medium tracking-wide drop-shadow">
              Forever & Always
            </p>
            <p className="text-xs uppercase tracking-widest text-slateBlue-200 mt-1 font-medium">
              15 • 11 • 2026 • Mawlamyine
            </p>
          </div>
        </div>

        {/* Scroll down indicator */}
        <a
          href="#countdown"
          aria-label="Scroll to details"
          className="mt-10 animate-bounce p-2.5 rounded-full text-slateBlue-400 hover:text-navy-850 transition-colors"
        >
          <ChevronDown className="w-5 h-5" />
        </a>

      </div>
    </section>
  );
}
