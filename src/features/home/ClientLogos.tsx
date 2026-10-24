import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Quote, Sparkles, Building, Award, CheckCircle } from "lucide-react";

export function ClientLogos() {
  const featuredClients = [
    { name: "Malabar Gold & Diamonds", logo: "/images/clients/malabar-gold.png", alt: "Malabar Gold & Diamonds client of SG Smart Glass" },
    { name: "Meralda Jewels", logo: "/images/clients/meralda-jewels.png", alt: "Meralda Jewels client of SG Smart Glass" },
    { name: "NURA Health", logo: "/images/clients/nura.png", alt: "NURA AI Health Screening client of SG Smart Glass" },
    { name: "Unimoni", logo: "/images/clients/unimoni.png", alt: "Unimoni India client of SG Smart Glass" },
  ];

  const clientLogos = [
    { name: "Dubai Police", file: "/images/clients/dubai-police.png" },
    { name: "UAE Ministry of Education", file: "/images/clients/uae-moe.png" },
    { name: "ADNOC", file: "/images/clients/adnoc.png" },
    { name: "Etisalat by e&", file: "/images/clients/etisalat.png" },
    { name: "Jumeirah Emirates Towers", file: "/images/clients/jumeirah-emirates-towers.png" },
    { name: "Address Dubai Mall", file: "/images/clients/address-dubai-mall.png" },
    { name: "Dubai Holding", file: "/images/clients/dubai-holding.png" },
    { name: "Meraas", file: "/images/clients/meraas.png" },
    { name: "Abu Dhabi Public Health Centre", file: "/images/clients/adphc.png" },
    { name: "M.O.D Signature Jewellery", file: "/images/clients/mod-jewellery.png" },
    { name: "Preserve Chits", file: "/images/clients/preserve-chits.png" },
    { name: "JFS Logistics", file: "/images/clients/jfs-logistics.png" },
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
      role: "Administration Head Unimoni India",
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
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#eaf2f8] text-[#286497] text-xs font-bold tracking-wider uppercase mb-3">
            <Award className="w-3.5 h-3.5 text-[#286497]" />
            Trusted By Leading Brands & Institutions
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            Distinguished Clients & Architectural Partners
          </h2>
          <p className="text-sm text-slate-500 mt-2 max-w-2xl leading-relaxed">
            Delivering precision switchable smart glass solutions across prestigious corporate headquarters, luxury jewellery showrooms, and government institutions.
          </p>
        </div>

        {/* Featured Key Clients Badge Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-12">
          {featuredClients.map((client) => (
            <div
              key={client.name}
              className="group p-4 sm:p-5 rounded-2xl light-card-highlight flex flex-col items-center justify-center relative overflow-hidden h-28"
            >
              <div className="relative w-full h-14">
                <Image
                  src={client.logo}
                  alt={client.alt}
                  fill
                  className="object-contain filter group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Prestigious Logos Grid (12 logos from Brochure Page 5) */}
        <div className="p-6 sm:p-8 rounded-3xl bg-[#F5F9FB] border border-slate-200/90 shadow-sm mb-16">
          <span className="text-[11px] font-bold tracking-wider text-slate-400 uppercase text-center block mb-6">
            Institutional, Enterprise & Hospitality Portfolio
          </span>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6 items-center">
            {clientLogos.map((client) => (
              <div
                key={client.name}
                className="bg-white p-3 rounded-xl border border-slate-200/70 shadow-xs hover:shadow-md hover:border-[#286497]/30 transition-all flex items-center justify-center h-16 group"
              >
                <div className="relative w-full h-10">
                  <Image
                    src={client.file}
                    alt={`${client.name} logo`}
                    fill
                    className="object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                    sizes="(max-width: 768px) 33vw, 16vw"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Client Testimonials Carousel/Cards from Brochure Page 4 */}
        <div className="pt-4">
          <div className="text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-[#286497] block mb-1">
              Client Experiences
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
              What Industry Leaders Say About SG Smart Glass
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div
                key={t.name}
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
