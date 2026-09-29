export const personalInfo = {
  name: "Santhosh M",
  role: "AI & Full-Stack Developer",
  tagline: "Building real software, AI applications, and full-stack products that solve real-world problems.",
  location: "Bengaluru, Karnataka, India",
  email: "santhosh.muruga04@gmail.com",
  github: "https://github.com/m04-santhosh",
  linkedin: "https://www.linkedin.com/in/santhu1004/",
  resumeUrl: "/resume.pdf",
  status: "Available for internships & software roles",
  bio: [
    "I'm a Computer Science Engineering student specializing in Artificial Intelligence & Data Science, passionate about building practical software that solves real-world problems.",
    "I enjoy working across the stack — from frontend interfaces and backend APIs to databases, machine learning pipelines and deployment.",
    "I like taking ideas from concept to development and turning them into working products."
  ],
  education: {
    degree: "B.E. Computer Science Engineering",
    specialization: "Artificial Intelligence & Data Science",
    institution: "Sampoorna Institute of Technology & Research",
    period: "2023 – 2027",
    location: "Bengaluru, Karnataka, India"
  }
};

export const aboutHighlights = [
  {
    icon: "GraduationCap",
    title: "B.E. CSE — AI & Data Science",
    subtitle: "2023 – 2027",
    desc: "Rigorous foundation in computer science, machine learning algorithms, and intelligent systems."
  },
  {
    icon: "Code2",
    title: "Full-Stack Development",
    subtitle: "Modern Web & APIs",
    desc: "Crafting end-to-end applications with React, Next.js, FastAPI, Node.js, and relational databases."
  },
  {
    icon: "Bot",
    title: "AI & Machine Learning",
    subtitle: "Applied Intelligence",
    desc: "Implementing computer vision, predictive modeling (XGBoost, Scikit-learn), and multi-modal forensic pipelines."
  },
  {
    icon: "Rocket",
    title: "SaaS & Automation",
    subtitle: "Production Workflows",
    desc: "Building business automation, conversational agents, and data integration platforms."
  }
];

export const skillCategories = [
  {
    name: "Languages",
    skills: ["Python", "Java", "JavaScript", "HTML5", "CSS3"]
  },
  {
    name: "Frontend",
    skills: ["React.js", "Next.js", "Tailwind CSS", "Bootstrap"]
  },
  {
    name: "Backend",
    skills: ["FastAPI", "Node.js", "Express.js"]
  },
  {
    name: "AI / Data",
    skills: ["Machine Learning", "OpenCV", "Pandas", "NumPy", "Scikit-learn", "XGBoost"]
  },
  {
    name: "Databases",
    skills: ["MySQL", "PostgreSQL", "SQLite", "Supabase"]
  },
  {
    name: "Tools & Platforms",
    skills: ["Git", "GitHub", "Docker", "Vercel", "Postman", "Figma"]
  }
];

