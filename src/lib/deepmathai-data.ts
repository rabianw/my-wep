// DeepMathAI Research Group Data
// Source: (Revised)-แบบฟอร์มข้อเสนอโครงการFRandICluster-เวลา1756.docx

export interface TeamMember {
  id: string;
  name: string;
  nameEn: string;
  title: string;
  department: string;
  faculty: string;
  institution: string;
  email: string;
  phone?: string;
  expertise: string[];
  hIndexGoogle?: number;
  hIndexScopus?: number;
  citationScopus?: number;
  role: "PI" | "Co-PI" | "Early-Career" | "International";
  responsibility: string; // percentage
  avatarUrl?: string;
  country?: string;
  countryFlag?: string;
}

export interface ResearchPillar {
  id: string;
  title: string;
  shortTitle: string;
  description: string;
  details: string[];
  iconName: string;
  color: string;
}

export interface RoadmapYear {
  year: number;
  thaiYear: number;
  title: string;
  description: string;
  milestones: string[];
  kpis: { label: string; target: string }[];
}

export interface GroupStats {
  researchers: number;
  internationalPartners: number;
  targetPapersPerYear: number;
  externalFunding: string;
  totalFunding3Years: string;
}

// ─── Group Info ─────────────────────────────────────
export const deepMathAIInfo = {
  nameTh: "DeepMathAI : กลุ่มวิจัยสหสาขาด้านแบบจำลองคณิตศาสตร์เชิงลึก เพื่อการเรียนรู้ของเครื่องและปัญญาประดิษฐ์",
  nameEn: "DeepMathAI : Interdisciplinary Research Group on Deep Mathematical Modeling for Machine Learning and Artificial Intelligence",
  shortName: "DeepMathAI",
  tagline: "Deep Mathematical Modeling for Machine Learning & AI",
  institution: "Naresuan University",
  fundingType: "Frontier Research and Innovation Clusters",
  fundingYear: "2569 (2026)",
  keywords: [
    "Mathematical Modeling", "Optimization", "Machine Learning",
    "Artificial Intelligence", "Deep Learning", "Mathematical Programming",
    "Numerical Analysis", "Explainable Models", "Big Data",
    "Sensitivity Analysis", "Theory-based Machine Learning"
  ],
};

// ─── Impact Stats ───────────────────────────────────
export const groupStats: GroupStats = {
  researchers: 7,
  internationalPartners: 4,
  targetPapersPerYear: 10,
  externalFunding: "฿22.96M",
  totalFunding3Years: "฿1.5M",
};

