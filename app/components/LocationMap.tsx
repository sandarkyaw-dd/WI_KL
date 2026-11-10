"use client";

import React, { useState } from "react";
import { MapPin, Navigation, Copy, Check } from "lucide-react";

export default function LocationMap() {
  const [copied, setCopied] = useState(false);
  const address = "No(246), KyarInn, Mawlamyine, Myanmar";
  // The exact Google Maps link provided by the user
  const mapsUrl = "https://maps.app.goo.gl/5YgrkT6XAKr4qf5p9";

  const handleCopy = () => {
    navigator.clipboard.writeText(address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="location" className="py-20 px-4 bg-slateBlue-50/50 relative">
      <div className="max-w-4xl mx-auto">
        
        {/* Section Heading */}
        <div className="text-center max-w-xl mx-auto mb-16">
          <p className="text-[11px] uppercase tracking-[0.35em] text-slateBlue-500 font-semibold mb-2">
            Venue & Directions
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl text-navy-850 font-normal tracking-wide mb-4">
            Wedding Location
          </h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-gold-400 to-transparent mx-auto" />
        </div>

        {/* Location Content Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slateBlue-100 shadow-xl overflow-hidden">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pb-8 border-b border-slateBlue-100 mb-8">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slateBlue-50 text-slateBlue-600 text-xs font-medium">
                <MapPin className="w-3.5 h-3.5 text-gold-500" />
                Mawlamyine, Mon State
              </div>
              <h3 className="font-serif text-2xl font-bold text-navy-850">
                No(246), KyarInn
              </h3>
              <p className="text-sm text-slate-500 font-sans">
                KyarInn, Mawlamyine, Mon State, Myanmar
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={handleCopy}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full border border-slateBlue-200 text-xs font-medium text-navy-850 hover:bg-slateBlue-50 transition-all shadow-sm"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-600" />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-slateBlue-500" />
                    <span>Copy Address</span>
                  </>
                )}
              </button>

              <a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-navy-850 hover:bg-navy-700 text-white text-xs font-medium transition-all shadow-md hover:shadow-lg"
              >
                <Navigation className="w-4 h-4 text-gold-400" />
                Open In Google Maps
              </a>
            </div>
          </div>

          {/* Embedded Google Map using Exact Coordinates (16.389392, 97.648279) */}
          <div className="relative w-full h-80 sm:h-96 rounded-2xl overflow-hidden border border-slateBlue-200 shadow-inner">
            <iframe
              title="Wedding Location Map"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src="https://maps.google.com/maps?q=16.389392,97.648279&t=&z=16&ie=UTF8&iwloc=&output=embed"
            />
          </div>

        </div>

      </div>
    </section>
  );
}
