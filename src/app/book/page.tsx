"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Users,
  Calendar,
  Clock,
  MapPin,
  Phone,
  CheckCircle2,
  Sparkles,
  ExternalLink,
  ShieldCheck,
  ChevronRight,
} from "lucide-react";
import { siteConfig } from "@/data/site";

const partySizes = ["1 Guest", "2 Guests", "3-4 Guests", "5-6 Guests", "7+ Group / Party"];

const timeSlots = [
  { label: "12:00 PM", period: "Lunch" },
  { label: "12:45 PM", period: "Lunch" },
  { label: "1:30 PM", period: "Lunch" },
  { label: "2:15 PM", period: "Lunch" },
  { label: "4:30 PM", period: "Evening" },
  { label: "5:30 PM", period: "Evening" },
  { label: "6:30 PM", period: "Dinner" },
  { label: "7:30 PM", period: "Dinner" },
  { label: "8:30 PM", period: "Dinner" },
  { label: "9:15 PM", period: "Late Night" },
];

const seatingAreas = [
  "Standard Dining Room",
  "Cozy Corner Table",
  "Window View Bench",
  "Quiet Booth",
];

const occasions = [
  "Casual Meal / Hangout",
  "Birthday Celebration 🎂",
  "College Meetup",
  "Family Dinner",
  "Date / Special Evening",
];

