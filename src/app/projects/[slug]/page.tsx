import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  MapPin,
  CheckCircle2,
  Building,
  Wrench,
  Sparkles,
  MessageCircle,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { projects, getProjectBySlug } from "@/content/projects";
import { siteConfig } from "@/content/siteConfig";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.title} | SG Smart Glass Projects`,
    description: project.clientRequirement,
    openGraph: {
      title: `${project.title} | SG Smart Glass`,
      description: project.clientRequirement,
      images: [{ url: project.image }],
    },
  };
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const related = projects.filter((p) => p.id !== project.id).slice(0, 2);

  return (
    <>
      {/* Breadcrumb Navigation */}
      <div className="bg-[#F5F9FB] border-b border-slate-200/80 py-4">
        <Container>
          <div className="flex items-center gap-2 text-xs text-slate-500">
            <Link href="/" className="hover:text-[#286497]">
              Home
            </Link>
            <span>/</span>
            <Link href="/projects" className="hover:text-[#286497]">
              Projects
            </Link>
            <span>/</span>
            <span className="text-slate-800 font-medium">{project.title}</span>
          </div>
        </Container>
      </div>

      {/* Main Case Study */}
      <section className="py-12 lg:py-20 bg-white">
        <Container>
          {/* Header */}
          <div data-reveal="fade-up" className="max-w-4xl mb-12">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <Badge variant="blue" size="sm">
                {project.category}
              </Badge>
              {project.location && (
                <span className="flex items-center gap-1.5 text-xs text-slate-500">
                  <MapPin className="w-3.5 h-3.5 text-[#66BEAE]" />
                  {project.location}
                </span>
              )}
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              {project.title}
            </h1>
          </div>

          {/* Primary Installation Media */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
            <div data-reveal="card" className="lg:col-span-8">
              <div className="relative aspect-[16/10] rounded-3xl overflow-hidden bg-slate-100 border border-slate-200 shadow-xl">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 800px"
                />
              </div>

              {/* Clear / Private Paired Showcase if available */}
              {project.clearImage && project.privateImage && (
                <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="relative aspect-[16/10] rounded-2xl overflow-hidden border border-slate-200">
                    <Image
                      src={project.clearImage}
                      alt={`${project.title} - Clear State`}
                      fill
                      className="object-cover"
                      sizes="400px"
                    />
                    <div className="absolute bottom-3 left-3 bg-[#286497]/90 text-white text-[11px] font-semibold px-2.5 py-1 rounded-md uppercase">
                      Clear (Power ON)
                    </div>
                  </div>

                  <div className="relative aspect-[16/10] rounded-2xl overflow-hidden border border-slate-200">
                    <Image
                      src={project.privateImage}
                      alt={`${project.title} - Private State`}
                      fill
                      className="object-cover"
                      sizes="400px"
                    />
                    <div className="absolute bottom-3 right-3 bg-slate-900/90 text-white text-[11px] font-semibold px-2.5 py-1 rounded-md uppercase">
                      Private (Power OFF)
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Project Quick Overview Card */}
            <div data-reveal="card" data-reveal-delay="100" className="lg:col-span-4 p-8 rounded-3xl bg-[#F5F9FB] border border-slate-200 shadow-xs space-y-6">
              <h3 className="text-base font-bold text-slate-900 border-b border-slate-200 pb-3">
                Project Information
              </h3>

              <div className="space-y-4 text-xs">
                <div>
                  <span className="font-semibold text-slate-400 uppercase tracking-wider block mb-1">
                    Client / Partner
                  </span>
                  <span className="text-slate-900 font-bold text-sm">
                    {project.clientName}
                  </span>
                </div>

                <div>
                  <span className="font-semibold text-slate-400 uppercase tracking-wider block mb-1">
                    Sector
                  </span>
                  <span className="text-slate-800 font-medium text-sm">
                    {project.category}
                  </span>
                </div>

                <div>
                  <span className="font-semibold text-slate-400 uppercase tracking-wider block mb-1">
                    Location
                  </span>
                  <span className="text-slate-800 font-medium text-sm">
                    {project.location || "Confidential Site"}
                  </span>
                </div>

                <div>
                  <span className="font-semibold text-slate-400 uppercase tracking-wider block mb-1">
                    Scope of Work
                  </span>
                  <span className="text-slate-800 font-medium leading-relaxed block">
                    PDLC smart glass custom preparation, on-site electrical connection & handover.
                  </span>
                </div>
              </div>

              {/* Client Testimonial if present */}
              {project.testimonial && (
                <div className="p-4 rounded-2xl bg-white border border-[#66BEAE]/40 shadow-xs">
                  <p className="text-xs text-slate-700 italic font-medium leading-relaxed">
                    &ldquo;{project.testimonial.quote}&rdquo;
                  </p>
                  <div className="mt-3 flex items-center gap-2.5">
                    {project.testimonial.avatar && (
                      <div className="relative w-8 h-8 rounded-full overflow-hidden shrink-0 border border-[#66BEAE]">
                        <Image
                          src={project.testimonial.avatar}
                          alt={project.testimonial.author}
                          fill
                          className="object-cover"
                          sizes="32px"
                        />
                      </div>
                    )}
                    <div>
                      <h4 className="text-xs font-bold text-slate-900">
                        {project.testimonial.author}
                      </h4>
                      <p className="text-[10px] text-slate-500">
                        {project.testimonial.role}
                      </p>
                    </div>
                  </div>
                </div>
              )}

              <div className="pt-4 border-t border-slate-200 space-y-3">
                <Button
                  href={`/contact?project=${encodeURIComponent(project.title)}`}
                  variant="primary"
                  size="md"
                  className="w-full justify-center"
                  icon={<ArrowRight className="w-4 h-4" />}
                >
                  Request Similar Solution
                </Button>

                <Button
                  href={siteConfig.contact.whatsapp.url}
                  variant="secondary"
                  size="md"
                  className="w-full justify-center"
                  icon={<MessageCircle className="w-4 h-4 text-[#25D366]" />}
                >
                  Inquire on WhatsApp
                </Button>
              </div>
            </div>
          </div>

          {/* Deep Dive: Client Requirement, SG Solution & Results */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto py-12 border-t border-slate-100">
            <div className="p-7 rounded-2xl bg-[#F5F9FB] border border-slate-200/80">
              <div className="w-10 h-10 rounded-lg bg-[#eaf2f8] flex items-center justify-center text-[#286497] mb-4">
                <Building className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">
                1. Client Requirement
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {project.clientRequirement}
              </p>
            </div>

            <div className="p-7 rounded-2xl bg-[#edf8f6] border border-[#66BEAE]/30">
              <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center text-[#2a8575] mb-4 shadow-xs">
                <Wrench className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">
                2. SG Engineered Solution
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {project.sgSolution}
              </p>
            </div>

            <div className="p-7 rounded-2xl bg-[#F5F9FB] border border-slate-200/80">
              <div className="w-10 h-10 rounded-lg bg-[#eaf2f8] flex items-center justify-center text-[#286497] mb-4">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">
                3. Final Architectural Result
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {project.result}
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Related Projects */}
      <section className="py-16 bg-[#F5F9FB] border-t border-slate-200/80">
        <Container>
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              Explore More Projects
            </h2>
            <Link
              href="/projects"
              className="text-xs font-semibold text-[#286497] hover:underline flex items-center gap-1"
            >
              All Projects <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div data-reveal-group data-reveal-stagger="90" className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {related.map((rel) => (
              <Link
                key={rel.id}
                href={`/projects/${rel.slug}`}
                data-reveal="card"
                className="group flex flex-col sm:flex-row gap-5 p-5 rounded-2xl bg-white border border-slate-200 hover:border-[#286497]/40 hover:shadow-lg transition-luxury"
              >
                <div className="relative aspect-[16/10] sm:w-48 shrink-0 rounded-xl overflow-hidden bg-slate-100">
                  <Image
                    src={rel.image}
                    alt={rel.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform"
                    sizes="200px"
                  />
                </div>
                <div className="flex flex-col justify-between">
                  <div>
                    <Badge variant="blue" size="sm" className="mb-2">
                      {rel.category}
                    </Badge>
                    <h3 className="text-base font-bold text-slate-900 group-hover:text-[#286497] transition-colors">
                      {rel.title}
                    </h3>
                    <p className="mt-1 text-xs text-slate-600 line-clamp-2">
                      {rel.clientRequirement}
                    </p>
                  </div>
                  <span className="text-xs font-semibold text-[#286497] flex items-center gap-1 mt-4">
                    View Case Study <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
