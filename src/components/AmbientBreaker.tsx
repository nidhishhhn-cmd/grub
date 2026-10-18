"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, MapPin } from "lucide-react";

export function AmbientBreaker() {
  return (
    <section className="relative w-full overflow-hidden bg-[var(--color-dark)] text-white border-b border-[var(--color-border)]">
      {/* Edge-to-Edge Panoramic Image */}
      <div className="relative w-full h-[500px] md:h-[620px]">
        <Image
          src="/images/cafe/cafe-interior.jpg"
          alt="Warm interior dining room of Grub Cafe in Bendoorwell Mangaluru"
          fill
          className="object-cover object-center"
          sizes="100vw"
          quality={90}
        />

        {/* Ambient Darkened Vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-dark)] via-[var(--color-dark)]/40 to-[var(--color-dark)]/60" />

        {/* Editorial Text Overlay */}
        <div className="absolute inset-0 flex flex-col justify-between py-12 md:py-16">
          <div className="container-wide">
            <span className="text-xs uppercase font-bold tracking-[0.2em] text-[var(--color-ochre)] inline-flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-ochre)]"></span>
              The Bendoorwell Counter
            </span>
          </div>

          <div className="container-wide">
            <div className="max-w-3xl">
              <motion.h2
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="heading-editorial text-3xl sm:text-5xl lg:text-6xl text-white leading-tight"
              >
                A casual neighborhood counter where Mangaluru gathers for{" "}
                <span className="heading-editorial-italic text-[var(--color-ochre)] font-normal">
                  honest portions.
                </span>
              </motion.h2>

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mt-6 flex flex-wrap items-center gap-4"
              >
                <Link
                  href="/book"
                  className="btn-primary text-xs tracking-wider"
                >
                  <span>Reserve a Table</span>
                  <ArrowRight size={14} />
                </Link>
                <Link
                  href="/story"
                  className="btn-outline-light text-xs tracking-wider"
                >
                  <span>Our Story &amp; Kitchen Ethos</span>
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-xs font-semibold text-white/80 hover:text-white uppercase tracking-wider py-2 transition-colors"
                >
                  <MapPin size={14} className="text-[var(--color-ochre)]" />
                  <span>Opposite Apollo Pharmacy</span>
                </Link>
              </motion.div>
            </div>
          </div>

          {/* Minimalist Bottom Telemetry Strip */}
          <div className="container-wide">
            <div className="pt-6 border-t border-white/15 grid grid-cols-2 md:grid-cols-4 gap-4 text-xs font-mono text-white/70">
              <div>
                <span className="text-white/40 block text-[10px] mb-0.5">LOCATION</span>
                <span>Regal Arcade, Bendoorwell</span>
              </div>
              <div>
                <span className="text-white/40 block text-[10px] mb-0.5">KITCHEN</span>
                <span>Cooked Flat-Top Fresh</span>
              </div>
              <div>
                <span className="text-white/40 block text-[10px] mb-0.5">MENU RANGE</span>
                <span>50+ Dishes from ₹30</span>
              </div>
              <div>
                <span className="text-white/40 block text-[10px] mb-0.5">HOURS</span>
                <span>11:30 AM &ndash; 10:30 PM Daily</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