// ─── Team Members ───────────────────────────────────
export const teamMembers: TeamMember[] = [
  {
    id: "tm-rabian",
    name: "ศาสตราจารย์ ดร.ระเบียน วังคีรี",
    nameEn: "Prof. Dr. Rabian Wangkeeree",
    title: "Professor",
    department: "Department of Mathematics",
    faculty: "Faculty of Science",
    institution: "Naresuan University",
    email: "rabianw@nu.ac.th",
    phone: "086-397-7096",
    expertise: [
      "Optimization Algorithms", "Machine Learning", "Deep Learning",
      "Artificial Intelligence", "Approximation Theory", "Fixed Point Iteration"
    ],
    hIndexGoogle: 17,
    hIndexScopus: 15,
    citationScopus: 767,
    role: "PI",
    responsibility: "16%",
  },
  {
    id: "tm-chatchai",
    name: "รองศาสตราจารย์ ดร.ฉัตรชัย ศิริสัมพันธ์วงษ์",
    nameEn: "Assoc. Prof. Dr. Chatchai Sirisamphanwong",
    title: "Associate Professor",
    department: "Department of Physics",
    faculty: "Faculty of Science",
    institution: "Naresuan University",
    email: "chatchaisi@nu.ac.th",
    phone: "055-96-3512",
    expertise: ["Renewable Energy"],
    hIndexGoogle: 14,
    hIndexScopus: 13,
    citationScopus: 587,
    role: "Co-PI",
    responsibility: "14%",
  },
  {
    id: "tm-rattanaporn",
    name: "รองศาสตราจารย์ ดร.รัตนาพร วังคีรี",
    nameEn: "Assoc. Prof. Dr. Rattanaporn Wangkeeree",
    title: "Associate Professor",
    department: "Department of Mathematics",
    faculty: "Faculty of Science",
    institution: "Naresuan University",
    email: "rattanapornw@nu.ac.th",
    phone: "081-457-9509",
    expertise: [
      "Approximation Theory", "Fixed Point Iteration",
      "Optimization Algorithms", "Machine Learning", "Artificial Intelligence"
    ],
    hIndexGoogle: 9,
    hIndexScopus: 7,
    citationScopus: 123,
    role: "Co-PI",
    responsibility: "14%",
  },
  {
    id: "tm-kasamsuk",
    name: "รองศาสตราจารย์ ดร.เกษมสุข อุงจิตต์ตระกูล",
    nameEn: "Assoc. Prof. Dr. Kasamsuk Ungchittrakool",
    title: "Associate Professor",
    department: "Department of Mathematics",
    faculty: "Faculty of Science",
    institution: "Naresuan University",
    email: "kasamsuku@nu.ac.th",
    phone: "083-877-0075",
    expertise: [
      "Optimization Algorithms", "Fixed Point Theory",
      "Approximation Theory", "Variational Inequality",
      "Image Processing", "Image Restoration", "Image Deblurring"
    ],
    hIndexGoogle: 9,
    hIndexScopus: 8,
    citationScopus: 351,
    role: "Co-PI",
    responsibility: "14%",
  },
  {
    id: "tm-kotchaporn",
    name: "ผู้ช่วยศาสตราจารย์ ดร.กชพร การุณ",
    nameEn: "Asst. Prof. Dr. Kotchaporn Karun",
    title: "Assistant Professor",
    department: "Department of Mathematics",
    faculty: "Faculty of Science",
    institution: "Naresuan University",
    email: "kotchapornk@nu.ac.th",
    expertise: [
      "Statistical Process Control", "Time Series Analysis", "Fixed Point Theory"
    ],
    hIndexGoogle: 5,
    hIndexScopus: 6,
    citationScopus: 66,
    role: "Co-PI",
    responsibility: "14%",
  },
  {
    id: "tm-limpapat",
    name: "ดร.ลิมปพัทธ์ บุษบัน",
    nameEn: "Dr. Limpapat Bussaban",
    title: "Lecturer",
    department: "Department of Computer Science",
    faculty: "Faculty of Science",
    institution: "Naresuan University",
    email: "limpapatb@nu.ac.th",
    phone: "081-872-3440",
    expertise: [
      "Deep Learning", "AI", "Fixed Point Theory",
      "Optimization", "Image Processing"
    ],
    hIndexGoogle: 6,
    hIndexScopus: 5,
    citationScopus: 105,
    role: "Early-Career",
    responsibility: "14%",
  },
  {
    id: "tm-rataporn",
    name: "ดร.รัฐพร เงินมีศรี",
    nameEn: "Dr. Rataporn Ngoenmeesri",
    title: "Lecturer",
    department: "Faculty of Science",
    faculty: "Faculty of Science",
    institution: "Naresuan University",
    email: "ratapornn@nu.ac.th",
    phone: "055-96-3131",
    expertise: ["Renewable Energy"],
    hIndexGoogle: undefined,
    hIndexScopus: 4,
    citationScopus: 54,
    role: "Early-Career",
    responsibility: "14%",
  },
];

