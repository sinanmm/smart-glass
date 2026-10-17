import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ShieldCheck,
  Building2,
  Clock,
  MapPin,
  CheckCircle2,
  ArrowRight,
  Layers,
  Wrench,
  HeadphonesIcon,
  Compass,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { siteConfig } from "@/content/siteConfig";
import { FinalCTA } from "@/features/home/FinalCTA";

export const metadata: Metadata = {
  title: "About Technical Glass and Glazing India Pvt. Ltd.",
  description:
    "Learn about Technical Glass and Glazing India Pvt. Ltd., the company powering SG Smart Glass and its smart film solutions across India.",
};

export default function AboutPage() {
  const capabilities = [
    {
      icon: Layers,
      title: "PDLC Smart Film Expertise",
      desc: "Deep knowledge of polymer dispersed liquid crystal formulations, clarity tiers, and electrical switching behaviors.",
    },
    {
      icon: Wrench,
      title: "Custom Film Preparation",
      desc: "Precision cutting, busbar fitting, edge sealing, and controlled bench testing tailored to confirmed site dimensions.",
    },
    {
      icon: Compass,
      title: "Early Site Planning",
      desc: "Direct liaison with project electrical teams to establish wire routes, transformer locations, and control provisions before glazing.",
    },
    {
      icon: Building2,
      title: "Installation Coordination",
      desc: "Synchronized scheduling with appointed glass fabricators and contractors, applying film before glass placement for pristine finish.",
    },
    {
      icon: MapPin,
      title: "Nationwide Service Capability",
      desc: "Serving architectural and interior glazing projects from our base in Kerala to major commercial hubs across India and the UAE.",
    },
    {
      icon: HeadphonesIcon,
      title: "Reliable After-Sales Support",
      desc: "3-year warranty backing, preventative operational guidance, and technical response whenever site adjustments are needed.",
    },
  ];

  return (
    <>
      {/* About Hero Banner */}
      <section className="bg-gradient-to-b from-[#F5F9FB] to-white py-14 lg:py-20 border-b border-slate-200/80">
        <Container>
          <div className="max-w-3xl">
            <Badge variant="blue" size="md" className="mb-4">
              Company Background
            </Badge>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#286497] tracking-tight leading-tight">
              Smart Privacy, Backed by Industry Experience
            </h1>
            <p className="mt-5 text-base sm:text-lg text-slate-700 leading-relaxed font-medium">
              SG Smart Glass is the smart-glass brand powered by{" "}
              <strong className="text-slate-900 font-bold">
                {siteConfig.legalCompanyName}
              </strong>
              . We provide PDLC smart film solutions for modern architectural spaces,
              combining product knowledge, custom film preparation, site coordination,
              installation and after-sales support.
            </p>
          </div>
        </Container>
      </section>

      {/* Our Company & Facility Showcase */}
      <section className="py-16 lg:py-24 bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Visual Column */}
            <div className="lg:col-span-6 relative">
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden bg-slate-100 border border-slate-200 shadow-xl">
                <Image
                  src="/images/about/facility.jpg"
                  alt="Technical Glass and Glazing India precision film preparation facility"
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 600px"
                />
              </div>

              {/* Floating Stat Card */}
              <div className="mt-6 p-6 rounded-2xl bg-[#F5F9FB] border border-slate-200/80 flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-[#286497] text-white flex items-center justify-center font-extrabold text-xl shrink-0">
                  17+
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">
                    Years of Glass & Glazing Heritage
                  </h4>
                  <p className="text-xs text-slate-600 mt-0.5">
                    Attributed to {siteConfig.experience.attribution}.
                  </p>
                </div>
              </div>
            </div>

            {/* Content Column */}
            <div className="lg:col-span-6 space-y-6">
              <Badge variant="teal" size="sm">
                Our Company
              </Badge>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight leading-snug">
                Powering Architectural Glazing Innovation
              </h2>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Technical Glass and Glazing India Pvt. Ltd. established SG Smart Glass to address
                the surging architectural demand for dynamic, switchable privacy. Rather than relying
                on bulky fabric curtains or dusty venetian blinds, modern architecture benefits from
                clean glass that transforms instantaneously from open visual transparency to complete
                privacy.
              </p>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                The business serves smart-glass requirements from Kerala across all major Indian states.
                We operate on a philosophy of technical precision: smart film is not merely distributed;
                it is custom-prepared, measured to exact millimeter tolerances, and integrated in
                conjunction with appointed glazing fabricators.
              </p>

              <div className="pt-4 border-t border-slate-100 flex flex-wrap gap-4 text-xs font-semibold text-slate-700">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#66BEAE]" />
                  Custom film preparation
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#66BEAE]" />
                  On-site wiring coordination
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#66BEAE]" />
                  Verified 3-year warranty
                </span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Service Capabilities Grid */}
      <section className="py-16 lg:py-24 bg-[#F5F9FB] border-y border-slate-200/80">
        <Container>
          <SectionHeading
            badge="Technical Competence"
            badgeVariant="blue"
            title="Our Capabilities"
            description="Our integrated service model bridges the gap between high-tech PDLC electronics and on-site architectural glass installation."
            align="center"
            className="mb-14"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {capabilities.map((cap) => {
              const Icon = cap.icon;
              return (
                <div
                  key={cap.title}
                  className="p-7 rounded-2xl bg-white border border-slate-200/80 hover:border-[#286497]/30 hover:shadow-lg transition-luxury"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#eaf2f8] flex items-center justify-center text-[#286497] mb-5">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-2">
                    {cap.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {cap.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Our Coordinated Approach & Scope */}
      <section className="py-16 lg:py-24 bg-white">
        <Container>
          <div className="max-w-4xl mx-auto">
            <SectionHeading
              badge="Project Discipline"
              badgeVariant="teal"
              title="Our Coordinated Approach"
              description="A transparent division of responsibilities ensures smooth scheduling, eliminates site surprises, and guarantees optimal optical performance."
              align="center"
              className="mb-12"
            />

            <div className="p-8 sm:p-10 rounded-3xl bg-[#F5F9FB] border border-slate-200 shadow-sm space-y-6">
              <div className="space-y-4 text-sm text-slate-700 leading-relaxed">
                <p>
                  <strong>Base-Glass Selection:</strong> The client or their appointed glass supplier
                  selects and supplies the base glass panels. Once dimensions and glass specifications
                  are confirmed, measurements are handed over to our engineering desk.
                </p>
                <p>
                  <strong>Custom Film Customisation:</strong> SG customizes and cuts the PDLC film to the
                  exact millimeter dimensions at our production unit, attaching copper busbars, lead wires,
                  and protective edge treatments.
                </p>
                <p>
                  <strong>Controlled Application:</strong> The preferred workflow is to apply the smart film
                  to the glass prior to final glazing installation in a dust-controlled setup. For existing fixed
                  glass, an individual site assessment is conducted.
                </p>
                <p>
                  <strong>Commissioning:</strong> Our technicians coordinate the final electrical
                  connections with site electricians, test switching response cycles, and complete handoff.
                </p>
              </div>

              {/* Company Info Box */}
              <div className="pt-6 border-t border-slate-200/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-1">
                    Registered Headquarters
                  </span>
                  <p className="text-xs font-semibold text-slate-800">
                    {siteConfig.legalCompanyName}
                  </p>
                  <p className="text-xs text-slate-500 mt-0.5">
                    {siteConfig.contact.address.full}
                  </p>
                </div>

                <Button
                  href="/contact"
                  variant="primary"
                  size="md"
                  icon={<ArrowRight className="w-4 h-4" />}
                >
                  Contact Our Team
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Final Call to Action */}
      <FinalCTA />
    </>
  );
}
