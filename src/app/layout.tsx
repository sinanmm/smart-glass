import type { Metadata } from "next";
import { Manrope, DM_Sans } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { siteConfig } from "@/content/siteConfig";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Smart Glass & PDLC Smart Film Solutions | SG Smart Glass",
    template: "%s | SG Smart Glass",
  },
  description:
    "Discover SG Smart Glass for switchable privacy, powered by PDLC smart film. Explore variants, applications and installation across India.",
  keywords: [
    "Smart Glass",
    "Switchable Smart Glass",
    "Privacy Glass",
    "PDLC Smart Film",
    "Switchable Privacy Film",
    "Smart Film Installation",
    "Smart Glass for Offices",
    "Smart Glass for Homes",
    "Smart Glass in India",
    "Technical Glass and Glazing India",
  ],
  authors: [{ name: siteConfig.legalCompanyName }],
  creator: siteConfig.legalCompanyName,
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteConfig.url,
    siteName: siteConfig.brandName,
    title: "Smart Glass & PDLC Smart Film Solutions | SG Smart Glass",
    description:
      "Discover SG Smart Glass for switchable privacy, powered by PDLC smart film. Explore variants, applications and installation across India.",
    images: [
      {
        url: "/images/hero/hero-smart-glass-clear.jpg",
        width: 1200,
        height: 675,
        alt: "SG Smart Glass Architectural Installation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Smart Glass & PDLC Smart Film Solutions | SG Smart Glass",
    description:
      "Discover SG Smart Glass for switchable privacy, powered by PDLC smart film. Explore variants, applications and installation across India.",
    images: ["/images/hero/hero-smart-glass-clear.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.brandName,
    legalName: siteConfig.legalCompanyName,
    url: siteConfig.url,
    logo: `${siteConfig.url}${siteConfig.logo.primary}`,
    description: siteConfig.description,
    address: {
      "@type": "PostalAddress",
      streetAddress: `${siteConfig.contact.address.complex}, ${siteConfig.contact.address.area}`,
      addressLocality: siteConfig.contact.address.city,
      addressRegion: siteConfig.contact.address.state,
      postalCode: siteConfig.contact.address.pincode,
      addressCountry: "IN",
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: siteConfig.contact.indiaPrimary.display,
        contactType: "customer service",
        areaServed: ["IN", "AE"],
        availableLanguage: ["English", "Hindi", "Malayalam"],
      },
    ],
    sameAs: [
      siteConfig.social.facebook,
      siteConfig.social.instagram,
      siteConfig.social.youtube,
      siteConfig.social.whatsapp,
    ],
  };

  return (
    <html lang="en" className={`${manrope.variable} ${dmSans.variable} scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className="min-h-screen flex flex-col font-sans text-slate-800 bg-white antialiased">
        <Navbar />
        <main className="flex-1 pt-18 sm:pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
