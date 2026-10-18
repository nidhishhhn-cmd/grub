/**
 * Central site configuration for Grub Cafe.
 *
 * All business details are editable here. Before publishing,
 * verify each field with the restaurant owner.
 *
 * Fields marked `null` require owner confirmation.
 */

export const siteConfig = {
  name: "Grub Cafe",
  tagline: "Big Flavours. No Half Measures.", // PLACEHOLDER — creative proposal, not an official slogan
  description:
    "Grub Cafe is a pocket-friendly fast-food cafe in Bendoorwell, Mangaluru — serving burgers, loaded fries, momos, pizza, wraps, and more.",

  address: {
    line1: "Regal Arcade, Opposite Apollo Pharmacy",
    line2: "Bendoorwell, Bendoor",
    city: "Mangaluru",
    state: "Karnataka",
    zip: "575002",
    country: "India",
    full: "Regal Arcade, Opposite Apollo Pharmacy, Bendoorwell, Bendoor, Mangaluru, Karnataka 575002, India",
  },

  /**
   * Phone number sourced from Instagram bio listing.
   * Multiple directories show different numbers — verify with owner before publishing.
   */
  phone: "+91 9900907888", // UNVERIFIED — confirm with owner
  email: null as string | null, // Owner must supply

  /**
   * Opening hours sourced from Swiggy/Dineout listing.
   * Verify with owner — hours may differ on holidays.
   */
  hours: {
    weekdays: "11:00 AM – 11:00 PM", // UNVERIFIED
    weekends: "11:00 AM – 11:00 PM", // UNVERIFIED
    note: null as string | null, // e.g. "Closed on Tuesdays"
  },

  social: {
    instagram: "https://www.instagram.com/grub_.cafe", // Found on public listing
    facebook: null as string | null, // Confirm with owner
    youtube: null as string | null,
    whatsapp: null as string | null, // e.g. "https://wa.me/919900907888"
  },

  /** Google Maps directions link — uses the verified address */
  mapsUrl:
    "https://www.google.com/maps/dir/?api=1&destination=Grub+Cafe+Regal+Arcade+Bendoorwell+Mangaluru",

  /** Google Maps embed URL — replace with a verified Place ID embed for accuracy */
  mapsEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.!2d74.85!3d12.87!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sGrub+Cafe!5e0!3m2!1sen!2sin",

  /** External ordering link — set to Swiggy/Zomato link if available */
  orderUrl: null as string | null,

  /** Average cost for two people (from public listings) */
  avgCostForTwo: "₹300",

  /** Production domain — set when deploying */
  canonicalUrl: null as string | null,

  /** Logo & hero paths */
  assets: {
    heroImage: "/images/hero/hero-burger.jpg",
  },
} as const;

export type SiteConfig = typeof siteConfig;
