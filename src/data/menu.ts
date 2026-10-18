/**
 * Menu data for Grub Cafe.
 *
 * ⚠️ SAMPLE DATA — These items are based on publicly available listings
 * (Swiggy, Zomato, social media). Prices are approximate and must be
 * verified with the restaurant owner before publishing.
 *
 * To update the menu:
 * 1. Edit items in the `menuItems` array below.
 * 2. Set `isSample: false` once verified by the owner.
 * 3. Add/remove categories as needed.
 */

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number | null; // null = price not verified
  category: MenuCategory;
  image: string | null;
  isVeg: boolean | null; // null = not confirmed
  isSample: boolean; // true = unverified placeholder
}

export type MenuCategory =
  | "burgers"
  | "sandwiches"
  | "fries"
  | "chicken"
  | "momos"
  | "pizza"
  | "pasta"
  | "wraps"
  | "rice-noodles"
  | "beverages";

export interface CategoryInfo {
  id: MenuCategory;
  label: string;
  description: string;
}

export const categories: CategoryInfo[] = [
  {
    id: "burgers",
    label: "Burgers",
    description: "Stacked, sauced, and seriously satisfying",
  },
  {
    id: "sandwiches",
    label: "Sandwiches",
    description: "Toasted, loaded, and built to fill",
  },
  {
    id: "fries",
    label: "Fries & Starters",
    description: "Crispy, cheesy, and impossible to share",
  },
  {
    id: "chicken",
    label: "Chicken",
    description: "Golden, crispy, and always hot",
  },
  {
    id: "momos",
    label: "Momos",
    description: "Steamed or fried, with fiery chutney",
  },
  {
    id: "pizza",
    label: "Pizza",
    description: "Cheesy, loaded, and fresh from the oven",
  },
  {
    id: "pasta",
    label: "Pasta",
    description: "Saucy, creamy, and perfectly al dente",
  },
  {
    id: "wraps",
    label: "Wraps",
    description: "Rolled tight with big flavours",
  },
  {
    id: "rice-noodles",
    label: "Rice & Noodles",
    description: "Wok-tossed and loaded with flavour",
  },
  {
    id: "beverages",
    label: "Beverages",
    description: "Cool sips and refreshing shakes",
  },
];

