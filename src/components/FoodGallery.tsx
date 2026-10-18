"use client";

import { useState, useCallback, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";
import { galleryImages, type GalleryImage } from "@/data/gallery";

interface FoodGalleryProps {
  showHeading?: boolean;
  images?: GalleryImage[];
}

export function FoodGallery({
  showHeading = true,
  images = galleryImages,
}: FoodGalleryProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const goNext = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex + 1) % images.length);
  }, [lightboxIndex, images.length]);

  const goPrev = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex - 1 + images.length) % images.length);
  }, [lightboxIndex, images.length]);

  useEffect(() => {
    if (lightboxIndex === null) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };
    window.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [lightboxIndex, goNext, goPrev]);

  return (
    <section className="py-20 md:py-32 bg-[var(--color-canvas)] border-b border-[var(--color-border)]">
      <div className="container-wide">
        {showHeading && (
          <div className="max-w-xl mb-16">
            <p className="section-kicker mb-2">The Visual Archive</p>
            <h2 className="heading-editorial text-3xl sm:text-5xl text-[var(--color-ink)]">
              Every plate, seared with care.
            </h2>
            <p className="text-[var(--color-ink-muted)] text-base mt-3 leading-relaxed">
              A curated photographic feast from our Bendoorwell kitchen.
              Click any frame to view in high resolution.
            </p>
          </div>
        )}

        {/* Asymmetrical Mosaic Layout with Varied Proportions */}
        <div className="space-y-6">
          {/* Row 1: Large Anchor Portrait (6 cols) + Stacked Quadrant (6 cols) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            {/* Left 6 Cols: Dominant Portrait Burger */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-6"
            >
              <button
                onClick={() => openLightbox(0)}
                className="w-full h-full text-left group block relative rounded-3xl overflow-hidden bg-[var(--color-canvas-card)] border border-[var(--color-border)] hover:border-[var(--color-terracotta)]/40 hover:shadow-xl transition-all duration-300 cursor-pointer min-h-[380px] lg:min-h-[500px]"
                aria-label="View photo of The Classic Double Smash"
              >
                <Image
                  src={images[0]?.src || "/images/hero/hero-burger.jpg"}
                  alt={images[0]?.alt || "Burger"}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-ink)]/75 via-transparent to-transparent" />
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/90 backdrop-blur-xs text-[10px] font-bold uppercase tracking-wider text-[var(--color-ink)]">
                  Feature Plate
                </div>
                <div className="absolute bottom-6 left-6 right-6 text-white flex items-end justify-between">
                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-[0.16em] text-[var(--color-ochre)] block mb-1">
                      Signature Smash
                    </span>
                    <p className="font-serif text-xl sm:text-2xl font-semibold">
                      {images[0]?.caption || "The Classic Smash"}
                    </p>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-xs text-white flex items-center justify-center shrink-0">
                    <ZoomIn size={16} />
                  </div>
                </div>
              </button>
            </motion.div>

            {/* Right 6 Cols: Two Side-by-Side Squares + One Wide Landscape */}
            <div className="lg:col-span-6 flex flex-col justify-between gap-6">
              {/* Duo Squares */}
              <div className="grid grid-cols-2 gap-6">
                {/* Square 1: Loaded Fries */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                >
                  <button
                    onClick={() => openLightbox(1)}
                    className="w-full aspect-square text-left group block relative rounded-2xl overflow-hidden bg-[var(--color-canvas-card)] border border-[var(--color-border)] hover:border-[var(--color-terracotta)]/40 hover:shadow-lg transition-all duration-300 cursor-pointer"
                    aria-label="View photo of Loaded Fries"
                  >
                    <Image
                      src={images[1]?.src || "/images/food/loaded-fries.jpg"}
                      alt={images[1]?.alt || "Fries"}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                      sizes="(max-width: 1024px) 50vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="absolute bottom-3 left-3 right-3 text-white">
                      <p className="font-serif text-xs font-semibold truncate">
                        {images[1]?.caption || "Loaded Fries"}
                      </p>
                    </div>
                  </button>
                </motion.div>

                {/* Square 2: Momos */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.15 }}
                >
                  <button
                    onClick={() => openLightbox(3)}
                    className="w-full aspect-square text-left group block relative rounded-2xl overflow-hidden bg-[var(--color-canvas-card)] border border-[var(--color-border)] hover:border-[var(--color-terracotta)]/40 hover:shadow-lg transition-all duration-300 cursor-pointer"
                    aria-label="View photo of Steamed Momos"
                  >
                    <Image
                      src={images[3]?.src || "/images/food/momos.jpg"}
                      alt={images[3]?.alt || "Momos"}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                      sizes="(max-width: 1024px) 50vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="absolute bottom-3 left-3 right-3 text-white">
                      <p className="font-serif text-xs font-semibold truncate">
                        {images[3]?.caption || "Steamed Momos"}
                      </p>
                    </div>
                  </button>
                </motion.div>
              </div>

              {/* Landscape Frame: Stone-Baked Pizza */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex-1"
              >
                <button
                  onClick={() => openLightbox(5)}
                  className="w-full h-full min-h-[220px] text-left group block relative rounded-2xl overflow-hidden bg-[var(--color-canvas-card)] border border-[var(--color-border)] hover:border-[var(--color-terracotta)]/40 hover:shadow-lg transition-all duration-300 cursor-pointer"
                  aria-label="View photo of Stone-Baked Pizza"
                >
                  <Image
                    src={images[5]?.src || "/images/food/pizza.jpg"}
                    alt={images[5]?.alt || "Pizza"}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white flex items-center justify-between">
                    <div>
                      <span className="text-[10px] uppercase font-bold tracking-wider text-[var(--color-ochre)] block">
                        Fresh From Oven
                      </span>
                      <p className="font-serif text-base font-semibold">
                        {images[5]?.caption || "Stone-Baked Pizza"}
                      </p>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-white/20 text-white flex items-center justify-center shrink-0">
                      <ZoomIn size={14} />
                    </div>
                  </div>
                </button>
              </motion.div>
            </div>
          </div>

          {/* Row 2: Artisanal Shakes (4 cols) + Cafe Interior (8 cols) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            {/* Shakes Portrait (4 cols) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="lg:col-span-4"
            >
              <button
                onClick={() => openLightbox(4)}
                className="w-full aspect-[4/3] lg:aspect-[4/5] text-left group block relative rounded-3xl overflow-hidden bg-[var(--color-canvas-card)] border border-[var(--color-border)] hover:border-[var(--color-terracotta)]/40 hover:shadow-lg transition-all duration-300 cursor-pointer"
                aria-label="View photo of Artisanal Shakes"
              >
                <Image
                  src={images[4]?.src || "/images/food/shakes.jpg"}
                  alt={images[4]?.alt || "Shakes"}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-[var(--color-ochre)] block mb-1">
                    Chilled &bull; Blended
                  </span>
                  <p className="font-serif text-lg font-semibold">
                    {images[4]?.caption || "Thick Shakes & Coolers"}
                  </p>
                </div>
              </button>
            </motion.div>

            {/* Panoramic Dining Room (8 cols) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-8"
            >
              <button
                onClick={() => openLightbox(2)}
                className="w-full h-full min-h-[280px] text-left group block relative rounded-3xl overflow-hidden bg-[var(--color-canvas-card)] border border-[var(--color-border)] hover:border-[var(--color-terracotta)]/40 hover:shadow-lg transition-all duration-300 cursor-pointer"
                aria-label="View photo of Cafe Dining Room"
              >
                <Image
                  src={images[2]?.src || "/images/cafe/cafe-interior.jpg"}
                  alt={images[2]?.alt || "Dining Room"}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 1024px) 100vw, 67vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white flex items-end justify-between">
                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-wider text-[var(--color-ochre)] block mb-1">
                      Bendoorwell Interior
                    </span>
                    <p className="font-serif text-xl sm:text-2xl font-semibold">
                      {images[2]?.caption || "The Bendoorwell Dining Room"}
                    </p>
                    <p className="text-xs text-white/70 mt-1 max-w-md hidden sm:block">
                      Warm wooden tables, ambient lighting, and daily specials blackboard.
                    </p>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-xs text-white flex items-center justify-center shrink-0">
                    <ZoomIn size={16} />
                  </div>
                </div>
              </button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Accessible Fullscreen Lightbox Modal */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[var(--color-dark)]/90 backdrop-blur-md flex items-center justify-center p-4 md:p-8"
            onClick={closeLightbox}
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 z-50 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors cursor-pointer"
              aria-label="Close photo"
            >
              <X size={20} />
            </button>

            {/* Navigation Arrows */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                goPrev();
              }}
              className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors z-50 cursor-pointer"
              aria-label="Previous photo"
            >
              <ChevronLeft size={22} />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                goNext();
              }}
              className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors z-50 cursor-pointer"
              aria-label="Next photo"
            >
              <ChevronRight size={22} />
            </button>

            {/* Lightbox Content */}
            <div
              className="max-w-4xl max-h-[85vh] w-full flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full h-[65vh] rounded-2xl overflow-hidden bg-black/40 shadow-2xl">
                <Image
                  src={images[lightboxIndex].src}
                  alt={images[lightboxIndex].alt}
                  fill
                  className="object-contain"
                  sizes="90vw"
                  priority
                />
              </div>

              <div className="mt-4 p-4 rounded-xl bg-white/95 backdrop-blur-md text-center max-w-md w-full shadow-lg">
                <h4 className="font-serif text-lg font-semibold text-[var(--color-ink)]">
                  {images[lightboxIndex].caption}
                </h4>
                <p className="text-xs text-[var(--color-ink-muted)] mt-0.5">
                  {images[lightboxIndex].alt}
                </p>
                <p className="text-[10px] text-[var(--color-ink-light)] font-mono mt-2">
                  Photo {lightboxIndex + 1} of {images.length} &bull; Grub Cafe Mangaluru
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
