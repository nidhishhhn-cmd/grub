import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Grub Cafe — Burgers, Fries & More in Mangaluru",
    template: "%s | Grub Cafe",
  },
  description:
    "Grub Cafe is a pocket-friendly fast-food cafe in Bendoorwell, Mangaluru. Burgers, loaded fries, momos, pizza, wraps, shakes and more — starting at just ₹30.",
  keywords: [
    "Grub Cafe",
    "Mangaluru",
    "Bendoorwell",
    "burgers",
    "fast food",
    "momos",
    "pizza",
    "loaded fries",
    "cafe Mangaluru",
  ],
  openGraph: {
    title: "Grub Cafe — Burgers, Fries & More in Mangaluru",
    description:
      "Pocket-friendly fast-food cafe in Bendoorwell, Mangaluru. Burgers, momos, pizza, loaded fries, wraps and more.",
    type: "website",
    locale: "en_IN",
    siteName: "Grub Cafe",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />

        {/* LocalBusiness structured data — verified address only */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FastFoodRestaurant",
              name: "Grub Cafe",
              description:
                "Pocket-friendly fast-food cafe in Bendoorwell, Mangaluru serving burgers, loaded fries, momos, pizza, wraps and beverages.",
              address: {
                "@type": "PostalAddress",
                streetAddress:
                  "Regal Arcade, Opposite Apollo Pharmacy, Bendoorwell, Bendoor",
                addressLocality: "Mangaluru",
                addressRegion: "Karnataka",
                postalCode: "575002",
                addressCountry: "IN",
              },
              servesCuisine: [
                "Fast Food",
                "Burgers",
                "Pizza",
                "Momos",
                "Sandwiches",
              ],
              priceRange: "₹",
            }),
          }}
        />
      </body>
    </html>
  );
}
