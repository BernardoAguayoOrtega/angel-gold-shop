import type { Metadata } from 'next'

import AboutSection from "./(LandingPageComponents)/AboutSection";
import CategoriesSection from "./(LandingPageComponents)/CategoriesList";
import GiftsSection from "./(LandingPageComponents)/GiftSection";
import HeroSection from "./(LandingPageComponents)/Hero";
 
export const metadata: Metadata = {
  title: "Angel Gold Shop",
  description: "Angel Gold Shop",
}

export default function Home() {
  return (
    <main>
      <HeroSection />
      <CategoriesSection />
      <GiftsSection />
      <AboutSection />
    </main>
  );
}
