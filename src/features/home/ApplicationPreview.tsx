import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { applications } from "@/content/applications";

export function ApplicationPreview() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <Container>
        <SectionHeading
          badge="Architectural Portfolio"
          badgeVariant="teal"
          title="Smart Glass for Every Modern Space"
          description="From corporate high-rises to luxury private residences and sterile healthcare suites, explore how switchable smart glass redefines privacy across industries."
          align="left"
          action={
            <Button
              href="/applications"
              variant="outline"
              size="md"
              icon={<ArrowRight className="w-4 h-4" />}
            >
              All Applications
            </Button>
          }
          className="mb-14"
        />

        {/* 6 Application Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {applications.map((item, index) => {
            return (
              <Link
                key={item.id}
                href={`/applications#${item.slug}`}
                className="group flex flex-col rounded-2xl overflow-hidden bg-white border border-slate-200/90 shadow-xs hover:shadow-xl hover:border-[#286497]/30 transition-luxury"
              >
                {/* Image Container with Subtle Zoom */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                  {/* Corner tag */}
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-xs text-[#286497] p-2 rounded-full shadow-xs group-hover:bg-[#286497] group-hover:text-white transition-colors">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#286497] transition-colors">
                      {item.title}
                    </h3>
                    <p className="mt-2.5 text-sm text-slate-600 leading-relaxed">
                      {item.shortDescription}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-[#286497]">
                    <span>Explore Use Cases</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
