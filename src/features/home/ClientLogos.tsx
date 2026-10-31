import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Award, Quote } from "lucide-react";

export function ClientLogos() {
  const clientLogos = [
    { name: "Malabar Gold & Diamonds", file: "/images/clients/malabar-gold-v2.png", slug: "malabar-gold-diamonds" },
    { name: "Meralda Jewels", file: "/images/clients/meralda-jewels-v2.png", slug: "meralda-jewels" },
    { name: "NURA Health", file: "/images/clients/nura-v2.png", slug: "nura-health" },
    { name: "Unimoni", file: "/images/clients/unimoni-v2.png", slug: "unimoni-wizzconnect" },
    { name: "M.O.D Signature Jewellery", file: "/images/clients/mod-jewellery.png", slug: "mod-jewellery" },
    { name: "JFS Logistics", file: "/images/clients/jfs-logistics.png", slug: "jfs-logistics" },
    { name: "Dubai Police", file: "/images/clients/dubai-police-v2.png" },
    { name: "UAE Ministry of Education", file: "/images/clients/uae-moe.png" },
    { name: "ADNOC", file: "/images/clients/adnoc.png" },
    { name: "Etisalat by e&", file: "/images/clients/etisalat.png" },
    { name: "Jumeirah Emirates Towers", file: "/images/clients/jumeirah-emirates-towers.png" },
    { name: "Address Dubai Mall", file: "/images/clients/address-dubai-mall.png" },
    { name: "Dubai Holding", file: "/images/clients/dubai-holding.png" },
    { name: "Meraas", file: "/images/clients/meraas.png" },
    { name: "Abu Dhabi Public Health Centre", file: "/images/clients/adphc.png" },
    { name: "Preserve Chits", file: "/images/clients/preserve-chits.png" },
  ];

  const testimonials = [
    {
      name: "Nishad AK",
      role: "Co-founder and Executive Director",
      company: "Malabar Gold and Diamonds",
      image: "/images/testimonials/nishad-ak.jpg",
      quote:
        "Exceptional service, professional support, and a seamless experience. Thank you, SG Smart Glass.",
    },
    {
      name: "Abdul Jaleel Edathil",
      role: "Chairman & MD",
      company: "Meralda Jewels",
      image: "/images/testimonials/abdul-jaleel.jpg",
      quote:
        "The comfort and convenience of SG Smart Glass impressed me so much at home that I chose to install it in my office as well.",
    },
    {
      name: "Lakshmikanth P",
      role: "Administration Head, Unimoni",
      company: "A WIZZ FINANCIAL GROUP",
      image: "/images/testimonials/lakshmikanth.jpg",
      quote:
        "We planned to use frosted stickers, but SG Smart Glass transformed our meeting rooms with a smarter solution and excellent service.",
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-white border-y border-slate-100">
      <Container>
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-12">
          <div
            data-reveal="fade-up"
            data-reveal-delay="0"
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#eaf2f8] text-[#286497] text-xs font-bold tracking-wider uppercase mb-3"
          >
            <Award className="w-3.5 h-3.5 text-[#286497]" />
            Trusted By Leading Brands & Institutions
          </div>
          <h2
            data-reveal="fade-up"
            data-reveal-delay="70"
            className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight"
          >
            Distinguished Clients & Architectural Partners
          </h2>
          <p
            data-reveal="fade-up"
            data-reveal-delay="140"
            className="text-sm text-slate-500 mt-2 max-w-2xl leading-relaxed"
          >
            Delivering precision switchable smart glass solutions across prestigious corporate headquarters, luxury jewellery showrooms, and government institutions.
          </p>
        </div>

        {/* Unified Client Logos Grid in Full Original Colors */}
        <div data-reveal-group data-reveal-stagger="30" className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 items-center mb-16 w-full max-w-full">
          {clientLogos.map((client) => {
            const logoContent = (
              <div className="relative w-full h-11 sm:h-12 max-w-[170px]">
                <Image
                  src={client.file}
                  alt={`${client.name} logo`}
                  fill
                  className="object-contain transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 25vw"
                />
              </div>
            );

            if (client.slug) {
              return (
                <Link
                  key={client.name}
                  href={`/projects/${client.slug}`}
                  data-reveal="scale"
                  className="group flex items-center justify-center p-3.5 sm:p-5 h-20 sm:h-24 rounded-2xl bg-white border border-slate-200/90 shadow-[0_2px_8px_-2px_rgba(0,0,0,0.04)] hover:shadow-md hover:border-[#286497]/40 hover:-translate-y-0.5 transition-all duration-300 cursor-pointer relative"
                  title={`View ${client.name} Project Case Study`}
                >
                  {logoContent}
                </Link>
              );
            }

            return (
              <div
                key={client.name}
                data-reveal="scale"
                className="group flex items-center justify-center p-3.5 sm:p-5 h-20 sm:h-24 rounded-2xl bg-white border border-slate-200/90 shadow-[0_2px_8px_-2px_rgba(0,0,0,0.04)] hover:shadow-md hover:border-[#286497]/30 transition-all duration-300"
              >
                {logoContent}
              </div>
            );
          })}
        </div>

        {/* Client Testimonials Carousel/Cards from Brochure Page 4 */}
        <div className="pt-4">
          <div className="text-center mb-10">
            <span
              data-reveal="fade-up"
              data-reveal-delay="0"
              className="text-xs font-bold uppercase tracking-wider text-[#286497] block mb-1"
            >
              Client Experiences
            </span>
            <h3
              data-reveal="fade-up"
              data-reveal-delay="70"
              className="text-xl sm:text-2xl font-bold text-slate-900"
            >
              What Industry Leaders Say About SG Smart Glass
            </h3>
          </div>

          <div data-reveal-group data-reveal-stagger="120" className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div
                key={t.name}
                data-reveal="card"
                className="p-7 rounded-3xl text-card-elevated flex flex-col justify-between hover:shadow-xl transition-luxury group"
              >
                <div>
                  <Quote className="w-8 h-8 text-[#66BEAE]/60 mb-4" />
                  <p className="text-sm sm:text-base text-slate-700 font-medium leading-relaxed italic">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </div>

                <div className="mt-6 pt-5 border-t border-slate-200/70 flex items-center gap-3.5">
                  <div className="relative w-13 h-13 rounded-full overflow-hidden border-2 border-[#66BEAE] shrink-0 shadow-sm">
                    <Image
                      src={t.image}
                      alt={t.name}
                      fill
                      className="object-cover"
                      sizes="52px"
                    />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 group-hover:text-[#286497] transition-colors">
                      {t.name}
                    </h4>
                    <p className="text-xs text-slate-500 font-medium leading-tight mt-0.5">
                      {t.role}
                    </p>
                    <p className="text-[11px] font-semibold text-[#286497] mt-0.5">
                      {t.company}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
