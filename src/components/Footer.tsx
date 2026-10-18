"use client";

import Link from "next/link";
import { MapPin, Phone, ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/data/site";

const footerNav = [
  { label: "Home", href: "/" },
  { label: "Menu", href: "/menu" },
  { label: "Book a Table", href: "/book" },
  { label: "Our Story", href: "/story" },
  { label: "Photo Gallery", href: "/gallery" },
  { label: "Visit & Contact", href: "/contact" },
];

function InstagramIcon({ size = 18 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

export function Footer() {
  const currentYear = 2026;

  return (
    <footer className="bg-[var(--color-dark)] text-white border-t border-white/10">
      {/* Top Refined Invitation Banner */}
      <div className="border-b border-white/10 py-12">
        <div className="container-wide flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h2 className="font-serif text-2xl sm:text-3xl text-white">
              Hungry in Bendoorwell?
            </h2>
            <p className="text-sm text-white/65 mt-1 font-normal">
              Pull up to Regal Arcade or reserve your spot ahead of time with zero booking fees.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <Link
              href="/book"
              className="btn-outline-light text-xs py-3 px-5 tracking-wider"
            >
              <span>Reserve a Table</span>
            </Link>
            <Link
              href="/menu"
              className="btn-primary text-xs py-3 px-6 tracking-wider"
            >
              <span>Explore Menu</span>
              <ArrowUpRight size={14} />
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="container-wide py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8">
          {/* Brand Col */}
          <div className="md:col-span-5 space-y-4">
            <Link href="/" className="inline-flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-[var(--color-terracotta)] text-white flex items-center justify-center font-serif text-sm font-semibold">
                G
              </span>
              <span className="font-serif text-2xl font-semibold tracking-tight text-white">
                Grub Cafe
              </span>
            </Link>

            <p className="text-xs text-white/65 leading-relaxed max-w-sm">
              Mangaluru&apos;s pocket-friendly fast casual counter in Regal Arcade, Bendoorwell.
              Smash burgers, loaded fries, steamed &amp; fried momos, oven pizza, and thick milkshakes.
            </p>

            {/* Social */}
            <div className="pt-2 flex items-center gap-3">
              {siteConfig.social.instagram && (
                <a
                  href={siteConfig.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-white/5 border border-white/15 flex items-center justify-center hover:bg-white hover:text-[var(--color-dark)] transition-all"
                  aria-label="Instagram"
                >
                  <InstagramIcon size={16} />
                </a>
              )}
            </div>
          </div>

          {/* Nav */}
          <div className="md:col-span-3">
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-ochre)] mb-4">
              Explore
            </h3>
            <nav className="flex flex-col gap-2.5">
              {footerNav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-xs font-medium text-white/70 hover:text-white transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Location Details */}
          <div className="md:col-span-4 space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-ochre)] mb-4">
              Visit Us
            </h3>

            <div className="flex items-start gap-3">
              <MapPin size={16} className="text-[var(--color-terracotta)] mt-0.5 shrink-0" />
              <p className="text-xs text-white/70 leading-relaxed">
                {siteConfig.address.full}
              </p>
            </div>

            <div className="flex items-center gap-3 pt-1">
              <Phone size={16} className="text-[var(--color-ochre)] shrink-0" />
              <a
                href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                className="text-xs font-medium text-white/90 hover:text-white transition-colors"
              >
                {siteConfig.phone}
              </a>
            </div>

            <div className="pt-2 text-xs text-white/50">
              Kitchen: 11:30 AM &ndash; 10:30 PM Daily
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 py-6">
        <div className="container-wide flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-white/50">
          <p>&copy; {currentYear} Grub Cafe, Mangaluru. All rights reserved.</p>
          <p>Regal Arcade, Bendoorwell &bull; Fast Casual Cafe</p>
        </div>
      </div>
    </footer>
  );
}
