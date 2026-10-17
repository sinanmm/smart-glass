import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  CalendarCheck,
  MapPin,
  Ruler,
  Cpu,
  Layers,
  Zap,
  HelpCircle,
  ShieldCheck,
  AlertCircle,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { applications } from "@/content/applications";
import { projectWorkflow, existingGlassPolicy, scopeOfWorkClarification } from "@/content/workflow";
import { FinalCTA } from "@/features/home/FinalCTA";

export const metadata: Metadata = {
  title: "Smart Glass Applications & Installation",
  description:
    "See smart glass for offices, homes, hospitality, healthcare and more. Learn about PDLC smart film preparation and installation coordination across India.",
};

export default function ApplicationsPage() {
  const workflowIcons = [MapPin, Ruler, Cpu, CalendarCheck, Layers, Zap];

  return (
    <>
      {/* Applications Hero Banner */}
      <section className="bg-gradient-to-b from-[#F5F9FB] to-white py-14 lg:py-20 border-b border-slate-200/80">
        <Container>
          <div className="max-w-3xl">
            <Badge variant="teal" size="md" className="mb-4">
              Architectural Environments
            </Badge>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#286497] tracking-tight">
              Smart Glass Applications
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
              Discover how switchable privacy glass transforms modern commercial,
              residential, healthcare, and hospitality spaces with instant confidentiality
              and daylight transmission.
            </p>
          </div>
        </Container>
      </section>

      {/* Applications Detailed Gallery */}
      <section className="py-16 lg:py-24 bg-white">
        <Container>
          <div className="space-y-20 lg:space-y-28">
            {applications.map((app, index) => {
              const isEven = index % 2 === 0;
              return (
                <div
                  key={app.id}
                  id={app.slug}
                  className="scroll-mt-28 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center"
                >
                  {/* Image Column */}
                  <div className={`lg:col-span-6 ${isEven ? "lg:order-1" : "lg:order-2"}`}>
                    <div className="relative aspect-[16/10] rounded-3xl overflow-hidden bg-slate-100 border border-slate-200 shadow-xl group">
                      <Image
                        src={app.image}
                        alt={app.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 1024px) 100vw, 600px"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-40" />

                      <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-xs text-[#286497] text-xs font-bold px-3 py-1.5 rounded-lg shadow-sm">
                        {app.title}
                      </div>
                    </div>
                  </div>

                  {/* Content Column */}
                  <div className={`lg:col-span-6 ${isEven ? "lg:order-2" : "lg:order-1"}`}>
                    <Badge variant="blue" size="sm" className="mb-3">
                      Application {String(index + 1).padStart(2, "0")}
                    </Badge>

                    <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                      {app.title}
                    </h2>

                    <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed">
                      {app.fullDescription}
                    </p>

                    {/* Suitable Use Cases */}
                    <div className="mt-6">
                      <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-3">
                        Common Architectural Use Cases
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                        {app.useCases.map((useCase, idx) => (
                          <div key={idx} className="flex items-start gap-2 bg-[#F5F9FB] p-2.5 rounded-lg border border-slate-200/60">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#66BEAE] shrink-0 mt-0.5" />
                            <span>{useCase}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Action */}
                    <div className="mt-8 flex flex-wrap items-center gap-4">
                      <Button
                        href={`/contact?application=${encodeURIComponent(app.title)}`}
                        variant="primary"
                        size="md"
                        icon={<ArrowRight className="w-4 h-4" />}
                      >
                        Get a Quote for {app.title}
                      </Button>

                      <div className="text-xs text-slate-500">
                        Recommended: {app.idealProducts.join(", ")}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Detailed Installation Workflow Section */}
      <section id="workflow" className="scroll-mt-24 py-20 lg:py-28 bg-[#F5F9FB] border-y border-slate-200/80">
        <Container>
          <SectionHeading
            badge="Engineering & Coordination"
            badgeVariant="teal"
            title="How an SG Smart Glass Project Works"
            description="Our proven six-stage coordination framework ensures seamless execution across Kerala and throughout India."
            align="center"
            className="mb-16"
          />

          {/* 6 Step Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {projectWorkflow.map((step, idx) => {
              const Icon = workflowIcons[idx] || CheckCircle2;
              return (
                <div
                  key={step.step}
                  className="p-8 rounded-3xl bg-white border border-slate-200 shadow-xs hover:shadow-xl hover:border-[#286497]/40 transition-luxury flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <span className="text-3xl font-extrabold text-[#286497]/25 font-mono">
                        0{step.step}
                      </span>
                      <div className="w-12 h-12 rounded-xl bg-[#eaf2f8] flex items-center justify-center text-[#286497]">
                        <Icon className="w-6 h-6" />
                      </div>
                    </div>

                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
                      {step.timing}
                    </span>

                    <h3 className="text-lg font-bold text-slate-900 mb-3">
                      {step.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                      {step.summary}
                    </p>

                    <p className="text-xs text-slate-500 leading-relaxed pt-3 border-t border-slate-100">
                      {step.detail}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100">
                    <span className="text-[11px] font-semibold text-[#2a8575] flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      {step.keyTakeaway}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Existing Fixed Glass Policy */}
          <div className="mt-16 max-w-4xl mx-auto p-8 rounded-3xl bg-white border border-[#286497]/20 shadow-md">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#eaf2f8] flex items-center justify-center text-[#286497] shrink-0 mt-1">
                <AlertCircle className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900">
                  {existingGlassPolicy.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  {existingGlassPolicy.description}
                </p>
              </div>
            </div>
          </div>

          {/* Scope of Work Clarification */}
          <div className="mt-8 max-w-4xl mx-auto p-8 rounded-3xl bg-white border border-slate-200 shadow-sm">
            <h3 className="text-lg font-bold text-slate-900 mb-6 text-center">
              {scopeOfWorkClarification.title}
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* SG Scope */}
              <div className="p-6 rounded-2xl bg-[#edf8f6] border border-[#66BEAE]/30">
                <h4 className="text-sm font-bold text-[#2a8575] uppercase tracking-wider mb-4 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4" /> SG Smart Glass Scope
                </h4>
                <ul className="space-y-2.5 text-xs text-slate-700">
                  {scopeOfWorkClarification.sgScope.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#2a8575] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Client Scope */}
              <div className="p-6 rounded-2xl bg-[#F5F9FB] border border-slate-200">
                <h4 className="text-sm font-bold text-[#286497] uppercase tracking-wider mb-4 flex items-center gap-2">
                  <HelpCircle className="w-4 h-4" /> Client & Contractor Scope
                </h4>
                <ul className="space-y-2.5 text-xs text-slate-700">
                  {scopeOfWorkClarification.clientScope.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-400 shrink-0 mt-1.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
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
