import Link from "next/link";
import { ArrowRight, MessageCircle, Phone, Sparkles } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { siteConfig } from "@/content/siteConfig";

export function FinalCTA() {
  return (
    <section className="py-20 lg:py-24 bg-gradient-to-br from-[#286497] via-[#20527d] to-[#173e5f] text-white relative overflow-hidden">
      {/* Subtle geometric glass lighting overlay */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(#66BEAE 1px, transparent 1px), radial-gradient(#ffffff 1px, #286497 1px)",
          backgroundSize: "32px 32px",
          backgroundPosition: "0 0, 16px 16px",
        }}
      />

      <Container className="relative z-10">
        <div className="max-w-3xl mx-auto text-center flex flex-col items-center">
          <Badge
            variant="teal"
            size="md"
            className="mb-6 bg-white/10 text-white border-white/20 backdrop-blur-xs"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#66BEAE]" />
            Consult With Glazing Specialists
          </Badge>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
            Make Your Glass Smarter.
          </h2>

          <p className="mt-5 text-base sm:text-lg text-blue-100/90 leading-relaxed max-w-2xl">
            Tell us about your project and our team will help you plan the right smart glass
            solution—from electrical conduit layouts and glass coordination to custom film
            preparation and final handover.
          </p>

          {/* Action CTAs */}
          <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4 w-full sm:w-auto">
            <Button
              href="/contact"
              variant="teal"
              size="lg"
              icon={<ArrowRight className="w-4 h-4" />}
            >
              Get a Quote
            </Button>

            <Button
              href={siteConfig.contact.whatsapp.url}
              variant="glass"
              size="lg"
              className="bg-white/90 hover:bg-white text-[#286497] hover:text-[#1d4d75] border-white/40 shadow-xs font-semibold"
              icon={<MessageCircle className="w-4 h-4 text-[#25D366]" />}
            >
              Chat on WhatsApp
            </Button>
          </div>

          {/* Quick contact prompt */}
          <div className="mt-10 pt-8 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 text-xs text-blue-200">
            <a
              href={`tel:${siteConfig.contact.indiaPrimary.tel}`}
              className="flex items-center gap-2 hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#66BEAE]" />
              <span>Direct: {siteConfig.contact.indiaPrimary.display}</span>
            </a>
            <span className="hidden sm:inline opacity-40">•</span>
            <span>All-India Coordination & Site Planning</span>
            <span className="hidden sm:inline opacity-40">•</span>
            <span>3-Year Warranty Backed</span>
          </div>
        </div>
      </Container>
    </section>
  );
}
