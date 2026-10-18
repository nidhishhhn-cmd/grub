"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  label?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  dark?: boolean;
}

export function SectionHeading({
  label,
  title,
  subtitle,
  align = "left",
  dark = false,
}: SectionHeadingProps) {
  const textAlign = align === "center" ? "text-center" : "text-left";
  const titleColor = dark ? "text-white" : "text-[var(--color-ink)]";
  const subtitleColor = dark ? "text-white/70" : "text-[var(--color-ink-muted)]";

  return (
    <div className={`${textAlign} mb-12 md:mb-16`}>
      {label && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className={`section-kicker mb-2.5 ${dark ? "text-[var(--color-ochre)]" : "text-[var(--color-terracotta)]"}`}
        >
          {label}
        </motion.p>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className={`heading-editorial text-3xl sm:text-5xl ${titleColor}`}
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className={`mt-3 text-base md:text-lg max-w-2xl font-normal leading-relaxed ${subtitleColor} ${
            align === "center" ? "mx-auto" : ""
          }`}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
