"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  Plus,
  Minus,
  Trash2,
  X,
  Share2,
  ShoppingBag,
  ExternalLink,
  Check,
  Phone,
} from "lucide-react";
import { menuItems, categories, type MenuCategory, type MenuItem } from "@/data/menu";
import { siteConfig } from "@/data/site";

interface CartItem {
  item: MenuItem;
  quantity: number;
}

export default function MenuPage() {
  const [selectedCategory, setSelectedCategory] = useState<MenuCategory | "all">("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [dietaryFilter, setDietaryFilter] = useState<"all" | "veg" | "non-veg">("all");
  const [cart, setCart] = useState<Record<string, CartItem>>({});
  const [isTrayOpen, setIsTrayOpen] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);

  // Filtered menu items
  const filteredItems = useMemo(() => {
    return menuItems.filter((item) => {
      if (selectedCategory !== "all" && item.category !== selectedCategory) {
        return false;
      }
      if (dietaryFilter === "veg" && item.isVeg !== true) return false;
      if (dietaryFilter === "non-veg" && item.isVeg !== false) return false;

      if (searchQuery.trim() !== "") {
        const query = searchQuery.toLowerCase().trim();
        const matchesName = item.name.toLowerCase().includes(query);
        const matchesDesc = item.description.toLowerCase().includes(query);
        const matchesCategory = item.category.toLowerCase().includes(query);
        return matchesName || matchesDesc || matchesCategory;
      }

      return true;
    });
  }, [selectedCategory, dietaryFilter, searchQuery]);

  // Cart operations
  const addToCart = (item: MenuItem) => {
    setCart((prev) => {
      const existing = prev[item.id];
      if (existing) {
        return {
          ...prev,
          [item.id]: { item, quantity: existing.quantity + 1 },
        };
      }
      return {
        ...prev,
        [item.id]: { item, quantity: 1 },
      };
    });
  };

  const removeFromCart = (itemId: string) => {
    setCart((prev) => {
      const existing = prev[itemId];
      if (!existing) return prev;
      if (existing.quantity <= 1) {
        const next = { ...prev };
        delete next[itemId];
        return next;
      }
      return {
        ...prev,
        [itemId]: { ...existing, quantity: existing.quantity - 1 },
      };
    });
  };

  const removeItemCompletely = (itemId: string) => {
    setCart((prev) => {
      const next = { ...prev };
      delete next[itemId];
      return next;
    });
  };

  const clearCart = () => setCart({});

  const cartList = Object.values(cart);
  const totalCartCount = cartList.reduce((sum, entry) => sum + entry.quantity, 0);
  const totalCartPrice = cartList.reduce(
    (sum, entry) => sum + (entry.item.price ?? 0) * entry.quantity,
    0
  );

  // Send WhatsApp message
  const handleWhatsAppOrder = () => {
    if (cartList.length === 0) return;

    let message = `Hello Grub Cafe! 🍔\nI'd like to check item availability & place an order for takeaway/dine-in:\n\n`;
    cartList.forEach((entry, idx) => {
      const itemPrice = entry.item.price ? `₹${entry.item.price * entry.quantity}` : "Price TBD";
      message += `${idx + 1}. ${entry.item.name} x ${entry.quantity} (${itemPrice})\n`;
    });
    message += `\nEstimated Total: ₹${totalCartPrice}\nLocation: Grub Cafe, Bendoorwell, Mangaluru.\nPlease confirm!`;

    const phoneDigits = siteConfig.phone.replace(/[^0-9]/g, "");
    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneDigits}?text=${encoded}`, "_blank");
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: "Grub Cafe Menu — Mangaluru",
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2000);
    }
  };

  return (
    <div className="pt-24 pb-28 bg-[var(--color-canvas)] min-h-screen">
      <div className="container-wide">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <p className="section-kicker mb-2">Bendoorwell, Mangaluru</p>
          <h1 className="heading-editorial text-4xl sm:text-6xl text-[var(--color-ink)]">
            The Grub Menu
          </h1>
          <p className="text-[var(--color-ink-muted)] text-base md:text-lg mt-3 leading-relaxed">
            Every dish is cooked fresh to order on our kitchen flat-top. Hand-crafted smash burgers,
            crisp loaded fries, steamed &amp; fried momos, oven pizza, and chilled milkshakes.
          </p>

          {/* Badges & Share */}
          <div className="flex flex-wrap items-center gap-3 mt-6">
            <span className="px-3.5 py-1 rounded-full bg-[var(--color-canvas-subtle)] border border-[var(--color-border)] text-xs font-semibold text-[var(--color-ink)]">
              Dishes from ₹30
            </span>
            <span className="px-3.5 py-1 rounded-full bg-[var(--color-terracotta-subtle)] border border-[var(--color-terracotta)]/20 text-xs font-semibold text-[var(--color-terracotta)]">
              50+ Varieties
            </span>
            <button
              onClick={handleShare}
              className="px-3.5 py-1 rounded-full bg-white border border-[var(--color-border)] text-xs font-medium text-[var(--color-ink)] hover:bg-[var(--color-canvas-subtle)] transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              {copiedLink ? <Check size={13} /> : <Share2 size={13} />}
              <span>{copiedLink ? "Link Copied" : "Share Menu"}</span>
            </button>
          </div>
        </div>

        {/* Sticky Filters & Search */}
        <div className="sticky top-[69px] z-30 bg-[var(--color-canvas)]/95 backdrop-blur-md py-4 border-y border-[var(--color-border)] mb-10">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            {/* Search Input */}
            <div className="relative flex-1 max-w-md">
              <Search
                size={16}
                className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[var(--color-ink-light)]"
              />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search burgers, momos, loaded fries, pizza..."
                className="w-full pl-10 pr-9 py-2.5 text-sm bg-white rounded-xl border border-[var(--color-border)] text-[var(--color-ink)] placeholder:text-[var(--color-ink-light)] focus:outline-none focus:border-[var(--color-terracotta)]"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[var(--color-ink-light)] hover:text-[var(--color-ink)]"
                  aria-label="Clear search"
                >
                  <X size={15} />
                </button>
              )}
            </div>

            {/* FSSAI Dietary Filter Toggle */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setDietaryFilter("all")}
                className={`px-3.5 py-2 text-xs font-semibold rounded-lg transition-colors ${
                  dietaryFilter === "all"
                    ? "bg-[var(--color-ink)] text-white"
                    : "bg-white border border-[var(--color-border)] text-[var(--color-ink-muted)] hover:text-[var(--color-ink)]"
                }`}
              >
                All
              </button>
              <button
                onClick={() => setDietaryFilter("veg")}
                className={`flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold rounded-lg transition-colors ${
                  dietaryFilter === "veg"
                    ? "bg-emerald-800 text-white"
                    : "bg-white border border-[var(--color-border)] text-emerald-800 hover:bg-emerald-50"
                }`}
              >
                <span className="fssai-indicator veg"></span>
                <span>Veg</span>
              </button>
              <button
                onClick={() => setDietaryFilter("non-veg")}
                className={`flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold rounded-lg transition-colors ${
                  dietaryFilter === "non-veg"
                    ? "bg-rose-800 text-white"
                    : "bg-white border border-[var(--color-border)] text-rose-800 hover:bg-rose-50"
                }`}
              >
                <span className="fssai-indicator non-veg"></span>
                <span>Non-Veg</span>
              </button>
            </div>
          </div>

          {/* Category Tabs: Scrollable */}
          <div className="flex items-center gap-2 overflow-x-auto pt-4 pb-1 no-scrollbar">
            <button
              onClick={() => setSelectedCategory("all")}
              className={`px-4 py-1.5 text-xs font-semibold rounded-full whitespace-nowrap transition-colors ${
                selectedCategory === "all"
                  ? "bg-[var(--color-terracotta)] text-white"
                  : "bg-white border border-[var(--color-border)] text-[var(--color-ink-muted)] hover:text-[var(--color-ink)]"
              }`}
            >
              All Categories ({menuItems.length})
            </button>
            {categories.map((cat) => {
              const count = menuItems.filter((i) => i.category === cat.id).length;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-4 py-1.5 text-xs font-semibold rounded-full whitespace-nowrap transition-colors ${
                    selectedCategory === cat.id
                      ? "bg-[var(--color-terracotta)] text-white"
                      : "bg-white border border-[var(--color-border)] text-[var(--color-ink-muted)] hover:text-[var(--color-ink)]"
                  }`}
                >
                  {cat.label} ({count})
                </button>
              );
            })}
          </div>
        </div>

        {/* Counter Info */}
        <div className="flex items-center justify-between text-xs text-[var(--color-ink-muted)] mb-6 font-medium">
          <span>
            Showing <strong className="text-[var(--color-ink)]">{filteredItems.length}</strong> items
          </span>
          <span className="italic">
            Prices subject to seasonal specials &bull; Prepared fresh
          </span>
        </div>

        {/* Dish Items Grid */}
        {filteredItems.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-2xl border border-[var(--color-border)]">
            <p className="font-serif text-2xl text-[var(--color-ink)] mb-2">
              No matching items found
            </p>
            <p className="text-sm text-[var(--color-ink-muted)] mb-6">
              Try adjusting your search query or dietary filters.
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("all");
                setDietaryFilter("all");
              }}
              className="btn-outline text-xs"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => {
              const inCart = cart[item.id]?.quantity || 0;

              return (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="bg-[var(--color-canvas-card)] rounded-2xl border border-[var(--color-border)] p-5 flex flex-col justify-between hover:border-[var(--color-terracotta)]/40 hover:shadow-md transition-all"
                >
                  <div>
                    {/* Item Image if available */}
                    {item.image && (
                      <div className="relative aspect-[16/9] mb-4 rounded-xl bg-[var(--color-canvas-subtle)] overflow-hidden">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                      </div>
                    )}

                    {/* Header: Indicator + Name + Price */}
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <div className="flex items-center gap-2">
                        {item.isVeg !== null && (
                          <span
                            className={`fssai-indicator ${
                              item.isVeg ? "veg" : "non-veg"
                            }`}
                            title={item.isVeg ? "Vegetarian" : "Non-Vegetarian"}
                          />
                        )}
                        <h3 className="font-serif text-lg font-semibold text-[var(--color-ink)] leading-snug">
                          {item.name}
                        </h3>
                      </div>

                      <div className="text-right shrink-0">
                        {item.price ? (
                          <span className="font-serif text-lg font-bold text-[var(--color-ink)]">
                            ₹{item.price}
                          </span>
                        ) : (
                          <span className="text-xs text-[var(--color-ink-light)] italic">
                            Seasonal
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-xs text-[var(--color-ink-muted)] leading-relaxed mb-4">
                      {item.description}
                    </p>
                  </div>

                  {/* Card Bottom: Category & Add to Tray */}
                  <div className="pt-3 border-t border-[var(--color-border)] flex items-center justify-between mt-auto">
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-[var(--color-ink-light)]">
                      {item.category}
                    </span>

                    {inCart > 0 ? (
                      <div className="flex items-center rounded-lg border border-[var(--color-terracotta)] bg-[var(--color-terracotta-subtle)]">
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="px-2.5 py-1 text-xs text-[var(--color-terracotta)] hover:bg-[var(--color-terracotta)] hover:text-white transition-colors rounded-l-lg cursor-pointer"
                          aria-label="Decrease quantity"
                        >
                          <Minus size={12} />
                        </button>
                        <span className="px-2 font-serif text-sm font-bold text-[var(--color-ink)]">
                          {inCart}
                        </span>
                        <button
                          onClick={() => addToCart(item)}
                          className="px-2.5 py-1 text-xs text-[var(--color-terracotta)] hover:bg-[var(--color-terracotta)] hover:text-white transition-colors rounded-r-lg cursor-pointer"
                          aria-label="Increase quantity"
                        >
                          <Plus size={12} />
                        </button>
                      </div>
                    ) : (
                      <button
                        onClick={() => addToCart(item)}
                        className="py-1.5 px-3.5 rounded-lg bg-[var(--color-canvas-subtle)] hover:bg-[var(--color-terracotta)] hover:text-white text-xs font-semibold text-[var(--color-ink)] transition-colors flex items-center gap-1.5 cursor-pointer"
                      >
                        <Plus size={13} />
                        <span>Add</span>
                      </button>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        )}

        {/* Catering Callout */}
        <div className="mt-16 p-8 rounded-2xl bg-white border border-[var(--color-border)] flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-xs">
          <div>
            <h4 className="font-serif text-xl sm:text-2xl text-[var(--color-ink)]">
              Planning a college fest, club meeting, or office snack box?
            </h4>
            <p className="text-xs text-[var(--color-ink-muted)] mt-1">
              We prepare customized fast-casual platters, burger boxes, and loaded snack platters in Mangaluru.
            </p>
          </div>
          <a
            href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
            className="btn-primary text-xs py-2.5 px-6 shrink-0"
          >
            <Phone size={14} />
            <span>Call {siteConfig.phone}</span>
          </a>
        </div>
      </div>

      {/* Floating Order Tray Button */}
      <AnimatePresence>
        {totalCartCount > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 30 }}
            className="fixed bottom-6 right-6 z-40"
          >
            <button
              onClick={() => setIsTrayOpen(true)}
              className="flex items-center gap-3 bg-[var(--color-ink)] text-white px-5 py-3.5 rounded-full shadow-2xl hover:bg-[var(--color-terracotta)] transition-colors cursor-pointer"
            >
              <ShoppingBag size={18} />
              <span className="text-xs font-semibold tracking-wide">
                Order Tray ({totalCartCount} item{totalCartCount > 1 ? "s" : ""})
              </span>
              <span className="bg-white/20 px-2.5 py-0.5 rounded-full text-xs font-bold">
                ₹{totalCartPrice}
              </span>
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Slide-out Order Drawer */}
      <AnimatePresence>
        {isTrayOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsTrayOpen(false)}
              className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 bottom-0 z-50 w-full max-w-md bg-white shadow-2xl flex flex-col justify-between"
            >
              {/* Header */}
              <div className="p-6 border-b border-[var(--color-border)] flex items-center justify-between">
                <div>
                  <h3 className="font-serif text-2xl text-[var(--color-ink)]">
                    Your Order Tray
                  </h3>
                  <p className="text-xs text-[var(--color-ink-muted)] mt-0.5">
                    {totalCartCount} item{totalCartCount > 1 ? "s" : ""} selected for kitchen inquiry
                  </p>
                </div>
                <button
                  onClick={() => setIsTrayOpen(false)}
                  className="p-2 text-[var(--color-ink-muted)] hover:text-[var(--color-ink)] rounded-full hover:bg-[var(--color-canvas-subtle)] cursor-pointer"
                  aria-label="Close tray"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Items List */}
              <div className="flex-1 overflow-y-auto p-6 space-y-4">
                {cartList.map(({ item, quantity }) => (
                  <div
                    key={item.id}
                    className="p-3.5 rounded-xl bg-[var(--color-canvas)] border border-[var(--color-border)] flex items-center justify-between gap-4"
                  >
                    <div className="flex-1 min-w-0">
                      <p className="font-serif text-base font-semibold text-[var(--color-ink)] truncate">
                        {item.name}
                      </p>
                      <p className="text-xs text-[var(--color-ink-muted)]">
                        {item.price ? `₹${item.price} each` : "Seasonal price"}
                      </p>
                    </div>

                    {/* Stepper */}
                    <div className="flex items-center rounded-lg border border-[var(--color-border)] bg-white">
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="px-2 py-1 text-xs hover:bg-[var(--color-canvas-subtle)] cursor-pointer"
                        aria-label="Decrease"
                      >
                        <Minus size={11} />
                      </button>
                      <span className="px-2 font-serif text-sm font-semibold">{quantity}</span>
                      <button
                        onClick={() => addToCart(item)}
                        className="px-2 py-1 text-xs hover:bg-[var(--color-canvas-subtle)] cursor-pointer"
                        aria-label="Increase"
                      >
                        <Plus size={11} />
                      </button>
                    </div>

                    <div className="text-right shrink-0">
                      <span className="font-serif text-base font-bold text-[var(--color-ink)]">
                        {item.price ? `₹${item.price * quantity}` : "—"}
                      </span>
                    </div>

                    <button
                      onClick={() => removeItemCompletely(item.id)}
                      className="text-[var(--color-ink-light)] hover:text-rose-600 cursor-pointer"
                      aria-label="Remove item"
                    >
                      <Trash2 size={15} />
                    </button>
                  </div>
                ))}
              </div>

              {/* Footer */}
              <div className="p-6 border-t border-[var(--color-border)] bg-[var(--color-canvas)]">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[var(--color-ink-muted)]">
                    Estimated Subtotal
                  </span>
                  <span className="font-serif text-2xl font-bold text-[var(--color-ink)]">
                    ₹{totalCartPrice}
                  </span>
                </div>

                <p className="text-[11px] text-[var(--color-ink-muted)] mb-4 leading-normal">
                  Clicking below will format a WhatsApp message with your items directly to Grub Cafe to verify availability.
                </p>

                <div className="space-y-2">
                  <button
                    onClick={handleWhatsAppOrder}
                    className="w-full btn-primary text-center flex items-center justify-center gap-2"
                  >
                    <span>Send Order via WhatsApp</span>
                    <ExternalLink size={14} />
                  </button>

                  <button
                    onClick={clearCart}
                    className="w-full text-xs text-[var(--color-ink-light)] hover:text-[var(--color-ink)] py-2 text-center cursor-pointer"
                  >
                    Clear Tray
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
