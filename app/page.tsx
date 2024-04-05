import CategoriesSection from "./(LandingPageComponents)/CategoriesList";
import GiftsSection from "./(LandingPageComponents)/GiftSection";
import HeroSection from "./(LandingPageComponents)/Hero";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <CategoriesSection />
      <GiftsSection />
    </main>
  );
}
