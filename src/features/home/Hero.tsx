"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Eye, ShieldAlert, Sparkles, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { siteConfig } from "@/content/siteConfig";

export function Hero() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [activeState, setActiveState] = useState<"clear" | "private" | "slider">("slider");
  const [isDragging, setIsDragging] = useState(false);

  const handleSliderMove = (clientX: number, rect: DOMRect) => {
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percent);
    setActiveState("slider");
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    handleSliderMove(e.touches[0].clientX, rect);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging && e.buttons !== 1) return;
    const rect = e.currentTarget.getBoundingClientRect();
    handleSliderMove(e.clientX, rect);
  };

  const setFixedState = (state: "clear" | "private") => {
    setActiveState(state);
    setSliderPosition(state === "clear" ? 100 : 0);
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#F5F9FB] via-white to-white pt-8 pb-16 lg:pt-14 lg:pb-24">
      {/* Subtle architectural grid pattern background */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          backgroundImage:
            "linear-gradient(to right, #E2ECF2 1px, transparent 1px), linear-gradient(to bottom, #E2ECF2 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Headline & Value Proposition */}
          <div className="lg:col-span-5 flex flex-col items-start text-left z-10">
            <div className="mb-4">
              <Badge variant="teal" size="md">
                <Sparkles className="w-3.5 h-3.5 text-[#2a8575]" />
                PDLC Smart Film Technology
              </Badge>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-extrabold text-[#286497] tracking-tight leading-[1.12]">
              SMART GLASS.
              <br />
              <span className="text-slate-900">SMARTER PRIVACY.</span>
            </h1>

            <p className="mt-5 text-base sm:text-lg text-slate-600 leading-relaxed">
              Switch between transparency and privacy at the touch of a button.{" "}
              <strong className="text-slate-800 font-semibold">SG Smart Glass</strong> uses
              advanced PDLC smart film to bring intelligent privacy to modern spaces.
            </p>

            {/* Quick credentials */}
            <div className="mt-6 flex flex-wrap gap-y-2 gap-x-4 text-xs font-medium text-slate-600">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#66BEAE]" />
                3-Year Warranty
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#66BEAE]" />
                99% UV Protection
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#66BEAE]" />
                All-India Glazing Network
              </span>
            </div>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto">
              <Button
                href="/products"
                variant="primary"
                size="lg"
                icon={<ArrowRight className="w-4 h-4" />}
              >
                Explore Products
              </Button>
              <Button
                href="/contact"
                variant="secondary"
                size="lg"
              >
                Get a Quote
              </Button>
            </div>

            {/* Attribution note */}
            <p className="mt-6 text-[12px] text-slate-600 leading-normal border-l-2 border-[#66BEAE] pl-3 py-0.5">
              Powered by <span className="text-slate-700 font-medium">{siteConfig.legalCompanyName}</span>.
              Custom film preparation, site coordination & electrical testing.
            </p>
          </div>

          {/* Right Column: Interactive Smart Glass Demonstration */}
          <div className="lg:col-span-7 flex flex-col items-center">
            {/* Interactive Controller Card */}
            <div className="w-full rounded-2xl glass-panel p-3 sm:p-4 shadow-xl border border-slate-200/90 relative">
              {/* Controller Bar */}
              <div className="flex flex-wrap items-center justify-between gap-3 mb-3 px-2 py-1">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#66BEAE] animate-pulse" />
                  <span className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                    Interactive Demonstration
                  </span>
                </div>

                {/* State Mode Switcher */}
                <div className="inline-flex rounded-lg bg-slate-100 p-1 border border-slate-200 text-xs font-semibold">
                  <button
                    type="button"
                    onClick={() => setFixedState("clear")}
                    className={`px-3 py-1.5 rounded-md transition-all ${
                      sliderPosition > 80 && activeState === "clear"
                        ? "bg-white text-[#286497] shadow-xs font-bold"
                        : "text-slate-600 hover:text-slate-900"
                    }`}
                  >
                    CLEAR (ON)
                  </button>
                  <button
                    type="button"
                    onClick={() => setFixedState("private")}
                    className={`px-3 py-1.5 rounded-md transition-all ${
                      sliderPosition < 20 && activeState === "private"
                        ? "bg-white text-[#286497] shadow-xs font-bold"
                        : "text-slate-600 hover:text-slate-900"
                    }`}
                  >
                    PRIVATE (OFF)
                  </button>
                </div>
              </div>

              {/* Before/After Draggable Interactive Showcase */}
              <div
                className="relative aspect-[16/10] sm:aspect-[16/9] w-full rounded-xl overflow-hidden select-none cursor-ew-resize bg-slate-100 shadow-inner group"
                onMouseDown={() => setIsDragging(true)}
                onMouseUp={() => setIsDragging(false)}
                onMouseLeave={() => setIsDragging(false)}
                onMouseMove={handleMouseMove}
                onTouchMove={handleTouchMove}
                role="slider"
                aria-label="Smart glass clear versus frosted privacy comparison"
                aria-valuemin={0}
                aria-valuemax={100}
                aria-valuenow={Math.round(sliderPosition)}
              >
                {/* Background Image: PRIVATE (Frosted Smart Glass) */}
                <div className="absolute inset-0 w-full h-full">
                  <Image
                    src="/images/hero/hero-smart-glass-private.jpg"
                    alt="SG Smart Glass in Private Frosted State"
                    fill
                    priority
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 700px"
                  />
                  <div className="absolute bottom-4 right-4 bg-slate-900/80 backdrop-blur-xs text-white text-[11px] font-semibold tracking-wider px-2.5 py-1 rounded-md uppercase">
                    Private Mode (Power OFF)
                  </div>
                </div>

                {/* Foreground Image: CLEAR (Transparent Smart Glass) Clipped by sliderPosition */}
                <div
                  className="absolute inset-0 h-full overflow-hidden"
                  style={{ width: `${sliderPosition}%` }}
                >
                  <div className="relative w-full h-full min-w-[300px] sm:min-w-[600px] lg:min-w-[700px] h-full">
                    <Image
                      src="/images/hero/hero-smart-glass-clear.jpg"
                      alt="SG Smart Glass in Clear Transparent State"
                      fill
                      priority
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 700px"
                    />
                    <div className="absolute bottom-4 left-4 bg-[#286497]/90 backdrop-blur-xs text-white text-[11px] font-semibold tracking-wider px-2.5 py-1 rounded-md uppercase">
                      Clear View (Power ON)
                    </div>
                  </div>
                </div>

                {/* Divider Line & Handle */}
                <div
                  className="absolute top-0 bottom-0 w-1 bg-white shadow-[0_0_12px_rgba(0,0,0,0.4)] pointer-events-none"
                  style={{ left: `${sliderPosition}%` }}
                >
                  <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-white shadow-lg border-2 border-[#286497] flex items-center justify-center text-[#286497] pointer-events-auto">
                    <svg
                      className="w-4 h-4 fill-current"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
                      <path d="M15.41 7.41L10.83 12l4.58 4.59L14 18l-6-6 6-6 1.41 1.41z" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Instructions and caption */}
              <div className="flex items-center justify-between pt-3 px-1 text-xs text-slate-500">
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#286497]" />
                  Drag the slider or tap buttons above to compare states
                </span>
                <span className="text-slate-400 hidden sm:inline">
                  Boardroom Partition Demonstration
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
