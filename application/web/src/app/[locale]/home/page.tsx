import {prepareLocale} from "@/i18n/server";
import HeroSection from "@/components/home/HeroSection";
import CategorySection from "@/components/home/CategorySection";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import AboutPreview from "@/components/home/AboutPreview";
import CustomOrdersSection from "@/components/home/CustomOrdersSection";
import GallerySection from "@/components/home/GallerySection";



export default async function HomePage({params}: {params: Promise<{locale: string}>}) {
  await prepareLocale(params);
  return (
    <main>
      <HeroSection />
      <GallerySection />
      <CategorySection />
      <FeaturedProducts />
      <AboutPreview />
      <CustomOrdersSection />
    </main>
  );
}
