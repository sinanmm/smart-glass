export interface ProjectItem {
  id: string;
  slug: string;
  title: string;
  clientName: string;
  category: "Commercial" | "Residential" | "Healthcare" | "Special Projects";
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
    title: "Malabar Gold & Diamonds Director's Luxury Residence",
    clientName: "Malabar Gold & Diamonds",
    category: "Residential",
    location: "Kozhikode (Calicut), Kerala",
    clientRequirement:
      "The private residence of Malabar Gold & Diamonds' Director required an architectural switchable privacy glass system connecting the master bedroom suite and luxury bathroom overlooking private greenery, delivering total privacy on demand without blocking daylight.",
    sgSolution:
      "Engineered custom-prepared SG 95% Clear View smart glass partition panels with concealed perimeter wiring channels and multi-zone remote control integration.",
    result:
      "Instantaneous switch between crystal-clear daylight transmission and sound-buffered frosted privacy. Completely eliminates traditional dusty blinds while matching the director's luxurious residence aesthetic.",
    image: "/images/projects/malabar-gold.jpg",
    clearImage: "/images/projects/malabar-gold-clear.jpg",
    privateImage: "/images/projects/malabar-gold-private.jpg",
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
      "Director's luxury private master suite & bathroom",
      "SG 95% Clear View Ultra-High Clarity",
      "Concealed electrical wire routing",
      "Wireless remote control & touch switch operation",
    ],
  },
  {
    id: "meralda-jewels",
    slug: "meralda-jewels",
    title: "Meralda Jewels Corporate Office & VIP Diamond Lounge",
    clientName: "Meralda Jewels",
    category: "Special Projects",
    location: "Kochi, Kerala",
    clientRequirement:
      "Following the successful residential installation, Meralda Jewels required custom switchable partitions for their corporate office and flagship diamond viewing salon, integrating harmoniously with bespoke gold decorative lattice metalwork.",
    sgSolution:
      "Custom-fabricated SG switchable smart glass precision-fitted behind ornamental brass-finish latticework, connected to discreet wireless touch sensors.",
    result:
      "Enables instant transformation from an open showroom daylight aesthetic to an exclusive private consultation salon for high-net-worth diamond clientele.",
    image: "/images/projects/meralda-jewels-vip-lounge.jpg",
    clearImage: "/images/projects/meralda-jewels-vip-lounge-clear.jpg",
    privateImage: "/images/projects/meralda-jewels-vip-lounge-private.jpg",
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
    location: "Healthcare Hub",
    clientRequirement:
      "Modern AI medical diagnosis center required hygienic, curtain-free privacy partitions and double-door enclosures between screening suites that can be easily sanitized according to sterile healthcare protocols.",
    sgSolution:
      "Precision-fitted smart glass double doors and partition panels framed in custom matte black architectural profiles, wired with touchless medical sensor switches.",
    result:
      "Maintains medical-grade infection control with zero dust retention, giving physicians transparent visual supervision or instant patient privacy at a touch.",
    image: "/images/projects/nura-health.jpg",
    clearImage: "/images/projects/nura-health-clear.jpg",
    privateImage: "/images/projects/nura-health-private.jpg",
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
    clientName: "Unimoni (A Wizz Financial Group Company)",
    category: "Commercial",
    location: "Kochi Office, Kerala",
    clientRequirement:
      "Corporate administration intended to install frosted film stickers on glass cabins at their Kochi office, but sought a modern dynamic solution that could preserve natural light transmission and enhance corporate appeal.",
    sgSolution:
      "Installed SG Smart Glass switchable partitions with integrated company logo branding, automated with meeting room occupancy wall switches.",
    result:
      "Replaced static frosted stickers with dynamic switchable privacy, transforming ordinary glass meeting rooms into high-tech interactive collaboration spaces.",
    image: "/images/projects/unimoni-wizzconnect.jpg",
    clearImage: "/images/projects/unimoni-wizzconnect-clear.jpg",
    privateImage: "/images/projects/unimoni-wizzconnect-private.jpg",
    isVerifiedSGInstallation: true,
    testimonial: {
      author: "Lakshmikanth P",
      role: "Administration Head, Unimoni",
      company: "A WIZZ FINANCIAL GROUP",
      quote:
        "We planned to use frosted stickers, but SG Smart Glass transformed our meeting rooms with a smarter solution and excellent service.",
      avatar: "/images/testimonials/lakshmikanth.jpg",
    },
    highlights: [
      "Kochi Corporate Office installation",
      "Eliminated static frosted vinyl stickers",
      "Integrated WizzConnect 74 corporate branding",
      "Automated meeting room wall switch controls",
    ],
  },
  {
    id: "meralda-jewels-chairman-residence",
    slug: "meralda-jewels-chairman-residence",
    title: "Meralda Jewels Chairman's Luxury Residence",
    clientName: "Meralda Jewels",
    category: "Residential",
    location: "Kochi, Kerala",
    clientRequirement:
      "The Chairman of Meralda Jewels required switchable privacy smart glass for his private luxury residence, providing instant privacy control for master living and ensuite spaces while maintaining an expansive modern interior feeling.",
    sgSolution:
      "Installed custom SG smart glass panels with tailored moisture-resistant edge sealing and synchronized remote controls.",
    result:
      "Seamless switch between pristine transparent daylight connection and complete frosted privacy, setting a benchmark for luxury residential automation in Kerala.",
    image: "/images/projects/meralda-jewels-chairman-residence.jpg",
    clearImage: "/images/projects/meralda-jewels-chairman-residence-clear.jpg",
    privateImage: "/images/projects/meralda-jewels-chairman-residence-private.jpg",
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
      "Chairman's luxury residence installation",
      "Moisture-sealed smart glass panels",
      "Instant remote control operation",
      "Seamless residential space transition",
    ],
  },
  {
    id: "mod-jewellery",
    slug: "mod-jewellery",
    title: "M.O.D Signature Jewellery Flagship Atelier",
    clientName: "M.O.D Signature Jewellery",
    category: "Special Projects",
    location: "Kochi, Kerala",
    clientRequirement:
      "High-end artisanal jewellery atelier required curved architectural switchable glass partitions for exclusive bespoke design consultations, ensuring client confidentiality while preserving an open, illuminated salon.",
    sgSolution:
      "Custom-engineered curved SG switchable smart glass panels tailored to precise radius curves with concealed edge power connections.",
    result:
      "A breathtaking curved architectural statement that flips from glass-walled elegance to full frosted opacity during high-value gem showcases.",
    image: "/images/projects/mod-jewellery.jpg",
    clearImage: "/images/projects/mod-jewellery-clear.jpg",
    privateImage: "/images/projects/mod-jewellery-private.jpg",
    isVerifiedSGInstallation: true,
    highlights: [
      "Bespoke curved smart glass engineering",
      "High-security VIP gem consultation booth",
      "Concealed architectural wiring channels",
      "Luxury jewellery showroom design",
    ],
  },
  {
    id: "jfs-logistics",
    slug: "jfs-logistics",
    title: "JFS Logistics Corporate Suites - Infopark",
    clientName: "JFS Logistics",
    category: "Commercial",
    location: "Infopark Kochi, Kerala",
    clientRequirement:
      "Global freight and logistics headquarters located in Infopark required sound-buffered, dynamic privacy partitions between executive managing director cabins and operations command floors.",
    sgSolution:
      "SG high-clarity switchable partitions mounted in slimline acoustic tracking profiles with wall-mounted rocker switches and wireless remote transmitters.",
    result:
      "Streamlined open office collaboration during standard hours, coupled with instant visual confidentiality for high-stakes logistics coordination and executive conferences.",
    image: "/images/projects/jfs-logistics.jpg",
    clearImage: "/images/projects/jfs-logistics-clear.jpg",
    privateImage: "/images/projects/jfs-logistics-private.jpg",
    isVerifiedSGInstallation: true,
    highlights: [
      "Infopark Kochi tech campus installation",
      "Acoustic perimeter tracking profiles",
      "Executive cabin & operations separation",
      "Rapid multi-zone remote switching",
    ],
  },
  {
    id: "sreenarayan-textiles",
    slug: "sreenarayan-textiles",
    title: "Sreenarayan Textiles Commercial Headquarters",
    clientName: "Sreenarayan Textiles",
    category: "Commercial",
    location: "Kolkata, West Bengal",
    clientRequirement:
      "Major textile trading establishment required a versatile switchable glass facade partition for their commercial discussion cabins to manage privacy during wholesale buyer negotiations without losing showroom daylight.",
    sgSolution:
      "Engineered large-format SG switchable smart glass panels custom-fitted into heavy-duty commercial mullions with centralized switch panel controls.",
    result:
      "Provides an elegant, modern corporate front that maintains daylight distribution across the floor while guaranteeing complete meeting privacy on demand.",
    image: "/images/projects/sreenarayan-textiles.jpg",
    clearImage: "/images/projects/sreenarayan-textiles-clear.jpg",
    privateImage: "/images/projects/sreenarayan-textiles-private.jpg",
    isVerifiedSGInstallation: true,
    highlights: [
      "Commercial headquarters Kolkata installation",
      "Large-format switchable glass panels",
      "Daylight preservation with instant privacy",
      "Centralized electrical switch controls",
    ],
  },
];

export const projectCategories = [
  "All",
  "Commercial",
  "Residential",
  "Special Projects",
  "Healthcare",
] as const;

export type ProjectCategory = (typeof projectCategories)[number];

export function getProjectBySlug(slug: string): ProjectItem | undefined {
  return projects.find((p) => p.slug === slug);
}
