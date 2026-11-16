import {prepareLocale} from "@/i18n/server";
import HeroSection from "@/components/home/HeroSection";
import CategorySection from "@/components/home/CategorySection";
import FeaturedProducts from "@/components/home/FeaturedProducts";



export default async function HomePage({params}: {params: Promise<{locale: string}>}) {
  await prepareLocale(params);
  return (
    <main>
      <HeroSection />
      <CategorySection />
      <FeaturedProducts />
    </main>
  );
}
