"use client";

import { FoodGallery } from "@/components/FoodGallery";
import { siteConfig } from "@/data/site";
import { Camera, ArrowUpRight } from "lucide-react";

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

export default function GalleryPage() {
  return (
    <div className="pt-24 pb-28 bg-[var(--color-canvas)] min-h-screen">
      <div className="container-wide">
        {/* Header */}
        <div className="max-w-3xl mb-14">
          <p className="section-kicker mb-2">Visual Archive &bull; Bendoorwell</p>
          <h1 className="heading-editorial text-4xl sm:text-6xl text-[var(--color-ink)]">
            The Visual Spread
          </h1>
          <p className="text-[var(--color-ink-muted)] text-base md:text-lg mt-3 leading-relaxed">
            A visual glimpse into the sizzle, steam, and crunch at Grub Cafe.
            Click any photograph to view in high resolution.
          </p>
        </div>

        {/* Gallery Component */}
        <FoodGallery showHeading={false} />

        {/* Instagram Callout */}
        <div className="mt-16 p-8 md:p-10 rounded-2xl bg-[var(--color-canvas-card)] border border-[var(--color-border)] shadow-xs flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-[var(--color-terracotta-subtle)] text-[var(--color-terracotta)] flex items-center justify-center shrink-0">
              <Camera size={20} />
            </div>
            <div>
              <h3 className="font-serif text-xl font-semibold text-[var(--color-ink)]">
                Share your Grub moments on Instagram
              </h3>
              <p className="text-xs text-[var(--color-ink-muted)] mt-1 max-w-md">
                Captured a photo of your loaded fries or double zinger smash? Tag @grubcafe on Instagram
                to be featured on our community feed.
              </p>
            </div>
          </div>

          {siteConfig.social.instagram && (
            <a
              href={siteConfig.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-xs py-2.5 px-6 shrink-0 flex items-center gap-2"
            >
              <InstagramIcon size={15} />
              <span>Follow @grubcafe</span>
              <ArrowUpRight size={13} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
