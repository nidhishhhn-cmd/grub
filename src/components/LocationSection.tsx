"use client";

import { MapPin, Phone, Clock, ArrowUpRight, Navigation, Bike } from "lucide-react";
import { siteConfig } from "@/data/site";

export function LocationSection() {
  return (
    <section className="py-20 md:py-28 bg-[var(--color-canvas)] border-b border-[var(--color-border)]">
      <div className="container-wide">
        {/* Header */}
        <div className="max-w-xl mb-16">
          <p className="section-kicker mb-2">Visit Us</p>
          <h2 className="heading-editorial text-3xl sm:text-5xl text-[var(--color-ink)]">
            Come hungry. We are in Bendoorwell.
          </h2>
          <p className="text-[var(--color-ink-muted)] text-base mt-3 leading-relaxed">
            Located in Regal Arcade, directly opposite Apollo Pharmacy.
            Casual dining inside, quick takeaways on the go.
          </p>
        </div>

        {/* 2-Column Split: Info + Map */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          {/* Info Side */}
          <div className="lg:col-span-5 space-y-5 flex flex-col justify-between">
            {/* Address Box */}
            <div className="p-6 rounded-2xl bg-[var(--color-canvas-card)] border border-[var(--color-border)] shadow-xs">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[var(--color-terracotta-subtle)] text-[var(--color-terracotta)] flex items-center justify-center shrink-0">
                  <MapPin size={20} />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-semibold text-[var(--color-ink)] mb-1">
                    Address
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

            {/* Hours Box */}
            <div className="p-6 rounded-2xl bg-[var(--color-canvas-card)] border border-[var(--color-border)] shadow-xs">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[var(--color-ochre-subtle)] text-[var(--color-ochre)] flex items-center justify-center shrink-0">
                  <Clock size={20} />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-semibold text-[var(--color-ink)] mb-1">
                    Kitchen Timings
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

            {/* Travel & Parking Guide */}
            <div className="p-6 rounded-2xl bg-[var(--color-canvas-subtle)] border border-[var(--color-border)] text-xs text-[var(--color-ink-muted)] space-y-2">
              <div className="flex items-center gap-2 font-semibold text-[var(--color-ink)] text-sm mb-1">
                <Bike size={16} className="text-[var(--color-terracotta)]" />
                <span>Travel &amp; Parking</span>
              </div>
              <p>&bull; 5 mins from Balmatta / KMC Mangalore &bull; 4 mins from Kadri</p>
              <p>&bull; Ample two-wheeler parking right in front of Regal Arcade</p>

              <div className="pt-4 flex flex-wrap gap-3">
                <a
                  href={siteConfig.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary text-xs py-2 px-5"
                >
                  <span>Google Maps Directions</span>
                  <ArrowUpRight size={13} />
                </a>
                <a
                  href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                  className="btn-outline text-xs py-2 px-5"
                >
                  <Phone size={13} />
                  <span>Call {siteConfig.phone}</span>
                </a>
              </div>
            </div>
          </div>

          {/* Map Side */}
          <div className="lg:col-span-7">
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
      </div>
    </section>
  );
}
