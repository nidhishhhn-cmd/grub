"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Plus } from "lucide-react";

export function MenuPreview() {
  return (
    <section className="py-20 md:py-32 bg-[var(--color-canvas)] border-b border-[var(--color-border)]">
      <div className="container-wide">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-xl">
            <p className="section-kicker mb-2">Curated Selections</p>
            <h2 className="heading-editorial text-3xl sm:text-5xl text-[var(--color-ink)]">
              Signature plates that define our counter.
            </h2>
            <p className="text-[var(--color-ink-muted)] text-base mt-3 leading-relaxed">
              Every dish is assembled and cooked the moment you order. No warming drawers.
              Vibrant seasonings, molten sauces, and pocket-friendly prices.
            </p>
          </div>

          <Link
            href="/menu"
            className="btn-outline text-xs self-start md:self-end flex items-center gap-2 tracking-wider shrink-0"
          >
            <span>Explore All 50+ Dishes</span>
            <ArrowRight size={14} />
          </Link>
        </div>

        {/* Tier 1: Asymmetric Split — Wide Feature Dish (7 cols) + Tall Refresher (5 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-8 items-stretch">
          {/* 7 Cols: The Anchor Smash Burger */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 rounded-3xl bg-[var(--color-canvas-card)] border border-[var(--color-border)] overflow-hidden shadow-xs flex flex-col justify-between group hover:shadow-lg transition-all duration-300"
          >
            <div className="relative aspect-[16/10] bg-[var(--color-canvas-subtle)] overflow-hidden">
              <Image
                src="/images/hero/hero-burger.jpg"
                alt="Double zinger smash burger with melted cheese"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 1024px) 100vw, 58vw"
              />
              <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/90 backdrop-blur-xs text-[10px] font-bold uppercase tracking-wider text-[var(--color-ink)] border border-white/60">
                #01 &bull; Flagship Dish
              </span>
              <div className="absolute bottom-4 right-4 bg-[var(--color-ink)]/90 backdrop-blur-xs text-white px-3.5 py-1.5 rounded-full font-serif text-lg font-semibold">
                ₹70
              </div>
            </div>

            <div className="p-8">
              <div className="flex items-center justify-between text-xs text-[var(--color-terracotta)] font-semibold uppercase tracking-wider mb-2">
                <span>Burgers &bull; Sizzled to Order</span>
                <span className="text-[var(--color-ink-light)]">Bestseller</span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-[var(--color-ink)] mb-2">
                The Double Zinger Smash
              </h3>
              <p className="text-sm text-[var(--color-ink-muted)] leading-relaxed max-w-xl mb-6">
                Two seasoned crispy fillets stacked with double molten cheddar, house pickles,
                and spiced mayonnaise on a butter-toasted brioche bun.
              </p>

              <Link
                href="/menu"
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[var(--color-terracotta)] hover:text-[var(--color-terracotta-hover)] transition-colors"
              >
                <span>View Burger Section</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </motion.div>

          {/* 5 Cols: Tall Vertical Card — Artisanal Shakes & Berry Coolers */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-5 rounded-3xl bg-[var(--color-canvas-card)] border border-[var(--color-border)] overflow-hidden shadow-xs flex flex-col justify-between group hover:shadow-lg transition-all duration-300"
          >
            <div className="relative aspect-[4/3] lg:aspect-[4/5] bg-[var(--color-canvas-subtle)] overflow-hidden">
              <Image
                src="/images/food/shakes.jpg"
                alt="Artisanal chocolate milkshake and iced berry refresher at Grub Cafe"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 1024px) 100vw, 42vw"
              />
              <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/90 backdrop-blur-xs text-[10px] font-bold uppercase tracking-wider text-[var(--color-ink)] border border-white/60">
                #02 &bull; Cold Beverages
              </span>
              <div className="absolute bottom-4 right-4 bg-[var(--color-ink)]/90 backdrop-blur-xs text-white px-3.5 py-1.5 rounded-full font-serif text-base font-semibold">
                From ₹30
              </div>
            </div>

            <div className="p-8">
              <span className="text-xs text-[var(--color-terracotta)] font-semibold uppercase tracking-wider block mb-2">
                Milkshakes &bull; Iced Coolers
              </span>
              <h3 className="font-serif text-2xl font-semibold text-[var(--color-ink)] mb-2">
                Thick Shakes &amp; Refresher Sips
              </h3>
              <p className="text-xs text-[var(--color-ink-muted)] leading-relaxed mb-6">
                Blended chocolate shakes with whipped cream, iced mint mojitos, and cold coffee.
                The ultimate companion to spicy hot flat-top food.
              </p>

              <Link
                href="/menu"
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[var(--color-terracotta)] hover:text-[var(--color-terracotta-hover)] transition-colors"
              >
                <span>View Beverage Menu</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Tier 2: Reversed Asymmetric Layout — Tall Loaded Fries (5 cols) + Split Plates (7 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* 5 Cols: Cheese-Drowned Loaded Fries */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 rounded-3xl bg-[var(--color-canvas-card)] border border-[var(--color-border)] overflow-hidden shadow-xs flex flex-col justify-between group hover:shadow-lg transition-all duration-300"
          >
            <div className="relative aspect-[4/3] lg:aspect-[4/5] bg-[var(--color-canvas-subtle)] overflow-hidden">
              <Image
                src="/images/food/loaded-fries.jpg"
                alt="Cheese-drowned loaded fries with jalapeños"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 1024px) 100vw, 42vw"
              />
              <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/90 backdrop-blur-xs text-[10px] font-bold uppercase tracking-wider text-[var(--color-ink)] border border-white/60">
                #03 &bull; Starters
              </span>
              <div className="absolute bottom-4 right-4 bg-[var(--color-ink)]/90 backdrop-blur-xs text-white px-3.5 py-1.5 rounded-full font-serif text-base font-semibold">
                From ₹60
              </div>
            </div>

            <div className="p-8">
              <span className="text-xs text-[var(--color-terracotta)] font-semibold uppercase tracking-wider block mb-2">
                Crispy Starters &bull; Vegetarian Available
              </span>
              <h3 className="font-serif text-2xl font-semibold text-[var(--color-ink)] mb-2">
                Cheddar-Drowned Fries
              </h3>
              <p className="text-xs text-[var(--color-ink-muted)] leading-relaxed mb-6">
                Golden skin-on fries bathed in melted cheese sauce, dusted with peri-peri,
                and topped with pickled jalapeños. Good luck trying to share these.
              </p>

              <Link
                href="/menu"
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[var(--color-terracotta)] hover:text-[var(--color-terracotta-hover)] transition-colors"
              >
                <span>View Starters Menu</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </motion.div>

          {/* 7 Cols: Two Horizontal Stacked Dishes (Momos + Pizza) */}
          <div className="lg:col-span-7 space-y-8 flex flex-col justify-between">
            {/* Dish A: Fiery Steamed Momos */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="rounded-3xl bg-[var(--color-canvas-card)] border border-[var(--color-border)] overflow-hidden shadow-xs p-6 md:p-8 flex flex-col sm:flex-row items-center gap-6 group hover:shadow-lg transition-all duration-300"
            >
              <div className="relative w-full sm:w-48 h-40 sm:h-36 rounded-2xl overflow-hidden shrink-0 bg-[var(--color-canvas-subtle)]">
                <Image
                  src="/images/food/momos.jpg"
                  alt="Steamed momos with red chili chutney"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 640px) 100vw, 192px"
                />
                <span className="absolute top-2 left-2 px-2 py-0.5 rounded-full bg-white/90 text-[9px] font-bold uppercase tracking-wider text-[var(--color-ink)]">
                  #04
                </span>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[11px] uppercase tracking-wider font-semibold text-[var(--color-terracotta)]">
                    Dumplings &bull; Steamed or Fried
                  </span>
                  <span className="font-serif text-lg font-bold text-[var(--color-ink)]">
                    From ₹70
                  </span>
                </div>
                <h4 className="font-serif text-xl font-semibold text-[var(--color-ink)] mb-1">
                  Fiery Steamed Momos
                </h4>
                <p className="text-xs text-[var(--color-ink-muted)] leading-relaxed mb-3">
                  Tender steamed parcels served with our lethal house-made red chili chutney.
                  Packs genuine coastal Mangaluru spice.
                </p>
                <Link
                  href="/menu"
                  className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[var(--color-terracotta)]"
                >
                  <span>Order Momos</span>
                  <ArrowRight size={13} />
                </Link>
              </div>
            </motion.div>

            {/* Dish B: Stone-Baked Oven Pizza */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="rounded-3xl bg-[var(--color-canvas-card)] border border-[var(--color-border)] overflow-hidden shadow-xs p-6 md:p-8 flex flex-col sm:flex-row items-center gap-6 group hover:shadow-lg transition-all duration-300"
            >
              <div className="relative w-full sm:w-48 h-40 sm:h-36 rounded-2xl overflow-hidden shrink-0 bg-[var(--color-canvas-subtle)]">
                <Image
                  src="/images/food/pizza.jpg"
                  alt="Freshly baked pizza with cheese and peppers"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 640px) 100vw, 192px"
                />
                <span className="absolute top-2 left-2 px-2 py-0.5 rounded-full bg-white/90 text-[9px] font-bold uppercase tracking-wider text-[var(--color-ink)]">
                  #05
                </span>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[11px] uppercase tracking-wider font-semibold text-[var(--color-terracotta)]">
                    Oven Pizzas &bull; Fresh Herb Crust
                  </span>
                  <span className="font-serif text-lg font-bold text-[var(--color-ink)]">
                    From ₹120
                  </span>
                </div>
                <h4 className="font-serif text-xl font-semibold text-[var(--color-ink)] mb-1">
                  Stone-Baked Loaded Pizza
                </h4>
                <p className="text-xs text-[var(--color-ink-muted)] leading-relaxed mb-3">
                  Thin crispy crust smothered in herb tomato concassé, stringy mozzarella cheese,
                  and fresh toppings. Straight from our oven.
                </p>
                <Link
                  href="/menu"
                  className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[var(--color-terracotta)]"
                >
                  <span>Order Pizza</span>
                  <ArrowRight size={13} />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
