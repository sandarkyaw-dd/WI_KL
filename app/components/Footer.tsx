"use client";

import React from "react";
import { ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-16 px-4 bg-navy-900 text-white text-center relative overflow-hidden">
      
      {/* Background soft glow */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-slateBlue-400 blur-[100px]" />
      </div>

      <div className="max-w-xl mx-auto flex flex-col items-center relative z-10">
        
        {/* Monogram Seal */}
        <div className="w-14 h-14 rounded-full border border-gold-400/80 bg-navy-800 flex items-center justify-center mb-6 shadow-lg">
          <span className="font-script text-2xl text-gold-300 font-bold">
            L & K
          </span>
        </div>

        <h3 className="font-serif text-2xl sm:text-3xl font-semibold mb-2 tracking-wide text-white">
          Lin Lin Thu & Khine Sabal Tun
        </h3>

        <p className="text-xs uppercase tracking-[0.25em] text-slateBlue-300 mb-6 font-medium">
          15 • 11 • 2026 • Mawlamyine
        </p>

        <p className="text-sm font-serif italic text-slateBlue-200 max-w-md leading-relaxed mb-8">
          &ldquo;Thank you for being part of our story and blessing our new journey together.&rdquo;
        </p>

        <button
          onClick={scrollToTop}
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 hover:bg-white/20 text-xs font-medium text-slateBlue-100 transition-colors border border-white/10"
        >
          <ArrowUp className="w-3.5 h-3.5" />
          Back to Top
        </button>

      </div>
    </footer>
  );
}