export default function BookTablePage() {
  const [guests, setGuests] = useState("2 Guests");
  const [date, setDate] = useState("2026-10-18");
  const [selectedTime, setSelectedTime] = useState("7:30 PM");
  const [seating, setSeating] = useState("Standard Dining Room");
  const [occasion, setOccasion] = useState("Casual Meal / Hangout");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [notes, setNotes] = useState("");
  const [confirmed, setConfirmed] = useState(false);
  const [bookingRef, setBookingRef] = useState("");

  useEffect(() => {
    try {
      const today = new Date();
      const yyyy = today.getFullYear();
      const mm = String(today.getMonth() + 1).padStart(2, "0");
      const dd = String(today.getDate()).padStart(2, "0");
      setDate(`${yyyy}-${mm}-${dd}`);
    } catch {
      // fallback safe
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;

    const ref = `GRUB-${Math.floor(1000 + Math.random() * 9000)}`;
    setBookingRef(ref);

    // Format WhatsApp reservation message
    const message =
      `Hello Grub Cafe! 🍽️\nI would like to book a table:\n\n` +
      `• Ref: ${ref}\n` +
      `• Name: ${name}\n` +
      `• Phone: ${phone || "Not provided"}\n` +
      `• Guests: ${guests}\n` +
      `• Date: ${date}\n` +
      `• Time: ${selectedTime}\n` +
      `• Seating: ${seating}\n` +
      `• Occasion: ${occasion}\n` +
      (notes ? `• Special Requests: ${notes}\n` : "") +
      `\nPlease confirm table availability!`;

    const phoneDigits = siteConfig.phone.replace(/[^0-9]/g, "");
    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneDigits}?text=${encoded}`, "_blank");

    setConfirmed(true);
  };

  return (
    <div className="pt-24 pb-28 bg-[var(--color-canvas)] min-h-screen">
      <div className="container-wide">
        {/* Header */}
        <div className="max-w-3xl mb-14">
          <p className="section-kicker mb-2">Reservations &bull; Bendoorwell</p>
          <h1 className="heading-editorial text-4xl sm:text-6xl text-[var(--color-ink)] leading-tight">
            Reserve your table at Grub Cafe.
          </h1>
          <p className="text-[var(--color-ink-muted)] text-base md:text-lg mt-3 leading-relaxed font-normal">
            Planning a lunch catch-up, college reunion, or birthday celebration?
            Reserve in advance and our kitchen will have your table ready. 100% free of charge.
          </p>
        </div>

        {/* 2-Column Split: Booking Form + Ambiance & Policy */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Interactive Form or Ticket Confirmation */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              {confirmed ? (
                /* Confirmation Pass / Ticket */
                <motion.div
                  key="confirmation"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="rounded-3xl bg-[var(--color-canvas-card)] border border-[var(--color-border)] p-8 sm:p-10 shadow-xl"
                >
                  <div className="flex items-center gap-3 text-emerald-700 font-semibold text-xs tracking-wider uppercase mb-4">
                    <CheckCircle2 size={20} className="text-emerald-600" />
                    <span>Booking Request Dispatched</span>
                  </div>

                  <h2 className="heading-editorial text-3xl sm:text-4xl text-[var(--color-ink)] mb-2">
                    We&apos;re getting your table ready!
                  </h2>
                  <p className="text-sm text-[var(--color-ink-muted)] leading-relaxed mb-8">
                    Your reservation details have been generated and sent to our Bendoorwell team on WhatsApp.
                    We will hold your spot for 15 minutes past your reserved time.
                  </p>

                  {/* Booking Pass Card */}
                  <div className="p-6 rounded-2xl bg-[var(--color-canvas)] border border-[var(--color-border)] space-y-4 mb-8">
                    <div className="flex items-center justify-between pb-4 border-b border-[var(--color-border)]">
                      <div>
                        <span className="text-[10px] font-mono text-[var(--color-ink-light)] uppercase block">
                          BOOKING REFERENCE
                        </span>
                        <span className="font-serif text-2xl font-bold text-[var(--color-terracotta)]">
                          {bookingRef}
                        </span>
                      </div>
                      <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-semibold">
                        Pending Kitchen Ack
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-4 text-xs">
                      <div>
                        <span className="text-[10px] text-[var(--color-ink-light)] uppercase font-semibold block mb-0.5">
                          DATE &amp; TIME
                        </span>
                        <span className="font-medium text-[var(--color-ink)]">
                          {date} at {selectedTime}
                        </span>
                      </div>
                      <div>
                        <span className="text-[10px] text-[var(--color-ink-light)] uppercase font-semibold block mb-0.5">
                          PARTY SIZE
                        </span>
                        <span className="font-medium text-[var(--color-ink)]">
                          {guests}
                        </span>
                      </div>
                      <div>
                        <span className="text-[10px] text-[var(--color-ink-light)] uppercase font-semibold block mb-0.5">
                          SEATING AREA
                        </span>
                        <span className="font-medium text-[var(--color-ink)]">
                          {seating}
                        </span>
                      </div>
                      <div>
                        <span className="text-[10px] text-[var(--color-ink-light)] uppercase font-semibold block mb-0.5">
                          GUEST NAME
                        </span>
                        <span className="font-medium text-[var(--color-ink)]">
                          {name}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <button
                      onClick={() => {
                        const message =
                          `Hello Grub Cafe! Following up on reservation ${bookingRef} for ${name} (${guests}, ${date} at ${selectedTime}).`;
                        const phoneDigits = siteConfig.phone.replace(/[^0-9]/g, "");
                        window.open(`https://wa.me/${phoneDigits}?text=${encodeURIComponent(message)}`, "_blank");
                      }}
                      className="w-full btn-primary text-xs py-3.5 flex items-center justify-center gap-2"
                    >
                      <span>Open WhatsApp Chat with Cafe</span>
                      <ExternalLink size={14} />
                    </button>

                    <button
                      onClick={() => setConfirmed(false)}
                      className="w-full py-2.5 text-xs text-[var(--color-ink-muted)] hover:text-[var(--color-ink)] font-semibold transition-colors text-center"
                    >
                      Make Another Reservation
                    </button>
                  </div>
                </motion.div>
              ) : (
                /* Reservation Form */
                <form
                  onSubmit={handleSubmit}
                  className="rounded-3xl bg-[var(--color-canvas-card)] border border-[var(--color-border)] p-8 sm:p-10 shadow-xs space-y-8"
                >
                  {/* Step 1: Party Size */}
                  <div>
                    <label className="block text-xs uppercase font-bold tracking-[0.14em] text-[var(--color-ink)] mb-3">
                      1. Number of Guests
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                      {partySizes.map((size) => (
                        <button
                          key={size}
                          type="button"
                          onClick={() => setGuests(size)}
                          className={`py-2.5 px-3 rounded-xl text-xs font-semibold tracking-wide transition-all cursor-pointer ${
                            guests === size
                              ? "bg-[var(--color-terracotta)] text-white shadow-xs"
                              : "bg-[var(--color-canvas)] text-[var(--color-ink-muted)] hover:text-[var(--color-ink)] border border-[var(--color-border)]"
                          }`}
                        >
                          {size}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Step 2: Date Selection */}
                  <div>
                    <label className="block text-xs uppercase font-bold tracking-[0.14em] text-[var(--color-ink)] mb-3">
                      2. Reservation Date
                    </label>
                    <input
                      type="date"
                      required
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      className="w-full px-4 py-2.5 text-sm bg-[var(--color-canvas)] rounded-xl border border-[var(--color-border)] text-[var(--color-ink)] focus:outline-none focus:border-[var(--color-terracotta)]"
                    />
                  </div>

                  {/* Step 3: Time Slot */}
                  <div>
                    <label className="block text-xs uppercase font-bold tracking-[0.14em] text-[var(--color-ink)] mb-3">
                      3. Preferred Time Slot
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
                      {timeSlots.map((slot) => (
                        <button
                          key={slot.label}
                          type="button"
                          onClick={() => setSelectedTime(slot.label)}
                          className={`py-2 px-2 rounded-lg text-xs font-semibold transition-all cursor-pointer text-center ${
                            selectedTime === slot.label
                              ? "bg-[var(--color-terracotta)] text-white shadow-xs"
                              : "bg-[var(--color-canvas)] text-[var(--color-ink-muted)] hover:text-[var(--color-ink)] border border-[var(--color-border)]"
                          }`}
                        >
                          <div>{slot.label}</div>
                          <div className="text-[9px] opacity-70 font-normal">{slot.period}</div>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Step 4: Seating & Occasion */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs uppercase font-bold tracking-[0.14em] text-[var(--color-ink)] mb-2">
                        4. Seating Preference
                      </label>
                      <select
                        value={seating}
                        onChange={(e) => setSeating(e.target.value)}
                        className="w-full px-3.5 py-2.5 text-xs font-medium bg-[var(--color-canvas)] rounded-xl border border-[var(--color-border)] text-[var(--color-ink)] focus:outline-none focus:border-[var(--color-terracotta)]"
                      >
                        {seatingAreas.map((area) => (
                          <option key={area} value={area}>
                            {area}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs uppercase font-bold tracking-[0.14em] text-[var(--color-ink)] mb-2">
                        5. Occasion
                      </label>
                      <select
                        value={occasion}
                        onChange={(e) => setOccasion(e.target.value)}
                        className="w-full px-3.5 py-2.5 text-xs font-medium bg-[var(--color-canvas)] rounded-xl border border-[var(--color-border)] text-[var(--color-ink)] focus:outline-none focus:border-[var(--color-terracotta)]"
                      >
                        {occasions.map((occ) => (
                          <option key={occ} value={occ}>
                            {occ}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Step 5: Guest Info */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-2 border-t border-[var(--color-border)]">
                    <div>
                      <label className="block text-xs uppercase font-bold tracking-[0.14em] text-[var(--color-ink)] mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. Rahul Shenoy"
                        className="w-full px-4 py-2.5 text-sm bg-[var(--color-canvas)] rounded-xl border border-[var(--color-border)] text-[var(--color-ink)] focus:outline-none focus:border-[var(--color-terracotta)]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs uppercase font-bold tracking-[0.14em] text-[var(--color-ink)] mb-2">
                        Phone / WhatsApp Number
                      </label>
                      <input
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="e.g. +91 98450 XXXXX"
                        className="w-full px-4 py-2.5 text-sm bg-[var(--color-canvas)] rounded-xl border border-[var(--color-border)] text-[var(--color-ink)] focus:outline-none focus:border-[var(--color-terracotta)]"
                      />
                    </div>

                    <div className="sm:col-span-2">
                      <label className="block text-xs uppercase font-bold tracking-[0.14em] text-[var(--color-ink)] mb-2">
                        Special Requests / Food Pre-orders (Optional)
                      </label>
                      <textarea
                        rows={2}
                        value={notes}
                        onChange={(e) => setNotes(e.target.value)}
                        placeholder="Celebrating a birthday, need specific corner table, or pre-ordering zinger platters..."
                        className="w-full px-4 py-2.5 text-sm bg-[var(--color-canvas)] rounded-xl border border-[var(--color-border)] text-[var(--color-ink)] focus:outline-none focus:border-[var(--color-terracotta)]"
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div>
                    <button
                      type="submit"
                      className="w-full btn-primary py-3.5 text-xs font-semibold tracking-wider flex items-center justify-center gap-2 shadow-md cursor-pointer"
                    >
                      <span>Reserve Table via WhatsApp</span>
                      <ExternalLink size={14} />
                    </button>
                    <p className="text-[11px] text-[var(--color-ink-light)] text-center mt-2">
                      No deposit or booking fee required &bull; Free cancellation anytime
                    </p>
                  </div>
                </form>
              )}
            </AnimatePresence>
          </div>

          {/* Right Column: Ambiance Image & Reservation Guide */}
          <div className="lg:col-span-5 space-y-6">
            {/* Dining Room Photography */}
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden bg-[var(--color-canvas-subtle)] border border-[var(--color-border)] shadow-md">
              <Image
                src="/images/cafe/cafe-interior.jpg"
                alt="Grub Cafe dining interior in Bendoorwell Mangaluru"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 42vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-ink)]/75 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 text-white">
                <p className="font-serif text-lg font-semibold leading-tight">
                  The Bendoorwell Counter
                </p>
                <p className="text-xs text-white/70 mt-0.5">
                  Regal Arcade &bull; Opposite Apollo Pharmacy
                </p>
              </div>
            </div>

            {/* Reservation Policy Card */}
            <div className="p-6 rounded-2xl bg-[var(--color-canvas-card)] border border-[var(--color-border)] space-y-4 shadow-xs">
              <h3 className="font-serif text-lg font-semibold text-[var(--color-ink)]">
                Booking Guidelines
              </h3>

              <div className="space-y-3 text-xs text-[var(--color-ink-muted)] leading-relaxed">
                <div className="flex items-start gap-3">
                  <ShieldCheck size={16} className="text-emerald-700 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[var(--color-ink)] block">100% Free Reservations</strong>
                    We never charge reservation or booking fees.
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock size={16} className="text-[var(--color-ochre)] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[var(--color-ink)] block">15-Minute Grace Period</strong>
                    Tables are held for 15 minutes past your reserved slot before releasing to walk-in guests.
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Users size={16} className="text-[var(--color-terracotta)] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[var(--color-ink)] block">Groups &amp; Parties (7+)</strong>
                    For large gatherings, we can arrange customized slider boxes and momo platters in advance.
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-[var(--color-border)] flex items-center justify-between text-xs">
                <span className="text-[var(--color-ink-muted)]">Need immediate booking?</span>
                <a
                  href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                  className="font-semibold text-[var(--color-terracotta)] hover:underline inline-flex items-center gap-1"
                >
                  <Phone size={12} />
                  <span>Call {siteConfig.phone}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
