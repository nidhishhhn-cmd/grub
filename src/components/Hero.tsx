"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, MapPin, Sparkles, Flame, Clock, Calendar } from "lucide-react";
import { siteConfig } from "@/data/site";

export function Hero() {
  return (
    <section className="relative bg-[var(--color-canvas)] pt-8 pb-20 md:pt-14 md:pb-28 overflow-hidden border-b border-[var(--color-border)]">
      <div className="container-wide">
        {/* Editorial Top Masthead Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-8 border-b border-[var(--color-border)] text-xs text-[var(--color-ink-muted)] font-medium">
          <div className="flex items-center gap-2 tracking-[0.16em] uppercase text-[11px] font-semibold text-[var(--color-terracotta)]">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-terracotta)]"></span>
            <span>Regal Arcade, Bendoorwell</span>
          </div>
          <div className="hidden md:flex items-center gap-6 font-mono text-[11px] text-[var(--color-ink-light)]">
            <span>12&deg;52&apos;12&quot;N 74&deg;51&apos;00&quot;E</span>
            <span>&bull;</span>
            <span>MANGALURU, KA</span>
          </div>
          <div className="flex items-center gap-2 text-xs">
            <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse"></span>
            <span className="text-[var(--color-ink)] font-semibold">Live Kitchen Open Today</span>
          </div>
        </div>

        {/* Hero Title: Massive Editorial Scale with Italic Contrast */}
        <div className="max-w-5xl mb-12">
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="heading-editorial text-4xl sm:text-6xl lg:text-7xl xl:text-8xl leading-[1.04] text-[var(--color-ink)]"
          >
            Comfort food cooked with{" "}
            <span className="heading-editorial-italic text-[var(--color-terracotta)] font-normal">
              unapologetic
            </span>{" "}
            generosity.
          </motion.h1>
        </div>

        {/* Asymmetrical Editorial Composition: Left Narrative + Right Overlapping Images */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-end">
          {/* Left Column: Story, Actions, and a Small Supporting Vignette */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 space-y-8"
          >
            <p className="text-[var(--color-ink-muted)] text-base md:text-lg leading-relaxed font-normal max-w-lg">
              Fresh flat-top smash burgers, mountains of molten cheese loaded fries, and fiery steamed momos.
              Sizzled to order right opposite Apollo Pharmacy in Bendoorwell — built for hearty appetites on everyday budgets.
            </p>

            {/* Actions */}
            <div className="flex flex-wrap items-center gap-4 pt-1">
              <Link href="/menu" className="btn-primary">
                <span>Explore The Menu</span>
                <ArrowRight size={15} />
              </Link>
              <Link href="/book" className="btn-outline">
                <Calendar size={15} className="text-[var(--color-terracotta)]" />
                <span>Book a Table</span>
              </Link>
            </div>

            {/* Supporting Inset Detail Card: Loaded Fries Preview */}
            <div className="p-4 rounded-2xl bg-[var(--color-canvas-subtle)] border border-[var(--color-border)] flex items-center gap-4 max-w-md">
              <div className="relative w-20 h-20 rounded-xl overflow-hidden shrink-0 border border-[var(--color-border)]">
                <Image
                  src="/images/food/loaded-fries.jpg"
                  alt="Cheese loaded fries at Grub Cafe"
                  fill
                  className="object-cover"
                  sizes="80px"
                />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-[var(--color-ink)] font-serif">
                    Cheddar Loaded Fries
                  </span>
                  <span className="text-xs font-bold text-[var(--color-terracotta)]">
                    ₹60
                  </span>
                </div>
                <p className="text-[11px] text-[var(--color-ink-muted)] leading-tight mt-1 truncate">
                  Crispy fries drowned in hot cheese sauce
                </p>
                <div className="mt-2 flex items-center gap-3 text-[10px] text-[var(--color-ink-light)] font-medium uppercase tracking-wider">
                  <span>Fast Prep</span>
                  <span>&bull;</span>
                  <span>Vegetarian Option</span>
                </div>
              </div>
            </div>

            {/* Micro Telemetry Bar */}
            <div className="pt-4 border-t border-[var(--color-border)] flex flex-wrap items-center gap-6 text-xs text-[var(--color-ink-light)] font-medium">
              <div>Meals from ₹30</div>
              <div>&bull;</div>
              <div>Dedicated Veg &amp; Non-Veg Stations</div>
              <div>&bull;</div>
              <div>Daily 11:30 AM &ndash; 10:30 PM</div>
            </div>
          </motion.div>

          {/* Right Column: Multi-Image Overlapping Composition */}
          <div className="lg:col-span-7 relative pt-6 lg:pt-0">
            {/* Primary Dominant Image: The Hero Burger */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative aspect-[4/3] sm:aspect-[16/11] rounded-3xl overflow-hidden bg-[var(--color-canvas-subtle)] border border-[var(--color-border)] shadow-xl"
            >
              <Image
                src={siteConfig.assets.heroImage}
                alt="Gourmet smash burger with melted cheese at Grub Cafe Bendoorwell"
                fill
                priority
                loading="eager"
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 55vw"
                quality={90}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-ink)]/70 via-transparent to-transparent" />

              {/* Bottom In-Image Label */}
              <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between text-white">
                <div>
                  <p className="text-xs font-sans font-semibold tracking-[0.16em] uppercase text-[var(--color-ochre)] mb-1">
                    Signature Flat-Top Item
                  </p>
                  <p className="font-serif text-2xl sm:text-3xl font-semibold leading-tight">
                    The Classic Double Smash
                  </p>
                </div>
                <div className="text-right">
                  <span className="font-serif text-3xl sm:text-4xl font-bold text-white">
                    ₹70
                  </span>
                  <p className="text-[10px] text-white/70 uppercase tracking-wider font-sans">
                    With House Pickles
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Overlapping Floating Element: The Momos Detail Card (breaks out at bottom-right) */}
            <motion.div
              initial={{ opacity: 0, x: 20, y: 20 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="hidden sm:block absolute -bottom-10 -left-6 md:-bottom-8 md:-left-10 z-20 w-64 p-3.5 rounded-2xl bg-white/95 backdrop-blur-md border border-[var(--color-border)] shadow-2xl"
            >
              <div className="flex items-center gap-3">
                <div className="relative w-16 h-16 rounded-xl overflow-hidden shrink-0 border border-[var(--color-border)]">
                  <Image
                    src="/images/food/momos.jpg"
                    alt="Steamed momos with red chili chutney"
                    fill
                    className="object-cover"
                    sizes="64px"
                  />
                </div>
                <div className="min-w-0">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-[var(--color-terracotta)] block">
                    Fiery Red Chutney
                  </span>
                  <p className="font-serif text-sm font-semibold text-[var(--color-ink)] truncate">
                    Steamed Momos
                  </p>
                  <p className="text-xs font-bold text-[var(--color-ink)] mt-0.5">
                    ₹70 <span className="font-normal text-[10px] text-[var(--color-ink-muted)]">/ plate</span>
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
