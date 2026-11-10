"use client";

import React, { useState, useEffect } from "react";
import confetti from "canvas-confetti";
import { Send, CheckCircle2, MessageSquareHeart } from "lucide-react";

interface Wish {
  id: string;
  name: string;
  attendance: "attending" | "declined";
  guests: number;
  message: string;
  date: string;
}

const initialWishes: Wish[] = [
  {
    id: "1",
    name: "Uncle U Myint & Daw Tin",
    attendance: "attending",
    guests: 2,
    message: "Wishing Lin Lin Thu & Khaing Sabal Htun a lifetime of happiness, peace, and eternal prosperity!",
    date: "A few moments ago",
  },
  {
    id: "2",
    name: "Ko Kyaw Zin & Family",
    attendance: "attending",
    guests: 3,
    message: "Congratulations on your sacred union! Looking forward to celebrating with you in Mawlamyine.",
    date: "1 hour ago",
  },
];

export default function RsvpSection() {
  const [name, setName] = useState("");
  const [attendance, setAttendance] = useState<"attending" | "declined">("attending");
  const [guests, setGuests] = useState<number>(1);
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [wishes, setWishes] = useState<Wish[]>(initialWishes);

  useEffect(() => {
    const saved = localStorage.getItem("wedding_wishes_lk");
    if (saved) {
      try {
        setWishes(JSON.parse(saved));
      } catch (e) {
        console.error(e);
      }
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;

    if (attendance === "attending") {
      confetti({
        particleCount: 90,
        spread: 75,
        origin: { y: 0.6 },
        colors: ["#D4AF37", "#0F2537", "#5C82A6", "#EBF2F8"],
      });
    }

    const newWish: Wish = {
      id: Date.now().toString(),
      name: name.trim(),
      attendance,
      guests: attendance === "attending" ? guests : 0,
      message: message.trim() || "Heartfelt congratulations and warm blessings to the bride & groom!",
      date: "Just now",
    };

    const updated = [newWish, ...wishes];
    setWishes(updated);
    localStorage.setItem("wedding_wishes_lk", JSON.stringify(updated));

    setSubmitted(true);
  };

  return (
    <section id="rsvp" className="py-24 px-4 bg-[#F4F8FC] relative">
      <div className="max-w-4xl mx-auto">
        
        {/* Section Heading */}
        <div className="text-center max-w-xl mx-auto mb-16">
          <p className="text-[11px] uppercase tracking-[0.35em] text-slateBlue-500 font-semibold mb-2">
            Are You Attending?
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl text-navy-850 font-normal tracking-wide mb-4">
            RSVP & Warm Blessings
          </h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-gold-400 to-transparent mx-auto" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* RSVP Form Card */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 border border-slateBlue-100 shadow-xl">
            {submitted ? (
              <div className="text-center py-10 space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-2xl font-medium text-navy-850">
                  Thank You, {name}!
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 max-w-sm mx-auto">
                  Your response and warm blessing have been successfully recorded. We look forward to celebrating together!
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setMessage("");
                  }}
                  className="mt-4 px-6 py-2 rounded-full border border-slateBlue-200 text-xs font-medium text-navy-850 hover:bg-slateBlue-50"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-slateBlue-600 font-semibold mb-2">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Daw Khin Khin"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-slateBlue-400 text-sm"
                  />
                </div>

                {/* Attendance Buttons */}
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-slateBlue-600 font-semibold mb-2">
                    Will You Attend?
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => setAttendance("attending")}
                      className={`py-3 px-4 rounded-xl text-xs sm:text-sm font-medium border text-center transition-all ${
                        attendance === "attending"
                          ? "bg-navy-850 text-white border-navy-850 shadow-md"
                          : "bg-white text-slate-600 border-slate-200 hover:bg-slate-50"
                      }`}
                    >
                      Joyfully Accept ✨
                    </button>
                    <button
                      type="button"
                      onClick={() => setAttendance("declined")}
                      className={`py-3 px-4 rounded-xl text-xs sm:text-sm font-medium border text-center transition-all ${
                        attendance === "declined"
                          ? "bg-slate-700 text-white border-slate-700 shadow-md"
                          : "bg-white text-slate-600 border-slate-200 hover:bg-slate-50"
                      }`}
                    >
                      Regretfully Decline
                    </button>
                  </div>
                </div>

                {/* Guest Count Selector */}
                {attendance === "attending" && (
                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-slateBlue-600 font-semibold mb-2">
                      Number of Guests (Including You)
                    </label>
                    <select
                      value={guests}
                      onChange={(e) => setGuests(Number(e.target.value))}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-slateBlue-400 text-sm bg-white"
                    >
                      <option value={1}>1 Person</option>
                      <option value={2}>2 Persons</option>
                      <option value={3}>3 Persons</option>
                      <option value={4}>4 Persons</option>
                      <option value={5}>5+ Persons (Family)</option>
                    </select>
                  </div>
                )}

                {/* Wishes */}
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-slateBlue-600 font-semibold mb-2">
                    Your Blessing for Lin Lin Thu & Khaing Sabal Htun
                  </label>
                  <textarea
                    rows={3}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Write your heartfelt blessing or congratulations..."
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-slateBlue-400 text-sm resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-full bg-gradient-to-r from-[#0C1E30] via-[#163554] to-[#0C1E30] text-white font-medium text-xs tracking-wider uppercase shadow-lg hover:shadow-xl hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2 border border-gold-400/30"
                >
                  <Send className="w-4 h-4 text-gold-400" />
                  Confirm & Send Blessing
                </button>
              </form>
            )}
          </div>

          {/* Guestbook Stream */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center justify-between px-2">
              <span className="text-xs uppercase tracking-wider text-slateBlue-700 font-semibold flex items-center gap-1.5">
                <MessageSquareHeart className="w-4 h-4 text-gold-500" />
                Guestbook Blessings ({wishes.length})
              </span>
            </div>

            <div className="max-h-[460px] overflow-y-auto space-y-3 pr-1">
              {wishes.map((w) => (
                <div
                  key={w.id}
                  className="p-4 rounded-2xl bg-white border border-slateBlue-100 shadow-sm text-left transition-all hover:shadow-md"
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="font-serif font-semibold text-navy-900 text-sm">
                      {w.name}
                    </span>
                    <span className="text-[10px] text-slate-400">{w.date}</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed font-serif italic mb-2">
                    &ldquo;{w.message}&rdquo;
                  </p>
                  <div className="flex items-center gap-2 text-[10px] text-slateBlue-600 font-medium">
                    {w.attendance === "attending" ? (
                      <span className="px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700">
                        Attending ({w.guests} {w.guests > 1 ? "guests" : "guest"})
                      </span>
                    ) : (
                      <span className="px-2 py-0.5 rounded-full bg-slate-100 text-slate-600">
                        Sending blessings from afar
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
