"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Flame } from "lucide-react";

const pillars = [
  {
    num: "01",
    title: "Seared on the Flat-Top",
    desc: "We don't use warming drawers or pre-cooked batches. Every patty, fillet, and roll hits the heat the moment your ticket is confirmed.",
  },
  {
    num: "02",
    title: "Unapologetic Sauces",
    desc: "From molten cheddar dips to our fiery momo chutney, every condiment is made in-house to deliver genuine spice, richness, and depth.",
  },
  {
    num: "03",
    title: "Student-Honest Pricing",
    desc: "Comfort food should bring people together, not stress your wallet. Dishes start from ₹30 and remain pocket-friendly every single day.",
  },
  {
    num: "04",
    title: "Bendoorwell Gathering Spot",
    desc: "Located centrally in Regal Arcade, opposite Apollo Pharmacy. An easy meetup spot for college crews, friends, and late-night cravings.",
  },
];

export function FoodStory() {
  return (
    <section className="py-24 md:py-36 bg-[var(--color-dark)] text-white relative overflow-hidden border-b border-white/10">
      <div className="container-wide relative z-10">
        {/* Editorial Top Quote */}
        <div className="max-w-4xl mb-20">
          <p className="text-xs uppercase font-bold tracking-[0.2em] text-[var(--color-ochre)] mb-4 inline-flex items-center gap-2">
            <Flame size={14} className="fill-[var(--color-ochre)] text-[var(--color-ochre)]" />
            <span>The Kitchen Manifesto</span>
          </p>
          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="heading-editorial text-3xl sm:text-5xl lg:text-6xl text-white leading-[1.12]"
          >
            No warming drawers. No frozen shortcuts. Just{" "}
            <span className="heading-editorial-italic text-[var(--color-ochre)] font-normal">
              honest flat-top heat
            </span>{" "}
            and generous portions.
          </motion.h2>
        </div>

        {/* Asymmetric Editorial Spread: Left Numbered Ledger + Right Overlapping Imagery */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-16 items-center">
          {/* Left: Numbered Ledger with Deliberate Spacing (Not Repetitive Cards) */}
          <div className="lg:col-span-6 space-y-8">
            <div className="divide-y divide-white/10">
              {pillars.map((item, idx) => (
                <motion.div
                  key={item.num}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="py-6 first:pt-0 last:pb-0 flex items-start gap-6 group"
                >
                  <span className="font-mono text-sm font-bold text-[var(--color-ochre)] mt-1 shrink-0">
                    {item.num}
                  </span>
                  <div>
                    <h3 className="font-serif text-xl font-semibold text-white group-hover:text-[var(--color-ochre)] transition-colors mb-1.5">
                      {item.title}
                    </h3>
                    <p className="text-xs text-white/65 leading-relaxed font-normal max-w-md">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="pt-6">
              <Link href="/story" className="btn-outline-light text-xs tracking-wider">
                <span>Read Full Brand Story</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>

          {/* Right: Overlapping Asymmetric Dual-Image Composition */}
          <div className="lg:col-span-6 relative pt-4 pb-12 sm:pb-16">
            {/* Primary Tall Portrait Image: Crispy Chicken Strips */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative w-4/5 aspect-[3/4] rounded-3xl overflow-hidden bg-white/5 border border-white/15 shadow-2xl"
            >
              <Image
                src="/images/food/chicken-strips.jpg"
                alt="Golden crispy chicken strips prepared at Grub Cafe"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 75vw, 38vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/60 backdrop-blur-xs text-[10px] font-bold uppercase tracking-wider text-white border border-white/20">
                Fresh Fried Daily
              </div>
            </motion.div>

            {/* Overlapping Secondary Landscape Image: Toasted Zinger Wrap */}
            <motion.div
              initial={{ opacity: 0, x: 30, y: 30 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="absolute -bottom-4 right-0 sm:right-4 w-3/5 aspect-[4/3] rounded-2xl overflow-hidden bg-white/10 border-2 border-[var(--color-dark)] shadow-2xl"
            >
              <Image
                src="/images/food/wrap.jpg"
                alt="Chicken zinger wrap cut in half showing filling"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3 right-3 text-white">
                <p className="font-serif text-sm font-semibold leading-tight">
                  Toasted Zinger Wrap
                </p>
                <p className="text-[10px] text-[var(--color-ochre)] uppercase tracking-wider font-semibold">
                  Fresh Crunch &bull; ₹70
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
