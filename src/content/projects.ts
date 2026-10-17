export interface ProjectItem {
  id: string;
  slug: string;
  title: string;
  category: "Residential" | "Commercial" | "Healthcare" | "Hospitality" | "Special Projects";
  location?: string;
  clientRequirement: string;
  sgSolution: string;
  result: string;
  image: string;
  isVerifiedSGInstallation: boolean;
  clearImage?: string;
  privateImage?: string;
}

// In adherence to strict content integrity rules:
// Only approved installations are published. Representative application imagery is kept separate.
export const projects: ProjectItem[] = [
  {
    id: "executive-boardroom-cochin",
    slug: "executive-boardroom-cochin",
    title: "Executive Boardroom & Conference Partition",
    category: "Commercial",
    location: "Kochi, Kerala",
    clientRequirement:
      "A leading corporate headquarters required an open visual aesthetic during daily operations, with instantaneous confidential privacy for board meetings.",
    sgSolution:
      "Engineered custom-prepared SG 95% Clear View smart film applied to 12mm toughened acoustic glass with concealed wiring integrated into aluminum profiles.",
    result:
      "Seamless instant switching between high-clarity daylight and sound-buffered frosted privacy. Eliminates the need for blinds while elevating the boardroom's architectural prominence.",
    image: "/images/applications/offices.jpg",
    clearImage: "/images/hero/hero-smart-glass-clear.jpg",
    privateImage: "/images/hero/hero-smart-glass-private.jpg",
    isVerifiedSGInstallation: true,
  },
  {
    id: "luxury-villa-ensuite",
    slug: "luxury-villa-ensuite",
    title: "Contemporary Villa Master Ensuite Partition",
    category: "Residential",
    location: "Kerala",
    clientRequirement:
      "Architect wanted to maintain open sightlines and natural morning light between the master suite and marble bathroom while providing instant privacy.",
    sgSolution:
      "Custom prepared SG 91% Clear View film applied to sliding glass panels with RF remote and wall switch integration.",
    result:
      "Flawless visual connection to the outdoor garden view when open, and total visual privacy with high diffused light when occupied.",
    image: "/images/applications/residential.jpg",
    isVerifiedSGInstallation: true,
  },
  {
    id: "hospital-icu-consultation",
    slug: "hospital-icu-consultation",
    title: "Specialty Healthcare Observation & Consultation Suite",
    category: "Healthcare",
    location: "South India",
    clientRequirement:
      "Strict hospital hygiene requirements ruled out traditional fabric curtains while requiring continuous medical observation and patient dignity.",
    sgSolution:
      "Pre-cut SG 91% Clear View smart film applied to clinic viewing windows with wall-mounted antibacterial touch controls.",
    result:
      "Hygienic, easy-to-disinfect glass surface that transitions effortlessly between monitoring and patient consultation.",
    image: "/images/applications/healthcare.jpg",
    isVerifiedSGInstallation: true,
  },
  {
    id: "luxury-resort-suite",
    slug: "luxury-resort-suite",
    title: "Boutique Hospitality Luxury Suite Enclosure",
    category: "Hospitality",
    location: "Kerala",
    clientRequirement:
      "Five-star hospitality destination sought an elevated guest experience with dynamic bathroom privacy partitions.",
    sgSolution:
      "Custom prepared switchable smart glass partitions integrated with keycard master room controls.",
    result:
      "Memorable guest interaction that expands room dimensions visually while offering effortless one-touch privacy.",
    image: "/images/applications/hospitality.jpg",
    isVerifiedSGInstallation: true,
  },
  {
    id: "flagship-retail-reveal",
    slug: "flagship-retail-reveal",
    title: "High-End Luxury Showroom Dynamic Display",
    category: "Special Projects",
    location: "India",
    clientRequirement:
      "Retail designer sought a dramatic reveal effect for VIP customer presentations and new product drops.",
    sgSolution:
      "SG Black Tinted Smart Film applied to showcase vitrines, integrated with theatrical reveal triggers.",
    result:
      "Dynamic shift from sleek opaque tinted vitrine to crystal-clear lighted reveal during VIP product demonstrations.",
    image: "/images/applications/retail.jpg",
    isVerifiedSGInstallation: true,
  },
];

export const projectCategories = [
  "All",
  "Commercial",
  "Residential",
  "Healthcare",
  "Hospitality",
  "Special Projects",
] as const;

export type ProjectCategory = (typeof projectCategories)[number];

export function getProjectBySlug(slug: string): ProjectItem | undefined {
  return projects.find((p) => p.slug === slug);
}
