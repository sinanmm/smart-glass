export interface ApplicationItem {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  useCases: string[];
  keyBenefits: string[];
  idealProducts: string[];
}

export const applications: ApplicationItem[] = [
  {
    id: "offices-boardrooms",
    slug: "offices-boardrooms",
    title: "Offices & Boardrooms",
    shortDescription:
      "Instant privacy for executive cabins, client conference spaces, and high-focus collaboration rooms.",
    fullDescription:
      "Modern workplaces demand both collaborative openness and confidential privacy. SG Smart Glass delivers the ideal dynamic solution for corporate boardrooms, executive meeting suites, and client presentation rooms. Maintain an open, light-filled architectural feel throughout normal hours, and instantly transition to absolute visual privacy at the click of a button during private discussions.",
    image: "/images/applications/offices.jpg",
    useCases: [
      "Executive boardrooms and C-suite cabins",
      "Client conference and presentation rooms",
      "Human resources and confidential interview spaces",
      "Demountable office glass partitions",
    ],
    keyBenefits: [
      "Instantaneous confidentiality without dusty blinds or curtains",
      "Maintains natural daylighting across open office floors",
      "Modern corporate image that impresses clients and stakeholders",
      "Integrates with room scheduling systems and automation",
    ],
    idealProducts: ["SG 95% Clear View", "SG 91% Clear View", "Twin Pro"],
  },
  {
    id: "residential",
    slug: "residential",
    title: "Homes & Villas",
    shortDescription:
      "Transform master suites, ensuite bathrooms, partitions, and exterior viewing glass into dynamic privacy zones.",
    fullDescription:
      "In contemporary residential architecture, visual openness enhances space and light. SG Smart Glass enables seamless luxury transitions between master bedrooms and ensuite bathrooms, open-concept living dividers, and private balcony vistas. Enjoy panoramic vistas and daylight with the freedom of instant privacy on demand.",
    image: "/images/applications/residential.jpg",
    useCases: [
      "Master bedroom to ensuite bathroom glass partitions",
      "Open-plan living room and home office dividers",
      "Home theatre and entertainment room screening partitions",
      "Private pool-facing or courtyard architectural glazing",
    ],
    keyBenefits: [
      "No bulky blinds or curtains that collect dust and moisture",
      "Maintains spatial openness and luxurious light flow",
      "Effortless control via smart home systems or tactile wall switches",
      "Blocks 99% of harmful UV rays to protect interior furnishings",
    ],
    idealProducts: ["SG 95% Clear View", "SG Black Tinted Smart Film", "Slim Pro"],
  },
  {
    id: "hospitality",
    slug: "hospitality",
    title: "Hospitality",
    shortDescription:
      "Elevate luxury guest experiences in five-star hotel suites, spa facilities, and VIP dining lounges.",
    fullDescription:
      "Luxury hotels and upscale resorts rely on SG Smart Glass to maximize perceived room dimensions and introduce memorable technological sophistication. Partitioning bathroom areas with switchable smart glass gives guests expansive visual sightlines while ensuring total, effortless privacy when desired.",
    image: "/images/applications/hospitality.jpg",
    useCases: [
      "Five-star hotel suite bathroom and bedroom glass dividers",
      "Luxury spa treatment rooms and wellness suites",
      "VIP private dining enclosures and wine tasting rooms",
      "Hotel executive lounge meeting spaces",
    ],
    keyBenefits: [
      "Creates an unforgettable high-tech luxury guest experience",
      "Makes compact hotel suites appear significantly larger",
      "Hygienic and easy to clean compared to traditional drapery",
      "Durable commercial-grade up to 5-year warranty",
    ],
    idealProducts: ["SG 95% Clear View", "SG 91% Clear View", "Slim Pro"],
  },
  {
    id: "healthcare",
    slug: "healthcare",
    title: "Healthcare",
    shortDescription:
      "Hygienic, switchable privacy for patient consultation rooms, intensive care units, and clinical observation areas.",
    fullDescription:
      "In clinical environments, infection control and rapid patient monitoring are critical. Unlike fabric privacy curtains that harbor bacteria and require frequent sanitization, SG Smart Glass provides an ultra-hygienic, cleanable glass partition that switches instantly from clear observation to private consultation.",
    image: "/images/applications/healthcare.jpg",
    useCases: [
      "Intensive Care Units (ICU) and High Dependency Units (HDU)",
      "Patient consultation rooms and examination cabins",
      "Diagnostic imaging viewing windows (X-Ray / MRI suites)",
      "Hospital corridor observation partitions",
    ],
    keyBenefits: [
      "Superior infection control with easy-to-sanitize non-porous glass",
      "Instant switch from patient observation to complete dignity and privacy",
      "Zero dust accumulation, ideal for sterile environments",
      "Sound-dampening architectural configuration",
    ],
    idealProducts: ["SG 91% Clear View", "SG 89% Clear View", "Twin Pro"],
  },
  {
    id: "retail-showrooms",
    slug: "retail-showrooms",
    title: "Retail & Showrooms",
    shortDescription:
      "Dramatic product reveals, switchable display vitrines, and exclusive VIP customer consultation zones.",
    fullDescription:
      "High-end retail boutiques, automotive showrooms, and luxury jewelry houses use SG Smart Glass to craft captivating visual merchandising experiences. Transition from an opaque privacy backdrop to an illuminated transparent reveal during product launches and customer presentations.",
    image: "/images/applications/retail.jpg",
    useCases: [
      "Automotive and luxury product launch reveal windows",
      "Jewelry and watch showcase switchable vitrines",
      "VIP client styling suites and private fitting rooms",
      "Storefront privacy during off-hours or visual re-merchandising",
    ],
    keyBenefits: [
      "Creates dynamic, theatrical product reveal moments",
      "Protects luxury merchandise from 99% UV daylight degradation",
      "Sophisticated architectural aesthetic aligned with luxury brands",
      "High visual clarity in clear state",
    ],
    idealProducts: ["SG 95% Clear View", "SG Black Tinted Smart Film"],
  },
  {
    id: "special-projects",
    slug: "special-projects",
    title: "Special Projects",
    shortDescription:
      "Bespoke curved glass partitions, skylights, museum installations, and architectural glass features.",
    fullDescription:
      "SG Smart Glass collaborates with visionary architects and contractors on specialized architectural commissions. From curved glass conference enclosures to switchable glass skylights and museum installations, our technical team prepares and customizes PDLC film for distinct geometries.",
    image: "/images/applications/special-projects.jpg",
    useCases: [
      "Architectural curved glass meeting enclosures",
      "Switchable skylights and glazed atrium roofs",
      "Museum exhibit showcases and interactive privacy installations",
      "Bespoke residential architectural glass features",
    ],
    keyBenefits: [
      "Engineered customization for unique architectural geometries",
      "Dedicated site coordination with glass and electrical teams",
      "Heat reduction and UV protection for glazed overhead structures",
      "Over 35 years of parent industry expertise in glass technology",
    ],
    idealProducts: ["SG 95% Clear View", "SG 91% Clear View", "Twin Pro"],
  },
];
