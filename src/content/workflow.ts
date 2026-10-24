export interface WorkflowStep {
  step: number;
  title: string;
  shortTitle: string;
  summary: string;
  detail: string;
  timing: string;
  responsibility: string;
  keyTakeaway: string;
}

export const projectWorkflow: WorkflowStep[] = [
  {
    step: 1,
    title: "Site Visit & Electrical Planning",
    shortTitle: "Site Visit & Electrical Planning",
    summary:
      "SG usually conducts a prior site visit to communicate required electrical points and wire routes with the site team.",
    detail:
      "Early coordination is crucial. Electrical provisions and conduit routes should ideally be planned before the glass installation stage to ensure all wiring remains concealed and cleanly routed.",
    timing: "Pre-Installation Phase",
    responsibility: "SG Technical Team & Project Electrical Team",
    keyTakeaway: "Electrical planning should happen before glass installation.",
  },
  {
    step: 2,
    title: "Glass Selection & Final Measurements",
    shortTitle: "Glass Measurements",
    summary:
      "The client or appointed glass team selects the base glass. Once selected, confirmed final glass measurements are shared with SG.",
    detail:
      "Base-glass selection is handled by the client or their appointed glass supplier. Precision measurements are confirmed to ensure millimeter-accurate film preparation.",
    timing: "Specification Phase",
    responsibility: "Client / Appointed Glass Supplier & SG",
    keyTakeaway: "Client or glass supplier selects base glass.",
  },
  {
    step: 3,
    title: "Film Preparation & Customisation",
    shortTitle: "Film Preparation",
    summary:
      "SG prepares and customises PDLC film at its production unit according to confirmed measurements.",
    detail:
      "Using precision cutting and busbar terminal attachment in our controlled facility, each smart film panel is customized to exact dimensions. This process is film preparation and customisation, not raw PDLC film manufacturing.",
    timing: "Workshop Phase",
    responsibility: "SG Smart Glass Production Unit",
    keyTakeaway: "Customized film preparation at SG unit, not raw film manufacturing.",
  },
  {
    step: 4,
    title: "Coordinate Installation Dates",
    shortTitle: "Installation Coordination",
    summary:
      "SG coordinates with the glass installation team to agree on the schedule and appropriate stage for film application.",
    detail:
      "We liaise with project managers, interior contractors, and glazing teams to align site readiness, dust-free conditions, and installation staging.",
    timing: "Scheduling Phase",
    responsibility: "SG Coordination Desk & Main Contractor",
    keyTakeaway: "Carefully timed site synchronization.",
  },
  {
    step: 5,
    title: "Film Application & Glass Installation",
    shortTitle: "Application & Installation",
    summary:
      "The preferred workflow is to apply the film to the glass before the prepared glass is installed, using a suitable controlled working setup.",
    detail:
      "Applying PDLC film prior to glazing ensures optimal adhesion, clean edge sealing, and zero dust entrapment. The appointed glass installation team then installs the prepared glass in close coordination with SG.",
    timing: "Glazing Phase",
    responsibility: "SG Application Technicians & Glazing Team",
    keyTakeaway: "Preferred workflow is applying film before glass installation.",
  },
  {
    step: 6,
    title: "Electrical Connection & Testing",
    shortTitle: "Connection & Testing",
    summary:
      "After the glass is fixed, electrical connections are completed or coordinated and the system is thoroughly tested.",
    detail:
      "Power transformers, controllers, and wiring are connected and verified. Each panel is tested across multiple switching cycles to ensure seamless clear-to-private operation.",
    timing: "Commissioning Phase",
    responsibility: "SG Technical Team & Certified Electrician",
    keyTakeaway: "Full switching cycle validation and handover.",
  },
];

export const existingGlassPolicy = {
  title: "Existing Fixed Glass Installations",
  description:
    "For projects where architectural glass is already installed on site, SG assesses the existing glass specifications, edge clearances, and site conditions individually. Our team evaluates whether on-site film application is feasible and plans the custom preparation accordingly.",
};

export const scopeOfWorkClarification = {
  title: "Clear Scope of Work",
  sgScope: [
    "PDLC smart film preparation and customisation to confirmed dimensions",
    "Professional film application in controlled environment or suitable site conditions",
    "Liaison with appointed glass suppliers and interior contractors",
    "Electrical connection coordination and full switching system testing",
    "Up to 5-Year Warranty (3 years replacement + 2 years extended) and ongoing technical after-sales support",
  ],
  clientScope: [
    "Base-glass selection and procurement through appointed glass contractor",
    "Primary electrical supply points brought to designated junction boxes",
    "Final site clearance and dust-controlled environment for application",
  ],
};
