import type { Metadata } from "next";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  ShieldCheck,
  Building2,
  Globe,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { QuoteForm } from "@/features/contact/QuoteForm";
import { siteConfig } from "@/content/siteConfig";

export const metadata: Metadata = {
  title: "Contact SG Smart Glass | Smart Glass Consultation & Quote",
  description:
    "Contact Technical Glass and Glazing India Private Limited for smart glass, switchable privacy glass and PDLC smart film enquiries across the region and the UAE.",
};

interface ContactPageProps {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function ContactPage({ searchParams }: ContactPageProps) {
  const resolvedParams = await searchParams;
  const initialProduct =
    typeof resolvedParams.product === "string" ? resolvedParams.product : undefined;
  const initialApplication =
    typeof resolvedParams.application === "string"
      ? resolvedParams.application
      : undefined;

  return (
    <>
      {/* Contact Hero Banner */}
      <section className="bg-gradient-to-b from-[#F5F9FB] to-white py-14 lg:py-20 border-b border-slate-200/80">
        <Container>
          <div className="max-w-3xl">
            <div data-reveal="fade-up" data-reveal-delay="0" className="mb-4 inline-block">
              <Badge variant="blue" size="md">
                Enquiry & Support
              </Badge>
            </div>
            <h1
              data-reveal="fade-up"
              data-reveal-delay="70"
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#286497] tracking-tight leading-tight"
            >
              Contact SG Smart Glass
            </h1>
            <p
              data-reveal="fade-up"
              data-reveal-delay="140"
              className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed"
            >
              Connect directly with our smart glass specialists for project planning,
              PDLC film customisation, site coordination, and quotation estimates.
            </p>
          </div>
        </Container>
      </section>

      {/* Main Contact Section */}
      <section className="py-16 lg:py-24 bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left: Official Company Contact Cards */}
            <div className="lg:col-span-5 space-y-6">
              <div data-reveal="fade-up" data-reveal-delay="0">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-1">
                  Operating Entity
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                  {siteConfig.legalCompanyName}
                </h2>
                <p className="text-xs text-slate-500 mt-1">
                  Official Smart Glass Brand: {siteConfig.brandName}
                </p>
              </div>

              {/* Head Office Address */}
              <div
                data-reveal="card"
                data-reveal-delay="70"
                className="p-6 rounded-2xl bg-[#F5F9FB] border border-slate-200/90 flex items-start gap-4 shadow-sm light-card-highlight text-card-elevated"
              >
                <div className="w-10 h-10 rounded-xl bg-[#eaf2f8] flex items-center justify-center text-[#286497] shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-1">
                    Head Office & Facility Address
                  </h4>
                  <p className="text-sm text-slate-700 leading-relaxed">
                    {siteConfig.contact.address.complex},
                    <br />
                    {siteConfig.contact.address.area},
                    <br />
                    {siteConfig.contact.address.city}, {siteConfig.contact.address.state} —{" "}
                    {siteConfig.contact.address.pincode}
                  </p>
                </div>
              </div>

              {/* Telephones */}
              <div
                data-reveal="card"
                data-reveal-delay="140"
                className="p-6 rounded-2xl bg-[#F5F9FB] border border-slate-200/90 space-y-4 shadow-sm light-card-highlight text-card-elevated"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#eaf2f8] flex items-center justify-center text-[#286497] shrink-0 mt-0.5">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-1">
                      Direct Telephone Lines
                    </h4>

                    {/* Primary Support */}
                    <div className="mt-2">
                      <span className="text-xs text-slate-500 block">
                        Primary Support Desk:
                      </span>
                      <a
                        href={`tel:${siteConfig.contact.indiaPrimary.tel}`}
                        className="text-base font-bold text-[#286497] hover:underline"
                      >
                        {siteConfig.contact.indiaPrimary.display}
                      </a>
                    </div>

                    {/* Additional Contacts */}
                    <div className="mt-3 pt-3 border-t border-slate-200/60 space-y-1.5 text-xs text-slate-600">
                      <span className="text-slate-400 block font-medium">
                        Additional Technical Contacts:
                      </span>
                      {siteConfig.contact.additionalIndia.map((item, idx) => (
                        <div key={idx}>
                          <a
                            href={`tel:${item.tel}`}
                            className="hover:text-[#286497] font-semibold text-slate-800"
                          >
                            {item.display}
                          </a>
                        </div>
                      ))}
                    </div>

                    {/* UAE */}
                    <div className="mt-3 pt-3 border-t border-slate-200/60 text-xs">
                      <span className="text-slate-400 block font-medium">
                        UAE Office:
                      </span>
                      <a
                        href={`tel:${siteConfig.contact.uae.tel}`}
                        className="text-sm font-bold text-slate-800 hover:text-[#286497]"
                      >
                        {siteConfig.contact.uae.display}
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Email & WhatsApp Quick Row */}
              <div data-reveal="fade-up" data-reveal-delay="210" className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="p-5 rounded-2xl bg-[#F5F9FB] border border-slate-200 hover:border-[#286497]/40 transition-colors flex items-center gap-3.5"
                >
                  <div className="w-9 h-9 rounded-lg bg-[#eaf2f8] flex items-center justify-center text-[#286497] shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="truncate">
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                      Email Inbox
                    </span>
                    <span className="text-xs font-semibold text-slate-800 hover:text-[#286497] truncate block">
                      {siteConfig.contact.email}
                    </span>
                  </div>
                </a>

                <a
                  href={siteConfig.contact.whatsapp.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-5 rounded-2xl bg-[#edf8f6] border border-[#66BEAE]/40 hover:border-[#66BEAE] transition-colors flex items-center gap-3.5"
                >
                  <div className="w-9 h-9 rounded-lg bg-[#25D366] text-white flex items-center justify-center shrink-0">
                    <MessageCircle className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-[#2a8575] uppercase tracking-wider block">
                      Instant WhatsApp
                    </span>
                    <span className="text-xs font-semibold text-slate-900 block">
                      Chat with Engineer
                    </span>
                  </div>
                </a>
              </div>

              {/* Operational Notice */}
              <div data-reveal="fade-up" data-reveal-delay="260" className="p-5 rounded-2xl bg-white border border-slate-200 text-xs text-slate-600 space-y-2">
                <div className="flex items-center gap-2 font-bold text-slate-800">
                  <ShieldCheck className="w-4 h-4 text-[#66BEAE]" />
                  Service & Site Coordination Scope
                </div>
                <p className="leading-relaxed text-slate-500">
                  SG Smart Glass provides custom film preparation and installation coordination.
                  Base-glass selection is handled by the client or their appointed glass supplier.
                  Site visits for electrical planning are scheduled prior to smart glass installation.
                </p>
              </div>
            </div>

            {/* Right: Quotation Form */}
            <div data-reveal="card" data-reveal-delay="100" className="lg:col-span-7">
              <QuoteForm
                initialProduct={initialProduct}
                initialApplication={initialApplication}
              />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
