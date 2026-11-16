// Centralised site content for Piako Consult Ltd

export const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Our Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Industries", href: "/industries" },
  { label: "Our Expertise", href: "/expertise" },
  { label: "Careers", href: "/careers" },
  { label: "Insights", href: "/insights" },
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

export const COUNTRIES = ["Uganda", "Malawi", "Nigeria", "South Sudan"];

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

export interface ServiceItem {
  n: string;
  name: string;
  summary: string;
  link: string;
  image: string;
}

export const SERVICES: ServiceItem[] = [
  {
    n: "01",
    name: "Infrastructure Masterplanning & Architecture",
    summary:
      "Integrated spatial masterplanning and architectural design that anchors sustainable urban and rural development.",
    link: "Innovative designs",
    image: "/images/services/service-01.jpg",
  },
  {
    n: "02",
    name: "Engineering Design Services",
    summary:
      "Feasibility studies, detailed designs, design reviews, bills of quantities and tender documentation across civil, structural and building systems.",
    link: "Detailed engineering",
    image: "/images/services/service-02.jpg",
  },
  {
    n: "03",
    name: "Oil & Gas",
    summary:
      "Feasibility, design, civil works and advisory support for upstream and midstream energy infrastructure programmes.",
    link: "Specialist advisory",
    image: "/images/services/service-03.jpg",
  },
  {
    n: "04",
    name: "Surveying",
    summary:
      "These services define site boundaries and ground conditions, feeding directly into sound design decisions and well-planned construction to reduce risk.",
    link: "Precision surveys",
    image: "/images/services/service-04.jpg",
  },
  {
    n: "05",
    name: "Water & Sanitation",
    summary:
      "We plan and design water supply, treatment, sewerage and sanitation systems that improve public health and serve communities for the long term.",
    link: "Water solutions",
    image: "/images/services/service-05.jpg",
  },
  {
    n: "06",
    name: "Healthcare",
    summary:
      "We address clinical layout, building services, infrastructure upgrades and the rehabilitation of tertiary, regional referral and teaching hospital facilities.",
    link: "Healthcare planning",
    image: "/images/services/service-06.jpg",
  },
  {
    n: "07",
    name: "Energy & Power",
    summary:
      "We provide planning and design support for power and energy infrastructure, helping clients bring reliable and efficient energy to institutions and industry.",
    link: "Energy systems",
    image: "/images/services/service-07.jpg",
  },
  {
    n: "08",
    name: "Strategic Investment Management",
    summary:
      "We help clients make well-informed infrastructure investment decisions by linking project planning to funding, risk and expected socio-economic outcomes.",
    link: "Investment cases",
    image: "/images/services/service-08.jpg",
  },
  {
    n: "09",
    name: "Highways & Transportation",
    summary:
      "Our services cover route and engineering design, road rehabilitation, drainage design and construction supervision under real traffic and environmental conditions.",
    link: "Transportation design",
    image: "/images/services/service-09.jpg",
  },
  {
    n: "10",
    name: "Public/Private Partnerships",
    summary:
      "We advise on structuring partnership-based infrastructure projects that bring together public needs and private-sector capital and expertise.",
    link: "PPP structuring",
    image: "/images/services/service-10.jpg",
  },
  {
    n: "11",
    name: "Environment",
    summary:
      "We integrate environmental considerations into project planning and design from the start, supporting sustainable design choices and safeguards compliance.",
    link: "Environmental safeguards",
    image: "/images/services/service-11.jpg",
  },
  {
    n: "12",
    name: "Program Management",
    summary:
      "We plan, coordinate and control multi-project programmes so that every project works towards the same goals across scope, schedule and budget.",
    link: "Efficient management",
    image: "/images/services/service-12.jpg",
  },
  {
    n: "13",
    name: "Economics",
    summary:
      "We provide economic and financial appraisal that gives decision-makers a clear, evidence-based view of a project's costs, benefits and value for money.",
    link: "Economic appraisal",
    image: "/images/services/service-13.jpg",
  },
  {
    n: "14",
    name: "Building Engineering",
    summary:
      "Piako coordinates structural, mechanical, electrical and plumbing (MEP) design so that buildings are safe, efficient and resilient to use.",
    link: "Strong frameworks",
    image: "/images/services/service-14.jpg",
  },
  {
    n: "15",
    name: "Program Cost Consultancy",
    summary:
      "We plan, monitor and control costs across the whole project lifecycle, from early estimates and bills of quantities to valuations and final accounts.",
    link: "Cost certainty",
    image: "/images/services/service-15.jpg",
  },
  {
    n: "16",
    name: "Continuous Professional Development",
    summary:
      "We provide training and capacity building for technical teams and clients, so the skills behind successful infrastructure stay within organisations.",
    link: "Capacity building",
    image: "/images/services/service-16.jpg",
  },
];

