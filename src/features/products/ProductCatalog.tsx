"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Info,
  MessageSquare,
  Sparkles,
  Sliders,
  Layers,
  Shield,
  Zap,
  Eye,
  Check,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Product, smartFilmVariants, glassProfiles } from "@/content/products";
import { siteConfig } from "@/content/siteConfig";

export function ProductCatalog() {
  const [activeTab, setActiveTab] = useState<"all" | "smart-film" | "glass-profiles">("all");
  const [selectedVariant, setSelectedVariant] = useState<string>("sg-95-clear-view");

  const displayedVariants =
    activeTab === "all" || activeTab === "smart-film" ? smartFilmVariants : [];
  const displayedProfiles =
    activeTab === "all" || activeTab === "glass-profiles" ? glassProfiles : [];

  return (
    <div>
      {/* Category Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-3 mb-14">
        <button
          type="button"
          onClick={() => setActiveTab("all")}
          className={`px-6 py-2.5 rounded-full text-xs font-bold tracking-wider transition-all cursor-pointer ${
            activeTab === "all"
              ? "bg-[#286497] text-white shadow-md scale-102"
              : "bg-white text-slate-700 hover:text-[#286497] hover:bg-slate-50 border border-slate-200"
          }`}
        >
          All Solutions ({smartFilmVariants.length + glassProfiles.length})
        </button>
        <button
          type="button"
          onClick={() => setActiveTab("smart-film")}
          className={`px-6 py-2.5 rounded-full text-xs font-bold tracking-wider transition-all cursor-pointer ${
            activeTab === "smart-film"
              ? "bg-[#286497] text-white shadow-md scale-102"
              : "bg-white text-slate-700 hover:text-[#286497] hover:bg-slate-50 border border-slate-200"
          }`}
        >
          PDLC Smart Films ({smartFilmVariants.length})
        </button>
        <button
          type="button"
          onClick={() => setActiveTab("glass-profiles")}
          className={`px-6 py-2.5 rounded-full text-xs font-bold tracking-wider transition-all cursor-pointer ${
            activeTab === "glass-profiles"
              ? "bg-[#286497] text-white shadow-md scale-102"
              : "bg-white text-slate-700 hover:text-[#286497] hover:bg-slate-50 border border-slate-200"
          }`}
        >
          Architectural Glass Profiles ({glassProfiles.length})
        </button>
      </div>

      {/* Smart Film Variants Section */}
      {displayedVariants.length > 0 && (
        <div className="mb-20">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2.5 h-2.5 rounded-full bg-[#66BEAE]" />
            <h2 className="text-xs font-bold text-slate-400 uppercase tracking-widest">
              Category 01 — Switchable Privacy Films
            </h2>
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-8">
            PDLC Smart Film Variants
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {displayedVariants.map((product) => (
              <div
                key={product.id}
                className="group flex flex-col rounded-3xl overflow-hidden light-card-highlight hover:shadow-2xl hover:translate-y-[-4px] transition-luxury"
              >
                {/* Product Image Frame */}
                <div className="relative aspect-[16/10] w-full bg-slate-100 overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-106"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/20 to-transparent" />

                  {/* Badge */}
                  {product.badge && (
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 rounded-md text-xs font-bold tracking-wider uppercase bg-[#66BEAE] text-slate-950 shadow-md">
                        {product.badge}
                      </span>
                    </div>
                  )}

                  <div className="absolute bottom-3 right-3 bg-white/95 text-[11px] font-bold text-[#286497] px-3 py-1 rounded-md shadow-sm">
                    Switchable PDLC
                  </div>
                </div>

                {/* Content */}
                <div className="p-7 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-bold text-[#286497] uppercase tracking-wider block mb-1">
                      {product.tagline}
                    </span>
                    <h4 className="text-2xl font-bold text-slate-900 group-hover:text-[#286497] transition-colors">
                      {product.name}
                    </h4>
                    <p className="mt-2.5 text-sm text-slate-600 leading-relaxed">
                      {product.description}
                    </p>

                    {/* Features list */}
                    <ul className="mt-5 space-y-2 text-xs text-slate-600 border-t border-slate-100 pt-4">
                      {product.features.slice(0, 3).map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-[#66BEAE] shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Actions */}
                  <div className="mt-8 pt-5 border-t border-slate-100 flex flex-col sm:flex-row items-center gap-3">
                    <Button
                      href={`/products/${product.slug}`}
                      variant="primary"
                      size="md"
                      className="w-full sm:w-auto flex-1 justify-center"
                      icon={<ArrowRight className="w-4 h-4" />}
                    >
                      Explore Details
                    </Button>
                    <Button
                      href={`/contact?product=${encodeURIComponent(product.name)}`}
                      variant="secondary"
                      size="md"
                      className="w-full sm:w-auto flex-1 justify-center"
                      icon={<MessageSquare className="w-4 h-4" />}
                    >
                      Enquire Now
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Qualified Claim Disclaimer */}
          <div className="mt-8 p-4 rounded-2xl bg-white border border-slate-200/90 text-xs text-slate-600 flex items-start gap-3 shadow-xs">
            <Info className="w-4 h-4 text-[#286497] shrink-0 mt-0.5" />
            <p>
              Product designations (SG 95%, SG 91%, SG 89%) designate optical clarity tiers.
              All smart film is precision pre-cut, busbar-fitted, and tested to confirmed millimeter dimensions at our specialized production facility in India.
            </p>
          </div>
        </div>
      )}

      {/* Glass Profiles Section */}
      {displayedProfiles.length > 0 && (
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2.5 h-2.5 rounded-full bg-[#286497]" />
            <h2 className="text-xs font-bold text-slate-400 uppercase tracking-widest">
              Category 02 — Engineered Mounting Profiles
            </h2>
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-8">
            Architectural Glass Profile Framing Systems
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {displayedProfiles.map((profile) => (
              <div
                key={profile.id}
                className="group flex flex-col rounded-3xl overflow-hidden light-card-highlight hover:shadow-2xl hover:translate-y-[-4px] transition-luxury"
              >
                {/* Image Frame */}
                <div className="relative aspect-[16/10] w-full bg-slate-100 overflow-hidden">
                  <Image
                    src={profile.image}
                    alt={profile.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-106"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-md text-xs font-bold tracking-wider uppercase bg-[#286497] text-white shadow-md">
                      {profile.badge || profile.categoryLabel}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-7 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-bold text-[#286497] uppercase tracking-wider block mb-1">
                      {profile.tagline}
                    </span>
                    <h4 className="text-2xl font-bold text-slate-900 group-hover:text-[#286497] transition-colors">
                      {profile.name}
                    </h4>
                    <p className="mt-2.5 text-sm text-slate-600 leading-relaxed">
                      {profile.description}
                    </p>

                    {/* Features */}
                    <ul className="mt-5 space-y-2 text-xs text-slate-600 border-t border-slate-100 pt-4">
                      {profile.features.slice(0, 3).map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-[#286497] shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Actions */}
                  <div className="mt-8 pt-5 border-t border-slate-100 flex flex-col sm:flex-row items-center gap-3">
                    <Button
                      href={`/products/${profile.slug}`}
                      variant="primary"
                      size="md"
                      className="w-full sm:w-auto flex-1 justify-center"
                      icon={<ArrowRight className="w-4 h-4" />}
                    >
                      Explore Profile Specs
                    </Button>
                    <Button
                      href={`/contact?product=${encodeURIComponent(profile.name)}`}
                      variant="secondary"
                      size="md"
                      className="w-full sm:w-auto flex-1 justify-center"
                      icon={<MessageSquare className="w-4 h-4" />}
                    >
                      Enquire Now
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
