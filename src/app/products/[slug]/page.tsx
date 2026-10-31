import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Shield,
  Sparkles,
  Layers,
  MessageCircle,
  FileText,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { allProducts, getProductBySlug } from "@/content/products";
import { siteConfig } from "@/content/siteConfig";

interface ProductPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return allProducts.map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return {
      title: "Product Not Found",
    };
  }

  return {
    title: `${product.name} | Smart Glass Solutions`,
    description: product.description,
    openGraph: {
      title: `${product.name} | SG Smart Glass`,
      description: product.description,
      images: [{ url: product.image }],
    },
  };
}

export default async function ProductDetailPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  // Related products from the same or adjacent category
  const related = allProducts
    .filter((p) => p.id !== product.id)
    .slice(0, 3);

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    image: `${siteConfig.url}${product.image}`,
    brand: {
      "@type": "Brand",
      name: siteConfig.brandName,
    },
    provider: {
      "@type": "Organization",
      name: siteConfig.legalCompanyName,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />

      {/* Breadcrumb / Back Navigation */}
      <div className="bg-[#F5F9FB] border-b border-slate-200/80 py-4">
        <Container>
          <div className="flex items-center gap-2 text-xs text-slate-500">
            <Link href="/" className="hover:text-[#286497]">
              Home
            </Link>
            <span>/</span>
            <Link href="/products" className="hover:text-[#286497]">
              Products
            </Link>
            <span>/</span>
            <span className="text-slate-800 font-medium">{product.name}</span>
          </div>
        </Container>
      </div>

      {/* Product Main Showcase */}
      <section className="py-12 lg:py-20 bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left: Product Media */}
            <div data-reveal="card" className="lg:col-span-7 space-y-4">
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden bg-slate-100 border border-slate-200/90 shadow-lg">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 700px"
                />
                {product.badge && (
                  <div className="absolute top-4 left-4">
                    <Badge variant="teal" size="sm">
                      {product.badge}
                    </Badge>
                  </div>
                )}
              </div>

              {/* Verified Preparation Note */}
              <div className="p-4 rounded-xl bg-[#F5F9FB] border border-slate-200/70 text-xs text-slate-600 flex items-start gap-3">
                <Sparkles className="w-4 h-4 text-[#66BEAE] shrink-0 mt-0.5" />
                <p>
                  Every panel is custom prepared, precision-cut, and tested at our specialized
                  preparation and quality facility according to confirmed architectural
                  measurements.
                </p>
              </div>
            </div>

            {/* Right: Product Details & CTAs */}
            <div data-reveal="fade-up" data-reveal-delay="70" className="lg:col-span-5 flex flex-col items-start">
              <div className="mb-2">
                <Badge variant="blue" size="sm">
                  {product.categoryLabel}
                </Badge>
              </div>

              <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                {product.name}
              </h1>

              <p className="mt-2 text-sm font-semibold text-[#286497]">
                {product.tagline}
              </p>

              <p className="mt-5 text-sm sm:text-base text-slate-600 leading-relaxed">
                {product.fullDescription}
              </p>

              {/* Action Buttons */}
              <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full">
                <Button
                  href={`/contact?product=${encodeURIComponent(product.name)}`}
                  variant="primary"
                  size="lg"
                  className="w-full justify-center shadow-md"
                  icon={<ArrowRight className="w-4 h-4" />}
                >
                  Request a Quote
                </Button>
                <Button
                  href={`${siteConfig.contact.whatsapp.url}?text=${encodeURIComponent(
                    `Hello SG Smart Glass, I would like to enquire about ${product.name} for my project.`
                  )}`}
                  variant="secondary"
                  size="lg"
                  className="w-full justify-center"
                  icon={<MessageCircle className="w-4 h-4 text-[#25D366]" />}
                >
                  Chat on WhatsApp
                </Button>
              </div>

              {/* Features List */}
              <div className="mt-10 w-full pt-8 border-t border-slate-100">
                <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-4">
                  Key Product Capabilities
                </h3>
                <ul className="space-y-2.5 text-xs text-slate-600">
                  {product.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#66BEAE] shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Suitable Applications */}
              <div className="mt-8 w-full pt-6 border-t border-slate-100">
                <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-3">
                  Recommended Architectural Applications
                </h3>
                <div className="flex flex-wrap gap-2">
                  {product.applications.map((app) => (
                    <Badge key={app} variant="neutral" size="sm">
                      {app}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Approved Technical Specifications Table */}
      <section className="py-16 bg-[#F5F9FB] border-y border-slate-200/80">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <FileText className="w-5 h-5 text-[#286497]" />
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                Approved Technical Specifications
              </h2>
            </div>

            <div className="rounded-2xl overflow-hidden bg-white border border-slate-200 shadow-xs">
              <table className="w-full text-left text-sm">
                <tbody className="divide-y divide-slate-100">
                  {product.approvedSpecs.map((spec, idx) => (
                    <tr
                      key={idx}
                      className={idx % 2 === 0 ? "bg-white" : "bg-[#F5F9FB]/50"}
                    >
                      <td className="py-3.5 px-6 font-semibold text-slate-700 w-1/3">
                        {spec.label}
                      </td>
                      <td className="py-3.5 px-6 text-slate-600">{spec.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* If product has Features & Advantages Table from Datasheet (Twin Pro) */}
            {product.featuresAndAdvantages && (
              <div className="mt-12">
                <div className="flex items-center gap-3 mb-6">
                  <FileText className="w-5 h-5 text-[#286497]" />
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                    Engineering Features & Advantages (Technical Data)
                  </h3>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  {/* Left: Architectural Assembly Cross Section Diagram */}
                  {product.diagramImage && (
                    <div className="lg:col-span-4 rounded-2xl overflow-hidden bg-white border border-slate-200 p-4 shadow-xs flex flex-col items-center">
                      <span className="text-[11px] font-bold text-[#286497] uppercase tracking-wider mb-2">
                        Cross-Section Profile Diagram
                      </span>
                      <div className="relative w-full aspect-[9/16] max-h-[460px]">
                        <Image
                          src={product.diagramImage}
                          alt={`${product.name} Profile Assembly Diagram`}
                          fill
                          className="object-contain"
                          sizes="(max-width: 1024px) 100vw, 300px"
                        />
                      </div>
                      <span className="text-[10px] text-slate-400 mt-2 text-center">
                        U-PRO Top Track & TWIN PRO Bottom Track with EPDM Gaskets
                      </span>
                    </div>
                  )}

                  {/* Right: Technical Features & Advantages Table */}
                  <div className={product.diagramImage ? "lg:col-span-8" : "lg:col-span-12"}>
                    <div className="rounded-2xl overflow-hidden bg-white border border-slate-200 shadow-xs">
                      <table className="w-full text-left text-xs sm:text-sm">
                        <thead className="bg-[#286497] text-white">
                          <tr>
                            <th className="py-3 px-5 font-bold tracking-wider uppercase text-xs w-2/5">
                              Features
                            </th>
                            <th className="py-3 px-5 font-bold tracking-wider uppercase text-xs w-3/5">
                              Advantages
                            </th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                          {product.featuresAndAdvantages.map((row, idx) => (
                            <tr
                              key={idx}
                              className={idx % 2 === 0 ? "bg-white" : "bg-[#F5F9FB]/60"}
                            >
                              <td className="py-3.5 px-5 font-bold text-slate-900 align-top">
                                {row.feature}
                              </td>
                              <td className="py-3.5 px-5 text-slate-700 leading-relaxed align-top">
                                {row.advantage}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {product.clearViewNote && (
              <p className="mt-4 text-xs text-slate-500 italic">
                * {product.clearViewNote}
              </p>
            )}
          </div>
        </Container>
      </section>

      {/* Related Products */}
      <section className="py-16 bg-white">
        <Container>
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              Related Solutions
            </h2>
            <Link
              href="/products"
              className="text-xs font-semibold text-[#286497] hover:underline flex items-center gap-1"
            >
              Back to All Products <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div data-reveal-group data-reveal-stagger="90" className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {related.map((rel) => (
              <Link
                key={rel.id}
                href={`/products/${rel.slug}`}
                data-reveal="card"
                className="group p-5 rounded-2xl bg-[#F5F9FB] border border-slate-200 hover:border-[#286497]/40 hover:bg-white hover:shadow-lg transition-luxury"
              >
                <div className="relative aspect-[16/10] rounded-xl overflow-hidden bg-slate-100 mb-4">
                  <Image
                    src={rel.image}
                    alt={rel.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="350px"
                  />
                </div>
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
                  {rel.categoryLabel}
                </span>
                <h3 className="text-base font-bold text-slate-900 group-hover:text-[#286497] transition-colors">
                  {rel.name}
                </h3>
                <p className="mt-1 text-xs text-slate-600 line-clamp-2">
                  {rel.description}
                </p>
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
