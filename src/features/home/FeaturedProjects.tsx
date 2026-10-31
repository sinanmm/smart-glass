import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin, CheckCircle2, Sparkles, Quote } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { projects } from "@/content/projects";

export function FeaturedProjects() {
  const featured = projects.slice(0, 4);

  return (
    <section className="py-20 lg:py-28 bg-[#F5F9FB] border-b border-slate-200/80">
      <Container>
        <SectionHeading
          badge="Featured Works"
          badgeVariant="teal"
          title="Original Installations. Proven Execution."
          description="Explore authentic smart glass installations across renowned corporate headquarters, flagship retail jewellery showrooms, and modern healthcare facilities."
          align="left"
          action={
            <Button
              href="/projects"
              variant="outline"
              size="md"
              icon={<ArrowRight className="w-4 h-4" />}
            >
              View All Projects
            </Button>
          }
          className="mb-14"
        />

        {/* Project Cards Grid - Entire Plate Clickable */}
        <div data-reveal-group data-reveal-stagger="90" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featured.map((project) => (
            <Link
              key={project.id}
              href={`/projects/${project.slug}`}
              data-reveal="card"
              className="group block rounded-3xl overflow-hidden light-card-highlight hover:shadow-2xl hover:translate-y-[-6px] transition-luxury flex flex-col justify-between cursor-pointer"
            >
              <div>
                {/* Image Frame */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/20 to-transparent" />

                  {/* Top Category Badge */}
                  <div className="absolute top-3.5 left-3.5">
                    <span className="px-2.5 py-1 rounded-md text-[11px] font-bold tracking-wider uppercase bg-white/95 text-[#286497] shadow-sm">
                      {project.category}
                    </span>
                  </div>

                  {/* Verified Indicator */}
                  <div className="absolute top-3.5 right-3.5">
                    <span className="w-7 h-7 rounded-full bg-[#66BEAE] text-white flex items-center justify-center shadow-md">
                      <CheckCircle2 className="w-4 h-4" />
                    </span>
                  </div>

                  {/* Location Overlay */}
                  <div className="absolute bottom-3 left-3.5 right-3.5 flex items-center gap-1.5 text-white text-xs font-medium">
                    <MapPin className="w-3.5 h-3.5 text-[#66BEAE] shrink-0" />
                    <span className="truncate">{project.location}</span>
                  </div>
                </div>

                {/* Information */}
                <div className="p-6">
                  <span className="text-[11px] font-bold text-[#286497] uppercase tracking-wider block mb-1">
                    {project.clientName}
                  </span>

                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-[#286497] transition-colors leading-snug">
                    {project.title}
                  </h3>

                  <p className="mt-2 text-xs text-slate-600 line-clamp-2 leading-relaxed">
                    {project.clientRequirement}
                  </p>

                  {/* Testimonial snippet if present */}
                  {project.testimonial && (
                    <div className="mt-3.5 pt-3 border-t border-slate-100 flex items-start gap-2 text-[11px] text-slate-500 italic">
                      <Quote className="w-3.5 h-3.5 text-[#66BEAE] shrink-0 mt-0.5" />
                      <span className="line-clamp-2">&ldquo;{project.testimonial.quote}&rdquo;</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Bottom Action Strip */}
              <div className="px-6 py-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#286497] group-hover:bg-[#286497] group-hover:text-white transition-colors">
                <span>View Case Study</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
