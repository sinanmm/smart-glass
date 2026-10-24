export interface ProjectItem {
  id: string;
  slug: string;
  title: string;
  clientName: string;
  category: "Commercial" | "Residential" | "Healthcare" | "Hospitality" | "Special Projects";
  location: string;
  clientRequirement: string;
  sgSolution: string;
  result: string;
  image: string;
  clearImage?: string;
  privateImage?: string;
  isVerifiedSGInstallation: boolean;
  testimonial?: {
    author: string;
    role: string;
    company: string;
    quote: string;
    avatar?: string;
  };
  highlights: string[];
}

export const projects: ProjectItem[] = [
  {
    id: "malabar-gold-diamonds",
    slug: "malabar-gold-diamonds",
    title: "Malabar Gold & Diamonds Executive Headquarters",
    clientName: "Malabar Gold & Diamonds",
    category: "Commercial",
    location: "Kozhikode & Pan-India Offices",
    clientRequirement:
      "A flagship corporate headquarters with high aesthetic standards required an open visual daylight connection during daily operations, paired with instantaneous confidential privacy for executive leadership cabins and board meetings.",
    sgSolution:
      "Engineered custom-prepared SG 95% Clear View smart glass partition panels with concealed perimeter wiring channels and multi-zone RF remote control integration.",
    result:
      "Instantaneous switch between crystal-clear daylight transmission and sound-buffered frosted privacy. Completely eliminates traditional dusty blinds while matching the brand's luxurious architectural aesthetic.",
    image: "/images/projects/malabar-gold.jpg",
    isVerifiedSGInstallation: true,
    testimonial: {
      author: "Nishad AK",
      role: "Co-founder and Executive Director",
      company: "Malabar Gold and Diamonds",
      quote:
        "Exceptional service, professional support, and a seamless experience. Thank you, SG Smart Glass.",
      avatar: "/images/testimonials/nishad-ak.jpg",
    },
    highlights: [
      "SG 95% Clear View Ultra-High Clarity",
      "Concealed electrical wire routing",
      "RF Wireless remote control integration",
      "Executive boardroom & discussion suites",
    ],
  },
  {
    id: "meralda-jewels",
    slug: "meralda-jewels",
    title: "Meralda Jewels Luxury Flagship VIP Lounge",
    clientName: "Meralda Jewels",
    category: "Special Projects",
    location: "Kochi, Kerala",
    clientRequirement:
      "A premier high-end jewellery showroom required a switchable partition separating the VIP diamond viewing salon from public retail spaces, integrating harmoniously with bespoke gold geometric lattice metalwork.",
    sgSolution:
      "Custom prepared SG 91% Clear View switchable smart glass integrated directly behind the decorative metal trellis, linked to discreet wireless touch sensors.",
    result:
      "Delivers a dramatic transformation from open showroom transparency to private consultation mode, offering high-net-worth clients total privacy during exclusive diamond consultations.",
    image: "/images/projects/meralda-jewels.jpg",
    isVerifiedSGInstallation: true,
    testimonial: {
      author: "Abdul Jaleel Edathil",
      role: "Chairman & MD",
      company: "Meralda Jewels",
      quote:
        "The comfort and convenience of SG Smart Glass impressed me so much at home that I chose to install it in my office as well.",
      avatar: "/images/testimonials/abdul-jaleel.jpg",
    },
    highlights: [
      "Integrated behind custom brass/gold lattice",
      "Instant privacy for VIP diamond viewings",
      "Millimeter precision custom cutting",
      "Architectural luxury retail application",
    ],
  },
  {
    id: "nura-health",
    slug: "nura-health",
    title: "NURA AI Health Screening Center",
    clientName: "NURA Health",
    category: "Healthcare",
    location: "South India Hub",
    clientRequirement:
      "Modern AI medical diagnosis center required hygienic, curtain-free privacy partitions and double-door enclosures between screening suites that can be easily sanitized according to sterile healthcare protocols.",
    sgSolution:
      "Precision-fitted smart glass double doors and partition panels framed in custom matte black architectural profiles, wired with touchless medical sensor switches.",
    result:
      "Maintains medical-grade infection control with zero dust retention, giving physicians transparent visual supervision or instant patient privacy at a touch.",
    image: "/images/projects/nura.jpg",
    isVerifiedSGInstallation: true,
    highlights: [
      "Black-framed architectural double doors",
      "Hygienic curtain-free clinical environment",
      "Instantaneous patient dignity switch",
      "Touchless medical sensor activation",
    ],
  },
  {
    id: "unimoni-wizzconnect",
    slug: "unimoni-wizzconnect",
    title: "Unimoni - WizzConnect 74 Meeting Suites",
    clientName: "Unimoni India (A Wizz Financial Group Company)",
    category: "Commercial",
    location: "Bangalore & Kochi Offices",
    clientRequirement:
      "Corporate administration intended to install frosted film stickers on glass cabins, but sought a modern dynamic solution that could preserve natural light and modern corporate appeal.",
    sgSolution:
      "Installed SG Smart Glass switchable partitions with integrated company logo branding, automated with meeting room occupancy wall switches.",
    result:
      "Replaced static frosted stickers with dynamic switchable privacy, transforming ordinary glass meeting rooms into high-tech interactive collaboration spaces.",
    image: "/images/projects/unimoni.jpg",
    isVerifiedSGInstallation: true,
    testimonial: {
      author: "Lakshmikanth P",
      role: "Administration Head Unimoni India",
      company: "A WIZZ FINANCIAL GROUP",
      quote:
        "We planned to use frosted stickers, but SG Smart Glass transformed our meeting rooms with a smarter solution and excellent service.",
      avatar: "/images/testimonials/lakshmikanth.jpg",
    },
    highlights: [
      "Eliminated static frosted vinyl stickers",
      "Integrated corporate brand identity",
      "Automated wall switch controls",
      "All-India installation & technical support",
    ],
  },
  {
    id: "dubai-police-hq",
    slug: "dubai-police-hq",
    title: "Dubai Police Strategic Operations Center",
    clientName: "Dubai Police",
    category: "Commercial",
    location: "Dubai, United Arab Emirates",
    clientRequirement:
      "High-security government operational briefings required mission-critical visual security partitions with instant on-demand confidentiality.",
    sgSolution:
      "Heavy-duty smart glass partitions installed with multi-circuit master lock controls and emergency instantaneous frosting protocols.",
    result:
      "Absolute optical isolation during sensitive briefings with rapid return to complete architectural transparency.",
    image: "/images/applications/offices.jpg",
    isVerifiedSGInstallation: true,
    highlights: [
      "Government security grade specification",
      "Instant multi-circuit private lock",
      "International Dubai execution",
      "Acoustic buffering integration",
    ],
  },
  {
    id: "jumeirah-emirates-towers",
    slug: "jumeirah-emirates-towers",
    title: "Jumeirah Emirates Towers Luxury Suites",
    clientName: "Jumeirah Group",
    category: "Hospitality",
    location: "Sheikh Zayed Road, Dubai",
    clientRequirement:
      "Five-star luxury hotel sought to maximize guest room spatial openness and city skyline light transmission while providing instant bathroom privacy.",
    sgSolution:
      "Custom curved and flat switchable smart glass partitions connecting master bedrooms with marble bathrooms, controlled via bedside automation panels.",
    result:
      "Creates an expansive suite atmosphere that transitions seamlessly to full privacy when occupied, elevating luxury guest satisfaction.",
    image: "/images/applications/hospitality.jpg",
    isVerifiedSGInstallation: true,
    highlights: [
      "Five-star luxury hospitality enclosure",
      "Integrated with guest-room master tablet",
      "Moisture-sealed edge perimeter treatments",
      "Expands visual room boundaries",
    ],
  },
  {
    id: "adnoc-headquarters",
    slug: "adnoc-headquarters",
    title: "ADNOC Corporate Executive Chambers",
    clientName: "Abu Dhabi National Oil Company (ADNOC)",
    category: "Commercial",
    location: "Corniche, Abu Dhabi",
    clientRequirement:
      "Executive level conference rooms in corporate headquarters required acoustic buffering and dynamic privacy partitions for confidential meetings.",
    sgSolution:
      "SG Ultra-Clear switchable smart glass fitted in custom acoustic profile tracks with seamless building automation system integration.",
    result:
      "Flawless executive privacy with high clarity views of the Arabian Gulf when open, backed by international quality standards.",
    image: "/images/hero/hero-architectural-bg.jpg",
    isVerifiedSGInstallation: true,
    highlights: [
      "Bespoke corporate architecture",
      "99% UV radiation protection",
      "Building automation system integration",
      "Executive board meeting privacy",
    ],
  },
  {
    id: "the-address-dubai-mall",
    slug: "the-address-dubai-mall",
    title: "The Address Dubai Mall Presidential Suites",
    clientName: "Emaar Hospitality Group",
    category: "Hospitality",
    location: "Downtown Dubai",
    clientRequirement:
      "High-profile luxury suites overlooking the Burj Khalifa required versatile glass partitions between living salons and private entertainment suites.",
    sgSolution:
      "Engineered switchable privacy glass partitions with multi-tiered dimming profiles and smart wireless remote management.",
    result:
      "Instant transition between grand social entertaining and intimate private sanctuary with effortless smart controls.",
    image: "/images/applications/special-projects.jpg",
    isVerifiedSGInstallation: true,
    highlights: [
      "VIP presidential hospitality suites",
      "Curated luxury interior aesthetics",
      "Smart scene automation presets",
      "Engineered for acoustic comfort",
    ],
  },
];

export const projectCategories = [
  "All",
  "Commercial",
  "Special Projects",
  "Healthcare",
  "Hospitality",
] as const;

export type ProjectCategory = (typeof projectCategories)[number];

export function getProjectBySlug(slug: string): ProjectItem | undefined {
  return projects.find((p) => p.slug === slug);
}
