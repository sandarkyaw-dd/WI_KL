"use client";

import React, { useEffect, useRef } from "react";
import { Volume2, VolumeX, Music } from "lucide-react";

interface MusicPlayerProps {
  isPlaying: boolean;
  setIsPlaying: (val: boolean) => void;
}

export default function MusicPlayer({ isPlaying, setIsPlaying }: MusicPlayerProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Use the local downloaded wedding song: Ed Sheeran - Perfect
  const audioSource = "/music/bg-music.mp3";

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play().catch((err) => {
          console.log("Audio autoplay prevented by browser:", err);
          setIsPlaying(false);
        });
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying, setIsPlaying]);

  const toggleMusic = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="fixed bottom-6 right-6 z-40">
      <audio
        ref={audioRef}
        src={audioSource}
        loop
        preload="auto"
      />

      <button
        onClick={toggleMusic}
        aria-label="Toggle background music"
        className="group relative flex items-center gap-2.5 px-3.5 py-2.5 rounded-full bg-white/95 backdrop-blur-md border border-slateBlue-200/80 shadow-lg hover:shadow-xl hover:border-gold-400 transition-all duration-300"
      >
        <div
          className={`w-8 h-8 rounded-full flex items-center justify-center bg-[#0C1E30] text-gold-400 ${
            isPlaying ? "animate-spin [animation-duration:6s]" : ""
          }`}
        >
          <Music className="w-4 h-4" />
        </div>

        <div className="hidden sm:flex flex-col text-left pr-1.5">
          <span className="text-[9px] uppercase tracking-wider text-slateBlue-400 font-semibold">
            Wedding Music
          </span>
          <span className="text-xs font-serif text-navy-850 font-medium">
            {isPlaying ? "Playing: Perfect" : "Music Paused"}
          </span>
        </div>

        <div className="text-slateBlue-500 group-hover:text-gold-500 transition-colors">
          {isPlaying ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
        </div>
      </button>
    </div>
  );
}
