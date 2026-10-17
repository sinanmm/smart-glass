"use client";

import { useState } from "react";
import { Zap, Eye, Shield, Check, ArrowRight, MessageCircle } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/content/siteConfig";

export function PDLCExplanation() {
  const [isPowerOn, setIsPowerOn] = useState(true);

  return (
    <section className="py-20 lg:py-28 bg-[#F5F9FB] border-y border-slate-200/80">
      <Container>
        <SectionHeading
          badge="Underlying Technology"
          badgeVariant="teal"
          title="How PDLC Smart Film Works"
          description="Polymer Dispersed Liquid Crystal (PDLC) technology controls the alignment of microscopic liquid crystal droplets suspended inside a specialized polymer matrix."
          align="center"
          className="mb-14"
        />

        {/* Interactive Diagram Stage */}
        <div className="max-w-4xl mx-auto rounded-3xl bg-white p-6 sm:p-10 border border-slate-200 shadow-xl">
          {/* Interactive State Switcher */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-8 border-b border-slate-100">
            <div>
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-1">
                Live State Simulator
              </span>
              <h3 className="text-xl font-bold text-slate-900">
                Current Status:{" "}
                <span className={isPowerOn ? "text-[#286497]" : "text-[#2a8575]"}>
                  {isPowerOn ? "Power ON — Transparent" : "Power OFF — Private / Frosted"}
                </span>
              </h3>
            </div>

            {/* Toggle Button */}
            <div className="flex items-center gap-2 p-1.5 rounded-xl bg-slate-100 border border-slate-200">
              <button
                type="button"
                onClick={() => setIsPowerOn(true)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                  isPowerOn
                    ? "bg-[#286497] text-white shadow-sm"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                <Zap className="w-3.5 h-3.5" />
                POWER ON
              </button>
              <button
                type="button"
                onClick={() => setIsPowerOn(false)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                  !isPowerOn
                    ? "bg-[#66BEAE] text-white shadow-sm"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                <Shield className="w-3.5 h-3.5" />
                POWER OFF
              </button>
            </div>
          </div>

          {/* Liquid Crystal Particle Visualisation */}
          <div className="py-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Visual Glass Simulation */}
            <div
              className={`relative h-64 rounded-2xl border-2 transition-all duration-500 overflow-hidden flex flex-col items-center justify-center p-6 ${
                isPowerOn
                  ? "bg-gradient-to-br from-blue-50/70 via-white to-teal-50/40 border-[#286497]/40 shadow-inner"
                  : "bg-slate-200/90 backdrop-blur-md border-slate-300 shadow-inner"
              }`}
            >
              {/* Animated Crystal Orientation Graphic */}
              <div className="grid grid-cols-6 gap-3 sm:gap-4 w-full max-w-xs transition-all duration-500">
                {Array.from({ length: 24 }).map((_, i) => (
                  <div
                    key={i}
                    className={`h-2.5 rounded-full transition-all duration-500 shadow-xs ${
                      isPowerOn
                        ? "bg-[#286497] rotate-0 scale-y-110"
                        : "bg-slate-400 rotate-45 scale-x-75"
                    }`}
                    style={{
                      transform: isPowerOn
                        ? "rotate(0deg)"
                        : `rotate(${(i * 37) % 180}deg)`,
                    }}
                  />
                ))}
              </div>

              {/* Status Label on Glass */}
              <div className="mt-8 text-center">
                <span
                  className={`text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full ${
                    isPowerOn
                      ? "bg-[#286497]/10 text-[#286497]"
                      : "bg-slate-700 text-white"
                  }`}
                >
                  {isPowerOn ? "Parallel Alignment (Clear)" : "Random Scattering (Frosted)"}
                </span>
              </div>
            </div>

            {/* Scientific Explanation Box */}
            <div className="space-y-4">
              <div
                className={`p-4 rounded-xl border transition-all ${
                  isPowerOn
                    ? "bg-[#eaf2f8] border-[#286497]/30 text-slate-900"
                    : "bg-slate-50 border-slate-200 text-slate-500"
                }`}
              >
                <div className="flex items-center gap-2 font-bold text-sm text-[#286497] mb-1">
                  <span className="w-2 h-2 rounded-full bg-[#286497]" />
                  Power ON: Transparent State
                </div>
                <p className="text-xs leading-relaxed text-slate-700">
                  When an electrical voltage is applied, the microscopic liquid crystal
                  molecules align uniformly parallel to each other. Incident light passes directly
                  through the polymer matrix without scattering, rendering the glass optically clear.
                </p>
              </div>

              <div
                className={`p-4 rounded-xl border transition-all ${
                  !isPowerOn
                    ? "bg-[#edf8f6] border-[#66BEAE]/50 text-slate-900"
                    : "bg-slate-50 border-slate-200 text-slate-500"
                }`}
              >
                <div className="flex items-center gap-2 font-bold text-sm text-[#2a8575] mb-1">
                  <span className="w-2 h-2 rounded-full bg-[#66BEAE]" />
                  Power OFF: Private (Frosted) State
                </div>
                <p className="text-xs leading-relaxed text-slate-700">
                  When electrical current is switched off, liquid crystal molecules orient in random
                  directions. Light rays entering the glass are refracted and scattered in all
                  directions, creating a clean white frosted privacy partition while preserving ambient illumination.
                </p>
              </div>
            </div>
          </div>

          {/* Product Enquiry Prompt as specified in PDF */}
          <div className="pt-8 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <div>
              <h4 className="text-base font-bold text-slate-900">
                Not sure which smart film option suits your project?
              </h4>
              <p className="text-xs text-slate-500 mt-0.5">
                Our technical glazing team will guide you on clarity tiers, glass dimensions, and wiring routes.
              </p>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <Button
                href={siteConfig.contact.whatsapp.url}
                variant="secondary"
                size="md"
                icon={<MessageCircle className="w-4 h-4 text-[#25D366]" />}
              >
                Talk to SG
              </Button>
              <Button
                href="/contact"
                variant="primary"
                size="md"
                icon={<ArrowRight className="w-4 h-4" />}
              >
                Request a Quote
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
