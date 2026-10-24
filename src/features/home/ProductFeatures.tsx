import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ShieldCheck, SunDim, Flame, Sparkles } from "lucide-react";

export function ProductFeatures() {
  const features = [
    {
      icon: ShieldCheck,
      claim: "Up to 5-Year Warranty",
      qualifier: "3-Year Replacement + Extended Options",
      description:
        "Comprehensive 3-year replacement warranty backing custom film preparation, adhesion, and optical durability, with extended coverage up to 5 years.",
      highlightColor: "text-[#286497]",
      bgColor: "bg-[#eaf2f8]",
      badge: "Warranty Backed",
    },
    {
      icon: SunDim,
      claim: "99% UV Protection",
      qualifier: "Broad-Spectrum Solar UV Filtration",
      description:
        "Blocks up to 99% of harmful ultraviolet radiation in both transparent and private states, safeguarding interior furnishings, luxury veneers, and artwork from fading.",
      highlightColor: "text-[#2a8575]",
      bgColor: "bg-[#edf8f6]",
      badge: "Solar Defense",
    },
    {
      icon: Flame,
      claim: "20% Heat Reduction",
      qualifier: "Solar Thermal Energy Mitigation",
      description:
        "Helps moderate interior solar gain by up to 20%, contributing to a more comfortable, energy-efficient interior environment and lower cooling loads.",
      highlightColor: "text-[#286497]",
      bgColor: "bg-[#eaf2f8]",
      badge: "Thermal Control",
    },
    {
      icon: Sparkles,
      claim: "Curated Clarity Variants",
      qualifier: "95%, 91%, 89% & Black Tint",
      description:
        "Formulated across 95% ultra-transparency, 91% architectural grade, 89% privacy clear view tiers, alongside Black Tinted options for bespoke interior aesthetics.",
      highlightColor: "text-[#2a8575]",
      bgColor: "bg-[#edf8f6]",
      badge: "Precision Optics",
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#F5F9FB] border-b border-slate-200/80">
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
                className="group p-8 rounded-3xl text-card-elevated flex flex-col justify-between hover:shadow-2xl hover:translate-y-[-4px] transition-luxury"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div
                      className={`w-14 h-14 rounded-2xl ${item.bgColor} flex items-center justify-center ${item.highlightColor} transition-transform group-hover:scale-110 duration-300 shadow-xs`}
                    >
                      <Icon className="w-7 h-7" />
                    </div>

                    <span className="text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-full bg-slate-100 text-slate-600 border border-slate-200/80">
                      {item.badge}
                    </span>
                  </div>

                  <span className="text-[11px] font-bold text-[#286497] uppercase tracking-wider block mb-1">
                    {item.qualifier}
                  </span>

                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#286497] transition-colors">
                    {item.claim}
                  </h3>

                  <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>

                <div className="mt-7 pt-4 border-t border-slate-200/70 flex items-center justify-between text-xs font-semibold text-[#286497]">
                  <span>Approved Specification</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#66BEAE]" />
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
