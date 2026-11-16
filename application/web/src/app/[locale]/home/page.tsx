import {prepareLocale} from "@/i18n/server";
import HeroSection from "@/components/home/HeroSection";
import CategorySection from "@/components/home/CategorySection";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import AboutPreview from "@/components/home/AboutPreview";
import CustomOrdersSection from "@/components/home/CustomOrdersSection";



export default async function HomePage({params}: {params: Promise<{locale: string}>}) {
  await prepareLocale(params);
  return (
    <main>
      <HeroSection />
      <CategorySection />
      <FeaturedProducts />
      <AboutPreview />
      <CustomOrdersSection />
    </main>
  );
}
