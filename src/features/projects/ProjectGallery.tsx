"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  MapPin,
  CheckCircle2,
  Search,
  Quote,
  Sparkles,
  SlidersHorizontal,
} from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { ProjectItem, projectCategories, ProjectCategory } from "@/content/projects";

interface ProjectGalleryProps {
  initialProjects: ProjectItem[];
}

export function ProjectGallery({ initialProjects }: ProjectGalleryProps) {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProjects = initialProjects.filter((p) => {
    const matchesCategory =
      selectedCategory === "All" || p.category === selectedCategory;
    const matchesSearch =
      searchQuery.trim() === "" ||
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.clientName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.clientRequirement.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div>
      {/* Dynamic Controls Bar: Search & Category Filter Pills */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10 pb-6 border-b border-slate-200/80">
        {/* Category Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          {projectCategories.map((category) => {
            const count =
              category === "All"
                ? initialProjects.length
                : initialProjects.filter((p) => p.category === category).length;

            return (
              <button
                key={category}
                type="button"
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-xs font-bold tracking-wider transition-all cursor-pointer flex items-center gap-2 ${
                  selectedCategory === category
                    ? "bg-[#286497] text-white shadow-md scale-102"
                    : "bg-white text-slate-700 hover:text-[#286497] hover:bg-slate-50 border border-slate-200"
                }`}
              >
                <span>{category}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono ${
                    selectedCategory === category
                      ? "bg-white/20 text-white"
                      : "bg-slate-100 text-slate-500"
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Dynamic Search Box */}
        <div className="relative w-full md:w-72">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            type="text"
            placeholder="Search projects, clients..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-4 py-2 rounded-full bg-white border border-slate-200 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#286497] focus:border-transparent transition-all"
          />
        </div>
      </div>

      {/* Projects Grid - Entire Plate Clickable */}
      {filteredProjects.length === 0 ? (
        <div className="text-center py-16 bg-white rounded-3xl border border-slate-200 p-8">
          <p className="text-base font-semibold text-slate-700">
            No projects matched your search criteria.
          </p>
          <button
            type="button"
            onClick={() => {
              setSelectedCategory("All");
              setSearchQuery("");
            }}
            className="mt-3 text-xs font-bold text-[#286497] hover:underline cursor-pointer"
          >
            Clear filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <Link
              key={project.id}
              href={`/projects/${project.slug}`}
              className="group block rounded-3xl overflow-hidden light-card-highlight hover:shadow-2xl hover:translate-y-[-6px] transition-luxury flex flex-col justify-between cursor-pointer"
            >
              <div>
                {/* Image Frame */}
                <div className="relative aspect-[16/11] w-full bg-slate-100 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/25 to-transparent" />

                  {/* Top Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-md text-xs font-bold tracking-wider uppercase bg-white/95 text-[#286497] shadow-sm">
                      {project.category}
                    </span>
                  </div>

                  {/* Verified Checkmark */}
                  <div className="absolute top-4 right-4">
                    <span className="w-8 h-8 rounded-full bg-[#66BEAE] text-white flex items-center justify-center shadow-md">
                      <CheckCircle2 className="w-4 h-4" />
                    </span>
                  </div>

                  {/* Location Overlay */}
                  <div className="absolute bottom-3 left-4 right-4 flex items-center gap-1.5 text-white text-xs font-medium">
                    <MapPin className="w-3.5 h-3.5 text-[#66BEAE] shrink-0" />
                    <span className="truncate">{project.location}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-7">
                  <span className="text-xs font-bold text-[#286497] uppercase tracking-wider block mb-1">
                    {project.clientName}
                  </span>

                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#286497] transition-colors leading-snug">
                    {project.title}
                  </h3>

                  <p className="mt-2.5 text-xs text-slate-600 line-clamp-3 leading-relaxed">
                    {project.clientRequirement}
                  </p>

                  {/* Testimonial Quote if present */}
                  {project.testimonial && (
                    <div className="mt-4 pt-3.5 border-t border-slate-100 flex items-start gap-2 text-xs text-slate-600 italic bg-[#F5F9FB] p-3 rounded-xl">
                      <Quote className="w-4 h-4 text-[#66BEAE] shrink-0 mt-0.5" />
                      <span className="line-clamp-2 font-medium">
                        &ldquo;{project.testimonial.quote}&rdquo;
                      </span>
                    </div>
                  )}

                  {/* Highlights tags */}
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {project.highlights.slice(0, 2).map((h, i) => (
                      <span
                        key={i}
                        className="text-[10px] font-semibold text-slate-600 bg-slate-100 px-2 py-0.5 rounded-md"
                      >
                        {h}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Card Strip */}
              <div className="px-7 py-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#286497] group-hover:bg-[#286497] group-hover:text-white transition-colors">
                <span>Explore Full Case Study</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