export const projects = [
  {
    id: "naviscape",
    name: "NAVISCAPE",
    subtitle: "AI-Powered Navigation & Road-Safety Platform",
    featured: true,
    category: ["AI / ML", "Full Stack", "Data"],
    shortDesc: "Combines real-time traffic intelligence, accident-risk analysis, and route optimization to provide safer, smarter navigation.",
    problem: "Traditional navigation platforms optimize strictly for the shortest travel time, routing motorists through high-collision corridors, poorly lit zones, or hazardous weather-impacted roads without accident-risk awareness.",
    solution: "NAVISCAPE integrates historical accident records (Karnataka accident dataset) with real-time route geometry and traffic telemetry. An XGBoost machine learning model predicts segment-level accident risk scores to compute risk-aware multi-criteria route optimization.",
    architecture: {
      type: "pipeline",
      steps: [
        { label: "Route Request", desc: "Origin, destination & waypoints input via React Map interface" },
        { label: "OSM & Traffic Ingestion", desc: "Extract road segments, road type, lighting, and current speed telemetry" },
        { label: "Karnataka Accident Data", desc: "Spatial join with historical accident hotspots & crash severity clusters" },
        { label: "XGBoost Risk Predictor", desc: "Calculates probabilistic accident risk index per road segment" },
        { label: "Multi-Criteria Routing Engine", desc: "FastAPI calculates Pareto-optimal route (Safe vs Fast)" },
        { label: "Live Navigation & Proximity Alerts", desc: "Audio/visual hotspot warnings delivered to motorist in real time" }
      ]
    },
    keyFeatures: [
      "Interactive multi-layer navigation with live map telemetry",
      "Dynamic route planning with risk vs. time tradeoff selection",
      "Real-time traffic intelligence and congestion modeling",
      "Accident-risk analysis powered by an XGBoost predictive model",
      "Risk-aware route optimization prioritizing motorist safety",
      "Crowdsourced road-hazard reporting & verification",
      "Accident hotspot proximity alerts triggered within 500m",
      "Integrated Karnataka accident dataset with geospatial indexing"
    ],
    techStack: ["Python", "FastAPI", "React", "XGBoost", "SQLite", "Machine Learning", "OpenStreetMap"],
    githubUrl: "https://github.com/m04-santhosh/NAVISCAPE-major-project",
    liveUrl: null,
    accent: "from-cyan-500 to-blue-600"
  },
  {
    id: "trustguard",
    name: "TrustGuard",
    subtitle: "Forensic Multi-Modal Media Analysis System",
    featured: true,
    category: ["AI / ML", "Full Stack"],
    shortDesc: "Analyzes digital media using visual and audio intelligence to produce an evidence-oriented case file rather than relying on a single opaque prediction score.",
    problem: "Most deepfake and media manipulation detectors output a single black-box probability score, making it impossible for forensic investigators, journalists, and legal teams to audit or understand why a piece of media was flagged as forged.",
    solution: "TrustGuard executes a multi-stage forensic pipeline inspecting both visual artifacts (frame inconsistency, face boundaries, lighting anomalies) and acoustic signals (spectral irregularities, voice synthesis glitches). It cross-examines modal agreements to generate an audit-ready, evidentiary case file.",
    pipeline: [
      { step: "1", title: "Media Input", desc: "High-resolution video/image/audio ingestion with format verification" },
      { step: "2", title: "Visual & Audio Analysis", desc: "OpenCV frame extraction & SciPy audio spectral decomposition" },
      { step: "3", title: "Evidence Generation", desc: "Identification of spatial artifacts, frequency cuts & blend seams" },
      { step: "4", title: "Cross-Modal Analysis", desc: "Correlates lip-sync mismatch and acoustic-visual timing drift" },
      { step: "5", title: "Risk & Confidence Engine", desc: "Weighed scoring calibrated across multiple forensic indicators" },
      { step: "6", title: "Case File Output", desc: "Audit-ready forensic report with timestamped evidence cards" }
    ],
    keyFeatures: [
      "Multi-modal video, image, and audio forensic decomposition",
      "Visual manipulation detection for synthetic faces and deepfake blending",
      "Audio analysis for synthetic vocoder fingerprints and frequency cuts",
      "Cross-modal disagreement analysis (audio-visual temporal inconsistency)",
      "Tamper-evident case records with audit trails",
      "Calibrated risk assessment and multi-metric confidence handling",
      "Interactive investigation dashboard with frame-by-frame scrub preview",
      "Exportable forensic case file reports for compliance and review"
    ],
    techStack: ["Python", "FastAPI", "React", "OpenCV", "SciPy", "FFmpeg", "SQLite"],
    githubUrl: "https://github.com/m04-santhosh/Trust-Guard",
    liveUrl: null,
    accent: "from-emerald-500 to-teal-600"
  },
  {
    id: "udip",
    name: "Universal Data Intelligence Platform (UDIP)",
    subtitle: "AI-Powered Data Intelligence Platform",
    featured: true,
    category: ["Data", "AI / ML", "Full Stack"],
    shortDesc: "Transforms raw, unstructured, or dirty tabular datasets into clean normalized schemas, automated insights, and interactive analytics.",
    problem: "Organizations waste hours manually cleaning messy spreadsheets, diagnosing missing columns, reconciling schema shifts, and writing repetitive SQL queries just to answer basic data questions.",
    solution: "UDIP automates the tabular data lifecycle: from Excel ingestion and automated schema discovery to data quality profiling, entity resolution, and natural-language data querying, delivering instant visual insights.",
    architecture: {
      type: "flow",
      steps: [
        { label: "Ingestion", desc: "Multi-sheet Excel, CSV & JSON parsing via Pandas streaming" },
        { label: "Schema Discovery", desc: "Auto-type inference, null-rate profiling & anomaly detection" },
        { label: "Normalization", desc: "Entity resolution, whitespace cleaning & date harmonization" },
        { label: "Intelligence Layer", desc: "Natural language querying converted into validated analytics" },
        { label: "Visual Dashboard", desc: "Interactive charts, trend summaries & multi-format data exports" }
      ]
    },
    keyFeatures: [
      "High-throughput Excel and tabular data ingestion pipeline",
      "Automated schema discovery and type classification",
      "Data quality analysis with completeness and validity metrics",
      "Automated data normalization and duplicate entity resolution",
      "Interactive data catalog with searchable column lineage",
      "Natural-language data queries for non-technical users",
      "One-click multi-format data exports (CSV, JSON, SQLite)",
      "Interactive charts and automated executive summary cards"
    ],
    techStack: ["Python", "FastAPI", "Pandas", "JavaScript", "SQLite", "Chart.js"],
    githubUrl: "https://github.com/m04-santhosh/Universal-data-intelligence-platform-UDIP",
    liveUrl: null,
    accent: "from-indigo-500 to-purple-600"
  },
  {
    id: "sorsvexa",
    name: "Sorsvexa",
    subtitle: "AI Automation & SaaS Solutions",
    featured: true,
    category: ["Full Stack", "AI / ML"],
    shortDesc: "An AI-powered business automation platform focusing on conversational AI agents, WhatsApp business workflows, and CRM integrations.",
    problem: "Small-to-medium businesses suffer from delayed lead responses, missed appointments, and manual data entry between messaging apps and their CRM systems.",
    solution: "Sorsvexa delivers end-to-end automation pipelines that instantly respond to inbound customer inquiries via conversational AI, handle appointment booking workflows, and synchronize customer data directly into core business tools.",
    keyFeatures: [
      "AI chatbots trained on business domain knowledge bases",
      "WhatsApp Business API integration for automated customer journeys",
      "Automated appointment scheduling and calendar sync",
      "CRM pipeline synchronization with real-time lead qualification",
      "Custom webhook and third-party REST API integrations",
      "Multi-channel business workflow orchestration"
    ],
    techStack: ["React", "Node.js", "FastAPI", "WhatsApp API", "AI Chatbots", "REST APIs"],
    githubUrl: "https://github.com/m04-santhosh/sorsvexa-website",
    liveUrl: null,
    accent: "from-amber-500 to-orange-600"
  },
  {
    id: "real-time-object-detection",
    name: "Real-Time Object Detection",
    subtitle: "High-Performance Computer Vision Stream",
    featured: false,
    category: ["AI / ML"],
    shortDesc: "A computer-vision project focused on real-time multi-class object detection and tracking using live camera and video streams.",
    problem: "Real-time edge detection systems often face severe frame drops and high inference latency on non-GPU constrained consumer hardware.",
    solution: "Implements optimized frame pre-processing, bounding box filtering, and efficient inference pipelines with OpenCV to achieve smooth real-time object tracking with minimal latency.",
    keyFeatures: [
      "Real-time video stream ingestion and frame-by-frame inference",
      "Multi-class object detection with spatial bounding coordinates",
      "Confidence thresholding and Non-Maximum Suppression (NMS)",
      "FPS counter and hardware utilization monitoring",
      "Support for both live webcam feed and pre-recorded video input"
    ],
    techStack: ["Python", "OpenCV", "Computer Vision", "NumPy"],
    githubUrl: "https://github.com/m04-santhosh/Real-Time-Object-Detection",
    liveUrl: null,
    accent: "from-teal-500 to-emerald-600"
  },
  {
    id: "painting-contractor-landing",
    name: "Painting Contractor Landing Page",
    subtitle: "Modern Responsive Business Web Interface",
    featured: false,
    category: ["Web", "Full Stack"],
    shortDesc: "A business-focused landing page demonstrating responsive UI development, accessible design, and conversion-optimized architecture.",
    problem: "Local service businesses frequently have outdated, slow, non-mobile friendly websites that fail to convert visitors into inquiries.",
    solution: "Engineered a fast, accessible, mobile-first commercial web presence with interactive quote estimators, portfolio showcase gallery, and instant contact workflows.",
    keyFeatures: [
      "100% responsive layout across mobile, tablet, and desktop viewports",
      "Interactive quote inquiry flow with client-side form validation",
      "High-contrast accessible color scheme and modern typography",
      "Fast page load time with zero bloated third-party dependencies",
      "Structured SEO markup for local search visibility"
    ],
    techStack: ["HTML5", "CSS3", "JavaScript", "Responsive UI"],
    githubUrl: "https://github.com/m04-santhosh/Painting-Contractar-Landing-Page",
    liveUrl: null,
    accent: "from-blue-500 to-indigo-600"
  }
];