export const menuItems: MenuItem[] = [
  // — Burgers —
  {
    id: "veg-burger",
    name: "Veg Burger",
    description: "Classic veggie patty with fresh lettuce, tomato, and house sauce",
    price: 50,
    category: "burgers",
    image: null,
    isVeg: true,
    isSample: true,
  },
  {
    id: "chicken-burger",
    name: "Chicken Burger",
    description: "Juicy chicken patty with crispy coating and creamy mayo",
    price: 60,
    category: "burgers",
    image: "/images/food/loaded-fries.jpg",
    isVeg: false,
    isSample: true,
  },
  {
    id: "zinger-burger",
    name: "Zinger Burger",
    description: "Spicy crispy chicken fillet with jalapeños and signature sauce",
    price: 70,
    category: "burgers",
    image: "/images/hero/hero-burger.jpg",
    isVeg: false,
    isSample: true,
  },
  {
    id: "double-patty-burger",
    name: "Double Patty Burger",
    description: "Two stacked patties with melted cheese and caramelised onions",
    price: 100,
    category: "burgers",
    image: null,
    isVeg: false,
    isSample: true,
  },

  // — Sandwiches —
  {
    id: "veg-sandwich",
    name: "Veg Sandwich",
    description: "Grilled with fresh vegetables and cheese",
    price: 50,
    category: "sandwiches",
    image: null,
    isVeg: true,
    isSample: true,
  },
  {
    id: "chicken-sandwich",
    name: "Chicken Sandwich",
    description: "Grilled chicken with fresh greens and tangy dressing",
    price: 70,
    category: "sandwiches",
    image: null,
    isVeg: false,
    isSample: true,
  },

  // — Fries & Starters —
  {
    id: "french-fries",
    name: "French Fries",
    description: "Golden crispy fries with seasoning",
    price: 60,
    category: "fries",
    image: null,
    isVeg: true,
    isSample: true,
  },
  {
    id: "loaded-fries",
    name: "Loaded Fries",
    description: "Topped with cheese sauce, jalapeños, and crispy bits",
    price: 100,
    category: "fries",
    image: "/images/food/loaded-fries.jpg",
    isVeg: true,
    isSample: true,
  },
  {
    id: "peri-peri-fries",
    name: "Peri Peri Fries",
    description: "Spicy peri peri seasoned golden fries",
    price: 80,
    category: "fries",
    image: null,
    isVeg: true,
    isSample: true,
  },

  // — Chicken —
  {
    id: "chicken-strips",
    name: "Chicken Strips",
    description: "Crispy fried chicken strips with dipping sauce",
    price: 70,
    category: "chicken",
    image: "/images/food/chicken-strips.jpg",
    isVeg: false,
    isSample: true,
  },
  {
    id: "chicken-wings",
    name: "Chicken Wings",
    description: "Tossed in a smoky, tangy glaze",
    price: 90,
    category: "chicken",
    image: null,
    isVeg: false,
    isSample: true,
  },
  {
    id: "chicken-popcorn",
    name: "Chicken Popcorn",
    description: "Bite-sized crispy chicken with spicy seasoning",
    price: 80,
    category: "chicken",
    image: null,
    isVeg: false,
    isSample: true,
  },

  // — Momos —
  {
    id: "steamed-veg-momos",
    name: "Steamed Veg Momos",
    description: "Soft dumplings filled with spiced vegetables, served with red chutney",
    price: 60,
    category: "momos",
    image: "/images/food/momos.jpg",
    isVeg: true,
    isSample: true,
  },
  {
    id: "steamed-chicken-momos",
    name: "Steamed Chicken Momos",
    description: "Juicy chicken-filled dumplings with fiery chutney",
    price: 70,
    category: "momos",
    image: null,
    isVeg: false,
    isSample: true,
  },
  {
    id: "fried-momos",
    name: "Fried Momos",
    description: "Crispy golden fried momos with spicy dipping sauce",
    price: 80,
    category: "momos",
    image: null,
    isVeg: null,
    isSample: true,
  },

  // — Pizza —
  {
    id: "margherita-pizza",
    name: "Margherita Pizza",
    description: "Classic tomato, mozzarella, and fresh basil",
    price: 120,
    category: "pizza",
    image: "/images/food/pizza.jpg",
    isVeg: true,
    isSample: true,
  },
  {
    id: "bbq-chicken-pizza",
    name: "BBQ Chicken Pizza",
    description: "Smoky BBQ sauce with tender chicken and onions",
    price: 150,
    category: "pizza",
    image: null,
    isVeg: false,
    isSample: true,
  },
  {
    id: "veg-loaded-pizza",
    name: "Veg Loaded Pizza",
    description: "Bell peppers, olives, mushrooms, and extra cheese",
    price: 140,
    category: "pizza",
    image: null,
    isVeg: true,
    isSample: true,
  },

  // — Pasta —
  {
    id: "white-sauce-pasta",
    name: "White Sauce Pasta",
    description: "Creamy white sauce with herbs and parmesan",
    price: 100,
    category: "pasta",
    image: null,
    isVeg: true,
    isSample: true,
  },
  {
    id: "red-sauce-pasta",
    name: "Red Sauce Pasta",
    description: "Tangy tomato basil sauce with penne",
    price: 100,
    category: "pasta",
    image: null,
    isVeg: true,
    isSample: true,
  },
  {
    id: "chicken-pasta",
    name: "Chicken Pasta",
    description: "Creamy pasta tossed with seasoned chicken chunks",
    price: 130,
    category: "pasta",
    image: null,
    isVeg: false,
    isSample: true,
  },

  // — Wraps —
  {
    id: "veg-wrap",
    name: "Veg Wrap",
    description: "Grilled veggies rolled in a soft tortilla with mint mayo",
    price: 60,
    category: "wraps",
    image: null,
    isVeg: true,
    isSample: true,
  },
  {
    id: "zinger-wrap",
    name: "Zinger Wrap",
    description: "Crispy chicken strip with fresh slaw and spicy sauce",
    price: 70,
    category: "wraps",
    image: "/images/food/wrap.jpg",
    isVeg: false,
    isSample: true,
  },
  {
    id: "paneer-wrap",
    name: "Paneer Wrap",
    description: "Spiced paneer tikka with onions and tangy chutney",
    price: 70,
    category: "wraps",
    image: null,
    isVeg: true,
    isSample: true,
  },

  // — Rice & Noodles —
  {
    id: "veg-fried-rice",
    name: "Veg Fried Rice",
    description: "Wok-tossed rice with fresh vegetables and soy",
    price: 80,
    category: "rice-noodles",
    image: null,
    isVeg: true,
    isSample: true,
  },
  {
    id: "chicken-fried-rice",
    name: "Chicken Fried Rice",
    description: "Smoky fried rice with tender chicken pieces",
    price: 100,
    category: "rice-noodles",
    image: null,
    isVeg: false,
    isSample: true,
  },
  {
    id: "veg-noodles",
    name: "Veg Noodles",
    description: "Stir-fried noodles with crunchy vegetables",
    price: 80,
    category: "rice-noodles",
    image: null,
    isVeg: true,
    isSample: true,
  },
  {
    id: "chicken-noodles",
    name: "Chicken Noodles",
    description: "Stir-fried noodles with seasoned chicken",
    price: 100,
    category: "rice-noodles",
    image: null,
    isVeg: false,
    isSample: true,
  },

  // — Beverages —
  {
    id: "mojito",
    name: "Mojito",
    description: "Refreshing mint and lime cooler",
    price: 30,
    category: "beverages",
    image: null,
    isVeg: true,
    isSample: true,
  },
  {
    id: "chocolate-shake",
    name: "Chocolate Shake",
    description: "Rich and creamy chocolate milkshake topped with chocolate drizzle",
    price: 50,
    category: "beverages",
    image: "/images/food/shakes.jpg",
    isVeg: true,
    isSample: true,
  },
  {
    id: "cold-coffee",
    name: "Cold Coffee",
    description: "Chilled blended coffee with cream",
    price: 50,
    category: "beverages",
    image: null,
    isVeg: true,
    isSample: true,
  },
  {
    id: "oreo-shake",
    name: "Oreo Shake",
    description: "Blended Oreo cookies with vanilla ice cream",
    price: 60,
    category: "beverages",
    image: null,
    isVeg: true,
    isSample: true,
  },
];

/** Get items filtered by category */
export function getItemsByCategory(category: MenuCategory): MenuItem[] {
  return menuItems.filter((item) => item.category === category);
}

/** Get all unique categories that have at least one item */
export function getActiveCategories(): CategoryInfo[] {
  const activeCategoryIds = new Set(menuItems.map((item) => item.category));
  return categories.filter((cat) => activeCategoryIds.has(cat.id));
}
