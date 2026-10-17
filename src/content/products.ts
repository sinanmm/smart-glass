export interface Product {
  id: string;
  slug: string;
  name: string;
  category: "smart-film" | "glass-profiles";
  categoryLabel: string;
  tagline: string;
  description: string;
  fullDescription: string;
  image: string;
  features: string[];
  approvedSpecs: { label: string; value: string }[];
  applications: string[];
  clearViewNote?: string;
  badge?: string;
}

export const smartFilmVariants: Product[] = [
  {
    id: "sg-95-clear-view",
    slug: "sg-95-clear-view",
    name: "SG 95% Clear View",
    category: "smart-film",
    categoryLabel: "PDLC Smart Film",
    tagline: "Ultra-High Transparency Smart Film",
    description:
      "A high-transparency option for spaces where visual clarity is a priority.",
    fullDescription:
      "SG 95% Clear View is specifically selected for spaces requiring superior optical transparency in its active clear state. Ideal for executive boardrooms, luxury residential living spaces, and storefronts where open sightlines and maximum daylight transmission are paramount. Switches instantaneously to a fully private frosted surface at the touch of a switch.",
    image: "/images/products/sg95-clear-view.jpg",
    features: [
      "High visual clarity in transparent state",
      "Instantaneous switch between open clarity and total privacy",
      "Custom prepared and cut to confirmed glass dimensions",
      "99% UV protection to reduce interior fading",
      "Up to 20% solar heat reduction",
      "Compatible with wall switch, remote, or home automation integration",
    ],
    approvedSpecs: [
      { label: "Technology", value: "Polymer Dispersed Liquid Crystal (PDLC)" },
      { label: "Operation State", value: "Power ON: Transparent | Power OFF: Frosted/Private" },
      { label: "UV Blocking", value: "99% UV Protection" },
      { label: "Heat Reduction", value: "Up to 20% Solar Heat Reduction" },
      { label: "Warranty", value: "3-Year Limited Warranty" },
      { label: "Preparation", value: "Custom pre-cut to confirmed project dimensions" },
    ],
    applications: [
      "Executive Boardrooms & Conference Rooms",
      "Luxury Villa Living & Dining Partitions",
      "Architectural Showrooms & Atriums",
    ],
    clearViewNote:
      "Product designation denotes clarity tier; verified numerical optical transmission values are subject to confirmed base glass specification.",
    badge: "Highest Clarity",
  },
  {
    id: "sg-91-clear-view",
    slug: "sg-91-clear-view",
    name: "SG 91% Clear View",
    category: "smart-film",
    categoryLabel: "PDLC Smart Film",
    tagline: "Architectural Grade High Clarity",
    description:
      "A high-transparency option for a wide range of architectural privacy applications.",
    fullDescription:
      "SG 91% Clear View is the versatile architectural standard for commercial offices, hotels, and residential projects. It balances visual clarity in the powered-on state with diffusion in the frosted privacy mode.",
    image: "/images/products/sg91-clear-view.jpg",
    features: [
      "Balanced architectural clarity and privacy diffusion",
      "Switchable transparency and privacy on demand",
      "Pre-cut and customized to millimeter precision",
      "99% UV radiation blocking",
      "20% thermal heat reduction",
      "3-Year manufacturer warranty",
    ],
    approvedSpecs: [
      { label: "Technology", value: "PDLC Smart Film" },
      { label: "Operation Mode", value: "Power ON: Clear | Power OFF: Private" },
      { label: "UV Protection", value: "99% Protection" },
      { label: "Heat Reduction", value: "20% Reduction" },
      { label: "Warranty", value: "3-Year Limited Warranty" },
      { label: "Control Options", value: "Wall switch, RF remote, Home automation" },
    ],
    applications: [
      "Commercial Offices & Meeting Cabins",
      "Hospital & Clinical Consultation Suites",
      "Hotel Bathroom & Bedroom Enclosures",
    ],
    clearViewNote:
      "Clarity tier designation; specifications subject to confirmed site glass conditions.",
    badge: "Most Popular",
  },
  {
    id: "sg-89-clear-view",
    slug: "sg-89-clear-view",
    name: "SG 89% Clear View",
    category: "smart-film",
    categoryLabel: "PDLC Smart Film",
    tagline: "Dependable Architectural Privacy",
    description:
      "An alternative clarity option for projects with different visual requirements.",
    fullDescription:
      "SG 89% Clear View provides dependable privacy performance for interior partitions where high-contrast frosted privacy is required while maintaining natural ambient light distribution.",
    image: "/images/products/sg89-clear-view.jpg",
    features: [
      "Consistent light diffusion and frosted privacy",
      "Switchable on/off operation",
      "99% UV filtration",
      "Custom prepared at SG production facility",
      "Ideal for high-privacy interior glazing",
    ],
    approvedSpecs: [
      { label: "Technology", value: "PDLC Smart Film" },
      { label: "Switching Function", value: "Transparent (Active) / Frosted (Idle)" },
      { label: "UV Resistance", value: "99% UV Block" },
      { label: "Thermal Control", value: "Up to 20% Solar Heat Reduction" },
      { label: "Warranty", value: "3-Year Limited Warranty" },
      { label: "Installation", value: "Coordinated with glass installation team" },
    ],
    applications: [
      "Internal Office Partitions & Staff Rooms",
      "Healthcare Treatment & ICU Cubicles",
      "Residential Bathroom Dividers",
    ],
  },
  {
    id: "sg-black-tinted",
    slug: "sg-black-tinted",
    name: "SG Black Tinted Smart Film",
    category: "smart-film",
    categoryLabel: "PDLC Smart Film",
    tagline: "Dark-Tinted Architectural Privacy",
    description:
      "A tinted option for darker interiors and design schemes requiring a deeper appearance.",
    fullDescription:
      "SG Black Tinted Smart Film introduces a modern dark charcoal aesthetic suited for darker interior colour palettes, private cinema rooms, modern hospitality lounges, and executive suites requiring deeper tone and controlled glare.",
    image: "/images/products/sg-black-tinted.jpg",
    features: [
      "Deep tinted appearance complementing dark architectural finishes",
      "Switchable between tinted transparency and dark frosted privacy",
      "Glare mitigation and enhanced daytime privacy",
      "99% UV blockage",
      "Customized film preparation to exact specifications",
    ],
    approvedSpecs: [
      { label: "Technology", value: "Tinted PDLC Smart Film" },
      { label: "Appearance", value: "Dark Charcoal / Smoke Tinted" },
      { label: "Switching Mode", value: "Tinted Clear (Active) / Deep Frosted (Idle)" },
      { label: "UV Protection", value: "99% UV Block" },
      { label: "Warranty", value: "3-Year Limited Warranty" },
      { label: "Controls", value: "Switch / Remote / Automation" },
    ],
    applications: [
      "Private Home Theatres & Entertainment Lounges",
      "Executive Suites with Dark Architectural Accents",
      "High-End Hospitality Lounges & Nightclubs",
    ],
    badge: "Specialty Tint",
  },
];

