// Verified Industries data for Piako Consult Ltd
// Aligned with the official corporate profile and project track record

export interface IndustryData {
  id: string;
  name: string;
  tag: string;
  headline: string;
  description: string;
  image: string;
  clients: string[];
  capabilities: string[];
  featuredProject: {
    title: string;
    location: string;
    value: string;
    role: string;
  };
}

export const INDUSTRIES_DATA: IndustryData[] = [
  {
    id: "government",
    name: "Government Ministries & Local Authorities",
    tag: "Public Sector",
    headline: "Sovereign Infrastructure Built to Serve Communities for Generations",
    description:
      "We partner with line ministries, statutory authorities, and district local governments to plan, design, and supervise critical public assets. From nationwide hospital infrastructure to regional water networks, our team ensures public funds translate into durable, code-compliant physical capital.",
    image: "/images/services/service-01.jpg",
    clients: [
      "Ministry of Health (Uganda)",
      "Ministry of Water & Environment (WSDF-East)",
      "Republic of Malawi",
      "Iganga District Local Government",
      "Rukungiri District Local Government",
    ],
    capabilities: [
      "Comprehensive infrastructure masterplans",
      "Statutory design reviews & value engineering",
      "Bills of Quantities & PPDA/FIDIC tender packaging",
      "Resident engineering & on-site quality assurance",
    ],
    featuredProject: {
      title: "Iganga General Hospital Masterplan & Private Wing",
      location: "Iganga, Uganda",
      value: "UGX 399.4 Billion (Project Value)",
      role: "Masterplanning Lead & Detailed Design",
    },
  },
  {
    id: "development-partners",
    name: "International Development Partners",
    tag: "Bilateral & Multilateral",
    headline: "Rigorous Fiduciary, Environmental & Social Compliance",
    description:
      "Donor-funded and multilateral programmes require unyielding adherence to international engineering standards, transparent procurement, and verified safeguards. Piako delivers independent feasibility studies, engineering oversight, and contract administration on major development initiatives.",
    image: "/images/projects/kazuru-furuma-water.jpg",
    clients: [
      "World Bank Funded Initiatives",
      "UKAID Development Programmes",
      "Tetra Tech (US Partner)",
      "North Kigezi & Kinkizi Dioceses Programme",
    ],
    capabilities: [
      "Environmental & Social Impact Assessments (ESIA)",
      "FIDIC Red & Yellow book contract administration",
      "Independent technical & quality auditing",
      "Community stakeholder engagement & safeguards monitoring",
    ],
    featuredProject: {
      title: "Kazuru Gravity Flow & Furuma Town Water Supply",
      location: "Kanungu & Rukungiri, Uganda",
      value: "USD 13.8 Million (Supported by UKAID)",
      role: "Feasibility, Design & Construction Supervision",
    },
  },
  {
    id: "healthcare",
    name: "Healthcare & Referral Hospitals",
    tag: "Clinical Infrastructure",
    headline: "Precision Clinical Planning, Sterile Zoning & High-Dependency Engineering",
    description:
      "Hospital infrastructure is among the most demanding built environments. We design and supervise tertiary medical centres of excellence, teaching hospitals, and regional diagnostic units balancing clinical flow, medical gas life-safety, negative pressure filtration, and uninterrupted electrical redundancy.",
    image: "/images/projects/amce-abuja.jpg",
    clients: [
      "African Medical Centre of Excellence (AMCE / Afreximbank)",
      "Mulago Specialised Hospital Maternal & Neonatal Centre",
      "Masaka Regional Referral Hospital",
      "Mzuzu University & Blantyre College Teaching Hospital",
      "Uganda Ministry of Health Regional Satellite Labs",
    ],
    capabilities: [
      "Sterile operating theatre & ICU airflow modeling",
      "Medical gas distribution & bulk oxygen engineering",
      "Biosafety Level-2 compliant diagnostic laboratories",
      "Hospital infrastructure masterplanning & clinical phasing",
    ],
    featuredProject: {
      title: "African Medical Centre of Excellence (AMCE)",
      location: "Abuja, Nigeria",
      value: "USD 65 Million · 23,000 m² Facility",
      role: "Architectural & Engineering Design & Supervision",
    },
  },
  {
    id: "water-sanitation",
    name: "Water Authorities & Utilities",
    tag: "Water Infrastructure",
    headline: "Gravity Schemes, Transmission Mains & Resilient Valley Storage",
    description:
      "Access to clean, dependable water underpins economic resilience. We provide hydraulic network modeling, intake engineering, water treatment works, and storage design for urban town schemes, high-elevation gravity flow systems, and community drought-resilience valley tanks.",
    image: "/images/projects/nkoni-namwiwa-water.jpg",
    clients: [
      "Ministry of Water and Environment (WSDF-East)",
      "Town Water Supply Authorities",
      "Tetra Tech Urban Infrastructure Programmes",
      "District Water & Sanitation Departments",
    ],
    capabilities: [
      "EPANET hydraulic network & pipeline design",
      "River intake weir & spring catchment engineering",
      "Pressed-steel reservoirs & large-capacity valley tanks",
      "Hydrostatic pressure testing & commissioning",
    ],
    featuredProject: {
      title: "Nkoni & Namwiwa Town Water Supply Schemes",
      location: "Central & Eastern Uganda",
      value: "UGX 55 Billion · 2 Town Schemes",
      role: "Detailed Design & Construction Supervision",
    },
  },
  {
    id: "education",
    name: "Education & Teaching Institutions",
    tag: "Academic Campuses",
    headline: "Modern University Campuses, Laboratories & Academic Infrastructure",
    description:
      "From medical science teaching colleges to university lecture halls and research laboratories, Piako provides integrated masterplanning, structural framing, and building services that foster world-class learning and technical research environments.",
    image: "/images/projects/mzuzu-blantyre.jpg",
    clients: [
      "Mzuzu University (Malawi)",
      "Blantyre College of Health Sciences",
      "Health Training Institutions",
    ],
    capabilities: [
      "University campus spatial masterplanning",
      "Specialized science & clinical laboratory layouts",
      "Acoustic design & large-span lecture theatres",
      "Campus utility reticulation (power, water, data)",
    ],
    featuredProject: {
      title: "Mzuzu University & Blantyre Teaching Hospital",
      location: "Blantyre & Zomba, Malawi",
      value: "USD 35.3 Million · 20,000 m² Campus",
      role: "Owner's Engineer & Employer's Representative",
    },
  },
  {
    id: "epc-contractors",
    name: "Major EPC Contractors & Infrastructure Consortia",
    tag: "Contractor Engineering Services",
    headline: "Specialized Geotechnical Drilling, Testing & Design Reviews",
    description:
      "International and national infrastructure contractors depend on Piako for local geotechnical investigations, in-situ SPT testing, materials laboratory analysis, and independent design review to mitigate subsurface risks and safeguard construction deadlines.",
    image: "/images/projects/ala-ora-intakes.jpg",
    clients: [
      "China Railway No. 10 Engineering Group Co., Ltd",
      "Zhonghao Overseas Construction Engineering Co., Ltd",
      "Joadah Consult Ltd",
    ],
    capabilities: [
      "Deep exploratory borehole core drilling",
      "In-situ Standard Penetration Tests (SPT)",
      "Laboratory soil & rock mechanics analysis (with GETLAB)",
      "Cofferdam, dewatering & foundation engineering reviews",
    ],
    featuredProject: {
      title: "Ala Ora Water Supply Project: Nyagak & Enyau Intakes",
      location: "Zombo & Terego, Uganda",
      value: "UGX 701 Million Combined Geotechnical Investigation",
      role: "Geotechnical Drilling & In-Situ Analysis (with GETLAB)",
    },
  },
  {
    id: "commercial-hospitality",
    name: "Commercial Developers & 5-Star Hospitality",
    tag: "Private Commercial",
    headline: "High-Specification Hotels, Commercial Towers & Mixed-Use Hubs",
    description:
      "Private commercial investors require elegance, structural robustness, and cost certainty. Piako coordinates architectural reviews, MEP building services, and strict quality supervision for premier 5-star hotel resorts, conference centers, and commercial complexes.",
    image: "/images/projects/mbale-courts-view.jpg",
    clients: [
      "Commercial Hospitality Developers",
      "Pyramid Hotel Juba City",
      "Mbale Courts View Hotel",
      "Private Real Estate Consortia",
    ],
    capabilities: [
      "Luxury architectural detailing & finishing supervision",
      "HVAC, acoustic & life-safety engineering",
      "Conference hall & hospitality structural design",
      "Program cost consultancy & variation control",
    ],
    featuredProject: {
      title: "5-Star Pyramid Hotel & 5-Star Mbale Courts View Hotel",
      location: "Juba City (South Sudan) & Mbale City (Uganda)",
      value: "USD 25 Million+ Commercial Developments",
      role: "Design & Construction Supervision",
    },
  },
  {
    id: "technical-partnerships",
    name: "Strategic Technical Partnerships",
    tag: "Collaborative Practice",
    headline: "Joint Alliances That Extend Technical Depth Without Diluting Accountability",
    description:
      "Our collaborative model brings in accredited laboratories, specialized surveyors, and niche engineers on demand. Partnership arrangements expand our technical capabilities while ensuring the client has a single, accountable point of professional contact.",
    image: "/images/about-team.png",
    clients: [
      "GETLAB Geotechnical & Material Testing Laboratory",
      "Regional Engineering Design Consultancies",
      "Specialist Environmental Consulting Firms",
    ],
    capabilities: [
      "In-situ cone penetration & plate load testing",
      "Concrete core crushing & bitumen binder analysis",
      "Cadastral land acquisition & valuation registers",
      "Integrated multi-firm consortium management",
    ],
    featuredProject: {
      title: "Geotechnical Testing & Drilling Alliance",
      location: "National & Regional Field Sites",
      value: "Associate Laboratory Partnership with GETLAB",
      role: "Integrated Geotechnical Investigation & Quality Assurance",
    },
  },
];
