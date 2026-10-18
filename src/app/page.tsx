import { Hero } from "@/components/Hero";
import { AmbientBreaker } from "@/components/AmbientBreaker";
import { MenuPreview } from "@/components/MenuPreview";
import { FoodStory } from "@/components/FoodStory";
import { FoodGallery } from "@/components/FoodGallery";
import { LocationSection } from "@/components/LocationSection";

export default function Home() {
  return (
    <>
      <Hero />
      <AmbientBreaker />
      <MenuPreview />
      <FoodStory />
      <FoodGallery />
      <LocationSection />
    </>
  );
}
