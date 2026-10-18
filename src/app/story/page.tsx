"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Flame, Clock, Heart, Award, MapPin } from "lucide-react";

const commitments = [
  {
    icon: Flame,
    title: "Seared on the Flat-Top",
    desc: "We don't use warming drawers or pre-cooked batches. Every patty, fillet, and roll hits the heat the moment your ticket is confirmed.",
  },
  {
    icon: Award,
    title: "Unapologetic Sauces",
    desc: "From molten cheddar dips to our fiery momo chutney, every condiment is made in-house to deliver genuine spice, richness, and depth.",
  },
  {
    icon: Heart,
    title: "Student-Honest Pricing",
    desc: "Comfort food should bring people together, not stress your wallet. Dishes start from ₹30 and remain pocket-friendly every single day.",
  },
  {
    icon: Clock,
    title: "Bendoorwell Gathering Spot",
    desc: "Located centrally in Regal Arcade, opposite Apollo Pharmacy. An easy meetup spot for college crews, friends, and late-night cravings.",
  },
];

export default function StoryPage() {
  return (
    <div className="bg-[var(--color-canvas)] min-h-screen">
      {/* Hero Header */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-24 border-b border-[var(--color-border)]">
        <div className="container-wide">
          <div className="max-w-3xl">
            <p className="section-kicker mb-3">Our Roots &bull; Bendoorwell</p>
            <h1 className="heading-editorial text-4xl sm:text-6xl text-[var(--color-ink)] leading-tight">
              Comfort food cooked with intention.
            </h1>
            <p className="text-[var(--color-ink-muted)] text-base md:text-xl font-normal mt-4 leading-relaxed">
              We started Grub Cafe with a straightforward conviction: fast casual food in Mangaluru
              should never feel bland, tired, or overpriced. Here is how we run our kitchen every day.
            </p>
          </div>
        </div>
      </section>

      {/* Narrative Section 1: Asymmetric Text & Overlapping Photography */}
      <section className="py-20 md:py-28 border-b border-[var(--color-border)]">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Framed Photography Duo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-6 relative"
            >
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden bg-[var(--color-canvas-subtle)] border border-[var(--color-border)] shadow-xl">
                <Image
                  src="/images/food/chicken-strips.jpg"
                  alt="Crispy hot fried chicken strips at Grub Cafe Mangaluru"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 hidden sm:block p-5 rounded-2xl bg-white border border-[var(--color-border)] shadow-xl max-w-xs">
                <p className="font-serif italic text-sm text-[var(--color-ink)]">
                  &ldquo;Audible crunch in every single bite.&rdquo;
                </p>
                <p className="text-[10px] uppercase font-bold tracking-wider text-[var(--color-terracotta)] mt-1.5">
                  Fried Fresh to Order Daily
                </p>
              </div>
            </motion.div>

            {/* Narrative Content */}
            <div className="lg:col-span-6 space-y-6">
              <p className="section-kicker">The Kitchen Ethos</p>
              <h2 className="heading-editorial text-3xl sm:text-4xl text-[var(--color-ink)] leading-tight">
                No shortcuts. Generous plates.
              </h2>
              <div className="space-y-4 text-[var(--color-ink-muted)] text-base leading-relaxed font-normal">
                <p>
                  Mangaluru has high standards for taste. From coastal seafood ghee roasts to evening snacks,
                  food here is taken seriously. When we opened our counter in Regal Arcade, opposite Apollo
                  Pharmacy, we decided to build a place where you never have to wonder if your food was sitting in a warmer.
                </p>
                <p>
                  When you order loaded fries, we flood them with cheese. When you order a zinger burger,
                  the fillet is thick, freshly fried, and crackles under the knife. And when our momos steam,
                  the fiery red chutney is packed with genuine coastal heat.
                </p>
                <p>
                  Whether you&apos;re popping in between classes with friends or picking up dinner on the way home,
                  Grub Cafe is built to be your dependable comfort kitchen.
                </p>
              </div>

              {/* Stats Bar */}
              <div className="pt-6 border-t border-[var(--color-border)] grid grid-cols-3 gap-6">
                <div>
                  <span className="font-serif text-3xl sm:text-4xl font-bold text-[var(--color-terracotta)]">
                    50+
                  </span>
                  <p className="text-[11px] font-medium uppercase tracking-wider text-[var(--color-ink-light)] mt-0.5">
                    Menu Varieties
                  </p>
                </div>
                <div>
                  <span className="font-serif text-3xl sm:text-4xl font-bold text-[var(--color-ochre)]">
                    ₹30
                  </span>
                  <p className="text-[11px] font-medium uppercase tracking-wider text-[var(--color-ink-light)] mt-0.5">
                    Starting Price
                  </p>
                </div>
                <div>
                  <span className="font-serif text-3xl sm:text-4xl font-bold text-[var(--color-ink)]">
                    100%
                  </span>
                  <p className="text-[11px] font-medium uppercase tracking-wider text-[var(--color-ink-light)] mt-0.5">
                    Fresh to Order
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Panoramic Edge-to-Edge Visual Break: Dining Room Atmosphere */}
      <section className="relative w-full h-[400px] md:h-[500px] bg-[var(--color-dark)] overflow-hidden border-b border-[var(--color-border)]">
        <Image
          src="/images/cafe/cafe-interior.jpg"
          alt="Grub Cafe dining interior in Mangaluru"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center p-6 text-center text-white">
          <div className="max-w-2xl">
            <span className="text-xs uppercase font-bold tracking-[0.2em] text-[var(--color-ochre)] block mb-2">
              Bendoorwell Ambiance
            </span>
            <p className="font-serif text-2xl sm:text-4xl font-medium leading-snug">
              &ldquo;Good food, loud conversations, and great memories with your crew.&rdquo;
            </p>
            <p className="text-xs text-white/70 mt-3 uppercase tracking-wider font-sans">
              Regal Arcade &bull; Opposite Apollo Pharmacy
            </p>
          </div>
        </div>
      </section>

      {/* 4 Pillars Section: Asymmetric Composition with Side-by-Side Detail */}
      <section className="py-20 md:py-28 bg-[var(--color-canvas)] border-b border-[var(--color-border)]">
        <div className="container-wide">
          <div className="max-w-xl mb-14">
            <p className="section-kicker mb-2">Our Commitments</p>
            <h2 className="heading-editorial text-3xl sm:text-4xl text-[var(--color-ink)]">
              The four pillars of Grub Cafe.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {commitments.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="p-6 rounded-2xl bg-white border border-[var(--color-border)] shadow-xs flex flex-col justify-between hover:border-[var(--color-terracotta)]/40 hover:shadow-md transition-all"
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-[var(--color-terracotta-subtle)] text-[var(--color-terracotta)] flex items-center justify-center mb-5">
                      <Icon size={20} />
                    </div>
                    <h3 className="font-serif text-lg font-semibold text-[var(--color-ink)] mb-2">
                      {item.title}
                    </h3>
                    <p className="text-xs text-[var(--color-ink-muted)] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Closing Call to Action */}
      <section className="py-16 md:py-20 bg-[var(--color-canvas-subtle)]">
        <div className="container-wide flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="font-serif text-2xl sm:text-3xl text-[var(--color-ink)]">
              Drop by and taste the difference.
            </h2>
            <p className="text-xs text-[var(--color-ink-muted)] mt-1">
              Regal Arcade, Bendoorwell &bull; Open daily 11:30 AM &ndash; 10:30 PM
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/menu" className="btn-primary text-xs py-3 px-6">
              <span>View Full Menu</span>
              <ArrowRight size={14} />
            </Link>
            <Link href="/contact" className="btn-outline text-xs py-3 px-6">
              <MapPin size={14} className="text-[var(--color-terracotta)]" />
              <span>Visit In Person</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
