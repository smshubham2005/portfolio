export const portfolioData = {
  personal: {
    name: "Shubham M",
    title: "Computer Science Engineering Student",
    subTitle: "Building scalable systems, AI-powered applications, REST APIs, and full-stack products with Java, Python, React, and FastAPI.",
    email: "mathshubham7@gmail.com",
    phone: "+91 8095175201",
    github: "https://github.com/smshubham2005",
    linkedin: "https://www.linkedin.com/in/shubham-math-12b1bb383/",
    leetcode: "https://leetcode.com/u/smshubham2005/",
    hackerrank: "#",
    codechef: "#",
    resumeUrl: "./resume.pdf",
    location: "Bangalore, India",
  },
  stats: [
    { label: "CGPA", value: "9.06/10" },
    { label: "LeetCode Problems", value: "250+" },
    { label: "Featured Projects", value: "3" },
    { label: "Certifications", value: "1" }
  ],
  about: {
    description: "I am a Computer Science Engineering student with a strong foundation in Java, DSA, backend development, REST APIs, databases, and IoT systems. I enjoy building practical AI and full-stack products with an emphasis on scalable systems, problem-solving, and clean engineering.",
    points: [
      "Strong foundation in Java, Data Structures & Algorithms, OOP, DBMS, OS, Computer Networks, and TCP/IP.",
      "Hands-on experience with React, Node.js, FastAPI, LangChain, Android, and Linux-based edge computing.",
      "Built AI applications using Google Gemini API, ChromaDB, Scikit-learn, XGBoost, Pandas, and NumPy.",
      "Comfortable with Git, GitHub, OpenCV, Docker, Raspberry Pi, SSH, IoT, and embedded systems."
    ]
  },
  education: [
    { institution: "Bangalore Institute of Technology (VTU)", program: "B.E. Computer Science and Engineering", detail: "CGPA: 9.06/10", location: "Bangalore, India", duration: "Expected 2027" },
    { institution: "Jnanasudha PU College", program: "Pre-University Education (Science)", detail: "95%", location: "Karkal, Karnataka", duration: "2023" }
  ],
  activities: [
    { title: "IMPETUS 26.0", detail: "Participated in Prompt & Pursuit, a national-level technical student extravaganza organized by IEEE UVCE.", date: "2026" }
  ],
  skills: [
    {
      category: "Languages",
      items: [
        { name: "Java", level: "Advanced", icon: "java" },
        { name: "Python", level: "Advanced", icon: "python" },
        { name: "C", level: "Intermediate", icon: "cpp" },
        { name: "JavaScript", level: "Advanced", icon: "js" },
        { name: "HTML & CSS", level: "Advanced", icon: "htmlcss" }
      ]
    },
    {
      category: "Frameworks & AI",
      items: [
        { name: "React", level: "Advanced", icon: "react" },
        { name: "Node.js", level: "Advanced", icon: "node" },
        { name: "FastAPI", level: "Intermediate", icon: "fastapi" },
        { name: "LangChain", level: "Intermediate", icon: "langchain" },
        { name: "Android", level: "Intermediate", icon: "android" }
      ]
    },
    {
      category: "Databases & Core",
      items: [
        { name: "MySQL", level: "Intermediate", icon: "sql" },
        { name: "Oracle SQL", level: "Intermediate", icon: "sql" },
        { name: "MongoDB", level: "Intermediate", icon: "mongodb" },
        { name: "ChromaDB", level: "Intermediate", icon: "database" },
        { name: "REST APIs", level: "Intermediate", icon: "api" }
      ]
    },
    {
      category: "Embedded, ML & Tools",
      items: [
        { name: "Raspberry Pi", level: "Intermediate", icon: "raspberrypi" },
        { name: "OpenCV", level: "Intermediate", icon: "opencv" },
        { name: "Docker", level: "Intermediate", icon: "docker" },
        { name: "Scikit-learn", level: "Intermediate", icon: "ml" },
        { name: "Linux & Git", level: "Intermediate", icon: "linux" }
      ]
    }
  ],
  experience: [
    {
      role: "Android & Raspberry Pi Development Intern",
      company: "InnovationHub",
      location: "Bangalore, India",
      duration: "Sep 2025 - Nov 2025",
      points: [
        "Configured Raspberry Pi for IoT-based edge computing on Linux.",
        "Enabled secure remote access using SSH and VNC for distributed monitoring.",
        "Integrated Android apps with sensors using TCP/IP socket communication.",
        "Built an OpenCV-based image processing pipeline on embedded hardware with automated real-time monitoring and alerts."
      ],
      technologies: ["Android", "Raspberry Pi", "Linux", "SSH", "VNC", "OpenCV", "TCP/IP"]
    }
  ],
  projects: [
    {
      title: "Enterprise RAG Assistant",
      shortDesc: "An enterprise Retrieval-Augmented Generation assistant for intelligent question answering over uploaded PDF documents.",
      longDesc: "The Enterprise RAG Assistant combines a FastAPI backend, LangChain, Google Gemini API, and ChromaDB to retrieve relevant document context and generate grounded answers. It includes document ingestion, intelligent chunking, vector embeddings, similarity search, source citations, and a responsive React interface, all containerized with Docker.",
      technologies: ["FastAPI", "React", "LangChain", "ChromaDB", "Google Gemini API", "Docker"],
      features: [
        "Designed an enterprise RAG assistant for question answering over uploaded PDF documents.",
        "Built a scalable FastAPI backend integrating LangChain, Google Gemini, and ChromaDB.",
        "Implemented PDF parsing, intelligent chunking, vector embeddings, and similarity search.",
        "Developed a responsive React frontend with uploads, conversational chat, and source-cited responses."
      ],
      github: "https://github.com/smshubham2005/Enterprise-RAG",
      live: "#",
      image: "rag"
    },
    {
      title: "AI-Driven Post-Harvest Loss Prediction with BaaS",
      shortDesc: "An AI-powered prediction system that estimates crop spoilage risk and recommends optimal storage strategies.",
      longDesc: "This prediction system uses integrated agricultural datasets, data preprocessing, feature engineering, and machine learning models to estimate crop spoilage risk. A FastAPI-based Backend-as-a-Service exposes REST APIs for prediction, warehouse recommendation, and shelf-life estimation.",
      technologies: ["Python", "FastAPI", "Scikit-learn", "XGBoost", "Pandas", "NumPy"],
      features: [
        "Developed an AI-powered system to estimate crop spoilage risk and recommend storage strategies.",
        "Performed data preprocessing, feature engineering, and model training using Random Forest, XGBoost, and KNN.",
        "Built FastAPI REST APIs for prediction, warehouse recommendation, and shelf-life estimation."
      ],
      github: "https://github.com/smshubham2005/agri-loss-ai-logistic",
      live: "#",
      image: "prediction"
    },
    {
      title: "SmartShelf AI - Intelligent Inventory Monitoring System",
      shortDesc: "An AI-enabled inventory monitoring system using OpenCV for real-time product detection and stock monitoring.",
      longDesc: "SmartShelf AI combines OpenCV-based product detection with a React, Node.js, and MongoDB full-stack application. It manages inventory, expiry tracking, and product records through RESTful APIs and responsive dashboards that visualize inventory status.",
      technologies: ["Python", "OpenCV", "React", "Node.js", "MongoDB"],
      features: [
        "Developed an AI-enabled inventory monitoring system using OpenCV for real-time product detection.",
        "Built a full-stack application to manage inventory, expiry tracking, and product records.",
        "Implemented RESTful APIs and responsive dashboards to visualize inventory status and improve efficiency."
      ],
      github: "https://github.com/smshubham2005/miniproject",
      live: "#",
      image: "shelves"
    }
  ],
  achievements: [
    {
      title: "Elite Certification in DSA Using Java",
      organization: "NPTEL, IIT Kharagpur",
      date: "2025",
      description: "Earned an Elite certification in Data Structures and Algorithms Using Java."
    },
    {
      title: "LeetCode Practice Milestone",
      organization: "LeetCode",
      date: "250+ problems",
      description: "Solved 250+ problems in Data Structures and Algorithms."
    }
  ]
};
