"use client";

import React, { useState } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface PhotoItem {
  id: number;
  src: string;
  alt: string;
  objectPosition?: string;
}

const photos: PhotoItem[] = [
  {
    id: 0,
    src: "/images/bride-solo.jpg",
    alt: "The Radiant Bride — Khine Sabal Tun",
    objectPosition: "object-center",
  },
  {
    id: 1,
    src: "/images/couple-kiss.jpg",
    alt: "Lin Lin Thu & Khine Sabal Tun",
    objectPosition: "object-top",
  },
  {
    id: 2,
    src: "/images/couple-traditional.jpg",
    alt: "Myanmar Traditional Silk Attire",
    objectPosition: "object-[center_15%]",
  },
  {
    id: 3,
    src: "/images/ceremony-ritual.jpg",
    alt: "Auspicious Water Pouring Ceremony",
    objectPosition: "object-center",
  },
  {
    id: 4,
    src: "/images/couple-window.jpg",
    alt: "Sunlit Romance by the Arched Windows",
    objectPosition: "object-center",
  },
];

export default function PhotoGallery() {
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIdx !== null) {
      setSelectedIdx((selectedIdx + 1) % photos.length);
    }
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIdx !== null) {
      setSelectedIdx((selectedIdx - 1 + photos.length) % photos.length);
    }
  };

  return (
    <section id="gallery" className="py-20 sm:py-24 px-4 bg-[#F8FAFC] relative">
      <div className="max-w-5xl mx-auto">
        
        {/* Section Heading */}
        <div className="text-center max-w-xl mx-auto mb-12 sm:mb-16">
          <p className="text-[11px] uppercase tracking-[0.35em] text-slateBlue-500 font-semibold mb-2">
            Captured Memories
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl text-navy-850 font-normal tracking-wide mb-4">
            Our Love Story Gallery
          </h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-gold-400 to-transparent mx-auto" />
        </div>

        {/* Magazine Bento Layout (Carefully tuned for Mobile & PC) */}
        <div className="space-y-4 sm:space-y-6">
          
          {/* Row 1: Bride Solo (58%) + Couple Kiss (42%) */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 sm:h-[400px] md:h-[460px]">
            {/* Photo 1: Bride Solo */}
            <div
              onClick={() => setSelectedIdx(0)}
              className="group relative w-full sm:w-[58%] aspect-[4/3] sm:aspect-auto sm:h-full rounded-2xl overflow-hidden cursor-pointer shadow-md hover:shadow-xl transition-all duration-300 border border-slateBlue-100 bg-slateBlue-50"
            >
              <Image
                src={photos[0].src}
                alt={photos[0].alt}
                fill
                className="object-cover object-center group-hover:scale-103 transition-transform duration-700"
                sizes="(max-width: 640px) 100vw, 60vw"
                priority
              />
            </div>

            {/* Photo 2: Couple Kiss (Fixed with object-top and proportional frame) */}
            <div
              onClick={() => setSelectedIdx(1)}
              className="group relative w-full sm:w-[42%] aspect-[3/4] sm:aspect-auto sm:h-full rounded-2xl overflow-hidden cursor-pointer shadow-md hover:shadow-xl transition-all duration-300 border border-slateBlue-100 bg-slateBlue-50"
            >
              <Image
                src={photos[1].src}
                alt={photos[1].alt}
                fill
                className="object-cover object-top group-hover:scale-103 transition-transform duration-700"
                sizes="(max-width: 640px) 100vw, 40vw"
                priority
              />
            </div>
          </div>

          {/* Row 2: Traditional Attire (42%) + Water Ritual (58%) */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 sm:h-[400px] md:h-[460px]">
            {/* Photo 3: Traditional Attire */}
            <div
              onClick={() => setSelectedIdx(2)}
              className="group relative w-full sm:w-[42%] aspect-[3/4] sm:aspect-auto sm:h-full rounded-2xl overflow-hidden cursor-pointer shadow-md hover:shadow-xl transition-all duration-300 border border-slateBlue-100 bg-slateBlue-50"
            >
              <Image
                src={photos[2].src}
                alt={photos[2].alt}
                fill
                className="object-cover object-[center_15%] group-hover:scale-103 transition-transform duration-700"
                sizes="(max-width: 640px) 100vw, 40vw"
              />
            </div>

            {/* Photo 4: Ceremony Water Ritual */}
            <div
              onClick={() => setSelectedIdx(3)}
              className="group relative w-full sm:w-[58%] aspect-[16/10] sm:aspect-auto sm:h-full rounded-2xl overflow-hidden cursor-pointer shadow-md hover:shadow-xl transition-all duration-300 border border-slateBlue-100 bg-slateBlue-50"
            >
              <Image
                src={photos[3].src}
                alt={photos[3].alt}
                fill
                className="object-cover object-center group-hover:scale-103 transition-transform duration-700"
                sizes="(max-width: 640px) 100vw, 60vw"
              />
            </div>
          </div>

          {/* Row 3: Arched Windows Landscape (Full Width) */}
          <div
            onClick={() => setSelectedIdx(4)}
            className="group relative w-full aspect-[16/10] sm:aspect-auto sm:h-[420px] md:h-[480px] rounded-2xl overflow-hidden cursor-pointer shadow-md hover:shadow-xl transition-all duration-300 border border-slateBlue-100 bg-slateBlue-50"
          >
            <Image
              src={photos[4].src}
              alt={photos[4].alt}
              fill
              className="object-cover object-center group-hover:scale-103 transition-transform duration-700"
              sizes="100vw"
            />
          </div>

        </div>

        {/* Lightbox Modal */}
        {selectedIdx !== null && (
          <div
            onClick={() => setSelectedIdx(null)}
            className="fixed inset-0 z-50 bg-navy-950/95 backdrop-blur-md flex items-center justify-center p-4 animate-fade-in"
          >
            <button
              onClick={() => setSelectedIdx(null)}
              aria-label="Close photo"
              className="absolute top-6 right-6 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors z-50"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Previous */}
            <button
              onClick={handlePrev}
              aria-label="Previous photo"
              className="absolute left-3 sm:left-8 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors z-50"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Next */}
            <button
              onClick={handleNext}
              aria-label="Next photo"
              className="absolute right-3 sm:right-8 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors z-50"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Expanded Active Photo */}
            <div
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl max-h-[85vh] w-full h-[75vh] flex flex-col items-center justify-center"
            >
              <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src={photos[selectedIdx].src}
                  alt={photos[selectedIdx].alt}
                  fill
                  className="object-contain"
                />
              </div>
              <p className="text-xs text-slateBlue-300 mt-3 font-sans">
                {selectedIdx + 1} of {photos.length} • Tap background to close
              </p>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
