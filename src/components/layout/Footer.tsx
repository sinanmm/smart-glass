import Link from "next/link";
import Image from "next/image";
import {
  Phone,
  Mail,
  MapPin,
  ArrowUpRight,
  Shield,
  Clock,
  Sparkles,
} from "lucide-react";
import { siteConfig } from "@/content/siteConfig";
import { navItems } from "@/content/navigation";
import { smartFilmVariants, glassProfiles } from "@/content/products";
import { applications } from "@/content/applications";
import { Container } from "@/components/ui/Container";

export function Footer() {
  const currentYear = 2026;

  return (
    <footer className="bg-[#F5F9FB] border-t border-slate-200/80 text-[#2D3741] transition-colors">
      {/* Top Value Banner */}
      <div className="border-b border-slate-200/70 bg-white">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-8">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#eaf2f8] flex items-center justify-center shrink-0 text-[#286497]">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-semibold text-slate-900 text-sm">
                  17+ Years Industry Heritage
                </h4>
                <p className="text-xs text-slate-500 mt-0.5">
                  Powered by Technical Glass and Glazing India Pvt. Ltd.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#edf8f6] flex items-center justify-center shrink-0 text-[#2a8575]">
                <Shield className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-semibold text-slate-900 text-sm">
                  3-Year Limited Warranty
                </h4>
                <p className="text-xs text-slate-500 mt-0.5">
                  High-grade PDLC film custom-prepared to confirmed dimensions
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#f4f8fb] flex items-center justify-center shrink-0 text-[#286497]">
                <Sparkles className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-semibold text-slate-900 text-sm">
                  All-India Installation Capability
                </h4>
                <p className="text-xs text-slate-500 mt-0.5">
                  Coordinated glazing, site planning & after-sales support
                </p>
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* Main Footer Links */}
      <div className="py-14 lg:py-16">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
            {/* Col 1 & 2: Brand Information */}
            <div className="lg:col-span-2 space-y-4">
              <Link href="/" className="inline-block">
                <div className="relative w-36 h-12">
                  <Image
                    src={siteConfig.logo.primary}
                    alt={siteConfig.brandName}
                    fill
                    className="object-contain object-left"
                    sizes="160px"
                  />
                </div>
              </Link>

              <p className="text-sm text-slate-600 leading-relaxed max-w-md pt-2">
                SG Smart Glass is the switchable privacy glass brand powered by{" "}
                <span className="font-semibold text-slate-800">
                  {siteConfig.legalCompanyName}
                </span>
                . We provide custom PDLC smart film preparation, site coordination,
                glazing integration, and after-sales support across India and the UAE.
              </p>

              {/* Social Media Links */}
              <div className="pt-2">
                <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-3">
                  Connect With Us
                </span>
                <div className="flex items-center gap-3">
                  {/* Facebook */}
                  <a
                    href={siteConfig.social.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:text-[#286497] hover:border-[#286497] transition-all shadow-xs"
                    aria-label="SG Smart Glass on Facebook"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                    </svg>
                  </a>

                  {/* Instagram */}
                  <a
                    href={siteConfig.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:text-[#286497] hover:border-[#286497] transition-all shadow-xs"
                    aria-label="SG Smart Glass on Instagram"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </a>

                  {/* YouTube */}
                  <a
                    href={siteConfig.social.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:text-[#286497] hover:border-[#286497] transition-all shadow-xs"
                    aria-label="SG Smart Glass on YouTube"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                    </svg>
                  </a>

                  {/* WhatsApp */}
                  <a
                    href={siteConfig.contact.whatsapp.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:text-[#25D366] hover:border-[#25D366] transition-all shadow-xs"
                    aria-label="Chat with SG Smart Glass on WhatsApp"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Col 3: Products */}
            <div>
              <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-4">
                Smart Film & Profiles
              </h4>
              <ul className="space-y-2.5 text-sm">
                {smartFilmVariants.map((item) => (
                  <li key={item.id}>
                    <Link
                      href={`/products/${item.slug}`}
                      className="text-slate-600 hover:text-[#286497] transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
                {glassProfiles.map((item) => (
                  <li key={item.id}>
                    <Link
                      href={`/products/${item.slug}`}
                      className="text-slate-600 hover:text-[#286497] transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 4: Applications */}
            <div>
              <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-4">
                Applications
              </h4>
              <ul className="space-y-2.5 text-sm">
                {applications.map((item) => (
                  <li key={item.id}>
                    <Link
                      href={`/applications#${item.slug}`}
                      className="text-slate-600 hover:text-[#286497] transition-colors"
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
                <li className="pt-1">
                  <Link
                    href="/applications"
                    className="inline-flex items-center gap-1 text-xs font-semibold text-[#286497] hover:underline"
                  >
                    View All Applications <ArrowUpRight className="w-3 h-3" />
                  </Link>
                </li>
              </ul>
            </div>

            {/* Col 5: Company & Contact */}
            <div>
              <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-4">
                Contact & Head Office
              </h4>
              <div className="space-y-3 text-sm text-slate-600">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-[#286497] shrink-0 mt-0.5" />
                  <span className="text-xs leading-relaxed">
                    {siteConfig.contact.address.full}
                  </span>
                </div>

                <div className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-[#286497] shrink-0" />
                  <a
                    href={`tel:${siteConfig.contact.indiaPrimary.tel}`}
                    className="text-xs hover:text-[#286497]"
                  >
                    {siteConfig.contact.indiaPrimary.display}
                  </a>
                </div>

                <div className="text-[11px] text-slate-500 pl-6 space-y-0.5">
                  <div>
                    Alt:{" "}
                    <a
                      href={`tel:${siteConfig.contact.additionalIndia[0].tel}`}
                      className="hover:text-[#286497]"
                    >
                      {siteConfig.contact.additionalIndia[0].display}
                    </a>
                  </div>
                  <div>
                    UAE:{" "}
                    <a
                      href={`tel:${siteConfig.contact.uae.tel}`}
                      className="hover:text-[#286497]"
                    >
                      {siteConfig.contact.uae.display}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-2.5 pt-1">
                  <Mail className="w-4 h-4 text-[#286497] shrink-0" />
                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className="text-xs hover:text-[#286497]"
                  >
                    {siteConfig.contact.email}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar: Copyright and Legal */}
          <div className="mt-12 pt-6 border-t border-slate-200/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
            <p>
              &copy; {currentYear} {siteConfig.legalCompanyName}. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link href="/about" className="hover:text-[#286497]">
                About Us
              </Link>
              <Link href="/contact" className="hover:text-[#286497]">
                Get a Quote
              </Link>
              <span className="text-slate-400">
                Official Brand: SG Smart Glass
              </span>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
}
