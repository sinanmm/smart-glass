"use client";

import { useState } from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { Sun, Shield, Zap, SlidersHorizontal, Sparkles } from "lucide-react";

export function SmartGlassDemo() {
  const [sliderPos, setSliderPos] = useState(50);
  const [activePreset, setActivePreset] = useState<"clear" | "private" | "custom">("custom");
  const [isDragging, setIsDragging] = useState(false);

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging && e.buttons !== 1 && e.type !== "pointerdown") return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
    const percent = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPos(percent);
    setActivePreset("custom");
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = Math.max(0, Math.min(e.touches[0].clientX - rect.left, rect.width));
    const percent = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPos(percent);
    setActivePreset("custom");
  };

  const setPreset = (mode: "clear" | "private") => {
    setActivePreset(mode);
    setSliderPos(mode === "clear" ? 100 : 0);
  };

  return (
    <section className="py-20 lg:py-28 bg-[#F5F9FB] border-b border-slate-200/80">
      <Container>
        <SectionHeading
          badge="Switchable Privacy Technology"
          badgeVariant="teal"
          title="One Glass. Two Possibilities."
          description="Instantly transforms architectural glass from optical clarity to frosted privacy at the touch of a switch."
          align="center"
          className="mb-12"
        />

        {/* State Explanation Cards - Highlighted for Light Theme */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-10">
          {/* CLEAR State Card */}
          <div
            onClick={() => setPreset("clear")}
            className={`p-7 rounded-2xl cursor-pointer transition-all ${
              sliderPos > 70
                ? "bg-white border-2 border-[#286497] shadow-lg ring-4 ring-[#286497]/15 translate-y-[-2px]"
                : "light-card-highlight hover:border-[#286497]/50"
            }`}
          >
            <div className="flex items-center justify-between mb-3.5">
              <div className="flex items-center gap-3">
                <span className="w-10 h-10 rounded-xl bg-[#eaf2f8] flex items-center justify-center text-[#286497] shadow-xs">
                  <Sun className="w-5 h-5" />
                </span>
                <div>
                  <h3 className="text-xl font-bold text-slate-900">CLEAR</h3>
                  <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
                    Full Transparency
                  </span>
                </div>
              </div>
              <Badge variant="blue" size="sm" className="font-bold">
                Power ON
              </Badge>
            </div>
            <p className="text-sm text-slate-600 leading-relaxed">
              The smart glass partition appears completely transparent, maintaining an open
              visual connection, natural daylight transmission, and spacious panoramic sightlines.
            </p>
            <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-xs font-semibold text-[#286497]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Tap to switch glass to CLEAR</span>
            </div>
          </div>

          {/* PRIVATE State Card */}
          <div
            onClick={() => setPreset("private")}
            className={`p-7 rounded-2xl cursor-pointer transition-all ${
              sliderPos < 30
                ? "bg-white border-2 border-[#66BEAE] shadow-lg ring-4 ring-[#66BEAE]/20 translate-y-[-2px]"
                : "light-card-highlight hover:border-[#66BEAE]/60"
            }`}
          >
            <div className="flex items-center justify-between mb-3.5">
              <div className="flex items-center gap-3">
                <span className="w-10 h-10 rounded-xl bg-[#edf8f6] flex items-center justify-center text-[#2a8575] shadow-xs">
                  <Shield className="w-5 h-5" />
                </span>
                <div>
                  <h3 className="text-xl font-bold text-slate-900">PRIVATE</h3>
                  <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
                    Instant Frosting
                  </span>
                </div>
              </div>
              <Badge variant="teal" size="sm" className="font-bold">
                Power OFF
              </Badge>
            </div>
            <p className="text-sm text-slate-600 leading-relaxed">
              The partition wall instantly switches to silky frosted glass,
              providing total visual confidentiality while diffusing ambient light evenly throughout the room.
            </p>
            <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-xs font-semibold text-[#2a8575]">
              <Shield className="w-3.5 h-3.5" />
              <span>Tap to switch glass to PRIVATE</span>
            </div>
          </div>
        </div>

        {/* Large Interactive Comparison Stage */}
        <div className="max-w-5xl mx-auto rounded-3xl overflow-hidden bg-white p-3 sm:p-5 shadow-2xl border border-slate-200">
          {/* Controller Bar with CLEAR / PRIVATE Toggle Buttons */}
          <div className="flex flex-wrap items-center justify-between gap-3 mb-4 px-2 py-1">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#66BEAE] animate-pulse" />
              <span className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                Live State Simulator (Clear vs Private)
              </span>
            </div>

            {/* State Mode Switcher */}
            <div className="inline-flex rounded-xl bg-slate-100 p-1 border border-slate-200 text-xs font-semibold">
              <button
                type="button"
                onClick={() => setPreset("clear")}
                className={`px-4 py-2 rounded-lg transition-all cursor-pointer ${
                  sliderPos > 70
                    ? "bg-[#286497] text-white shadow-xs font-bold"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                SWITCH TO CLEAR (ON)
              </button>
              <button
                type="button"
                onClick={() => setPreset("private")}
                className={`px-4 py-2 rounded-lg transition-all cursor-pointer ${
                  sliderPos < 30
                    ? "bg-[#2a8575] text-white shadow-xs font-bold"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                SWITCH TO PRIVATE (OFF)
              </button>
            </div>
          </div>

          <div
            className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden select-none cursor-ew-resize bg-slate-200 group shadow-inner"
            onPointerDown={(e) => {
              setIsDragging(true);
              handlePointerMove(e);
            }}
            onPointerUp={() => setIsDragging(false)}
            onPointerLeave={() => setIsDragging(false)}
            onPointerMove={handlePointerMove}
            onTouchMove={handleTouchMove}
            role="slider"
            aria-label="Comparison slider demonstrating clear versus frosted smart glass states"
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={Math.round(sliderPos)}
          >
            {/* Base Image: PRIVATE (Frosted glass partition) */}
            <div className="absolute inset-0 w-full h-full">
              <Image
                src="/images/hero/hero-smart-glass-private.jpg"
                alt="SG Smart Glass - Frosted Privacy State"
                fill
                className="object-cover"
                sizes="(max-width: 1280px) 100vw, 1100px"
              />
              <div className="absolute bottom-6 right-6 bg-slate-900/85 backdrop-blur-md text-white px-3.5 py-1.5 rounded-lg text-xs font-semibold tracking-wider uppercase shadow-md flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-slate-300" />
                Private Mode (Power OFF)
              </div>
            </div>

            {/* Clipped Image: CLEAR (Transparent glass partition) */}
            <div
              className="absolute inset-0 h-full overflow-hidden"
              style={{ width: `${sliderPos}%` }}
            >
              <div className="relative w-full h-full min-w-[320px] sm:min-w-[640px] md:min-w-[900px] lg:min-w-[1060px]">
                <Image
                  src="/images/hero/hero-smart-glass-clear.jpg"
                  alt="SG Smart Glass - Transparent Clear State"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1280px) 100vw, 1100px"
                />
                <div className="absolute bottom-6 left-6 bg-[#286497]/90 backdrop-blur-md text-white px-3.5 py-1.5 rounded-lg text-xs font-semibold tracking-wider uppercase shadow-md flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#66BEAE]" />
                  Clear View (Power ON)
                </div>
              </div>
            </div>

            {/* Central Slider Bar */}
            <div
              className="absolute top-0 bottom-0 w-1 bg-white shadow-[0_0_15px_rgba(0,0,0,0.6)] pointer-events-none"
              style={{ left: `${sliderPos}%` }}
            >
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-white shadow-xl border-2 border-[#286497] flex items-center justify-center text-[#286497] pointer-events-auto">
                <SlidersHorizontal className="w-5 h-5 rotate-90" />
              </div>
            </div>
          </div>

          {/* Footnote instruction */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-4 px-2 text-xs text-slate-500">
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-[#66BEAE]" />
              <span className="font-semibold text-slate-700">Simultaneous transition in under 1/10th of a second</span>
            </div>
            <div className="text-slate-500">
              Drag horizontally across the space or tap buttons above to switch glass states
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
