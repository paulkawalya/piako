// Centralised site content for Piako Consult Ltd

export const NAV_ITEMS = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Our Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Industries", href: "#industries" },
  { label: "Our Expertise", href: "#expertise" },
  { label: "Careers", href: "#careers" },
  { label: "Insights", href: "#insights" },
] as const;

export const HIGHLIGHTS = [
  { stat: "16", label: "Consultancy services" },
  { stat: "3", label: "Countries of project experience" },
  { stat: "End-to-end", label: "Feasibility to supervision" },
  { stat: "Multi-sector", label: "Engineering expertise" },
];

export const SECTORS_SERVED = [
  "Government",
  "Healthcare",
  "Water and Infrastructure",
  "Private Sector",
];

export const COUNTRIES = ["Uganda", "Malawi", "Nigeria"];

export const CORE_VALUES = [
  {
    name: "Excellence",
    meaning: "Delivering technically sound solutions",
  },
  {
    name: "Integrity",
    meaning: "Maintaining transparency and professionalism",
  },
  {
    name: "Innovation",
    meaning: "Applying modern engineering approaches",
  },
  {
    name: "Sustainability",
    meaning: "Designing for long-term impact",
  },
  {
    name: "Collaboration",
    meaning: "Working effectively with clients and partners",
  },
  {
    name: "Accountability",
    meaning: "Taking responsibility for project outcomes",
  },
];

export const SERVICES = [
  {
    n: "01",
    name: "Infrastructure Masterplanning & Architecture",
    summary:
      "Integrated spatial masterplanning and architectural design that anchors sustainable urban and rural development.",
  },
  {
    n: "02",
    name: "Engineering Design Services",
    summary:
      "Detailed structural, civil and MEP design across buildings, water systems and industrial facilities.",
  },
  {
    n: "03",
    name: "Oil & Gas",
    summary:
      "Feasibility, design and advisory support for upstream and midstream energy infrastructure programmes.",
  },
  {
    n: "04",
    name: "Surveying",
    summary:
      "Topographic, cadastral and engineering surveys powered by modern GNSS and GIS instruments.",
  },
  {
    n: "05",
    name: "Water & Sanitation",
    summary:
      "Rural and urban water supply, sewerage and sanitation systems designed for resilience and reach.",
  },
  {
    n: "06",
    name: "Healthcare",
    summary:
      "Planning and engineering of hospitals and health facilities that meet clinical and institutional standards.",
  },
  {
    n: "07",
    name: "Energy & Power",
    summary:
      "Generation, transmission and distribution advisory for grid and off-grid energy systems.",
  },
  {
    n: "08",
    name: "Strategic Investment Management",
    summary:
      "Investment appraisal, risk structuring and portfolio oversight for infrastructure capital programmes.",
  },
  {
    n: "09",
    name: "Highways & Transportation",
    summary:
      "Road, bridge and transport infrastructure design, supervision and asset management.",
  },
  {
    n: "10",
    name: "Public/Private Partnerships",
    summary:
      "PPP structuring, transaction advisory and monitoring for bankable infrastructure projects.",
  },
  {
    n: "11",
    name: "Environment",
    summary:
      "Environmental and social impact assessments, safeguards and compliance monitoring.",
  },
  {
    n: "12",
    name: "Program Management",
    summary:
      "Multi-project programme leadership covering scope, schedule, cost and quality integration.",
  },
  {
    n: "13",
    name: "Economics",
    summary:
      "Economic analysis, feasibility modelling and cost-benefit appraisal for development projects.",
  },
  {
    n: "14",
    name: "Building Engineering",
    summary:
      "Structural and building services engineering for residential, commercial and institutional developments.",
  },
  {
    n: "15",
    name: "Program Cost Consultancy",
    summary:
      "Cost planning, estimating, quantity surveying and value engineering across the project lifecycle.",
  },
  {
    n: "16",
    name: "Continuous Professional Development",
    summary:
      "Capacity building, training and mentoring programmes for engineering and technical teams.",
  },
];

export type Project = {
  id: string;
  title: string;
  client: string;
  location: string;
  country: "Uganda" | "Malawi" | "Nigeria";
  year: string;
  role: string;
  scope: string;
  sector: string;
  image: string;
};

export const PROJECTS: Project[] = [
  {
    id: "p1",
    title: "Urban Water Supply & Sanitation Expansion",
    client: "National Water Authority",
    location: "Kampala",
    country: "Uganda",
    year: "2024",
    role: "Lead Engineering Consultant",
    scope:
      "Design and supervision of a 120 km water distribution network and three sewerage treatment ponds serving 180,000 residents.",
    sector: "Water and Infrastructure",
    image: "/images/project-water.png",
  },
  {
    id: "p2",
    title: "Regional Referral Hospital Refurbishment",
    client: "Ministry of Health",
    location: "Lilongwe",
    country: "Malawi",
    year: "2023",
    role: "Design & Supervision Consultant",
    scope:
      "Architectural and engineering redesign of a 300-bed referral hospital including theatre, maternity and utilities upgrades.",
    sector: "Healthcare",
    image: "/images/project-healthcare.png",
  },
  {
    id: "p3",
    title: "Rural Roads Upgrading Programme",
    client: "State Ministry of Works",
    location: "Lagos",
    country: "Nigeria",
    year: "2024",
    role: "Construction Supervision",
    scope:
      "Supervision of 85 km of rural road upgrading with drainage structures, street lighting and safety furniture.",
    sector: "Water and Infrastructure",
    image: "/images/project-roads.png",
  },
  {
    id: "p4",
    title: "Mixed-Use Development Engineering",
    client: "Private Developer Consortium",
    location: "Kampala",
    country: "Uganda",
    year: "2023",
    role: "Building Engineering Consultant",
    scope:
      "Structural, civil and MEP engineering for a 14-storey mixed-use commercial and residential development.",
    sector: "Private Sector",
    image: "/images/project-building.png",
  },
  {
    id: "p5",
    title: "District Hospital Masterplan",
    client: "District Local Government",
    location: "Blantyre",
    country: "Malawi",
    year: "2022",
    role: "Masterplanning Lead",
    scope:
      "Campus masterplan and phased infrastructure plan for a district hospital and affiliated training school.",
    sector: "Healthcare",
    image: "/images/project-healthcare.png",
  },
  {
    id: "p6",
    title: "Township Sanitation Feasibility Study",
    client: "Development Partner Programme",
    location: "Abuja",
    country: "Nigeria",
    year: "2024",
    role: "Feasibility & Design Lead",
    scope:
      "Feasibility study, preliminary design and investment appraisal for a town-wide sanitation system.",
    sector: "Water and Infrastructure",
    image: "/images/project-water.png",
  },
];

