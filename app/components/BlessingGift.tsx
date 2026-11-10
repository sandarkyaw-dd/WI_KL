"use client";

import React, { useState } from "react";
import { Gift, Copy, Check } from "lucide-react";

export default function BlessingGift() {
  const [copied, setCopied] = useState(false);
  const accountNumber = "09425368497";
  const formattedNumber = "09 425 368 497";
  const accountName = "Khine Sabal Tun";

  const handleCopy = () => {
    navigator.clipboard.writeText(accountNumber);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="blessing" className="py-20 px-4 bg-white relative">
      <div className="max-w-3xl mx-auto text-center">
        
        {/* Section Pill Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slateBlue-50 text-slateBlue-700 text-xs font-semibold mb-3 border border-slateBlue-100">
          <Gift className="w-3.5 h-3.5 text-gold-500" />
          <span>Wedding Gift</span>
        </div>

        {/* Clean, Classic Heading */}
        <h2 className="font-serif text-2xl sm:text-3xl text-navy-850 font-normal tracking-wide mb-3">
          Wedding Gift & Blessing
        </h2>

        {/* Short, Simple & Sincere Subtitle */}
        <p className="text-sm text-slate-500 max-w-md mx-auto mb-10 font-serif leading-relaxed">
          Your warm presence and blessings are our greatest gift. If you wish to send a wedding gift from afar:
        </p>

        {/* Dedicated Single Card for K-Pay & Wave-Pay */}
        <div className="max-w-md mx-auto">
          <div className="p-7 sm:p-8 rounded-3xl bg-gradient-to-b from-white via-slateBlue-50/40 to-white border border-slateBlue-100 shadow-xl text-left relative overflow-hidden group">
            
            {/* Top Badges for K-Pay & Wave-Pay */}
            <div className="flex items-center gap-2.5 mb-6 pb-4 border-b border-slateBlue-100/80">
              <span className="px-3.5 py-1 rounded-full text-xs font-bold bg-blue-50 text-blue-700 border border-blue-200">
                K-Pay
              </span>
              <span className="px-3.5 py-1 rounded-full text-xs font-bold bg-amber-50 text-amber-700 border border-amber-200">
                Wave-Pay
              </span>
            </div>

            {/* Account Details with Clean, Direct Labels */}
            <div className="space-y-4">
              <div>
                <p className="text-[10px] uppercase tracking-widest text-slateBlue-500 font-semibold mb-1">
                  Name
                </p>
                <p className="font-serif text-xl sm:text-2xl font-medium text-navy-900">
                  {accountName}
                </p>
              </div>

              <div>
                <p className="text-[10px] uppercase tracking-widest text-slateBlue-500 font-semibold mb-1">
                  Phone Number
                </p>
                <p className="font-mono text-xl sm:text-2xl font-bold text-navy-850 tracking-wider">
                  {formattedNumber}
                </p>
              </div>
            </div>

            {/* Copy Button */}
            <button
              onClick={handleCopy}
              className="mt-6 w-full py-3 rounded-full bg-gradient-to-r from-[#0C1E30] via-[#16385A] to-[#0C1E30] text-white text-xs font-medium uppercase tracking-wider flex items-center justify-center gap-2 hover:shadow-lg hover:scale-[1.01] active:scale-[0.99] transition-all shadow-md border border-gold-400/40"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span>Number Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-gold-400" />
                  <span>Copy Phone Number</span>
                </>
              )}
            </button>

          </div>
        </div>

      </div>
    </section>
  );
}
