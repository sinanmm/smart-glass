import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Info, MessageSquare } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { smartFilmVariants, glassProfiles } from "@/content/products";
import { ProductBenefits } from "@/features/products/ProductBenefits";
import { PDLCExplanation } from "@/features/products/PDLCExplanation";
import { FinalCTA } from "@/features/home/FinalCTA";

export const metadata: Metadata = {
  title: "Smart Glass Products & PDLC Smart Film Variants",
  description:
    "Explore 95%, 91% and 89% Clear View smart film, Black Tinted Smart Film, and Twin Pro and Slim Pro glass profiles from SG Smart Glass.",
};

export default function ProductsPage() {
  return (
    <>
      {/* Products Hero Banner */}
      <section className="bg-gradient-to-b from-[#F5F9FB] to-white py-14 lg:py-20 border-b border-slate-200/80">
        <Container>
          <div className="max-w-3xl">
            <Badge variant="blue" size="md" className="mb-4">
              Catalogue & Solutions
            </Badge>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#286497] tracking-tight">
              Smart Glass Solutions
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
              Explore smart film options for different clarity and interior requirements,
              along with engineered glass profile products from SG Smart Glass.
            </p>
          </div>
        </Container>
      </section>

      {/* Smart Film Variants Section */}
      <section className="py-16 lg:py-24 bg-white">
        <Container>
          <SectionHeading
            badge="Category 01"
            badgeVariant="teal"
            title="PDLC Smart Film Variants"
            description="High-grade polymer dispersed liquid crystal film, prepared and custom-cut to confirmed dimensions for architectural glass installations."
            className="mb-12"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {smartFilmVariants.map((product) => (
              <div
                key={product.id}
                className="group flex flex-col rounded-3xl overflow-hidden bg-white border border-slate-200/90 shadow-xs hover:shadow-xl hover:border-[#286497]/40 transition-luxury"
              >
                {/* Product Image Frame */}
                <div className="relative aspect-[16/10] w-full bg-slate-100 overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-40 group-hover:opacity-20 transition-opacity" />

                  {/* Badge */}
                  {product.badge && (
                    <div className="absolute top-4 left-4">
                      <Badge variant="teal" size="sm" className="shadow-xs">
                        {product.badge}
                      </Badge>
                    </div>
                  )}

                  <div className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-xs text-[11px] font-semibold text-[#286497] px-2.5 py-1 rounded-md shadow-xs">
                    Switchable PDLC
                  </div>
                </div>

                {/* Content */}
                <div className="p-7 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-1">
                      {product.tagline}
                    </span>
                    <h3 className="text-2xl font-bold text-slate-900 group-hover:text-[#286497] transition-colors">
                      {product.name}
                    </h3>
                    <p className="mt-2.5 text-sm text-slate-600 leading-relaxed">
                      {product.description}
                    </p>

                    {/* Features list */}
                    <ul className="mt-5 space-y-2 text-xs text-slate-600 border-t border-slate-100 pt-4">
                      {product.features.slice(0, 3).map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-[#66BEAE] shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Actions */}
                  <div className="mt-8 pt-5 border-t border-slate-100 flex flex-col sm:flex-row items-center gap-3">
                    <Button
                      href={`/products/${product.slug}`}
                      variant="primary"
                      size="md"
                      className="w-full sm:w-auto flex-1 justify-center"
                      icon={<ArrowRight className="w-4 h-4" />}
                    >
                      Explore Details
                    </Button>
                    <Button
                      href={`/contact?product=${encodeURIComponent(product.name)}`}
                      variant="secondary"
                      size="md"
                      className="w-full sm:w-auto flex-1 justify-center"
                      icon={<MessageSquare className="w-4 h-4" />}
                    >
                      Enquire Now
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Qualified Claim Disclaimer */}
          <div className="mt-10 p-4 rounded-xl bg-[#F5F9FB] border border-slate-200/80 text-xs text-slate-500 flex items-start gap-3">
            <Info className="w-4 h-4 text-[#286497] shrink-0 mt-0.5" />
            <p>
              Note: Model numbers (SG 95%, SG 91%, SG 89%) designate product clarity tiers
              and relative optical transmission categories. All smart film is prepared and
              customized to confirmed measurements at our production facility.
            </p>
          </div>
        </Container>
      </section>

      {/* Subsidiary Products: Glass Profiles */}
      <section className="py-16 lg:py-24 bg-[#F5F9FB] border-t border-slate-200/80">
        <Container>
          <SectionHeading
            badge="Category 02"
            badgeVariant="blue"
            title="Subsidiary Products — Glass Profiles"
            description="Precision-engineered architectural aluminum profile framing systems designed for seamless integration with smart glass partitions."
            className="mb-12"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {glassProfiles.map((profile) => (
              <div
                key={profile.id}
                className="group flex flex-col rounded-3xl overflow-hidden bg-white border border-slate-200/90 shadow-xs hover:shadow-xl hover:border-[#286497]/40 transition-luxury"
              >
                {/* Image Frame */}
                <div className="relative aspect-[16/10] w-full bg-slate-100 overflow-hidden">
                  <Image
                    src={profile.image}
                    alt={profile.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge variant="blue" size="sm">
                      {profile.categoryLabel}
                    </Badge>
                  </div>
                </div>

                {/* Content */}
                <div className="p-7 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-1">
                      {profile.tagline}
                    </span>
                    <h3 className="text-2xl font-bold text-slate-900 group-hover:text-[#286497] transition-colors">
                      {profile.name}
                    </h3>
                    <p className="mt-2.5 text-sm text-slate-600 leading-relaxed">
                      {profile.description}
                    </p>

                    {/* Features */}
                    <ul className="mt-5 space-y-2 text-xs text-slate-600 border-t border-slate-100 pt-4">
                      {profile.features.slice(0, 3).map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-[#286497] shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Actions */}
                  <div className="mt-8 pt-5 border-t border-slate-100 flex flex-col sm:flex-row items-center gap-3">
                    <Button
                      href={`/products/${profile.slug}`}
                      variant="primary"
                      size="md"
                      className="w-full sm:w-auto flex-1 justify-center"
                      icon={<ArrowRight className="w-4 h-4" />}
                    >
                      Explore Details
                    </Button>
                    <Button
                      href={`/contact?product=${encodeURIComponent(profile.name)}`}
                      variant="secondary"
                      size="md"
                      className="w-full sm:w-auto flex-1 justify-center"
                      icon={<MessageSquare className="w-4 h-4" />}
                    >
                      Enquire Now
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
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
