import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { projects } from "@/content/projects";
import { ProjectGallery } from "@/features/projects/ProjectGallery";
import { FinalCTA } from "@/features/home/FinalCTA";

export const metadata: Metadata = {
  title: "Smart Glass Projects & Installations",
  description:
    "Explore SG Smart Glass projects featuring switchable privacy glass and PDLC smart film applications across commercial, residential, and healthcare sectors.",
};

export default function ProjectsPage() {
  return (
    <>
      {/* Projects Hero Banner */}
      <section className="bg-gradient-to-b from-[#F5F9FB] to-white py-14 lg:py-20 border-b border-slate-200/80">
        <Container>
          <div className="max-w-3xl">
            <Badge variant="blue" size="md" className="mb-4">
              Project Portfolio
            </Badge>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#286497] tracking-tight">
              Real Spaces. Smarter Possibilities.
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
              Explore authentic SG Smart Glass architectural installations, showcasing
              engineered switchable privacy film across boardrooms, luxury villas, hospitality suites,
              and healthcare environments.
            </p>
          </div>
        </Container>
      </section>

      {/* Projects Gallery Section */}
      <section className="py-16 lg:py-24 bg-white">
        <Container>
          <ProjectGallery initialProjects={projects} />
        </Container>
      </section>

      {/* Final Call to Action */}
      <FinalCTA />
    </>
  );
}