// ─── International Network ──────────────────────────
export const internationalNetwork: TeamMember[] = [
  {
    id: "int-lam",
    name: "Prof. Lam Quoc Anh",
    nameEn: "Prof. Lam Quoc Anh",
    title: "Professor",
    department: "Department of Mathematics",
    faculty: "Teacher College",
    institution: "Can Tho University",
    email: "quocanh@ctu.edu.vn",
    expertise: [
      "Sensitivity Analysis", "Optimization",
      "Multiobjective Optimization", "Mathematical Programming"
    ],
    hIndexGoogle: 22,
    hIndexScopus: 20,
    citationScopus: 1268,
    role: "International",
    responsibility: "Advisor",
    country: "Vietnam",
    countryFlag: "🇻🇳",
  },
  {
    id: "int-bagdasar",
    name: "Prof. Ovidiu Bagdasar",
    nameEn: "Prof. Ovidiu Bagdasar",
    title: "Professor",
    department: "Electronics, Computing and Mathematics",
    faculty: "",
    institution: "University of Derby",
    email: "o.bagdasar@derby.ac.uk",
    expertise: [
      "Optimization", "Computational Mathematics",
      "Mathematical Modelling", "Number Theory"
    ],
    hIndexGoogle: undefined,
    hIndexScopus: 14,
    citationScopus: 801,
    role: "International",
    responsibility: "Advisor",
    country: "United Kingdom",
    countryFlag: "🇬🇧",
  },
  {
    id: "int-chen",
    name: "Prof. Jein-Shan Chen",
    nameEn: "Prof. Jein-Shan Chen",
    title: "Professor",
    department: "Mathematics Department",
    faculty: "",
    institution: "National Taiwan Normal University",
    email: "jschen@math.ntnu.edu.tw",
    expertise: [
      "Continuous Optimization", "Nonsmooth Analysis",
      "Operations Research", "Multiobjective Optimization"
    ],
    hIndexGoogle: undefined,
    hIndexScopus: 20,
    citationScopus: 1474,
    role: "International",
    responsibility: "Advisor",
    country: "Taiwan",
    countryFlag: "🇹🇼",
  },
  {
    id: "int-lee",
    name: "Prof. Gue Myung Lee",
    nameEn: "Prof. Gue Myung Lee",
    title: "Professor",
    department: "Department of Applied Mathematics",
    faculty: "",
    institution: "Pukyong National University",
    email: "gmlee@pknu.ac.kr",
    expertise: [
      "Sensitivity Analysis", "Nonlinear Optimization",
      "Multiobjective Optimization", "Mathematical Programming"
    ],
    hIndexGoogle: undefined,
    hIndexScopus: 26,
    citationScopus: 2156,
    role: "International",
    responsibility: "Advisor",
    country: "South Korea",
    countryFlag: "🇰🇷",
  },
];

// ─── Research Pillars ───────────────────────────────
export const researchPillars: ResearchPillar[] = [
  {
    id: "pillar-optimization",
    title: "High-Performance Optimization Algorithms",
    shortTitle: "Optimization",
    description: "Developing large-scale optimization algorithms for training complex models on medical and engineering data.",
    details: [
      "Nonconvex & large-scale optimization for deep learning",
      "Stochastic optimization with convergence guarantees",
      "SVM with novel loss functions (Generalized Pinball, Rescaled)",
      "Neurodynamic neural network methods",
    ],
    iconName: "zap",
    color: "#3b82f6",
  },
  {
    id: "pillar-deep-learning",
    title: "Provable Deep Learning Architectures",
    shortTitle: "Deep Learning",
    description: "Designing new deep learning architectures with provable mathematical properties — convergence, stability, and generalization bounds.",
    details: [
      "Mathematically-grounded deep architectures",
      "Convergence and stability proofs for DL models",
      "Generalization bounds for medical imaging models",
      "Geometry of neural networks and kernel methods",
    ],
    iconName: "brain",
    color: "#8b5cf6",
  },
  {
    id: "pillar-explainable",
    title: "Explainable & Trustworthy AI",
    shortTitle: "Explainable AI",
    description: "Making AI transparent and interpretable using mathematical tools — differential geometry, spectral theory, and information geometry.",
    details: [
      "Spectral graph theory for model interpretability",
      "Information geometry for understanding neural networks",
      "Model cards and reproducibility standards",
      "Auditable and deployable AI systems",
    ],
    iconName: "shield",
    color: "#14b8a6",
  },
  {
    id: "pillar-applications",
    title: "Real-World Applications: Medical & Energy AI",
    shortTitle: "Applications",
    description: "Applying mathematical AI to real problems — medical imaging diagnosis, renewable energy systems, and smart grid optimization.",
    details: [
      "Glaucoma detection from retinal fundus images",
      "Bone mineral density prediction from MRI/CT/X-ray",
      "Diabetic retinopathy recognition",
      "Wind turbine control and solar energy optimization",
      "Smart grid and microgrid system analysis",
    ],
    iconName: "activity",
    color: "#f59e0b",
  },
];

