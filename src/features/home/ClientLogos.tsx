import { Container } from "@/components/ui/Container";
import { Building2, Home, Hotel, Stethoscope, Store, Landmark } from "lucide-react";

export function ClientLogos() {
  const sectors = [
    { name: "Corporate Offices & Boardrooms", icon: Building2 },
    { name: "Architectural Studios & Designers", icon: Landmark },
    { name: "Luxury Villas & Residences", icon: Home },
    { name: "Five-Star Hospitality Suites", icon: Hotel },
    { name: "Healthcare & Clinical Suites", icon: Stethoscope },
    { name: "Retail & Commercial Glazing", icon: Store },
  ];

  return (
    <section className="py-12 bg-white border-y border-slate-100">
      <Container>
        <div className="flex flex-col items-center text-center mb-8">
          <span className="text-xs font-bold tracking-widest text-slate-400 uppercase">
            Trusted by Leading Names
          </span>
          <p className="text-xs text-slate-500 mt-1 max-w-lg">
            Delivering precision switchable privacy and glass solutions across diverse architectural sectors.
          </p>
        </div>

        {/* Minimal architectural sector badges */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {sectors.map((sector) => {
            const Icon = sector.icon;
            return (
              <div
                key={sector.name}
                className="flex flex-col items-center justify-center p-4 rounded-xl bg-[#F5F9FB] border border-slate-200/60 text-slate-600 hover:text-[#286497] hover:border-[#286497]/30 transition-all text-center group"
              >
                <Icon className="w-5 h-5 text-slate-400 group-hover:text-[#66BEAE] transition-colors mb-2" />
                <span className="text-xs font-semibold leading-tight">
                  {sector.name}
                </span>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
