// portfolioData.ts - Central repository for all static content in the Executive Portfolio app

// Personal Information
export const personalInfo = {
  name: "Yahya Chaker",
  title: "Projects Director",
  location: "Doha, Qatar",
  phone: "(974) 6645 8738",
  email: "yahya_shaker@hotmail.com",
  linkedin: {
    url: "https://www.linkedin.com/in/yahya-chaker/",
    text: "LinkedIn Profile"
  },
  profileImage: "/Profile-Photo.jpg"
};

// Navigation Items
export const navigationItems = [
  { id: "summary", label: "Summary", icon: "User" },
  { id: "skills", label: "Skills & Strengths", icon: "Target" },
  { id: "projects", label: "Projects", icon: "BarChart2" },
  { id: "experience", label: "Experience", icon: "Briefcase" },
  { id: "education", label: "Education", icon: "BookOpen" },
];

// Print Sections Configuration
export const printSections = [
  { id: "summary-section", label: "Executive Summary" },
  { id: "skills-section", label: "Skills & Strengths" },
  { id: "experience-section", label: "Professional Experience" },
  { id: "projects-section", label: "Projects Portfolio" },
  { id: "education-section", label: "Education & Certifications" },
];

// Executive Summary Content
export const summaryContent = {
  hero: {
    headline: "Projects Director Portfolio",
    title: "Transforming Operations Into Excellence",
    tagline: "Delivering exceptional results by combining strategic vision, operational expertise, and a proven track record of leading multimillion-dollar projects and high-performing teams."
  },
  highlights: [
    { number: "18+", label: "Years Experience" },
    { number: "720+", label: "Team Size Led" },
    { number: "163M", label: "QAR Projects Value" },
    { number: "94%", label: "Completion Rate" }
  ],
  paragraphs: [
    "<strong>UPDA-accredited Electrical and Electronics Engineer</strong> with extensive leadership experience across the GCC region. My career has been defined by consistently delivering operational excellence and strategic growth in diverse sectors including facilities management, construction, real estate, and oil & gas.",
    "I specialize in optimizing operations, driving efficiency improvements, and maximizing resource utilization while maintaining the highest standards of quality and safety. My approach combines <strong>analytical precision</strong> with <strong>strategic vision</strong> to transform organizational performance and deliver measurable results that exceed expectations."
  ],
  metricsSection: {
    heading: "Performance Overview",
    subheading: "Key performance indicators showing measurable improvements across critical business areas under my leadership.",
    metrics: [
      {
        title: "Maintenance Compliance",
        value: "98.5%",
        change: "+22.5% improvement",
        positive: true,
        initialValue: "76%",
        currentValue: "98.5%",
        className: "maintenance"
      },
      {
        title: "Project Completion",
        value: "94%",
        change: "+16% improvement",
        positive: true,
        initialValue: "78%",
        currentValue: "94%",
        className: "completion"
      },
      {
        title: "Safety Incidents",
        value: "-45%",
        change: "Significant reduction",
        positive: false,
        initialValue: "100%",
        currentValue: "55%",
        className: "safety"
      },
      {
        title: "Team Retention",
        value: "100%",
        change: "+28% improvement",
        positive: true,
        initialValue: "72%",
        currentValue: "100%",
        className: "retention"
      },
      {
        title: "Cost Reduction",
        value: "26%",
        change: "Reduced expenses",
        positive: false,
        initialValue: "100%",
        currentValue: "74%",
        className: "cost"
      }
    ],
    summary: "These metrics demonstrate my consistent track record of driving operational excellence and delivering measurable business results across multiple critical performance areas."
  },
  keyProjectsHighlights: {
    heading: "Key Projects Highlights",
    projects: [
      {
        title: "Lekhwiya Head Quarter",
        text: "Transformed a stalled project from 10% to 100% MEP completion within 6 months, managing 720 personnel and reducing safety incidents by 45%.",
        className: "achievementLekhwiya"
      },
      {
        title: "Ministry of Interior",
        text: "Increased maintenance compliance from 76% to 98.5%, securing a three-year contract renewal with zero penalties over the entire term.",
        className: "achievementMOI"
      },
      {
        title: "Al Jabor Realty",
        text: "Generated over 1M QAR in annual cost savings while reducing payroll expenses by 18% and simultaneously increasing productivity by 22%.",
        className: "achievementJabor"
      },
      {
        title: "Elegancia Projects",
        text: "Currently managing projects valued at 163M QAR with 629 total personnel, improving on-time completion rates from 78% to 94%.",
        className: "achievementElegancia"
      }
    ]
  }
};