export const glassProfiles: Product[] = [
  {
    id: "twin-pro",
    slug: "twin-pro",
    name: "Twin Pro",
    category: "glass-profiles",
    categoryLabel: "Glass Profile System",
    tagline: "Architectural Double-Glazed Profile System",
    description:
      "Engineered double-glazed glass profile system designed for superior acoustic performance and clean architectural integration.",
    fullDescription:
      "Twin Pro is an architectural glass profile system engineered for modern interior partition projects requiring enhanced acoustic isolation and structured glazing. Designed to house smart glass panels with concealed wire management routes, ensuring seamless electrical integration.",
    image: "/images/products/twin-pro.jpg",
    features: [
      "Engineered for double-glazed architectural glass applications",
      "Enhanced acoustic privacy for boardrooms and executive cabins",
      "Dedicated concealed wiring conduits for smart film connections",
      "Precision aluminum profile with durable anodized finish",
      "Seamless coordination with SG Smart Glass film installation",
    ],
    approvedSpecs: [
      { label: "System Type", value: "Double-Glazed Profile System" },
      { label: "Profile Material", value: "Architectural Grade Extruded Aluminum" },
      { label: "Application Scope", value: "Interior Demountable & Fixed Partitions" },
      { label: "Smart Film Integration", value: "Integrated concealed wire management" },
      { label: "Compatibility", value: "Engineered for SG Smart Glass systems" },
    ],
    applications: [
      "High-Acoustic Boardrooms",
      "Legal & Financial Executive Suites",
      "Corporate Headquarters Partitions",
    ],
  },
  {
    id: "slim-pro",
    slug: "slim-pro",
    name: "Slim Pro",
    category: "glass-profiles",
    categoryLabel: "Glass Profile System",
    tagline: "Minimalist Ultra-Slim Profile System",
    description:
      "Minimalist ultra-slim single-glazed glass profile system delivering clean visual lines and modern elegance.",
    fullDescription:
      "Slim Pro offers an ultra-minimalist perimeter profile for single-glazed smart glass installations. With slim sightlines, it allows the switchable glass to remain the pure visual focal point of the space while maintaining robust structural support and concealed power routing.",
    image: "/images/products/slim-pro.jpg",
    features: [
      "Ultra-slim minimalist perimeter frame profile",
      "Maximizes transparent glass area and architectural elegance",
      "Precision cable routing for PDLC electrical feed",
      "Durable architectural powder-coated or anodized finish",
      "Fast, precise installation coordination",
    ],
    approvedSpecs: [
      { label: "System Type", value: "Single-Glazed Minimalist Profile System" },
      { label: "Design Sightline", value: "Ultra-Slim Frame Profile" },
      { label: "Material", value: "High-Strength Extruded Aluminum" },
      { label: "Electrical Integration", value: "Concealed perimeter cable pathways" },
      { label: "Compatibility", value: "SG Smart Glass film & glass configurations" },
    ],
    applications: [
      "Contemporary Residential Living & Ensuite Dividers",
      "Modern Open-Plan Commercial Meeting Cabins",
      "Boutique Retail & Hospitality Suites",
    ],
  },
];

export const allProducts: Product[] = [...smartFilmVariants, ...glassProfiles];

export function getProductBySlug(slug: string): Product | undefined {
  return allProducts.find((p) => p.slug === slug);
}
