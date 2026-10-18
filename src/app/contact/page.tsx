"use client";

import { useState } from "react";
import {
  MapPin,
  Phone,
  Clock,
  Navigation,
  Bike,
  ArrowUpRight,
  Send,
  CheckCircle,
} from "lucide-react";
import { siteConfig } from "@/data/site";

const faqs = [
  {
    q: "Is dine-in seating available at Bendoorwell?",
    a: "Yes! We have casual cafe seating inside our Regal Arcade outlet as well as quick takeaway packaging.",
  },
  {
    q: "What payment modes do you accept?",
    a: "We accept all UPI apps (GPay, PhonePe, Paytm), cash, and all major debit and credit cards.",
  },
  {
    q: "Can I call ahead for takeaway pickup?",
    a: "Yes! Call us directly at +91 97410 74011 or use the WhatsApp Order Tray on our menu page. We'll have your food hot and ready when you pull up.",
  },
  {
    q: "Where can I park my bike or car?",
    a: "Dedicated two-wheeler parking is available right in front of Regal Arcade, and roadside car parking is available along Bendoorwell road.",
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    eventType: "General Question / Dine-in",
    notes: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name) return;

    const msg = `Hello Grub Cafe!\nMy name is ${formData.name}.\nPhone: ${formData.phone || "Not provided"}\nInquiry Type: ${formData.eventType}\nMessage: ${formData.notes || "None"}\n\nSent from grubcafe website.`;
    const phoneDigits = siteConfig.phone.replace(/[^0-9]/g, "");
    window.open(`https://wa.me/${phoneDigits}?text=${encodeURIComponent(msg)}`, "_blank");
    setSubmitted(true);
  };

  return (
    <div className="pt-24 pb-28 bg-[var(--color-canvas)] min-h-screen">
      <div className="container-wide">
        {/* Header */}
        <div className="max-w-3xl mb-14">
          <p className="section-kicker mb-2">Location &bull; Bendoorwell, Mangaluru</p>
          <h1 className="heading-editorial text-4xl sm:text-6xl text-[var(--color-ink)]">
            Visit the cafe in person.
          </h1>
          <p className="text-[var(--color-ink-muted)] text-base md:text-lg mt-3 leading-relaxed">
            Drop in for an after-class snack, pick up dinner takeaway, or sit down with friends.
            Right in the heart of Mangaluru, opposite Apollo Pharmacy.
          </p>
        </div>

        {/* 2-Column Grid: Location Details + Google Maps */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-16 items-stretch">
          {/* Left Details */}
          <div className="lg:col-span-5 space-y-5 flex flex-col justify-between">
            {/* Address */}
            <div className="p-6 rounded-2xl bg-[var(--color-canvas-card)] border border-[var(--color-border)] shadow-xs">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[var(--color-terracotta-subtle)] text-[var(--color-terracotta)] flex items-center justify-center shrink-0">
                  <MapPin size={20} />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-semibold text-[var(--color-ink)] mb-1">
                    Exact Address
                  </h3>
                  <p className="text-sm text-[var(--color-ink-muted)] leading-relaxed">
                    {siteConfig.address.full}
                  </p>
                  <p className="text-xs font-semibold text-[var(--color-terracotta)] mt-2">
                    Landmark: Directly opposite Apollo Pharmacy
                  </p>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div className="p-6 rounded-2xl bg-[var(--color-canvas-card)] border border-[var(--color-border)] shadow-xs">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[var(--color-ochre-subtle)] text-[var(--color-ochre)] flex items-center justify-center shrink-0">
                  <Clock size={20} />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-semibold text-[var(--color-ink)] mb-1">
                    Kitchen Hours
                  </h3>
                  <p className="text-sm text-[var(--color-ink)] font-medium">
                    Daily: {siteConfig.hours.weekdays}
                  </p>
                  <p className="text-xs text-[var(--color-ink-light)] mt-1">
                    Kitchen last orders at 10:15 PM nightly
                  </p>
                </div>
              </div>
            </div>

            {/* Phone & Directions */}
            <div className="p-6 rounded-2xl bg-[var(--color-canvas-subtle)] border border-[var(--color-border)] space-y-3">
              <div className="flex items-center gap-2 font-semibold text-[var(--color-ink)] text-sm mb-1">
                <Bike size={16} className="text-[var(--color-terracotta)]" />
                <span>Travel &amp; Parking</span>
              </div>
              <p className="text-xs text-[var(--color-ink-muted)] leading-relaxed">
                5 mins from Balmatta &bull; 4 mins from Kadri &bull; Dedicated two-wheeler parking right in front of Regal Arcade
              </p>

              <div className="pt-3 flex flex-wrap gap-3">
                <a
                  href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                  className="btn-primary text-xs py-2 px-5"
                >
                  <Phone size={13} />
                  <span>Call {siteConfig.phone}</span>
                </a>
                <a
                  href={siteConfig.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline text-xs py-2 px-5"
                >
                  <span>Google Maps</span>
                  <ArrowUpRight size={13} />
                </a>
              </div>
            </div>
          </div>

          {/* Right Map */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div className="h-full min-h-[380px] rounded-2xl bg-[var(--color-canvas-subtle)] border border-[var(--color-border)] overflow-hidden shadow-sm relative">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.704257850849!2d74.8517223749445!3d12.868772087437434!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba35a3994e6371f%3A0xe54d8ecbc7481a5a!2sRegal%20Arcade!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                className="absolute inset-0 w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Grub Cafe Location Regal Arcade Bendoorwell Mangaluru"
                allowFullScreen
              />
            </div>
          </div>
        </div>

        {/* Catering & Gathering Form */}
        <div className="p-8 md:p-12 rounded-2xl bg-white border border-[var(--color-border)] shadow-xs mb-16">
          <div className="max-w-2xl mb-8">
            <p className="section-kicker mb-2">Gatherings &amp; College Events</p>
            <h2 className="heading-editorial text-2xl sm:text-4xl text-[var(--color-ink)]">
              Planning a get-together or party?
            </h2>
            <p className="text-sm text-[var(--color-ink-muted)] mt-1">
              We cater student club meetings, birthday treats, and office snack boxes with customized
              burger boxes and loaded momo platters. Send your details straight to our WhatsApp kitchen manager!
            </p>
          </div>

          {submitted ? (
            <div className="p-6 rounded-xl bg-[var(--color-terracotta-subtle)] border border-[var(--color-terracotta)]/20 flex items-center gap-4">
              <CheckCircle size={24} className="text-[var(--color-terracotta)] shrink-0" />
              <div>
                <p className="font-serif text-lg font-semibold text-[var(--color-ink)]">
                  Message Dispatched to WhatsApp
                </p>
                <p className="text-xs text-[var(--color-ink-muted)] mt-0.5">
                  We look forward to hosting your group at Grub Cafe Bendoorwell.
                </p>
              </div>
            </div>
          ) : (
            <form onSubmit={handleInquirySubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs uppercase font-semibold tracking-wider text-[var(--color-ink)] mb-2">
                  Your Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Rahul Shenoy"
                  className="w-full px-4 py-2.5 text-sm bg-[var(--color-canvas)] rounded-xl border border-[var(--color-border)] focus:outline-none focus:border-[var(--color-terracotta)]"
                />
              </div>

              <div>
                <label className="block text-xs uppercase font-semibold tracking-wider text-[var(--color-ink)] mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="e.g. +91 98450 XXXXX"
                  className="w-full px-4 py-2.5 text-sm bg-[var(--color-canvas)] rounded-xl border border-[var(--color-border)] focus:outline-none focus:border-[var(--color-terracotta)]"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-xs uppercase font-semibold tracking-wider text-[var(--color-ink)] mb-2">
                  Inquiry Purpose
                </label>
                <select
                  value={formData.eventType}
                  onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                  className="w-full px-4 py-2.5 text-sm bg-[var(--color-canvas)] rounded-xl border border-[var(--color-border)] focus:outline-none focus:border-[var(--color-terracotta)]"
                >
                  <option value="General Question / Dine-in">General Question / Dine-in</option>
                  <option value="Birthday Party Pack">Birthday Party Snack Box</option>
                  <option value="College Fest Bulk Order">College Club / Fest Bulk Order</option>
                  <option value="Office Snacks Delivery">Office Snacks Delivery</option>
                </select>
              </div>

              <div className="md:col-span-2">
                <label className="block text-xs uppercase font-semibold tracking-wider text-[var(--color-ink)] mb-2">
                  Details / Cravings
                </label>
                <textarea
                  rows={3}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="Estimated number of guests, date, or preferred items..."
                  className="w-full px-4 py-2.5 text-sm bg-[var(--color-canvas)] rounded-xl border border-[var(--color-border)] focus:outline-none focus:border-[var(--color-terracotta)]"
                />
              </div>

              <div className="md:col-span-2">
                <button
                  type="submit"
                  className="btn-primary text-xs py-3 px-7 flex items-center gap-2 cursor-pointer"
                >
                  <Send size={14} />
                  <span>Send Inquiry to Kitchen</span>
                </button>
              </div>
            </form>
          )}
        </div>

        {/* FAQs */}
        <div className="max-w-3xl">
          <p className="section-kicker mb-2">Frequently Asked</p>
          <h2 className="heading-editorial text-2xl sm:text-4xl text-[var(--color-ink)] mb-8">
            Common questions answered.
          </h2>

          <div className="space-y-4">
            {faqs.map((faq) => (
              <div
                key={faq.q}
                className="p-6 rounded-2xl bg-[var(--color-canvas-card)] border border-[var(--color-border)] shadow-xs"
              >
                <h3 className="font-serif text-lg font-semibold text-[var(--color-ink)] mb-2">
                  {faq.q}
                </h3>
                <p className="text-xs text-[var(--color-ink-muted)] leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
