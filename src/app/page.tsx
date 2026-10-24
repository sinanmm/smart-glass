import { Hero } from "@/features/home/Hero";
import { SmartGlassDemo } from "@/features/home/SmartGlassDemo";
import { ClientLogos } from "@/features/home/ClientLogos";
import { ProductFeatures } from "@/features/home/ProductFeatures";
import { WhyChooseUs } from "@/features/home/WhyChooseUs";
import { ApplicationPreview } from "@/features/home/ApplicationPreview";
import { FeaturedProjects } from "@/features/home/FeaturedProjects";
import { FinalCTA } from "@/features/home/FinalCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <SmartGlassDemo />
      <ClientLogos />
      <ProductFeatures />
      <WhyChooseUs />
      <ApplicationPreview />
      <FeaturedProjects />
      <FinalCTA />
    </>
  );
}
