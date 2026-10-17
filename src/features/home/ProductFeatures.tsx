import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ShieldCheck, SunDim, Flame, Sparkles } from "lucide-react";

export function ProductFeatures() {
  const features = [
    {
      icon: ShieldCheck,
      claim: "3-Year Warranty",
      qualifier: "Manufacturer Limited Warranty",
      description:
        "Comprehensive 3-year limited warranty backing custom film preparation, durability, and electronic component stability.",
      highlightColor: "text-[#286497]",
      bgColor: "bg-[#eaf2f8]",
    },
    {
      icon: SunDim,
      claim: "99% UV Protection",
      qualifier: "Broad-Spectrum Solar UV Filtration",
      description:
        "Blocks up to 99% of harmful ultraviolet radiation in both transparent and private states, safeguarding interior furnishings from fading.",
      highlightColor: "text-[#2a8575]",
      bgColor: "bg-[#edf8f6]",
    },
    {
      icon: Flame,
      claim: "20% Heat Reduction",
      qualifier: "Solar Thermal Energy Mitigation",
      description:
        "Helps moderate interior solar gain by up to 20%, contributing to a more comfortable, energy-efficient interior environment.",
      highlightColor: "text-[#286497]",
      bgColor: "bg-[#eaf2f8]",
    },
    {
      icon: Sparkles,
      claim: "High-Transparency Film Variants",
      qualifier: "Curated Clarity Options",
      description:
        "Engineered PDLC formulations available across 95%, 91%, 89% clear view tiers alongside Black Tinted options for bespoke interior aesthetics.",
      highlightColor: "text-[#2a8575]",
      bgColor: "bg-[#edf8f6]",
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-white">
      <Container>
        <SectionHeading
          badge="Engineered Performance"
          badgeVariant="blue"
          title="Designed for Modern Architecture"
          description="Every SG Smart Glass installation combines architectural aesthetics with proven technical qualities designed for residential and commercial longevity."
          align="left"
          className="mb-14"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.claim}
                className="group p-8 rounded-2xl bg-[#F5F9FB] border border-slate-200/80 hover:border-[#286497]/40 hover:bg-white hover:shadow-xl transition-luxury flex flex-col justify-between"
              >
                <div>
                  <div
                    className={`w-14 h-14 rounded-xl ${item.bgColor} flex items-center justify-center ${item.highlightColor} mb-6 transition-transform group-hover:scale-105 duration-300`}
                  >
                    <Icon className="w-7 h-7" />
                  </div>

                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
                    {item.qualifier}
                  </span>

                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#286497] transition-colors">
                    {item.claim}
                  </h3>

                  <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200/60 flex items-center text-xs font-semibold text-[#286497]">
                  <span>Approved Specification</span>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
