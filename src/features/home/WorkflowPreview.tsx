import Link from "next/link";
import { ArrowRight, MapPin, Ruler, Cpu, CalendarClock, Sparkles } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

export function WorkflowPreview() {
  const steps = [
    {
      num: "01",
      title: "Site Visit & Electrical Planning",
      desc: "SG conducts early site coordination to plan electrical conduits and wire routes prior to glass placement.",
      icon: MapPin,
    },
    {
      num: "02",
      title: "Confirm Glass Measurements",
      desc: "Client or glass supplier selects base glass and shares confirmed millimeter measurements with SG.",
      icon: Ruler,
    },
    {
      num: "03",
      title: "Film Preparation & Customisation",
      desc: "PDLC film is custom prepared, precision cut, and busbar-fitted at our dedicated technical facility.",
      icon: Cpu,
    },
    {
      num: "04",
      title: "Coordinate with Glass Team",
      desc: "Installation schedules are aligned; film is applied to glass before installation in controlled conditions.",
      icon: CalendarClock,
    },
    {
      num: "05",
      title: "Connection, Testing & Handover",
      desc: "Electrical wiring is completed and the entire smart privacy system undergoes multi-cycle operational testing.",
      icon: Sparkles,
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#F5F9FB] border-y border-slate-200/80">
      <Container>
        <SectionHeading
          badge="Seamless Project Execution"
          badgeVariant="blue"
          title="From Planning to Smart Privacy"
          description="A disciplined, step-by-step workflow ensuring seamless coordination between architects, glass suppliers, electrical contractors, and SG technicians."
          align="center"
          className="mb-16"
        />

        {/* Desktop Horizontal Timeline / Mobile Vertical Timeline */}
        <div className="relative">
          {/* Connecting line for desktop */}
          <div className="hidden lg:block absolute top-1/2 left-8 right-8 -translate-y-8 h-0.5 bg-gradient-to-r from-[#286497]/20 via-[#66BEAE]/40 to-[#286497]/20 pointer-events-none" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 relative z-10">
            {steps.map((step) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.num}
                  className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs hover:shadow-lg hover:border-[#286497]/30 transition-luxury flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-2xl font-extrabold text-[#286497]/30 group-hover:text-[#286497] transition-colors font-mono">
                        {step.num}
                      </span>
                      <div className="w-10 h-10 rounded-xl bg-[#eaf2f8] flex items-center justify-center text-[#286497] group-hover:bg-[#286497] group-hover:text-white transition-colors">
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>

                    <h3 className="text-base font-bold text-slate-900 group-hover:text-[#286497] transition-colors leading-snug">
                      {step.title}
                    </h3>

                    <p className="mt-2.5 text-xs text-slate-600 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>

                  <div className="mt-5 pt-3 border-t border-slate-100 flex items-center text-[11px] font-semibold text-[#66BEAE]">
                    <span>Step {step.num} Progression</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* View Full 6-Stage Process CTA */}
        <div className="mt-12 text-center">
          <Button
            href="/applications#workflow"
            variant="outline"
            size="md"
            icon={<ArrowRight className="w-4 h-4" />}
          >
            Read Detailed 6-Stage Installation Guidelines & Scope
          </Button>
        </div>
      </Container>
    </section>
  );
}