export type Project = {
  id: string;
  title: string;
  client: string;
  location: string;
  country: "Uganda" | "Malawi" | "Nigeria" | "South Sudan";
  year: string;
  role: string;
  scope: string;
  sector: "Healthcare" | "Water & Sanitation" | "Surveying & Geotechnical" | "Hospitality & Commercial";
  image: string;
  projectValue?: string;
  servicesValue?: string;
  scale?: string;
  details?: string;
  deliverables?: string[];
  featured?: boolean;
};

export const PROJECTS: Project[] = [
  {
    id: "amce-abuja",
    title: "African Medical Centre of Excellence (AMCE)",
    client: "African Medical Centre of Excellence / Afreximbank",
    location: "Abuja",
    country: "Nigeria",
    year: "2022–2025",
    role: "Architectural & Engineering Design and Construction Supervision",
    scope:
      "Piako provided comprehensive architectural and engineering design along with construction supervision for a premier 23,000 m² specialist tertiary healthcare facility valued at USD 65 million.",
    sector: "Healthcare",
    image: "/images/projects/amce-abuja.jpg",
    projectValue: "USD 65 Million",
    servicesValue: "USD 1.4 Million",
    scale: "23,000 m²",
    details: "Specialist Tertiary Healthcare Facility",
    deliverables: [
      "Architectural space planning & 3D visualization",
      "Structural engineering & reinforced concrete design",
      "Mechanical HVAC, cleanroom filtration & medical gas",
      "Electrical substation & standby power redundancy",
      "Resident construction supervision & FIDIC administration",
    ],
    featured: true,
  },
  {
    id: "mzuzu-blantyre",
    title: "Mzuzu University & Blantyre College of Health Sciences Teaching Hospital",
    client: "Republic of Malawi",
    location: "Blantyre and Zomba",
    country: "Malawi",
    year: "2021–2024",
    role: "Owner's Engineer and Employer's Representative (FIDIC)",
    scope:
      "Served as Owner's Engineer and Employer's Representative, administering the FIDIC contract for a 300-bed, 20,000 m² teaching hospital across Blantyre and Zomba valued at USD 35.3 million.",
    sector: "Healthcare",
    image: "/images/projects/mzuzu-blantyre.jpg",
    projectValue: "USD 35.3 Million",
    servicesValue: "USD 1.48 Million",
    scale: "300-bed · 20,000 m²",
    details: "Twin-Campus Teaching Hospital",
    deliverables: [
      "FIDIC Red/Yellow book contract administration",
      "Review of contractor design drawings & calculations",
      "On-site material testing & quality assurance",
      "Interim Payment Certificate (IPC) verification",
      "Commissioning, defects monitoring & handover",
    ],
    featured: true,
  },
  {
    id: "masaka-hospital",
    title: "Masaka Regional Referral Hospital Complex",
    client: "Masaka Regional Referral Hospital / Ministry of Health",
    location: "Masaka",
    country: "Uganda",
    year: "2019–2021",
    role: "Contract Administration, Project Management & Quality Assurance",
    scope:
      "Provided contract administration, project management and on-site quality assurance for a 400-bed complex including maternity, surgical, neo-natal, laboratory and regional blood bank facilities.",
    sector: "Healthcare",
    image: "/images/projects/masaka-hospital.jpg",
    projectValue: "UGX 20 Billion",
    servicesValue: "UGX 328 Million",
    scale: "400-bed Complex",
    details: "Regional Referral Surgical & Diagnostic Unit",
    deliverables: [
      "Multi-discipline project management",
      "On-site quality assurance & compliance audits",
      "Medical gas layout & operating theatre inspection",
      "Budget control, milestone tracking & final account",
    ],
    featured: true,
  },
  {
    id: "mulago-maternal",
    title: "Specialised Maternal and Neo-Natal Health Unit, Mulago Hospital",
    client: "Joadah Consult Ltd on behalf of Ministry of Health",
    location: "Kampala",
    country: "Uganda",
    year: "2019–2021",
    role: "Design, Tender Support and Construction Supervision",
    scope:
      "Provided architectural and engineering design, tender documentation and construction supervision for a ten-storey specialized maternal and neo-natal healthcare unit in Kampala.",
    sector: "Healthcare",
    image: "/images/projects/mulago-maternal.jpg",
    projectValue: "USD 12.46 Million",
    servicesValue: "USD 420,000",
    scale: "Ten-Storey Tower",
    details: "High-Rise Specialized Maternal & Neonatal Center",
    deliverables: [
      "High-density clinical space planning",
      "High-rise reinforced concrete structural design",
      "Tender document preparation & contractor evaluation",
      "Construction supervision in active medical campus",
    ],
    featured: true,
  },
  {
    id: "iganga-hospital",
    title: "Iganga General Hospital Masterplan and Private Wing",
    client: "Iganga District Local Government",
    location: "Iganga",
    country: "Uganda",
    year: "2022–2023",
    role: "Masterplanning Lead & Detailed Engineering Designer",
    scope:
      "Prepared the full hospital infrastructure masterplan (approved by the Ministry of Health) and designed a four-floor, 150-bed private wing, including bills of quantities and tender documents.",
    sector: "Healthcare",
    image: "/images/projects/iganga-hospital.jpg",
    projectValue: "UGX 399.4 Billion",
    servicesValue: "UGX 330.6 Million",
    scale: "Four-Floor · 150-Bed Wing",
    details: "Hospital Infrastructure Masterplan & Private Wing",
    deliverables: [
      "20-year hospital campus infrastructure masterplan",
      "Ministry of Health technical approval compliance",
      "Four-floor, 150-bed architectural & MEP designs",
      "Bills of Quantities (BoQ) & public tender packages",
    ],
    featured: false,
  },
  {
    id: "satellite-laboratories",
    title: "Five Regional Satellite Diagnostic Laboratories",
    client: "Ministry of Health, Uganda",
    location: "Arua, Mbale, Mbarara, Gulu-Lacor & Mulago",
    country: "Uganda",
    year: "2021–2023",
    role: "Architectural & Engineering Design, BoQs and Tender Documents",
    scope:
      "Produced detailed architectural and engineering designs, drawings, bills of quantities, and tender documents for five high-containment regional diagnostic satellite laboratories.",
    sector: "Healthcare",
    image: "/images/projects/satellite-laboratories.jpg",
    projectValue: "USD 122,507",
    servicesValue: "USD 122,507",
    scale: "5 Regional Centers",
    details: "Biosafety Level-2 Regional Diagnostic Laboratories",
    deliverables: [
      "Biosafety Level-2 compliant layout & workflows",
      "Negative pressure ventilation & biowaste drainage",
      "Structural, civil & electrical drawings",
      "Bills of Quantities & procurement specifications",
    ],
    featured: false,
  },
  {
    id: "nkoni-namwiwa-water",
    title: "Nkoni and Namwiwa Town Water Supply Schemes",
    client: "Tetra Tech (US Partner)",
    location: "Central and Eastern Uganda",
    country: "Uganda",
    year: "2020–2022",
    role: "Detailed Design & Construction Supervision",
    scope:
      "Provided detailed design and construction supervision for the rehabilitation and expansion of two major town water supply schemes in Central and Eastern Uganda.",
    sector: "Water & Sanitation",
    image: "/images/projects/nkoni-namwiwa-water.jpg",
    projectValue: "UGX 55 Billion",
    servicesValue: "UGX 1.63 Billion",
    scale: "Two Urban Town Schemes",
    details: "Water Supply Rehabilitation & Piped Distribution",
    deliverables: [
      "Water source intake rehabilitation & yield testing",
      "Water treatment works & elevated storage tanks",
      "Transmission & reticulation pipeline supervision",
      "Hydrostatic pressure testing & commissioning",
    ],
    featured: true,
  },
  {
    id: "sacriac-water-tanks",
    title: "SACRiAC Water Supply Systems and Valley Tanks",
    client: "Ministry of Water and Environment, WSDF-East",
    location: "Bukedea, Sironko and Bulambuli Districts",
    country: "Uganda",
    year: "2025–2027 (Ongoing)",
    role: "Design Review & Construction Supervision",
    scope:
      "Reviewing engineering designs and supervising construction of rural and peri-urban water supply systems and valley storage tanks across Bukedea, Sironko and Bulambuli districts.",
    sector: "Water & Sanitation",
    image: "/images/projects/sacriac-water-tanks.jpg",
    projectValue: "Multi-District Programme",
    servicesValue: "UGX 324.4 Million (excl. VAT)",
    scale: "3 Districts · Multi-Site",
    details: "Piped Water Systems & Storage Valley Tanks",
    deliverables: [
      "Independent engineering design review",
      "Construction supervision of earthworks & reservoirs",
      "Catchment protection & environmental safeguards audit",
      "Milestone reporting & contractor evaluation",
    ],
    featured: false,
  },
  {
    id: "kazuru-furuma-water",
    title: "Kazuru Gravity Flow Scheme and Furuma Town Water Supply",
    client: "North Kigezi & Kinkizi Dioceses / UKAID",
    location: "Kanungu and Rukungiri Districts",
    country: "Uganda",
    year: "2022–2024",
    role: "Feasibility Studies, Design, Supervision & Contractor Procurement",
    scope:
      "Carried out feasibility studies, detailed engineering design, design review, site supervision and contractor procurement support for regional gravity flow and town schemes.",
    sector: "Water & Sanitation",
    image: "/images/projects/kazuru-furuma-water.jpg",
    projectValue: "USD 13.8 Million",
    servicesValue: "UGX 320 Million",
    scale: "Gravity Flow & Piped Network",
    details: "Mountain Gravity Flow & Town Piped Water Scheme",
    deliverables: [
      "Hydrological feasibility & spring intake design",
      "High-head gravity break-pressure tank design",
      "Contractor procurement & bid evaluation report",
      "Full construction supervision through defects period",
    ],
    featured: false,
  },
  {
    id: "nyarwimuka-water",
    title: "Nyarwimuka Water Supply System",
    client: "Rukungiri District Local Government",
    location: "Ruhinda Subcounty, Rukungiri",
    country: "Uganda",
    year: "2019–2020",
    role: "Feasibility Study, Design & Tender Documentation",
    scope:
      "Undertook comprehensive feasibility studies, hydraulic engineering design, and tender documentation for community water schemes in Ruhinda Subcounty.",
    sector: "Water & Sanitation",
    image: "/images/projects/nyarwimuka-water.jpg",
    projectValue: "District Capital Works",
    servicesValue: "UGX 21.9 Million",
    scale: "Community Scheme",
    details: "Rural Gravity Water Supply Network",
    deliverables: [
      "Topographic profile & demographic demand modeling",
      "Hydraulic pipe network design & pressure analysis",
      "Community tap stands & storage tank engineering",
      "Bills of Quantities & tender documentation",
    ],
    featured: false,
  },
  {
    id: "surveys-framework",
    title: "Topographic, Cadastral & Valuation Surveys Framework",
    client: "Ministry of Water and Environment, WSDF-East",
    location: "Eastern Uganda",
    country: "Uganda",
    year: "2020–2021",
    role: "Lead Surveying Consultant (Framework Contract)",
    scope:
      "Delivered location, reconnaissance, topographic, cadastral and valuation survey services across Eastern Uganda under a framework contract and call-off orders.",
    sector: "Surveying & Geotechnical",
    image: "/images/projects/surveys-framework.jpg",
    projectValue: "Framework Contract",
    servicesValue: "UGX 185.1 Million per site",
    scale: "Regional Framework",
    details: "Framework Cadastral, Topographic & Valuation Surveys",
    deliverables: [
      "Geodetic GNSS control point establishment",
      "Corridor topographic surveys for water pipelines",
      "Cadastral boundary surveys & title boundary demarcation",
      "Property valuation & compensation documentation",
    ],
    featured: false,
  },
  {
    id: "ala-ora-intakes",
    title: "Ala Ora Water Supply Project: Nyagak (Lot 2) & Enyau (Lot 3) Intakes",
    client: "Zhonghao Overseas Construction & China Railway No. 10 / World Bank",
    location: "Zombo and Terego Districts",
    country: "Uganda",
    year: "2026",
    role: "Geotechnical Drilling, In-Situ Testing & Laboratory Analysis",
    scope:
      "Carried out deep geotechnical borehole drilling, in-situ Standard Penetration Tests (SPT) and laboratory soil/rock analysis for World Bank-funded river intakes, together with associate firm GETLAB.",
    sector: "Surveying & Geotechnical",
    image: "/images/projects/ala-ora-intakes.jpg",
    projectValue: "World Bank Funded",
    servicesValue: "UGX 701 Million (Lot 2: 370M + Lot 3: 331M)",
    scale: "2 River Intakes (Lots 2 & 3)",
    details: "Deep Borehole Geotechnical Drilling & Soil Testing",
    deliverables: [
      "Rotary borehole core drilling in river bed formations",
      "In-situ Standard Penetration Testing (SPT) at 1.5m intervals",
      "Laboratory testing (shear strength, Atterberg, permeability)",
      "Comprehensive geotechnical foundation design report",
    ],
    featured: true,
  },
  {
    id: "luxury-hospitality",
    title: "5-Star Pyramid Hotel (Juba) & 5-Star Mbale Courts View Hotel",
    client: "Private Commercial Hospitality Developers",
    location: "Juba City (South Sudan) & Mbale City (Uganda)",
    country: "South Sudan",
    year: "2021–2024",
    role: "Design and Construction Supervision",
    scope:
      "Provided comprehensive structural, architectural and MEP design review and construction supervision for luxury 5-star hotel developments in Juba City and Mbale City.",
    sector: "Hospitality & Commercial",
    image: "/images/projects/mbale-courts-view.jpg",
    projectValue: "USD 25 Million+",
    servicesValue: "Commercial Supervision Mandate",
    scale: "Two 5-Star Landmark Hotels",
    details: "Pyramid Hotel Juba & Mbale Courts View Hotel",
    deliverables: [
      "Architectural, structural & facade engineering review",
      "MEP HVAC, acoustic & fire life-safety inspection",
      "Executive conference suites & leisure amenity oversight",
      "Contractor quality assurance & handover commissioning",
    ],
    featured: false,
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
    slug: "designing-water-supply-systems-that-last",
    category: "Engineering Article",
    title: "Designing water supply systems that last: five lessons from the field",
    excerpt:
      "Practical lessons on resilience, operations and community engagement drawn from rural and urban water projects.",
    date: "March 2025",
    body: [
      "Water systems fail for reasons that rarely begin at commissioning. More often, the seeds are sown during planning: an oversized scheme with no maintenance budget, a network laid without reliable asset records, or a community that was consulted once and then left out of operations.",
      "The strongest schemes we have supervised share five habits. They start with an honest demand assessment, not an optimistic one. They design for the local supply chain, so spare parts can be found without a foreign order. They invest in meters, maps and records from day one. They budget for operations and maintenance alongside construction. And they keep talking to the people who will run the system long after the consultant has left.",
      "Resilience is not only a matter of bigger pipes. It comes from redundancy, manageable pumping heads, protection of catchments and a clear plan for drought years. Climate stress exposes every weak assumption in a hydraulic model.",
      "The practical test is simple: can the utility explain, five years after handover, where every valve is, what it costs to replace a pump, and which households are still unserved? If the answer is no, the project is not finished, however complete the construction certificate looks.",
    ],
  },
  {
    slug: "supervision-of-120km-distribution-network",
    category: "Project Milestone",
    title:
      "Piako completes supervision of 120 km distribution network in Uganda",
    excerpt:
      "The programme delivered improved water access to 180,000 residents across three sub-counties.",
    date: "February 2025",
    body: [
      "Supervision on the 120 km distribution programme in Uganda moved through four phases: mobilisation, works inspection, commissioning and a structured defects period. Our team worked alongside the contractor and the utility, tracking every kilometre against the design and the programme.",
      "The scope covered trunk mains, service reservoirs and household connections across three sub-counties. More than 180,000 residents now sit within the served area. The measure of success was not pipe laid but connections tested, pressure sustained and water safely delivered.",
      "Commissioning included pressure testing, disinfection, flow and leakage checks, and operator training. The utility received as-built drawings, asset registers and a maintenance schedule before handover.",
      "A project of this size always produces surprises: a crossing that needs redesign, a right-of-way that takes longer than planned, a community request that changes the connection layout. The supervision team's job is to resolve those issues without losing the technical standard or the programme.",
    ],
  },
  {
    slug: "what-a-supervision-consultant-does-on-a-road-project",
    category: "Tender & Industry Update",
    title: "What a supervision consultant actually does on a road project",
    excerpt:
      "A plain-language guide to the responsibilities, deliverables and value of independent supervision.",
    date: "January 2025",
    body: [
      "On a road project, the supervision consultant is the client's independent technical representative. The role begins before construction, with a review of the design for buildability, drainage and safety, and continues until the defects period closes.",
      "During construction, the team inspects materials and workmanship, checks setting-out and levels, agrees quantities, reviews the contractor's programme and reports progress against cost and time. Where work falls short, the consultant issues instructions and tracks corrective action.",
      "Safety and environmental safeguards are part of the mandate, not an add-on. Traffic management, worker welfare, dust control, borrow-pit rehabilitation and community access all need documented checks.",
      "The value of independent supervision is most visible when something goes wrong. Good records, clear instructions and consistent reporting give the client the evidence to enforce the contract and protect the asset.",
    ],
  },
];

export const CONTACT = {
  email: "info@consultpiako.com",
  phone: "+256 784 188814",
  address: "Plot 7, North Park Plaza, Bypass Link, Bweyogerere, Opposite UNBS Headquarters | Uganda",
  fullAddress: "Plot 7, North Park Plaza, Bypass Link, Bweyogerere, Opposite UNBS Headquarters | Uganda",
  shortAddress: "Plot 7, North Park Plaza, Bweyogerere, Uganda",
  building: "Plot 7, North Park Plaza",
  street: "Bypass Link, Bweyogerere",
  landmark: "Opposite UNBS Headquarters",
  country: "Uganda",
  hours: "Mon – Fri, 8:00 – 17:00 EAT",
  website: "www.consultpiako.com",
  certNo: "80020000712953",
  ppdaNo: "PRV/SRVCS/26072903/JUL26",
  tin: "1013128810",
  linkedin: "https://www.linkedin.com/company/piako-consult-ltd",
};
