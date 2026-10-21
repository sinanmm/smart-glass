import Image from "next/image";
import { ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { siteConfig } from "@/content/siteConfig";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#0A1826] min-h-[580px] sm:min-h-[640px] lg:min-h-[700px] flex items-center py-16 sm:py-20 lg:py-28">
      {/* Background Architectural Photograph with Smart Glass Partition */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/images/hero/hero-architectural-bg.jpg"
          alt="SG Smart Glass architectural installation with switchable privacy partitions"
          fill
          priority
          quality={90}
          className="object-cover object-[center_right] sm:object-right"
          sizes="100vw"
        />

        {/* Graduated Dark Navy Overlay: strongest behind the text on the left, fading toward the centre and right to showcase the smart glass interior */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#07131F]/95 via-[#0A1B2C]/90 sm:via-[#0A1B2C]/80 to-[#0A1B2C]/35 pointer-events-none" />

        {/* Subtle top & bottom vignette to frame the architectural space */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#07131F]/50 via-transparent to-[#07131F]/70 pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Balanced, Left-Aligned Content Group */}
        <div className="max-w-2xl lg:max-w-3xl flex flex-col items-start text-left animate-in fade-in duration-500">
          {/* Badge above the headline */}
          <div className="mb-5">
            <Badge
              variant="teal"
              size="md"
              className="bg-[#66BEAE]/15 text-[#66BEAE] border-[#66BEAE]/35 backdrop-blur-xs"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#66BEAE]" />
              PDLC Smart Film Technology
            </Badge>
          </div>

          {/* Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-extrabold text-white tracking-tight leading-[1.12]">
            SMART GLASS.
            <br />
            <span className="text-[#66BEAE]">SMARTER PRIVACY.</span>
          </h1>

          {/* Supporting paragraph below headline */}
          <p className="mt-5 sm:mt-6 text-base sm:text-lg lg:text-xl text-slate-200 leading-relaxed font-normal">
            Switch between transparency and privacy at the touch of a button.{" "}
            <strong className="text-white font-semibold">SG Smart Glass</strong> uses
            advanced PDLC smart film to bring intelligent privacy to modern spaces.
          </p>

          {/* Benefits */}
          <div className="mt-7 flex flex-wrap gap-y-3 gap-x-6 text-xs sm:text-sm font-medium text-slate-200">
            <span className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#66BEAE] shrink-0" />
              3-Year Warranty
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#66BEAE] shrink-0" />
              99% UV Protection
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#66BEAE] shrink-0" />
              All-India Glazing Network
            </span>
          </div>

          {/* CTA Buttons */}
          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
            <Button
              href="/products"
              variant="teal"
              size="lg"
              className="shadow-lg shadow-teal-900/30 hover:shadow-teal-500/20"
              icon={<ArrowRight className="w-4 h-4" />}
            >
              Explore Products
            </Button>
            <Button
              href="/contact"
              variant="glass"
              size="lg"
              className="bg-white/90 hover:bg-white text-[#286497] hover:text-[#1d4d75] border-white/40 backdrop-blur-md shadow-xs font-semibold"
            >
              Get a Quote
            </Button>
          </div>

          {/* Attribution note */}
          <p className="mt-8 sm:mt-10 text-[12px] sm:text-[13px] text-slate-300/80 leading-normal border-l-2 border-[#66BEAE] pl-3 py-0.5">
            Powered by <span className="text-white font-medium">{siteConfig.legalCompanyName}</span>.
            Custom film preparation, site coordination & electrical testing.
          </p>
        </div>
      </div>
    </section>
  );
}
