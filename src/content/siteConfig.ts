export const siteConfig = {
  brandName: "SG Smart Glass",
  legalCompanyName: "Technical Glass and Glazing India Private Limited",
  tagline: "SMART GLASS. SMARTER PRIVACY.",
  description:
    "Discover SG Smart Glass for switchable privacy, powered by PDLC smart film. Explore variants, applications and professional installation.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://sgsmartglass.com",
  
  // Logos
  logo: {
    primary: "/brand/sg-logo-transparent.png",
    fallback: "/brand/sg-logo.png",
    alt: "SG Smart Glass - Technical Glass and Glazing India Private Limited",
  },

  // Contact Information (Primary source: PDF Website Development Brief)
  contact: {
    email: "info@sgsmartglass.com",
    indiaPrimary: {
      display: "+91 87149 33307",
      tel: "+918714933307",
    },
    additionalIndia: [
      {
        display: "+91 87147 44407",
        tel: "+918714744407",
      },
      {
        display: "+91 87147 99907",
        tel: "+918714799907",
      },
      {
        display: "+91 87149 22207",
        tel: "+918714922207",
      },
    ],
    uae: {
      display: "+971 56 470 7601",
      tel: "+971564707601",
    },
    address: {
      complex: "Palaprassery Juma Masjid Complex, P.O",
      area: "Nedumbassery, Chengamanad",
      city: "Kochi",
      state: "Keralam",
      pincode: "683578",
      full: "Palaprassery Juma Masjid Complex, P.O, Nedumbassery, Chengamanad, Kochi, Keralam 683578",
    },
    whatsapp: {
      number: "918714933307",
      url: "https://wa.me/918714933307",
      defaultMessage:
        "Hello SG Smart Glass, I would like to enquire about a smart glass solution for my project.",
    },
  },

  // Official Social Media Profiles
  social: {
    facebook: "https://www.facebook.com/profile.php?id=61561671424066",
    instagram: "https://www.instagram.com/sgsmartglass_official/",
    youtube: "https://www.youtube.com/@sgsmartglass",
    whatsapp: "https://wa.me/918714933307",
  },

  // Experience & Positioning
  experience: {
    years: "35+",
    attribution: "Technical Glass and Glazing India Private Limited / Group Industry Expertise",
    leadTerm: "Smart Glass",
    underlyingTech: "PDLC Smart Film",
    scopeNotice:
      "SG Smart Glass prepares and customises PDLC film to confirmed measurements and coordinates installation. Base-glass selection is handled by the client or appointed glass supplier.",
  },
} as const;

export type SiteConfig = typeof siteConfig;
