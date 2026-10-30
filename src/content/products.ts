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
  galleryImages?: string[];
  features: string[];
  approvedSpecs: { label: string; value: string }[];
  applications: string[];
  clearViewNote?: string;
  badge?: string;
  featuresAndAdvantages?: { feature: string; advantage: string }[];
  diagramImage?: string;
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
      "The latest and most advanced smart glass technology available, delivering ultra-clear visibility and premium performance.",
    fullDescription:
      "SG 95% Clear View is specifically selected for spaces requiring superior optical transparency in its active clear state. Ideal for executive boardrooms, luxury residential living spaces, and storefronts where open sightlines and maximum daylight transmission are paramount. Switches instantaneously to a fully private frosted surface at the touch of a switch.",
    image: "/images/products/sg95-clear-view.jpg",
    features: [
      "Ultra-clear optical visibility in transparent state (95% clarity tier)",
      "Instantaneous switch between open clarity and total privacy in < 100ms",
      "Custom prepared and precision cut to confirmed glass dimensions",
      "99% UV protection to reduce interior fading and skin exposure",
      "Up to 20% solar heat reduction to lower indoor cooling load",
      "Compatible with wall switch, RF remote, or home automation integration",
    ],
    approvedSpecs: [
      { label: "Technology", value: "Polymer Dispersed Liquid Crystal (PDLC)" },
      { label: "Operation State", value: "Power ON: Transparent | Power OFF: Frosted/Private" },
      { label: "UV Blocking", value: "99% UV Protection" },
      { label: "Heat Reduction", value: "Up to 20% Solar Heat Reduction" },
      { label: "Warranty", value: "Up to 5-Year Warranty (3-Yr Replacement + Extended)" },
      { label: "Preparation", value: "Custom pre-cut to confirmed project dimensions" },
    ],
    applications: [
      "Executive Boardrooms & Leadership Suites",
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
      "High-clarity smart glass solution with elegant aesthetics and excellent functionality across commercial and residential projects.",
    fullDescription:
      "SG 91% Clear View is the versatile architectural standard for commercial offices, hotels, and residential projects. It balances high visual clarity in the powered-on state with full privacy diffusion in the frosted mode.",
    image: "/images/products/sg91-clear-view.jpg",
    features: [
      "Balanced architectural clarity and privacy diffusion (91% clarity tier)",
      "Switchable transparency and privacy on demand in under 0.1s",
      "Pre-cut and customized to millimeter precision at our facility",
      "99% UV radiation blocking",
      "Up to 20% thermal heat reduction",
      "Up to 5-Year warranty backing",
    ],
    approvedSpecs: [
      { label: "Technology", value: "PDLC Smart Film" },
      { label: "Operation Mode", value: "Power ON: Clear | Power OFF: Private" },
      { label: "UV Protection", value: "99% Protection" },
      { label: "Heat Reduction", value: "Up to 20% Solar Reduction" },
      { label: "Warranty", value: "Up to 5-Year Warranty (3-Yr Replacement + Extended)" },
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
    tagline: "Dependable Cost-Effective Architectural Privacy",
    description:
      "A reliable and cost-effective smart glass option suitable for multiple interior partition applications.",
    fullDescription:
      "SG 89% Clear View provides dependable privacy performance for interior partitions where high-contrast frosted privacy is required while maintaining natural ambient light distribution throughout the space.",
    image: "/images/products/sg89-clear-view.jpg",
    features: [
      "Cost-effective switchable privacy solution (89% clarity tier)",
      "Consistent light diffusion and rapid frosted privacy",
      "Switchable on/off operation (< 100 milliseconds)",
      "99% UV filtration",
      "Custom prepared at SG specialized testing & preparation facility",
      "Ideal for interior office partitions and clinic cubicles",
    ],
    approvedSpecs: [
      { label: "Technology", value: "PDLC Smart Film" },
      { label: "Switching Function", value: "Transparent (Active) / Frosted (Idle)" },
      { label: "UV Resistance", value: "99% UV Block" },
      { label: "Thermal Control", value: "Up to 20% Solar Heat Reduction" },
      { label: "Warranty", value: "Up to 5-Year Warranty (3-Yr Replacement + Extended)" },
      { label: "Installation", value: "Turnkey installation (smart glass only)" },
    ],
    applications: [
      "Internal Office Partitions & Staff Rooms",
      "Healthcare Treatment & Consultation Cubicles",
      "Residential Bathroom & Ensuite Dividers",
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
      "A tinted option for darker interiors and design schemes requiring a deeper smoke appearance.",
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
      { label: "Warranty", value: "Up to 5-Year Warranty (3-Yr Replacement + Extended)" },
      { label: "Controls", value: "Wall switch, RF Remote, Smart Automation" },
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
    categoryLabel: "Architectural Profile System",
    tagline: "Solid Aluminium Architectural Profile System for Dry Glazing & Smart Glass",
    description:
      "Unique profile design with dry glazing mechanism, 50mm deeper inner cavity, and contoured EPDM gaskets for 8mm, 10mm & 12mm glass partitions.",
    fullDescription:
      "Twin Pro is a premier solid aluminium architectural profile system engineered by Technical Glass Leading Technologies for high-performance glass partitions and smart glass installations. Utilizing a unique twinpro mechanism with dry glazing (no glue or silicon required), Twin Pro features a 50mm deeper inner cavity (both height and width) permitting higher glass tolerances, effortless assembly, and acoustic soundproofing via contoured EPDM gaskets.",
    image: "/images/products/twin-pro.jpg",
    galleryImages: [
      "/images/products/twin-pro-installation.jpg",
      "/images/products/twin-pro-diagram.png",
      "/images/products/twin-pro-disassembled.jpg",
      "/images/products/profiles-side-by-side.jpg",
    ],
    diagramImage: "/images/products/twin-pro-diagram.png",
    features: [
      "Unique Profile Design: 50mm deeper inner cavity (both height & width) for higher glass tolerances",
      "Ideal for 8mm, 10mm & 12mm glass thickness",
      "Solid Aluminium Profile with steadfast holding power to structure and glass",
      "Dry Glazing: Easy installation & demounting as no glue or silicon required",
      "Unique Twinpro Mechanism: No shifting or falling out of position, maintenance free",
      "Contoured EPDM Gaskets for maximum soundproofing and acoustic performance",
      "Safety & Security / Theft Proof: Uniform grip along all 8 edges with exterior gasket removal prevented under pressure",
      "Minimum Components: 2 Profiles & Gaskets for reduced inventory and rapid assembly",
    ],
    featuresAndAdvantages: [
      {
        feature: "Unique Profile Design",
        advantage: "Simple & faster fabrication and glass Installation. Ideal for 8, 10 & 12mm glass thickness, 50mm deeper Inner cavity (both Height & Width) permits higher tolerances on glass dimension.",
      },
      {
        feature: "Solid Aluminium Profile",
        advantage: "Steadfast holding power to structure and for glass.",
      },
      {
        feature: "Unique Twinpro Mechanism",
        advantage: "No shifting or falling out of position, maintenance free.",
      },
      {
        feature: "Dry Glazing",
        advantage: "Easy installation & demounting as no glue or silicon required, easier glass replacement.",
      },
      {
        feature: "Minimum Components (2 Profiles & Gaskets)",
        advantage: "Reduced inventory, multiple applications.",
      },
      {
        feature: "Economical",
        advantage: "Cost effective time & labour saving by easy installation & faster applied cladding.",
      },
      {
        feature: "Aesthetics",
        advantage: "Slim & strong design, low visual impact, space saving.",
      },
      {
        feature: "Acoustics",
        advantage: "Profile design features and contoured EPDM gaskets helps achieve highest level of sound proofing.",
      },
      {
        feature: "Safety & Security / Theft Proof",
        advantage: "Deep cavity in profile and uniform grip on all along the 8 edges of glass adds strength to glazing and reduces horizontal movements. Exterior removal of gasket/glass made impossible due to contoured EPDM gasket held under pressure. Better shock absorption.",
      },
      {
        feature: "Color",
        advantage: "Available in anodized finishes, mill finish, any RAL colours.",
      },
      {
        feature: "Length",
        advantage: "Standard size 3600mm, 5800mm (custom sizes available).",
      },
    ],
    approvedSpecs: [
      { label: "Glass Compatibility", value: "8mm, 10mm & 12mm Glass Thickness" },
      { label: "Inner Cavity", value: "50mm Deeper Inner Cavity (Height & Width)" },
      { label: "Glazing Method", value: "Dry Glazing (No glue or silicone required)" },
      { label: "Material & Build", value: "Solid Architectural Aluminium Profile" },
      { label: "Acoustics", value: "Contoured EPDM Gaskets for maximum soundproofing" },
      { label: "System Components", value: "Minimum 2 Profiles & Contoured Gaskets" },
      { label: "Standard Lengths", value: "3600mm, 5800mm (custom sizes available)" },
      { label: "Finish Options", value: "Anodized finishes, Mill finish, Any RAL colours" },
      { label: "Security & Safety", value: "Theft proof, anti-shifting, deep uniform 8-edge grip" },
    ],
    applications: [
      "Glass Partitions & Interior Office Partitions",
      "Rail for Fixed Glass Enabling Easy Assembly & Replacement",
      "Shop Fronts with Maximum Visibility and Security",
      "Fix Windows & Partitions that Need Relocation",
      "Pergolas, Sky Lights & Shower Cubicles",
      "Photo and Mirror Frames & Elegant Signages",
    ],
    badge: "Solid Aluminium Dry Glazing",
  },
  {
    id: "slim-pro",
    slug: "slim-pro",
    name: "Slim Pro",
    category: "glass-profiles",
    categoryLabel: "Slim Profile System",
    tagline: "Minimalist Single-Piece Ultra-Slim Channel Profile",
    description:
      "Minimalist ultra-slim channel profile system delivering clean visual lines and maximum exposed glass area for single-glazed smart partitions.",
    fullDescription:
      "Slim Pro offers an ultra-minimalist perimeter profile for smart glass installations. With slim sightlines, it allows the switchable glass to remain the pure visual focal point of the space while maintaining robust structural support, integrated rubber gasket cushioning, and concealed cable routing.",
    image: "/images/products/slim-pro.jpg",
    galleryImages: [
      "/images/products/profiles-side-by-side.jpg",
      "/images/products/profiles-cross-section.jpg",
    ],
    features: [
      "Ultra-slim minimalist perimeter frame profile",
      "Maximizes transparent glass area and architectural elegance",
      "Integrated EPDM gasket retention for vibration damping and edge protection",
      "Precision cable routing for PDLC electrical feed",
      "Durable architectural anodized matte black finish",
      "Fast, precise installation for single-pane smart glass partitions",
    ],
    approvedSpecs: [
      { label: "System Type", value: "Single-Piece Minimalist Channel Profile" },
      { label: "Design Sightline", value: "Ultra-Slim Frame Profile" },
      { label: "Material", value: "High-Strength Extruded Aluminum" },
      { label: "Electrical Integration", value: "Concealed perimeter cable pathways" },
      { label: "Glass Compatibility", value: "10mm – 12mm Smart Glass Panels" },
      { label: "Finish Options", value: "Architectural Matte Black / Anodized" },
    ],
    applications: [
      "Contemporary Residential Living & Ensuite Dividers",
      "Modern Open-Plan Commercial Meeting Cabins",
      "Boutique Retail & Hospitality Suites",
    ],
    badge: "Ultra-Slim Sightline",
  },
];

export const allProducts: Product[] = [...smartFilmVariants, ...glassProfiles];

export function getProductBySlug(slug: string): Product | undefined {
  return allProducts.find((p) => p.slug === slug);
}
