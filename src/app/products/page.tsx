import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { ProductCatalog } from "@/features/products/ProductCatalog";
import { ProductBenefits } from "@/features/products/ProductBenefits";
import { PDLCExplanation } from "@/features/products/PDLCExplanation";
import { FinalCTA } from "@/features/home/FinalCTA";

export const metadata: Metadata = {
  title: "Smart Glass Products & PDLC Smart Film Variants",
  description:
    "Explore 95%, 91% and 89% Clear View smart film variants, Black Tinted Smart Film, and engineered Twin Pro snap-fit and Slim Pro glass profiles from SG Smart Glass.",
};

export default function ProductsPage() {
  return (
    <>
      {/* Products Hero Banner */}
      <section className="bg-gradient-to-b from-[#F5F9FB] to-white py-14 lg:py-20 border-b border-slate-200/80">
        <Container>
          <div className="max-w-3xl">
            <div data-reveal="fade-up" data-reveal-delay="0" className="mb-4 inline-block">
              <Badge variant="blue" size="md">
                Catalogue & Engineered Solutions
              </Badge>
            </div>
            <h1
              data-reveal="fade-up"
              data-reveal-delay="70"
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#286497] tracking-tight"
            >
              Smart Glass & Profile Systems
            </h1>
            <p
              data-reveal="fade-up"
              data-reveal-delay="140"
              className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed"
            >
              Explore switchable smart film variants across distinct optical clarity tiers alongside
              precision-engineered architectural aluminum profile systems for smart glass installations.
            </p>
          </div>
        </Container>
      </section>

      {/* Dynamic Products Catalog */}
      <section className="py-16 lg:py-24 bg-white">
        <Container>
          <ProductCatalog />
        </Container>
      </section>

      {/* Benefits Section */}
      <ProductBenefits />

      {/* How PDLC Works Interactive Diagram */}
      <PDLCExplanation />

      {/* Final Call to Action */}
      <FinalCTA />
    </>
  );
}
