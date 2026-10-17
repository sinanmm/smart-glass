import { Hero } from "@/features/home/Hero";
import { ClientLogos } from "@/features/home/ClientLogos";
import { SmartGlassDemo } from "@/features/home/SmartGlassDemo";
import { ProductFeatures } from "@/features/home/ProductFeatures";
import { WhyChooseUs } from "@/features/home/WhyChooseUs";
import { ApplicationPreview } from "@/features/home/ApplicationPreview";
import { WorkflowPreview } from "@/features/home/WorkflowPreview";
import { FeaturedProjects } from "@/features/home/FeaturedProjects";
import { FinalCTA } from "@/features/home/FinalCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ClientLogos />
      <SmartGlassDemo />
      <ProductFeatures />
      <WhyChooseUs />
      <ApplicationPreview />
      <WorkflowPreview />
      <FeaturedProjects />
      <FinalCTA />
    </>
  );
}
