import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/content/siteConfig";
import {
  Award,
  Globe2,
  Layers,
  Sparkles,
  Zap,
  Users,
  ShieldCheck,
  Cpu,
  ArrowRight,
} from "lucide-react";

export function WhyChooseUs() {
  const pillars = [
    {
      num: "01",
      icon: Award,
      title: "Over 35 Years of Industry Experience",
      description:
        "Rooted in decades of glass industry leadership originating from our Dubai parent company (Century Toughened Glass Plant & Broadway Group).",
    },
    {
      num: "02",
      icon: Globe2,
      title: "International Expertise & Global Standards",
      description:
        "Delivering advanced HD Smart Glass solutions across the globe since 2010 with international quality and engineering benchmarks.",
    },
    {
      num: "03",
      icon: Layers,
      title: "Specialized In-House Customization Facility",
      description:
        "State-of-the-art precision preparation, custom film cutting, and quality testing facility ensuring millimeter-accurate edge geometry.",
    },
    {
      num: "04",
      icon: Users,
      title: "Turnkey Installation & Dedicated Service",
      description:
        "Dedicated technical and service teams available for specialized smart glass installation, electrical coordination, and ongoing support.",
    },
    {
      num: "05",
      icon: ShieldCheck,
      title: "Up to 5 Years Warranty Coverage",
      description:
        "3 Years standard replacement warranty with extended warranty options up to 5 years, providing complete peace of mind.",
    },
    {
      num: "06",
      icon: Cpu,
      title: "Customized Smart Glass Engineering",
      description:
        "Every film panel is precision pre-cut, busbar-fitted, and tested to exact millimeter architectural tolerances.",
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-white border-b border-slate-200/80">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Visual Asset and Experience Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200 aspect-[4/5] bg-slate-100">
              <Image
                src="/images/about/facility.jpg"
                alt="SG Smart Glass precision film preparation and testing unit"
                fill
                quality={95}
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 600px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/85 via-slate-900/20 to-transparent" />

              {/* Floating Badge on Image */}
              <div className="absolute bottom-6 left-6 right-6 p-6 rounded-2xl glass-panel shadow-xl border border-white/40">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-[#286497] text-white flex items-center justify-center font-extrabold text-xl shrink-0 shadow-md">
                    35+
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#286497] block">
                      Proven Industry Heritage
                    </span>
                    <p className="text-xs text-slate-700 font-semibold mt-0.5">
                      35+ Years in Glass & Architectural Engineering
                    </p>
                    <p className="text-[11px] text-slate-500">
                      Delivering Smart Glass Globally Since 2010
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Strengths and Positioning */}
          <div className="lg:col-span-7">
            <SectionHeading
              badge="Why Choose SG"
              badgeVariant="blue"
              title="Global Standards. Architectural Precision."
              description="Backed by over 35 years of industry excellence, SG Smart Glass combines world-class PDLC technology with dedicated turnkey installation capability."
              align="left"
              className="mb-8"
            />

            {/* List of Pillars - Highlighted text cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {pillars.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.num}
                    className="p-5 rounded-2xl text-card-elevated hover:shadow-lg hover:border-[#286497]/40 transition-luxury flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-lg font-mono font-extrabold text-[#286497]">
                          {item.num}
                        </span>
                        <div className="w-9 h-9 rounded-xl bg-[#eaf2f8] flex items-center justify-center text-[#286497]">
                          <Icon className="w-4 h-4" />
                        </div>
                      </div>

                      <h3 className="text-sm font-bold text-slate-900 leading-snug">
                        {item.title}
                      </h3>
                      <p className="mt-1.5 text-xs text-slate-600 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-8 pt-4 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <Button
                href="/about"
                variant="primary"
                size="md"
                icon={<ArrowRight className="w-4 h-4" />}
              >
                Learn About Our Heritage
              </Button>
              <span className="text-xs text-slate-500 font-medium">
                Powered by {siteConfig.legalCompanyName}
              </span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
