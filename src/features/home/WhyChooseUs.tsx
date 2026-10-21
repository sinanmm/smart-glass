import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/content/siteConfig";
import {
  Award,
  Compass,
  Scissors,
  Network,
  HeadphonesIcon,
  CheckCircle,
  ArrowRight,
} from "lucide-react";

export function WhyChooseUs() {
  const strengths = [
    {
      icon: Award,
      title: "17+ Years of Industry Expertise",
      description:
        "Backed by the established architectural heritage of Technical Glass and Glazing India Pvt. Ltd., bringing deep technical glazing knowledge to every project.",
    },
    {
      icon: Network,
      title: "All-India Installation Capability",
      description:
        "Comprehensive site coordination and installation presence across Kerala and throughout major metropolitan regions across India.",
    },
    {
      icon: Compass,
      title: "Planned Site Coordination",
      description:
        "Proactive electrical point planning, conduit layout review, and synchronized scheduling with appointed glass contractors before glazing commences.",
    },
    {
      icon: Scissors,
      title: "Precision Film Customisation",
      description:
        "Smart film is custom cut, prepared, and terminal-fitted to confirmed millimeter measurements in our specialized facility, ensuring clean edge geometry.",
    },
    {
      icon: HeadphonesIcon,
      title: "Dedicated After-Sales Support",
      description:
        "Ongoing technical guidance, warranty backing, and responsive maintenance support to protect your architectural glazing investment long-term.",
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#F5F9FB] border-b border-slate-200/80">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Visual Asset and Experience Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200 aspect-[4/5] bg-slate-100">
              <Image
                src="/images/about/facility.jpg"
                alt="SG Smart Glass precision film preparation and testing unit"
                fill
                quality={95}
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 600px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />

              {/* Floating Badge on Image */}
              <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl glass-panel shadow-lg border border-white/40">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-[#286497] text-white flex items-center justify-center font-bold text-lg shrink-0">
                    17+
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#286497] block">
                      Proven Heritage
                    </span>
                    <p className="text-xs text-slate-700 font-medium">
                      Decades of specialised glass & glazing execution
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Strengths and Positioning */}
          <div className="lg:col-span-7">
            <SectionHeading
              badge="Why Choose SG"
              badgeVariant="blue"
              title="Operational Discipline. Architectural Precision."
              description="SG Smart Glass combines advanced PDLC technology with end-to-end site coordination, ensuring every installation functions seamlessly with building systems."
              align="left"
              className="mb-8"
            />

            {/* List of 5 Strengths */}
            <div className="space-y-5">
              {strengths.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="flex items-start gap-4 p-4 rounded-xl bg-white border border-slate-200/70 shadow-xs hover:border-[#286497]/30 transition-colors"
                  >
                    <div className="w-10 h-10 rounded-lg bg-[#eaf2f8] flex items-center justify-center text-[#286497] shrink-0 mt-0.5">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-slate-900">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-sm text-slate-600 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-8 pt-4 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <Button
                href="/about"
                variant="primary"
                size="md"
                icon={<ArrowRight className="w-4 h-4" />}
              >
                Learn About Our Heritage
              </Button>
              <span className="text-xs text-slate-500">
                Powered by Technical Glass and Glazing India Pvt. Ltd.
              </span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
