"use client";

import React, { useState } from "react";
import EnvelopeCover from "./components/EnvelopeCover";
import HeroSection from "./components/HeroSection";
import Countdown from "./components/Countdown";
import CoupleSection from "./components/CoupleSection";
import EventDetails from "./components/EventDetails";
import LocationMap from "./components/LocationMap";
import PhotoGallery from "./components/PhotoGallery";
import BlessingGift from "./components/BlessingGift";
import MusicPlayer from "./components/MusicPlayer";
import Footer from "./components/Footer";
import { Calendar, MapPin, Image as ImageIcon, Gift } from "lucide-react";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleOpenInvitation = () => {
    setIsOpen(true);
    setIsPlaying(true);
  };

  return (
    <main className="min-h-screen relative bg-white selection:bg-slateBlue-100 selection:text-navy-900">
      
      {/* 1. Envelope Open Gate Page */}
      <EnvelopeCover isOpen={isOpen} onOpen={handleOpenInvitation} />

      {/* 2. Floating Background Music Player */}
      <MusicPlayer isPlaying={isPlaying} setIsPlaying={setIsPlaying} />

      {/* 3. Inside Wedding Invitation Pages */}
      <div
        className={`transition-opacity duration-1000 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Hero Section */}
        <HeroSection />

        {/* Live Countdown */}
        <Countdown />

        {/* Bride & Groom Section */}
        <CoupleSection />

        {/* Date, Time & Venue */}
        <EventDetails />

        {/* Venue & Google Maps */}
        <LocationMap />

        {/* Photo Gallery & Lightbox */}
        <PhotoGallery />

        {/* Blessings & Digital Gifts */}
        <BlessingGift />

        {/* Footer */}
        <Footer />

        {/* Mobile Bottom Quick Navigation Bar */}
        {isOpen && (
          <nav className="fixed bottom-4 left-1/2 -translate-x-1/2 z-30 sm:hidden bg-navy-900/90 backdrop-blur-md px-5 py-2.5 rounded-full border border-white/20 shadow-xl flex items-center gap-6 text-white/80">
            <a href="#event" className="hover:text-gold-400 flex flex-col items-center text-[10px]">
              <Calendar className="w-4 h-4" />
              <span>Details</span>
            </a>
            <a href="#location" className="hover:text-gold-400 flex flex-col items-center text-[10px]">
              <MapPin className="w-4 h-4" />
              <span>Venue</span>
            </a>
            <a href="#gallery" className="hover:text-gold-400 flex flex-col items-center text-[10px]">
              <ImageIcon className="w-4 h-4" />
              <span>Photos</span>
            </a>
            <a href="#blessing" className="hover:text-gold-400 flex flex-col items-center text-[10px]">
              <Gift className="w-4 h-4" />
              <span>Gifts</span>
            </a>
          </nav>
        )}

      </div>

    </main>
  );
}
