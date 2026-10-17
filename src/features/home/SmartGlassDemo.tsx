"use client";

import { useState } from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { Sun, Shield, Zap, SlidersHorizontal } from "lucide-react";

export function SmartGlassDemo() {
  const [sliderPos, setSliderPos] = useState(50);
  const [activeMode, setActiveMode] = useState<"both" | "clear" | "private">("both");
  const [isDragging, setIsDragging] = useState(false);

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging && e.buttons !== 1 && e.type !== "pointerdown") return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
    const percent = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPos(percent);
    setActiveMode("both");
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = Math.max(0, Math.min(e.touches[0].clientX - rect.left, rect.width));
    const percent = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPos(percent);
    setActiveMode("both");
  };

  const setPreset = (mode: "clear" | "private") => {
    setActiveMode(mode);
    setSliderPos(mode === "clear" ? 100 : 0);
  };

  return (
    <section className="py-20 lg:py-28 bg-[#F5F9FB] border-b border-slate-200/80">
      <Container>
        <SectionHeading
          badge="Switchable Privacy Technology"
          badgeVariant="teal"
          title="One Glass. Two Possibilities."
          description="PDLC (Polymer Dispersed Liquid Crystal) smart film instantly transforms architectural glass from optical clarity to frosted privacy at the touch of a switch."
          align="center"
          className="mb-12"
        />

        {/* State Explanation Cards & Switcher */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-8">
          {/* CLEAR State Card */}
          <div
            onClick={() => setPreset("clear")}
            className={`p-6 rounded-2xl cursor-pointer transition-all border ${
              sliderPos > 70
                ? "bg-white border-[#286497] shadow-md ring-2 ring-[#286497]/20"
                : "bg-white/70 border-slate-200 hover:border-[#286497]/40 shadow-xs"
            }`}
          >
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2.5">
                <span className="w-8 h-8 rounded-lg bg-[#eaf2f8] flex items-center justify-center text-[#286497]">
                  <Sun className="w-4 h-4" />
                </span>
                <h3 className="text-lg font-bold text-slate-900">CLEAR</h3>
              </div>
              <Badge variant="blue" size="sm">
                Power ON
              </Badge>
            </div>
            <p className="text-sm text-slate-600 leading-relaxed">
              The glass appears transparent, maintaining an open visual connection, daylight
              transmission, and spacious sightlines across the interior.
            </p>
          </div>

          {/* PRIVATE State Card */}
          <div
            onClick={() => setPreset("private")}
            className={`p-6 rounded-2xl cursor-pointer transition-all border ${
              sliderPos < 30
                ? "bg-white border-[#66BEAE] shadow-md ring-2 ring-[#66BEAE]/30"
                : "bg-white/70 border-slate-200 hover:border-[#66BEAE]/50 shadow-xs"
            }`}
          >
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2.5">
                <span className="w-8 h-8 rounded-lg bg-[#edf8f6] flex items-center justify-center text-[#2a8575]">
                  <Shield className="w-4 h-4" />
                </span>
                <h3 className="text-lg font-bold text-slate-900">PRIVATE</h3>
              </div>
              <Badge variant="teal" size="sm">
                Power OFF
              </Badge>
            </div>
            <p className="text-sm text-slate-600 leading-relaxed">
              The glass appears frosted, providing visual privacy by scattering ambient light
              evenly while preserving natural room illumination without requiring curtains or blinds.
            </p>
          </div>
        </div>

        {/* Large Interactive Comparison Stage */}
        <div className="max-w-5xl mx-auto rounded-3xl overflow-hidden glass-panel p-3 sm:p-5 shadow-2xl border border-slate-200">
          {/* Controller Bar with CLEAR / PRIVATE Toggle Buttons */}
          <div className="flex flex-wrap items-center justify-between gap-3 mb-4 px-2 py-1">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#66BEAE] animate-pulse" />
              <span className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                Live State Simulator
              </span>
            </div>

            {/* State Mode Switcher */}
            <div className="inline-flex rounded-xl bg-slate-100 p-1 border border-slate-200 text-xs font-semibold">
              <button
                type="button"
                onClick={() => setPreset("clear")}
                className={`px-3.5 py-1.5 rounded-lg transition-all ${
                  sliderPos > 70
                    ? "bg-white text-[#286497] shadow-xs font-bold"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                CLEAR (ON)
              </button>
              <button
                type="button"
                onClick={() => setPreset("private")}
                className={`px-3.5 py-1.5 rounded-lg transition-all ${
                  sliderPos < 30
                    ? "bg-white text-[#286497] shadow-xs font-bold"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                PRIVATE (OFF)
              </button>
            </div>
          </div>

          <div
            className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden select-none cursor-ew-resize bg-slate-200 group"
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
            {/* Base Private Image */}
            <div className="absolute inset-0 w-full h-full">
              <Image
                src="/images/hero/hero-smart-glass-private.jpg"
                alt="SG Smart Glass - Frosted Privacy State"
                fill
                className="object-cover"
                sizes="(max-width: 1280px) 100vw, 1100px"
              />
              <div className="absolute bottom-6 right-6 bg-slate-900/85 backdrop-blur-md text-white px-3.5 py-1.5 rounded-lg text-xs font-semibold tracking-wider uppercase shadow-md flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-slate-400" />
                Private Mode (Power OFF)
              </div>
            </div>

            {/* Clipped Clear Image */}
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
              className="absolute top-0 bottom-0 w-1 bg-white shadow-[0_0_15px_rgba(0,0,0,0.5)] pointer-events-none"
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
              <span>Instantaneous transition in under 1/10th of a second</span>
            </div>
            <div className="text-slate-400">
              Drag horizontally across the glass or tap CLEAR / PRIVATE to toggle states
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
