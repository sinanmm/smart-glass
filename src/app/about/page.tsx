import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ShieldCheck,
  Building2,
  Clock,
  MapPin,
  CheckCircle2,
  ArrowRight,
  Layers,
  Wrench,
  HeadphonesIcon,
  Compass,
  Award,
  Globe2,
  Factory,
  Sparkles,
  PhoneCall,
  Check,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { siteConfig } from "@/content/siteConfig";
import { FinalCTA } from "@/features/home/FinalCTA";

export const metadata: Metadata = {
  title: "About Us | Technical Glass and Glazing | SG Smart Glass",
  description:
    "Learn about Technical Glass and Glazing, our Dubai parent company Century Toughened Glass & Broadway Group with 35+ years experience, and SG Smart Glass.",
};

export default function AboutPage() {
  const pillars = [
    {
      num: ".01",
      title: "Over 35 Years of Industry Experience",
      desc: "Deep-rooted heritage through our parent company, renowned for pioneering glass processing and architectural innovations.",
    },
    {
      num: ".02",
      title: "International Expertise & Global Standards",
      desc: "Delivering world-class switchable privacy solutions globally since 2010 to Dubai, UAE, and international luxury developers.",
    },
    {
      num: ".03",
      title: "Specialized Customization & Testing Facility",
      desc: "High-precision film preparation, custom cutting, and clean-room testing for flawless optical performance.",
    },
    {
      num: ".04",
      title: "Premium Smart Glass Technology",
      desc: "Ultra-clear PDLC formulations reaching up to 95% light transmission with instantaneous sub-100ms switching response.",
    },
    {
      num: ".05",
      title: "Fast Installation & Technical Support",
      desc: "Professional site coordination, wiring layouts, and quick turnaround execution across all regions.",
    },
    {
      num: ".06",
      title: "Turnkey Installation (Smart Glass Only)",
      desc: "Dedicated in-house technicians executing smart glass projects seamlessly in corporate, residential, and commercial spaces.",
    },
    {
      num: ".07",
      title: "3 Years Replacement Warranty",
      desc: "Genuine replacement warranty covering smart glass optical film stability and switching reliability.",
    },
    {
      num: ".08",
      title: "Extended Warranty Available (Up to 5 Years)",
      desc: "Additional two-year extended warranty available for extended peace of mind and long-term investment protection.",
    },
    {
      num: ".09",
      title: "Customized Smart Glass Solutions",
      desc: "Tailored to exact architectural drawings, curved applications, custom dimensions, and automated building integrations.",
    },
    {
      num: ".10",
      title: "Dedicated Support & Technical Service",
      desc: "Responsive ongoing technical support, preventive checks, and reliable after-sales service throughout the project lifecycle.",
    },
  ];

  const milestones = [
    {
      year: "Over 35 Years",
      title: "Industry Heritage in Dubai",
      desc: "Our parent group established the renowned Century Toughened Glass Plant and Broadway Group for architectural glass and hardware engineering in Dubai.",
      tag: "Heritage",
    },
    {
      year: "2010",
      title: "Global HD Smart Glass Launch",
      desc: "Began delivering advanced HD Smart Glass Solutions globally, combining cutting-edge PDLC technology, quality, and modern design.",
      tag: "Global Innovation",
    },
    {
      year: "2023",
      title: "SG Smart Glass Brand Launch",
      desc: "Established Technical Glass and Glazing with specialized in-house preparation and testing facilities to deliver premium switchable solutions under the brand SG Smart Glass.",
      tag: "Brand Launch",
    },
  ];

  return (
    <>
      {/* About Hero Banner */}
      <section className="bg-gradient-to-b from-[#F5F9FB] to-white py-14 lg:py-20 border-b border-slate-200/80">
        <Container>
          <div className="max-w-3xl">
            <Badge variant="blue" size="md" className="mb-4">
              Company Background & Heritage
            </Badge>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#286497] tracking-tight leading-tight">
              About Technical Glass and Glazing
            </h1>
            <p className="mt-5 text-base sm:text-lg text-slate-700 leading-relaxed font-medium">
              Technical Glass and Glazing is a trusted name in advanced architectural glazing and smart glass solutions.
              Our parent company is based in Dubai, where we successfully established the renowned{" "}
              <strong className="text-slate-900 font-bold">Century Toughened Glass Plant</strong> and the{" "}
              <strong className="text-slate-900 font-bold">Broadway Group</strong> for architectural glass and hardware
              engineering, with over 35 years of expertise and innovation in the glass industry.
            </p>
          </div>
        </Container>
      </section>

      {/* Official Company Story Section */}
      <section className="py-16 lg:py-24 bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Visual Column */}
            <div className="lg:col-span-6 relative">
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden bg-slate-100 border border-slate-200 shadow-xl">
                <Image
                  src="/images/about/facility.jpg"
                  alt="SG Smart Glass precision customization and testing facility"
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 600px"
                />
              </div>

              {/* Stat Cards Row */}
              <div className="grid grid-cols-2 gap-4 mt-6">
                <div className="p-5 rounded-2xl bg-[#F5F9FB] border border-slate-200/90 light-card-highlight text-card-elevated">
                  <div className="text-2xl lg:text-3xl font-extrabold text-[#286497]">35+</div>
                  <h4 className="text-xs font-bold text-slate-900 mt-1">
                    Years Industry Expertise
                  </h4>
                  <p className="text-[11px] text-slate-500 mt-0.5">
                    Parent Century Toughened Glass & Broadway Group Dubai
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-[#F5F9FB] border border-slate-200/90 light-card-highlight text-card-elevated">
                  <div className="text-2xl lg:text-3xl font-extrabold text-[#2a8575]">Since 2010</div>
                  <h4 className="text-xs font-bold text-slate-900 mt-1">
                    HD Smart Glass Globally
                  </h4>
                  <p className="text-[11px] text-slate-500 mt-0.5">
                    Delivered across UAE, Middle East & International markets
                  </p>
                </div>
              </div>
            </div>

            {/* Content Column */}
            <div className="lg:col-span-6 space-y-6">
              <Badge variant="teal" size="sm">
                About Us
              </Badge>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight leading-snug">
                Pioneering Smart Glass Technology Across the Globe
              </h2>

              <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                <p>
                  Since 2010, we have been delivering advanced HD Smart Glass Solutions across the globe,
                  combining technology, quality, and modern design to create premium smart glass experiences.
                </p>

                <p>
                  We deliver specialized smart glass and switchable privacy solutions under the premium brand:{" "}
                  <strong className="text-[#286497] font-bold">SG Smart Glass</strong>, backed by{" "}
                  <strong className="text-slate-900 font-bold">Technical Glass and Glazing</strong>.
                </p>

                <p>
                  We specialize in the customization, precision preparation, and installation of advanced smart glass solutions
                  with in-house testing and cutting facilities in Nedumbassery, Ernakulam, Kerala. Our
                  solutions are designed for luxury interiors, commercial spaces, corporate offices,
                  villas, jewellery showrooms, hospitals, hotels, and modern architectural landmarks.
                </p>
              </div>

              <div className="pt-4 border-t border-slate-200 flex flex-wrap gap-4 text-xs font-semibold text-slate-700">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#66BEAE]" />
                  In-House Customization Facility
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#66BEAE]" />
                  Turnkey Installation (Smart Glass Only)
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#66BEAE]" />
                  Up to 5-Year Warranty
                </span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Timeline / Heritage Milestones */}
      <section className="py-16 lg:py-24 bg-[#F5F9FB] border-y border-slate-200/80">
        <Container>
          <SectionHeading
            badge="Our Journey"
            badgeVariant="blue"
            title="A Proven Track Record of Excellence"
            description="From establishing foundational glass plants in the Middle East to delivering precision smart glass technology and turnkey architectural solutions."
            align="center"
            className="mb-14"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {milestones.map((m, idx) => (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-white border border-slate-200/90 light-card-highlight text-card-elevated hover:shadow-lg transition-luxury flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xl font-extrabold text-[#286497] tracking-tight">
                      {m.year}
                    </span>
                    <Badge variant="teal" size="sm">
                      {m.tag}
                    </Badge>
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-2">
                    {m.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {m.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 10 Core Reasons to Choose SG Smart Glass (From Brochure) */}
      <section className="py-16 lg:py-24 bg-white">
        <Container>
          <SectionHeading
            badge="Why Choose Us"
            badgeVariant="teal"
            title="Why Choose SG Smart Glass?"
            description="Direct from our official company credentials: 10 reasons leading architects and discerning clients trust our technology."
            align="center"
            className="mb-14"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {pillars.map((item) => (
              <div
                key={item.num}
                className="p-6 rounded-2xl bg-[#F5F9FB] border border-slate-200/90 light-card-highlight text-card-elevated hover:border-[#286497]/40 hover:bg-white hover:shadow-md transition-luxury flex flex-col"
              >
                <div className="w-10 h-10 rounded-xl bg-[#286497] text-white flex items-center justify-center font-bold text-sm mb-4 shrink-0 shadow-xs">
                  {item.num}
                </div>
                <h4 className="text-sm font-bold text-slate-900 mb-2 leading-snug">
                  {item.title}
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed mt-auto">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Official Headquarters Card */}
      <section className="py-16 bg-[#F5F9FB] border-t border-slate-200/80">
        <Container>
          <div className="max-w-4xl mx-auto rounded-3xl bg-white p-8 sm:p-10 border border-slate-200/90 shadow-sm light-card-highlight text-card-elevated">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <Badge variant="blue" size="sm" className="mb-3">
                  Operations & Experience Centre
                </Badge>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  Technical Glass and Glazing
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Palaprassery Juma Masjid Complex, Chengamanad P.O, Nedumbassery,
                  Ernakulam District, Kerala — Pin: 683578
                </p>
                <div className="mt-4 space-y-1.5 text-xs text-slate-700">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-slate-900">Phone:</span>
                    <a href="tel:+918714933307" className="hover:text-[#286497] font-medium">+91 8714 933 307</a>,{" "}
                    <a href="tel:+918714744407" className="hover:text-[#286497] font-medium">+91 8714 744 407</a>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-slate-900">Direct:</span>
                    <a href="tel:+918714799907" className="hover:text-[#286497] font-medium">+91 8714 799 907</a>,{" "}
                    <a href="tel:+918714922207" className="hover:text-[#286497] font-medium">+91 8714 922 207</a>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-slate-900">Email:</span>
                    <a href="mailto:info@sgsmartglass.com" className="hover:text-[#286497] font-medium">info@sgsmartglass.com</a>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row md:flex-col gap-3 justify-center">
                <Button
                  href="/contact"
                  variant="primary"
                  size="md"
                  icon={<ArrowRight className="w-4 h-4" />}
                >
                  Contact Our Engineers
                </Button>
                <Button
                  href={siteConfig.contact.whatsapp.url}
                  variant="secondary"
                  size="md"
                  icon={<PhoneCall className="w-4 h-4 text-[#25D366]" />}
                >
                  Instant WhatsApp Connect
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Final Call to Action */}
      <FinalCTA />
    </>
  );
}