// ─── 3-Year Roadmap ─────────────────────────────────
export const roadmapData: RoadmapYear[] = [
  {
    year: 2026,
    thaiYear: 2569,
    title: "Foundation & Prototype",
    description: "Establish the research group, define thematic areas, build initial prototypes, and set up the mentoring system.",
    milestones: [
      "Select core researchers and establish Advisory Board",
      "Define 3-year research plan and thematic areas",
      "Develop mathematical models and algorithm prototypes (≥2)",
      "Set up mentoring system for junior researchers",
      "Submit ≥10 Q1-Q2 journal articles",
      "Establish ≥3 international collaboration agreements",
    ],
    kpis: [
      { label: "Q1-Q2 Papers", target: "≥10" },
      { label: "International Co-authored", target: "≥5" },
      { label: "Junior Researcher Papers", target: "≥3" },
      { label: "External Funding", target: "฿3M" },
      { label: "Open-source Tools", target: "2 units" },
    ],
  },
  {
    year: 2027,
    thaiYear: 2570,
    title: "Deep Research & Real-World Testing",
    description: "Conduct in-depth research on optimization and deep learning, test models with real-world data, and expand international network.",
    milestones: [
      "Advanced research in optimization and deep learning models",
      "Test model performance with real-world data (medical/energy)",
      "Publish open-source tools and annotated datasets (≥3)",
      "Host international seminar and researcher exchange",
      "Submit international joint research grant",
      "Develop pilot projects in ≥2 application domains",
    ],
    kpis: [
      { label: "Q1-Q2 Papers", target: "≥10" },
      { label: "International Co-authored", target: "≥5" },
      { label: "Junior Researcher Papers", target: "≥3" },
      { label: "External Funding", target: "฿3M" },
      { label: "Open-source Tools", target: "2 units" },
    ],
  },
  {
    year: 2028,
    thaiYear: 2571,
    title: "Field Deployment & Center of Excellence",
    description: "Deploy AI models in healthcare and energy sectors, publish open research platform, and plan upgrade to national Center of Excellence.",
    milestones: [
      "Deploy pilot AI solutions in hospitals and energy facilities",
      "Complete open research platform (benchmark/testbed)",
      "Host international conference on Mathematical AI",
      "Publish comprehensive impact report",
      "Submit plan for upgrade to National Center of Excellence",
      "Total: ≥30 Q1-Q2 papers, ≥10 junior researchers developed",
    ],
    kpis: [
      { label: "Q1-Q2 Papers", target: "≥10" },
      { label: "International Co-authored", target: "≥5" },
      { label: "Junior Researcher Papers", target: "≥4" },
      { label: "External Funding", target: "฿3M" },
      { label: "Open-source Tools", target: "1 unit" },
    ],
  },
];

// ─── Funded Projects ────────────────────────────────
export const fundedProjects = [
  {
    id: "fp-1",
    title: "Beyond Coding: Upskilling in Mathematics, Programming for Data Science and Machine Learning",
    fundingBody: "PMU-B (บพค.)",
    amount: "฿1,500,000",
    pi: "Prof. Dr. Rabian Wangkeeree",
    period: "2024",
  },
  {
    id: "fp-2",
    title: "Advanced SVM Methods Powered by CNN Techniques for Medical Imaging: Classification and Detection of Red Aberrations in Retina for Diabetic Retinopathy Recognition",
    fundingBody: "NRCT (วช.)",
    amount: "฿1,500,000",
    pi: "Prof. Dr. Rabian Wangkeeree",
    period: "Apr 2024 – Apr 2027",
  },
  {
    id: "fp-3",
    title: "Hybrid Approximation Algorithms for Fixed Point and Split Zero Problems with Applications to Image Processing",
    fundingBody: "TSRI (กองทุน ววน.)",
    amount: "฿1,470,000",
    pi: "Assoc. Prof. Dr. Kasamsuk Ungchittrakool",
    period: "Mar 2023 – Mar 2026",
  },
  {
    id: "fp-4",
    title: "Generative AI for Synthetic Data Generation",
    fundingBody: "Enov8 Ltd., Australia",
    amount: "฿1,158,474 (48,000 AUD)",
    pi: "Dr. Limpapat Bussaban",
    period: "Feb 2024 – Jan 2026",
  },
  {
    id: "fp-5",
    title: "Si Chang Island Microgrid Development Feasibility Study",
    fundingBody: "PEA (การไฟฟ้าส่วนภูมิภาค)",
    amount: "฿5,790,000",
    pi: "Assoc. Prof. Dr. Chatchai Sirisamphanwong",
    period: "Mar 2023 – Nov 2023",
  },
  {
    id: "fp-6",
    title: "Solar Floating Phase 1 — Sri Trang Agro-Industry",
    fundingBody: "Sri Trang Agro-Industry PCL",
    amount: "฿3,456,000",
    pi: "Assoc. Prof. Dr. Chatchai Sirisamphanwong",
    period: "Oct 2023 – Apr 2024",
  },
];