// Skills Section
export const skillsContent = {
  title: "Key Skills and Strengths",
  skills: [
    {
      title: "Leadership",
      icon: "Shield",
      className: "skillCardHeaderLeadership",
      iconClassName: "iconContainerLeadership",
      items: [
        "Spearheaded MEP completion for Lekhwiya Head Quarter project, transforming progress from 10% to 100% within 6 months",
        "Managed a team of 720 personnel across 5 buildings, implementing safety-conscious strategies that reduced incidents by 45%",
        "Directed a 220-member team for Ministry of Interior project, increasing preventative maintenance compliance from 76% to 98.5%"
      ]
    },
    {
      title: "Communication",
      icon: "MessageCircle",
      className: "skillCardHeaderCommunication",
      iconClassName: "iconContainerCommunication",
      items: [
        "Secured three-year contract renewal by implementing targeted communication strategies",
        "Established weekly alignment meetings with stakeholders and developed comprehensive documentation",
        "Cultivated strong relationships with suppliers, reducing costs by 26% and improving system uptime from 96.7% to 99.3%"
      ]
    },
    {
      title: "Problem-solving",
      icon: "Lightbulb",
      className: "skillCardHeaderProblemSolving",
      iconClassName: "iconContainerProblemSolving",
      items: [
        "Addressed budget inefficiencies by implementing zero-based budgeting, reducing payroll expenses by 18% while increasing productivity by 22%",
        "Resolved critical documentation issues, improving reporting accuracy to 90% and eliminating disputed KPI deductions",
        "Improved departmental NPS scores by 15 points through targeted process improvements"
      ]
    },
    {
      title: "Strategic Planning",
      icon: "BarChart3",
      className: "skillCardHeaderStrategic",
      iconClassName: "iconContainerStrategic",
      items: [
        "Developed multi-tiered budget tracking system and created customized financial dashboards",
        "Generated over 1M QAR in annual cost savings through strategic contract restructuring",
        "Implemented a centralized resource management system, improving on-time completion rates from 78% to 94% across all projects"
      ]
    }
  ]
};

// Projects Portfolio
export const projectsContent = {
  title: "Projects Portfolio Analysis",
  projectValueData: [
    { name: "Lusail Commercial Boulevard", value: 93 },
    { name: "Al Seef Towers", value: 14 },
    { name: "Korean Medical Center", value: 9.5 },
    { name: "Pumping Stations", value: 24 },
    { name: "QNB Tower", value: 22.5 },
  ],
  chartColors: ["#F9A826", "#2A9D8F", "#E76F51", "#8AB17D", "#E9C46A"],
  projectMetrics: {
    heading: "Project Management Metrics",
    metrics: [
      { label: "Current Projects Completion Rate", value: "94%", className: "completionRate" },
      { label: "Budget Adherence", value: "97%", className: "budgetAdherence" },
      { label: "Client Satisfaction", value: "92%", className: "clientSatisfaction" },
      { label: "Team Efficiency", value: "89%", className: "teamEfficiency" },
      { label: "Resource Optimization", value: "91%", className: "resourceOptimization" }
    ]
  },
  highlights: {
    heading: "Key Project Highlights",
    projects: [
      {
        title: "Lekhwiya Head Quarter",
        text: "Transformed MEP progress from 10% to 100% within a 6-month contract period, managing a team of 720 personnel.",
        className: "highlightCardLehkwiya"
      },
      {
        title: "Ministry of Interior",
        text: "Maintained #1 ranking for 3 years with no penalties, increased maintenance compliance from 76% to 98.5%.",
        className: "highlightCardMOI"
      },
      {
        title: "Al Jabor Realty",
        text: "Generated over 1M QAR in annual cost savings through strategic contract restructuring and process optimization.",
        className: "highlightCardJabor"
      },
      {
        title: "Lusail Boulevard",
        text: "Improved reporting accuracy to 90%, eliminating disputed KPI deductions and strengthening client trust.",
        className: "highlightCardLusail"
      }
    ]
  }
};

// Experience Timeline
export const experienceData = [
  { year: "2023-Present", title: "FM Projects Director", company: "Elegancia Facilities Management" },
  { year: "2019-2023", title: "Senior Facilities Manager", company: "Elegancia Facilities Management" },
  { year: "2018-2019", title: "MEP Construction Manager", company: "Qatari Diar - Saudi Bin Laden Group" },
  { year: "2016-2018", title: "Operations and Maintenance Manager", company: "Al Jabor Realty" },
  { year: "2013-2016", title: "Project Manager - MEP and Instrumentation", company: "Roots Energy and Engineering Services" },
  { year: "2011-2013", title: "Senior Electrical Engineer", company: "Roots Energy and Engineering Services" },
  { year: "2007-2011", title: "Facility Manager", company: "Allied Maintenance Co. Ltd." },
];

