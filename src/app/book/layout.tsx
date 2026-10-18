import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book a Table | Grub Cafe Bendoorwell Mangaluru",
  description:
    "Reserve your table at Grub Cafe in Regal Arcade, Bendoorwell, Mangaluru. Free reservations with instant WhatsApp confirmation for lunch, dinner, birthdays, and group celebrations.",
};

export default function BookLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