export const experience = [
  {
    role: "Independent Developer",
    track: "AI • Full-Stack • SaaS",
    period: "2023 – Present",
    location: "Bengaluru, Karnataka, India",
    description: "Building production-grade AI-powered applications, full-stack platforms, and business automation solutions while developing practical experience across modern frontend frameworks, backend APIs, relational databases, machine learning pipelines, and cloud deployments.",
    bullets: [
      "Engineered NAVISCAPE, a road-safety navigation platform integrating geospatial Karnataka accident data with an XGBoost predictive risk model and FastAPI backend.",
      "Developed TrustGuard, an evidentiary forensic media analysis pipeline combining OpenCV visual analysis, SciPy audio frequency decomposition, and cross-modal reconciliation.",
      "Architected UDIP (Universal Data Intelligence Platform) to automate tabular schema inference, data normalization, and natural language analytics queries.",
      "Founded and actively developing Sorsvexa as an entrepreneurial initiative providing conversational AI, WhatsApp automation workflows, and CRM integrations for businesses."
    ]
  }
];

export const genuineAchievements = [
  {
    title: "NAVISCAPE Major Project",
    desc: "Architected an AI-powered road safety navigation system integrating Karnataka state accident telemetry with XGBoost risk models."
  },
  {
    title: "TrustGuard Forensic AI",
    desc: "Engineered an audit-ready multi-modal media analysis pipeline identifying visual and acoustic manipulation patterns."
  },
  {
    title: "UDIP Data Platform",
    desc: "Built an intelligent end-to-end data processing engine enabling automated schema discovery and natural language data queries."
  },
  {
    title: "Sorsvexa Initiative",
    desc: "Developing autonomous business workflow solutions, conversational AI bots, and custom API automations."
  },
  {
    title: "Full-Stack & Applied AI Portfolio",
    desc: "Shipped multiple end-to-end repositories spanning Python, FastAPI, React, Node.js, and machine learning libraries."
  }
];