// Detailed Experience Content
export const detailedExperienceContent = {
  "FM Projects Director": {
    title: "FM Projects Director",
    subtitle: "Elegancia Facilities Management, Qatar | May 2023 – Present",
    projects: [
      { name: "Qatari Diar - Lusail Commercial Boulevard: Property and Facility Management Services", value: "93M QAR | 320 Personnel" },
      { name: "Qatari Diar – Al Seef Towers: Operation & Maintenance Services", value: "14M QAR | 40 Personnel" },
      { name: "KMC – Korean Medical Center: Integrated Facilities Management", value: "9.5M QAR | 65 Personnel" },
      { name: "Qatar Diar – Pumping Stations: Operations and Maintenance for 19 pumping stations", value: "24M QAR | 72 Personnel" },
      { name: "QNB Tower: Integrated Facilities Management", value: "22.5M QAR | 132 Personnel" }
    ],
    responsibilities: [
      "Planned, coordinated, and supervised the execution of projects.",
      "Managed project budgets, timelines, resources, and quality.",
      "Led the handover process and acted as a client representative.",
      "Communicated with stakeholders and clients.",
      "Ensured conformity with safety, environmental, and contractual obligations.",
      "Determined and eliminated project hazards and conflicts.",
      "Served as a source of leadership and direction for the project team and contractors."
    ],
    achievements: [
      "Successfully resolved a critical documentation issue on the Lusail Boulevard project, improving reporting accuracy to 90% and eliminating disputed KPI deductions.",
      "Implemented a centralized resource management system, improving on-time completion rates from 78% to 94% across all projects.",
      "Developed a unified project management methodology and centralized procurement system.",
      "Established shared equipment pools, optimizing resource utilization."
    ]
  },
  "Senior Facilities Manager": {
    title: "Senior Facilities Manager",
    subtitle: "Elegancia Facilities Management, Qatar | June 2019 – April 2023",
    project: "Ministry of Interior – Head Quarter and Cyber Security Center (Operational Maintenance)",
    responsibilities: [
      "Led a team of 220 professionals, including an operations manager and engineers, to guarantee seamless maintenance of both hard and soft services.",
      "Negotiated and secured project bids and maintenance contracts, cultivating robust relationships with suppliers and subcontractors.",
      "Monitored vendor performance to ensure conformity to quality standards and timely, cost-effective service delivery.",
      "Assisted in the development of procedures, recruitment, and performance evaluation processes.",
      "Coordinated procurement of parts, services, and labor for projects.",
      "Implemented a Planned Preventive Maintenance system and ensured all reactive/corrective maintenance activities.",
      "Supervised the integration of the CAFAM system and closely followed up on daily activities at the site."
    ],
    achievements: [
      "Achieved three-year contract renewal through exceptional performance and close collaboration with the tendering department.",
      "Spearheaded a project that ranked number one in terms of problem-free status and absence of penalties for three consecutive years.",
      "Implemented a tiered leadership approach and established daily operational briefings.",
      "Integrated a cloud-based CMMS system that increased preventative maintenance compliance from 76% to 98.5% within the first quarter.",
      "Established weekly alignment meetings with procurement stakeholders and developed comprehensive documentation."
    ]
  },
  "MEP Construction Manager": {
    title: "MEP Construction Manager (Contract)",
    subtitle: "Qatari Diar - Saudi Bin Laden Group (QD-SBG), Qatar | November 2018 – June 2019",
    project: "Project: Lekhwiya Head Quarter (Value ~ QAR 3 billion)",
    responsibilities: [
      "Led the successful handover of four buildings within a highly accelerated timeline, managing a team of 720.",
      "Ensured that all construction activities adhered to relevant laws and regulations.",
      "Acted as a key point of communication and coordination for construction scheduling.",
      "Utilized expertise in cost estimation and budget management to closely track and optimize costs.",
      "Monitored and optimized material and equipment costs throughout the preconstruction and construction phases."
    ],
    achievements: [
      "Spearheaded the MEP completion, transforming progress from 10% to 100% within a 6-month contract period.",
      "Established a multi-tiered leadership structure, effectively managing a team of 720 personnel across 5 buildings and a storage facility.",
      "Implemented safety-conscious strategies that reduced safety incidents by 45% and improved team retention by 28%."
    ]
  },
  "Operations and Maintenance Manager": {
    title: "Operations and Maintenance Manager",
    subtitle: "Al Jabor Realty / Swimming Pools & SPAs, Qatar | October 2016 – November 2018",
    responsibilities: [
      "Utilized analytical and managerial skills to identify and address areas of budget inefficiency.",
      "Managed all facility operations and maintenance.",
      "Developed and managed a comprehensive facilities operating budget.",
      "Directed and inspected facilities for compliance with regulatory guidelines."
    ],
    achievements: [
      "Addressed budget inefficiencies by conducting detailed cost-benefit analyses and implementing zero-based budgeting.",
      "Implemented personnel changes that reduced payroll expenses by 18% while increasing productivity by 22%.",
      "Improved departmental NPS scores by 15 points through process optimization.",
      "Developed a multi-tiered budget tracking system and customized financial dashboards.",
      "Generated over 1M QAR in annual cost savings through strategic contract restructuring."
    ]
  },
  "Project Manager - MEP and Instrumentation": {
    title: "Project Manager - MEP and Instrumentation",
    subtitle: "Roots Energy and Engineering Services – Tadmur, Qatar | December 2013 – September 2016",
    projects: [
      { name: "EPIC For Replacement of Variable Speed Drive Systems and Soft Starter Units at Production Stations and RG Plant in Dukhan Field", value: "30M QAR" },
      { name: "EPIC Of Three Instrument PCRS At NGL-3, Gas Operations, Mesaieed", value: "50M QAR" },
      { name: "Replacement of existing pilot wire protection relays with new Numerical Protection Relays at QP Refinery, Mesaieed", value: "25M QAR" }
    ],
    responsibilities: [
      "Managed the MEP aspects of 3 projects simultaneously.",
      "Ensured projects on-time handover with no delays after leading pre-commissioning and commissioning.",
      "Reviewed, approved, and implemented all engineering documents, reports, standards, and drawings.",
      "Arranged and scheduled technical and managerial meetings with clients and internal meetings.",
      "Prepared and maintained yearly project cash flow.",
      "Led preparation and submittal of preliminary documentation.",
      "Reviewed pre-qualifications and proposals of subcontractors.",
      "Prepared the Techno-commercial Bid Evaluation."
    ]
  },
  "Senior Electrical Engineer": {
    title: "Senior Electrical Engineer (Oil & Gas)",
    subtitle: "Roots Energy and Engineering Services – Tadmur, Qatar | April 2011 – November 2013",
    projects: [
      { name: "Head Works Construction for Doha South RPS and Associated Pipelines – Pumping Station (Electrical, Mechanical and Instrumentation)", value: "40M QAR" },
      { name: "EPIC Of Automation Upgrade at Jaleha Degassing Station, Umm Bab and Diab", value: "80M QAR" }
    ],
    responsibilities: [
      "Completed 90% of submittals within 3 months.",
      "Upgraded plant systems.",
      "Managed the night shift during shutdown.",
      "Design: Electrical Load Calculation, Adequacy Check Report, Cable Sizing, Lighting Calculation, Single Line Diagram, Earthing, lightening, etc.",
      "Engineering, Procurement, Installation and Commissioning of Electrical Systems."
    ]
  },
  "Facility Manager": {
    title: "Facility Manager",
    subtitle: "Allied Maintenance Co. Ltd., Eastern Province, Saudi Arabia | September 2007 – May 2011",
    responsibilities: [
      "Responsible for preventive and corrective maintenance.",
      "Followed-up with facilities maintenance services and checked on all safety equipment.",
      "Assessed buildings and facilities in terms of the status and priority of maintenance needs.",
      "Provided leadership and guidance to the facilities team and supporting staff.",
      "Ensured safety and quality of all equipment and materials required for execution of maintenance works and contracts."
    ]
  }
};

// Education & Certifications
export const educationContent = {
  title: "Education & Certifications",
  items: [
    {
      title: "Master of Science",
      field: "Electrical and Electronics Engineering",
      institution: "Lebanese University, Lebanon",
      year: "2007",
      additional: "Graduation Project R&D, Yverdon-Les-Bains, Switzerland"
    },
    {
      title: "Certified Electrical Engineer",
      field: "Urban Planning and Development Authority (UPDA)",
      institution: "Qatar",
      year: "2018 - Present"
    },
    {
      title: "GSAS Certification",
      field: "The Global Sustainability Assessment System",
      institution: "Operations",
      year: "2019 - Present"
    },
    {
      title: "Professional Membership",
      field: "Order of Engineers of Tripoli",
      institution: "Lebanon",
      year: "2012 - Present"
    }
  ]
};

// Footer Content
export const footerContent = {
  copyright: `© ${new Date().getFullYear()} Yahya Chaker - Projects Director Portfolio`
};
