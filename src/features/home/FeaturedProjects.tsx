import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { projects } from "@/content/projects";

export function FeaturedProjects() {
  const featured = projects.slice(0, 3);

  return (
    <section className="py-20 lg:py-28 bg-white">
      <Container>
        <SectionHeading
          badge="Executed Work"
          badgeVariant="teal"
          title="Real Spaces. Smarter Possibilities."
          description="Explore representative architectural installations showcasing switchable privacy glass and custom PDLC smart film in live architectural environments."
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

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featured.map((project) => (
            <div
              key={project.id}
              className="group flex flex-col rounded-2xl overflow-hidden bg-white border border-slate-200/80 shadow-xs hover:shadow-xl hover:border-[#286497]/30 transition-luxury"
            >
              {/* Image Frame */}
              <div className="relative aspect-[16/11] w-full overflow-hidden bg-slate-100">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-50 group-hover:opacity-30 transition-opacity" />

                {/* Category & Location Badges */}
                <div className="absolute top-3 left-3 flex flex-wrap gap-2">
                  <Badge variant="blue" size="sm" className="bg-white/90 backdrop-blur-xs text-[#286497]">
                    {project.category}
                  </Badge>
                </div>

                {project.location && (
                  <div className="absolute bottom-3 left-3 flex items-center gap-1.5 bg-slate-900/80 backdrop-blur-xs text-white text-xs px-2.5 py-1 rounded-md">
                    <MapPin className="w-3 h-3 text-[#66BEAE]" />
                    <span>{project.location}</span>
                  </div>
                )}
              </div>

              {/* Information */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-[#286497] transition-colors leading-snug">
                    {project.title}
                  </h3>
                  <p className="mt-2.5 text-xs text-slate-600 line-clamp-3 leading-relaxed">
                    {project.clientRequirement}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[11px] font-medium text-slate-500 flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#66BEAE]" />
                    Installed Solution
                  </span>

                  <Link
                    href={`/projects/${project.slug}`}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-[#286497] hover:underline"
                  >
                    View Project <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
