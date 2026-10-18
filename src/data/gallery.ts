/**
 * Gallery data for Grub Cafe.
 */

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  caption: string;
  aspect: "landscape" | "portrait" | "square";
  isPlaceholder: boolean;
}

export const galleryImages: GalleryImage[] = [
  {
    id: "gallery-1",
    src: "/images/hero/hero-burger.jpg",
    alt: "Gourmet double smash burger with melted cheese and pickles on a wooden board",
    caption: "The Classic Double Smash",
    aspect: "landscape",
    isPlaceholder: false,
  },
  {
    id: "gallery-2",
    src: "/images/food/loaded-fries.jpg",
    alt: "Crispy loaded fries showered with melted cheese sauce and spices",
    caption: "Cheddar Loaded Fries",
    aspect: "landscape",
    isPlaceholder: false,
  },
  {
    id: "gallery-3",
    src: "/images/cafe/cafe-interior.jpg",
    alt: "Warm ambient cafe dining room with wooden tables and pendant lights in Bendoorwell Mangaluru",
    caption: "The Bendoorwell Dining Room",
    aspect: "landscape",
    isPlaceholder: false,
  },
  {
    id: "gallery-4",
    src: "/images/food/momos.jpg",
    alt: "Steamed momos with house-made fiery red chili chutney dip",
    caption: "Steamed Momos &amp; Fiery Dip",
    aspect: "landscape",
    isPlaceholder: false,
  },
  {
    id: "gallery-5",
    src: "/images/food/shakes.jpg",
    alt: "Artisanal thick chocolate milkshake with whipped cream and iced berry refresher",
    caption: "Thick Shakes &amp; Chilled Coolers",
    aspect: "portrait",
    isPlaceholder: false,
  },
  {
    id: "gallery-6",
    src: "/images/food/pizza.jpg",
    alt: "Freshly baked pizza with mozzarella and colorful peppers straight from the oven",
    caption: "Stone-Baked Loaded Pizza",
    aspect: "landscape",
    isPlaceholder: false,
  },
  {
    id: "gallery-7",
    src: "/images/food/chicken-strips.jpg",
    alt: "Crispy golden chicken strips with dipping sauce",
    caption: "Crispy Chicken Strips",
    aspect: "portrait",
    isPlaceholder: false,
  },
  {
    id: "gallery-8",
    src: "/images/food/wrap.jpg",
    alt: "Chicken zinger wrap cut in half showing fresh crunch filling",
    caption: "Toasted Zinger Wrap",
    aspect: "landscape",
    isPlaceholder: false,
  },
];