export const INDUSTRIES = [
  {
    name: "Government",
    description:
      "Ministries, departments, agencies, district and municipal governments.",
  },
  {
    name: "Development Partners",
    description:
      "Donor-funded programmes and international development organisations.",
  },
  {
    name: "Healthcare",
    description: "Hospitals and other institutional health facilities.",
  },
  {
    name: "Water and Infrastructure",
    description: "Water supply, sanitation, roads, drainage.",
  },
  {
    name: "Education and Institutions",
    description: "Universities and institutional clients.",
  },
  {
    name: "Private Sector",
    description:
      "Developers, real estate investors, commercial and industrial organisations.",
  },
  {
    name: "Partnerships",
    description:
      "Engineering and construction firms needing consultancy partners.",
  },
];

export const DIFFERENTIATORS = [
  {
    n: "01",
    title: "Multidisciplinary capability",
    body: "Multiple engineering disciplines coordinated under one consultancy, from surveying and design to supervision.",
  },
  {
    n: "02",
    title: "Infrastructure experience",
    body: "Demonstrable involvement in water, healthcare and institutional projects across three African markets.",
  },
  {
    n: "03",
    title: "End-to-end delivery",
    body: "Feasibility, planning, design, procurement support and construction supervision under one mandate.",
  },
  {
    n: "04",
    title: "Technical partnerships",
    body: "Collaboration with specialised engineering firms and professionals to extend capacity on demand.",
  },
  {
    n: "05",
    title: "Regional ambition",
    body: "Active and growing footprint across East Africa and wider African markets.",
  },
];

export const EXPERTISE_FACTS = [
  { label: "Disciplines in-house", value: "12+" },
  { label: "Countries delivered in", value: "3" },
  { label: "Services on offer", value: "16" },
  { label: "Project lifecycle", value: "End-to-end" },
];

export const TOOLS = [
  "AutoCAD Civil 3D",
  "Revit",
  "ArcGIS",
  "EPANET",
  "STAAD.Pro",
  "Primavera P6",
  "MS Project",
  "QGIS",
];

export const TEAM = [
  {
    name: "Managing Director",
    title: "Principal Engineer",
    qualifications: "MEng, PE, MICE",
    registration: "Registered Engineer",
  },
  {
    name: "Technical Director",
    title: "Head of Engineering",
    qualifications: "MSc Civil Engineering",
    registration: "Registered Engineer",
  },
  {
    name: "Director, Water & Sanitation",
    title: "Water Resources Specialist",
    qualifications: "PhD Water Resources",
    registration: "Chartered Engineer",
  },
  {
    name: "Director, Projects",
    title: "Programme Manager",
    qualifications: "MBA, PMP",
    registration: "PMP Certified",
  },
];

export const OPEN_ROLES = [
  {
    title: "Senior Civil Engineer",
    discipline: "Water & Sanitation",
    location: "Kampala, Uganda",
  },
  {
    title: "Construction Supervisor",
    discipline: "Highways & Transportation",
    location: "Lagos, Nigeria",
  },
  {
    title: "Healthcare Facilities Designer",
    discipline: "Healthcare Architecture",
    location: "Lilongwe, Malawi",
  },
  {
    title: "Graduate Engineer",
    discipline: "Engineering Design",
    location: "Kampala, Uganda",
  },
];

export const INSIGHTS = [
  {
    category: "Engineering Article",
    title: "Designing water supply systems that last: five lessons from the field",
    excerpt:
      "Practical lessons on resilience, operations and community engagement drawn from rural and urban water projects.",
    date: "March 2025",
  },
  {
    category: "Project Milestone",
    title: "Piako completes supervision of 120 km distribution network in Uganda",
    excerpt:
      "The programme delivered improved water access to 180,000 residents across three sub-counties.",
    date: "February 2025",
  },
  {
    category: "Tender & Industry Update",
    title: "What a supervision consultant actually does on a road project",
    excerpt:
      "A plain-language guide to the responsibilities, deliverables and value of independent supervision.",
    date: "January 2025",
  },
];

export const CONTACT = {
  email: "info@piakoconsult.com",
  phone: "+256 700 000 000",
  address: "Plot 12, Engineering Close, Kampala, Uganda",
  hours: "Mon – Fri, 8:00 – 17:00 EAT",
  linkedin: "https://www.linkedin.com/company/piako-consult-ltd",
};
