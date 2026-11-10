"use client";

import React from "react";
import { Calendar, Clock, MapPin, CalendarCheck } from "lucide-react";

export default function EventDetails() {
  const handleAddToCalendar = () => {
    const title = encodeURIComponent("Wedding of Lin Lin Thu & Khine Sabal Tun");
    const details = encodeURIComponent(
      "Wedding Ceremony & Reception of Lin Lin Thu and Khine Sabal Tun.\nTime: 10:00 AM - 12:00 PM\nLocation: No(246), KyarInn, Mawlamyine"
    );
    const location = encodeURIComponent("No(246), KyarInn, Mawlamyine, Myanmar");
    const dates = "20261115T033000Z/20261115T053000Z";
    const googleCalUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${dates}&details=${details}&location=${location}`;
    window.open(googleCalUrl, "_blank");
  };

  return (
    <section id="event" className="py-20 px-4 bg-white relative">
      <div className="max-w-4xl mx-auto">
        
        {/* Section Heading */}
        <div className="text-center max-w-xl mx-auto mb-14">
          <p className="text-[11px] uppercase tracking-[0.35em] text-slateBlue-500 font-semibold mb-2">
            Wedding Celebration
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl text-navy-850 font-normal tracking-wide mb-4">
            Date & Time
          </h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-gold-400 to-transparent mx-auto" />
        </div>

        {/* Clean, Elegant Highlight Card (Date, Time, Venue Only) */}
        <div className="bg-gradient-to-br from-[#0C1E30] via-[#122B45] to-[#1E4366] rounded-3xl p-8 sm:p-14 text-white shadow-2xl relative overflow-hidden border border-slateBlue-200/20 max-w-3xl mx-auto">
          
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left divide-y md:divide-y-0 md:divide-x divide-white/10">
            
            {/* The Date */}
            <div className="flex flex-col items-center md:items-start pt-4 md:pt-0">
              <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-gold-400 mb-3 border border-white/10">
                <Calendar className="w-5 h-5" />
              </div>
              <p className="text-[10px] uppercase tracking-widest text-slateBlue-200 font-medium">The Date</p>
              <h3 className="font-serif text-2xl font-normal mt-1">Sunday</h3>
              <p className="text-sm text-slateBlue-100 font-sans">15 November 2026</p>
            </div>

            {/* The Time (Only 10:00 AM - 12:00 PM) */}
            <div className="flex flex-col items-center md:items-start pt-6 md:pt-0 md:pl-8">
              <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-gold-400 mb-3 border border-white/10">
                <Clock className="w-5 h-5" />
              </div>
              <p className="text-[10px] uppercase tracking-widest text-slateBlue-200 font-medium">The Time</p>
              <h3 className="font-serif text-2xl font-normal mt-1">10:00 AM – 12:00 PM</h3>
              <p className="text-sm text-slateBlue-100 font-sans">Morning Reception</p>
            </div>

            {/* The Location */}
            <div className="flex flex-col items-center md:items-start pt-6 md:pt-0 md:pl-8">
              <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-gold-400 mb-3 border border-white/10">
                <MapPin className="w-5 h-5" />
              </div>
              <p className="text-[10px] uppercase tracking-widest text-slateBlue-200 font-medium">The Location</p>
              <h3 className="font-serif text-2xl font-normal mt-1">No(246), KyarInn</h3>
              <p className="text-sm text-slateBlue-100 font-sans">Mawlamyine, Myanmar</p>
            </div>

          </div>

          {/* Add to Calendar Action */}
          <div className="mt-10 pt-8 border-t border-white/10 text-center relative z-10">
            <button
              onClick={handleAddToCalendar}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-medium transition-all border border-white/20 hover:border-gold-400 shadow-sm"
            >
              <CalendarCheck className="w-4 h-4 text-gold-400" />
              Add Event to Google Calendar
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
