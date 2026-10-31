"use client";

import { useRef, useEffect } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { siteConfig } from "@/content/siteConfig";

export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.defaultMuted = true;
      videoRef.current.muted = true;
      videoRef.current.play().catch(() => {
        // Autoplay policy fallback
      });
    }
  }, []);

  return (
    <section className="relative overflow-hidden min-h-[560px] sm:min-h-[620px] lg:min-h-[660px] flex items-center bg-[#07131F] text-white">
      {/* Background Video Layer */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none select-none">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover object-center"
        >
          <source src="/hero1.mp4" type="video/mp4" />
        </video>

        {/* Lighter, softer directional scrim so the video remains bright and clearly visible */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/30 to-transparent pointer-events-none" />

        {/* Subtle vertical vignette */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-transparent to-black/40 pointer-events-none" />
      </div>

      {/* Main Content Container - Compact & Tight Vertical Rhythm */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12 sm:py-16 lg:py-20">
        <div className="max-w-2xl flex flex-col items-start text-left">
          
          {/* Badge */}
          <div
            data-reveal="fade-up"
            data-reveal-delay="50"
            className="mb-3 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/40 border border-white/20 backdrop-blur-md text-[#66BEAE] text-[11px] font-bold tracking-wider uppercase shadow-md"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#66BEAE] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#66BEAE]"></span>
            </span>
            <span>PDLC Smart Film Technology</span>
          </div>

          {/* Heading - Refined Size & Crisp Visibility Font */}
          <h1
            data-reveal="fade-up"
            data-reveal-delay="120"
            className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold tracking-tight leading-[1.15] text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.85)]"
          >
            SMART GLASS.
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#66BEAE] via-[#86e2d3] to-white drop-shadow-[0_2px_10px_rgba(102,190,174,0.35)]">
              SMARTER PRIVACY.
            </span>
          </h1>

          {/* Supporting Copy - Compact Spacing & Clear Font */}
          <p
            data-reveal="fade-up"
            data-reveal-delay="190"
            className="mt-3.5 text-sm sm:text-base text-slate-100/95 leading-relaxed font-normal max-w-xl drop-shadow-[0_1px_6px_rgba(0,0,0,0.85)]"
          >
            Switch between crystal clarity and complete privacy at the touch of a button.{" "}
            <strong className="text-white font-semibold">SG Smart Glass</strong> integrates advanced
            switchable smart film into modern architectural spaces.
          </p>

          {/* Action CTA Buttons */}
          <div
            data-reveal="fade-up"
            data-reveal-delay="260"
            className="mt-5 sm:mt-6 flex flex-wrap items-center gap-3 w-full sm:w-auto"
          >
            <Link
              href="/products"
              className="inline-flex items-center justify-center gap-2 font-bold text-xs sm:text-sm tracking-wide px-6 py-3 rounded-xl bg-[#66BEAE] hover:bg-[#52ad9d] text-slate-950 shadow-lg shadow-teal-900/30 hover:shadow-teal-500/30 active:scale-[0.98] transition-all"
            >
              <span>Explore Products</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center font-bold text-xs sm:text-sm tracking-wide px-6 py-3 rounded-xl bg-[#286497] hover:bg-[#1f507a] text-white shadow-lg shadow-[#286497]/40 hover:shadow-[#286497]/60 border border-blue-400/30 active:scale-[0.98] transition-all"
            >
              Get a Quote
            </Link>
          </div>

          {/* Clean Attribution */}
          <div
            data-reveal="fade-up"
            data-reveal-delay="330"
            className="mt-4 sm:mt-5 flex items-center gap-2.5"
          >
            <span className="w-1.5 h-4 rounded-full bg-[#66BEAE]" />
            <p className="text-xs text-slate-200/90 drop-shadow-md">
              Powered by <span className="text-white font-semibold">{siteConfig.legalCompanyName}</span>
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
