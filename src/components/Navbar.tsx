"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/data/site";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Menu", href: "/menu" },
  { label: "Book a Table", href: "/book" },
  { label: "Our Story", href: "/story" },
  { label: "Gallery", href: "/gallery" },
  { label: "Visit & Contact", href: "/contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <header
        className={`sticky top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#FBF8F3]/92 backdrop-blur-md shadow-xs border-b border-[var(--color-border)] py-3"
            : "bg-[#FBF8F3] border-b border-[var(--color-border)]/60 py-4"
        }`}
      >
        <div className="container-wide flex items-center justify-between">
          {/* Brand Wordmark */}
          <Link href="/" className="flex items-center gap-3 group">
            <span className="w-8 h-8 rounded-full bg-[var(--color-terracotta)] text-white flex items-center justify-center font-serif text-sm font-semibold group-hover:scale-105 transition-transform">
              G
            </span>
            <div className="flex flex-col">
              <span className="font-serif text-xl md:text-2xl font-semibold tracking-tight text-[var(--color-ink)] leading-none">
                Grub Cafe
              </span>
              <span className="text-[10px] font-sans font-medium tracking-[0.2em] text-[var(--color-ink-light)] uppercase mt-0.5">
                Bendoorwell &bull; Mangaluru
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-[13px] font-medium tracking-wide transition-colors relative py-1 ${
                    active
                      ? "text-[var(--color-terracotta)] font-semibold"
                      : "text-[var(--color-ink-muted)] hover:text-[var(--color-ink)]"
                  }`}
                >
                  {item.label}
                  {active && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute -bottom-1 left-0 right-0 h-[1.5px] bg-[var(--color-terracotta)]"
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Action: Live Status & Menu CTA */}
          <div className="hidden sm:flex items-center gap-3">
            <Link
              href="/book"
              className="text-xs font-semibold tracking-wider text-[var(--color-ink)] hover:text-[var(--color-terracotta)] px-3.5 py-2 transition-colors border border-[var(--color-border)] rounded-full hover:border-[var(--color-terracotta)]"
            >
              Book a Table
            </Link>

            <Link
              href="/menu"
              className="btn-primary text-xs py-2 px-4 tracking-wider"
            >
              <span>Explore Menu</span>
              <ArrowUpRight size={14} />
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-[var(--color-ink)] hover:text-[var(--color-terracotta)] transition-colors"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden fixed top-[69px] left-0 right-0 bottom-0 bg-[#FBF8F3] z-40 border-b border-[var(--color-border)] flex flex-col justify-between p-6 overflow-y-auto"
          >
            <nav className="flex flex-col gap-2 pt-4">
              {navItems.map((item, idx) => {
                const active = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center justify-between p-3.5 rounded-lg transition-colors ${
                      active
                        ? "bg-[var(--color-terracotta-subtle)] text-[var(--color-terracotta)] font-semibold"
                        : "text-[var(--color-ink)] hover:bg-[var(--color-canvas-subtle)]"
                    }`}
                  >
                    <span className="font-serif text-xl tracking-tight">
                      {item.label}
                    </span>
                    <span className="text-xs text-[var(--color-ink-light)] font-mono">
                      0{idx + 1}
                    </span>
                  </Link>
                );
              })}
            </nav>

            <div className="pt-6 border-t border-[var(--color-border)] space-y-3">
              <Link
                href="/book"
                onClick={() => setIsOpen(false)}
                className="w-full btn-secondary text-center block text-xs tracking-wider py-3"
              >
                Reserve a Table
              </Link>
              <Link
                href="/menu"
                onClick={() => setIsOpen(false)}
                className="w-full btn-primary text-center block text-xs tracking-wider py-3"
              >
                View Full Menu
              </Link>
              <div className="text-center text-xs text-[var(--color-ink-muted)]">
                Regal Arcade, Bendoorwell &bull; {siteConfig.phone}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
