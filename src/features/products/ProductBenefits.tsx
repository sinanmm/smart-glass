import {
  Wrench,
  EyeOff,
  ShieldCheck,
  SunMedium,
  ThermometerSnowflake,
  Sliders,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function ProductBenefits() {
  const benefits = [
    {
      icon: EyeOff,
      title: "Switchable Privacy on Demand",
      description:
        "Transitions between clear transparency and frosted visual privacy in less than 100 milliseconds.",
    },
    {
      icon: Wrench,
      title: "Custom Prepared for Easy Application",
      description:
        "Custom cut and busbar-fitted to verified measurements before glass installation for clean site execution.",
    },
    {
      icon: ShieldCheck,
      title: "3-Year Limited Warranty",
      description:
        "Backed by a comprehensive manufacturer warranty supporting optical film stability and electronics.",
    },
    {
      icon: SunMedium,
      title: "99% UV Protection",
      description:
        "Shields interior artwork, luxury flooring, and premium upholstery against solar ultraviolet degradation.",
    },
    {
      icon: ThermometerSnowflake,
      title: "20% Heat Reduction",
      description:
        "Helps moderate indoor solar heat gain to optimize comfort and HVAC cooling efficiency.",
    },
    {
      icon: Sliders,
      title: "Versatile Control Options",
      description:
        "Operates via standard architectural wall switch, handheld RF wireless remote, or smart building automation.",
    },
  ];

  return (
    <section className="py-20 lg:py-24 bg-white">
      <Container>
        <SectionHeading
          badge="Core Advantages"
          badgeVariant="blue"
          title="Engineered Benefits of SG Smart Glass"
          description="Every variant is built on proven PDLC technology, offering functional architectural performance without compromising spatial daylight."
          align="center"
          className="mb-14"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit) => {
            const Icon = benefit.icon;
            return (
              <div
                key={benefit.title}
                className="p-6 rounded-2xl bg-[#F5F9FB] border border-slate-200/80 hover:border-[#286497]/30 hover:bg-white hover:shadow-lg transition-luxury"
              >
                <div className="w-12 h-12 rounded-xl bg-[#eaf2f8] flex items-center justify-center text-[#286497] mb-5">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
