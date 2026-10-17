"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin, CheckCircle2 } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { ProjectItem, projectCategories, ProjectCategory } from "@/content/projects";

interface ProjectGalleryProps {
  initialProjects: ProjectItem[];
}

export function ProjectGallery({ initialProjects }: ProjectGalleryProps) {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>("All");

  const filteredProjects =
    selectedCategory === "All"
      ? initialProjects
      : initialProjects.filter((p) => p.category === selectedCategory);

  return (
    <div>
      {/* Category Filter Pills */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
        {projectCategories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setSelectedCategory(category)}
            className={`px-5 py-2 rounded-full text-xs font-semibold tracking-wider transition-all cursor-pointer ${
              selectedCategory === category
                ? "bg-[#286497] text-white shadow-sm"
                : "bg-white text-slate-600 hover:text-[#286497] hover:bg-slate-50 border border-slate-200"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="group flex flex-col rounded-3xl overflow-hidden bg-white border border-slate-200/90 shadow-xs hover:shadow-xl hover:border-[#286497]/40 transition-luxury"
          >
            {/* Image Frame */}
            <div className="relative aspect-[16/11] w-full bg-slate-100 overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-50 group-hover:opacity-30 transition-opacity" />

              <div className="absolute top-4 left-4">
                <Badge variant="blue" size="sm" className="bg-white/95 text-[#286497] shadow-xs">
                  {project.category}
                </Badge>
              </div>

              {project.location && (
                <div className="absolute bottom-3 left-4 flex items-center gap-1.5 bg-slate-900/80 backdrop-blur-xs text-white text-xs px-2.5 py-1 rounded-md">
                  <MapPin className="w-3 h-3 text-[#66BEAE]" />
                  <span>{project.location}</span>
                </div>
              )}
            </div>

            {/* Content */}
            <div className="p-7 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#286497] transition-colors leading-snug">
                  {project.title}
                </h3>
                <p className="mt-2.5 text-xs text-slate-600 line-clamp-3 leading-relaxed">
                  {project.clientRequirement}
                </p>
              </div>

              <div className="mt-6 pt-5 border-t border-slate-100 flex items-center justify-between">
                <span className="text-[11px] font-medium text-slate-500 flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#66BEAE]" />
                  Verified Installation
                </span>

                <Link
                  href={`/projects/${project.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#286497] hover:underline"
                >
                  View Case Study <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
