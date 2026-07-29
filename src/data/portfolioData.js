export const personalDetails = {
  name: "Asmath Batcha S",
  title: "Java Full Stack Developer",
  status: "Open to Work / Entry-Level",
  location: "Chennai, Tamil Nadu, India",
  email: "asmathdev12@gmail.com",
  phone: "+91 7010673937",
  github: "https://github.com/Azzmath-12",
  linkedin: "https://www.linkedin.com/in/asmath-dev8212",
  resumeUrl: "/resume.pdf",
  avatar: "/avatar.png",
  avatarUrl: "/avatar.png",
  objective: "Motivated Java Full Stack Developer with hands-on experience in building responsive web applications using HTML, CSS, JavaScript, and React.js, along with a strong foundation in Core Java, Java Servlets, JDBC, and Spring Boot. Passionate about developing scalable, user-centric applications and integrating frontend interfaces with backend services. Seeking an entry-level opportunity in a growth-oriented organization to apply my skills, contribute to real-world projects, and grow as a full stack engineer.",
  about: {
    whoIAm: "Motivated Java Full Stack Developer based in Chennai, passionate about building scalable, user-centric web applications and integrating frontend interfaces with backend services.",
    education: "Bachelor of Science (B.Sc.) in Computer Science from The New College, Chennai (2022–2025) and Higher Secondary Certificate (HSC) from St. Gabriel's Higher Secondary School, Chennai (2020–2022).",
    technologies: "HTML5, CSS3, JavaScript, React.js, Core Java, JDBC, Java Servlets, Spring Boot, and MySQL.",
    careerGoal: "Seeking an entry-level opportunity in a growth-oriented organization to apply my skills, contribute to real-world projects, and grow as a Full Stack Engineer."
  },
  specializations: [
    {
      title: "Full Stack Web Development",
      description: "Developing modern, responsive frontend interfaces with React.js and connecting them seamlessly with Java backends."
    },
    {
      title: "RESTful API & Backend Engineering",
      description: "Designing RESTful web services, controller layers, and business logic using Core Java, Servlets, and Spring Boot."
    },
    {
      title: "Database Design & JDBC Integration",
      description: "Structuring MySQL database tables, writing optimized SQL queries, and implementing persistent data manipulation via JDBC."
    }
  ]
};

export const skillsData = [
  {
    category: "Frontend Development",
    description: "Core web technologies for building interactive client interfaces",
    skills: [
      { name: "HTML5", icon: "SiHtml5", color: "#E34F26" },
      { name: "CSS3", icon: "FaCss3Alt", color: "#1572B6" },
      { name: "JavaScript", icon: "SiJavascript", color: "#F7DF1E" },
      { name: "React.js", icon: "SiReact", color: "#61DAFB" }
    ]
  },
  {
    category: "Backend Development",
    description: "Enterprise Java frameworks & REST API architecture",
    skills: [
      { name: "Core Java", icon: "FaJava", color: "#007396" },
      { name: "JDBC", icon: "FaDatabase", color: "#6D28D9" },
      { name: "Java Servlets", icon: "FaServer", color: "#7C3AED" },
      { name: "Spring Boot", icon: "SiSpringboot", color: "#6DB33F" }
    ]
  },
  {
    category: "Database",
    description: "Relational database management & SQL operations",
    skills: [
      { name: "MySQL", icon: "SiMysql", color: "#4479A1" }
    ]
  },
  {
    category: "Tools & IDEs",
    description: "Development environments, API testing & version control",
    skills: [
      { name: "Spring Tool Suite (STS)", icon: "SiSpringboot", color: "#6DB33F" },
      { name: "IntelliJ IDEA", icon: "SiIntellijidea", color: "#000000" },
      { name: "VS Code", icon: "TbBrandVscode", color: "#007ACC" },
      { name: "Eclipse", icon: "SiEclipseide", color: "#2C2255" },
      { name: "Postman", icon: "SiPostman", color: "#FF6C37" },
      { name: "MySQL Workbench", icon: "SiMysql", color: "#4479A1" },
      { name: "Git", icon: "SiGit", color: "#F05032" },
      { name: "GitHub", icon: "SiGithub", color: "#1F2937" }
    ]
  }
];

export const projectsData = [
 {
    id: 1,
    title: "Task Manager Application",
    category: "Full Stack",
    badge: "Full Stack",
    imagePath: "/project-thumbnails/task.png",
    techStack: ["React.js", "Spring Boot", "MySQL", "REST API"],
    description: "A full-stack task management application enabling real-time task creation, assignment, status tracking, and priority scheduling backed by Spring Boot REST services and MySQL database persistence.",
    features: [
      "Full-stack CRUD operations for task scheduling & status tracking",
      "Search, filter, and priority level management",
      "Spring Boot RESTful API services connected with MySQL database",
      "Interactive React frontend interface with visual status indicators"
    ],
    highlights: [
      "Full-stack REST API communication with Spring Boot backend & MySQL database",
      "Interactive task creation, priority tracking, and status filtering UI",
      "Stateful management with real-time UI updates upon CRUD operations"
    ],
    github: "https://github.com/Azzmath-12/Task-Manager-Frontend",
    liveDemo: "https://taskmanagerfrontend-sigma.vercel.app/",
    hasLiveDemo: true
  },
  {
    id: 2,
    title: "JDBC CRUD Application",
    category: "Java",
    badge: "Console App",
    imagePath: "/project-thumbnails/jdbc.png",
    techStack: ["Core Java", "JDBC", "MySQL"],
    description: "Developed a Java-based console application using Core Java and JDBC to perform Create, Read, Update, and Delete (CRUD) operations on a MySQL database. Implemented efficient database connectivity, SQL queries, and exception handling to ensure reliable data manipulation.",
    features: [
      "Console-based Create, Read, Update, Delete (CRUD) operations",
      "JDBC Driver integration & MySQL database connection management",
      "Efficient SQL query execution & PreparedStatements for security",
      "Robust Java exception handling for reliable data manipulation"
    ],
    highlights: [
      "Core Java JDBC architecture implementing PreparedStatements for SQL injection prevention",
      "Modular DAO pattern for seamless database interaction with MySQL",
      "Console-based menu interface with complete CRUD error handling"
    ],
    github: "https://github.com/Azzmath-12/jdbc-crud-application",
    liveDemo: null,
    hasLiveDemo: false
  },
  {
    id: 3,
    title: "Student Management System",
    category: "React.js",
    badge: "React SPA",
    imagePath: "/project-thumbnails/stm.png",
    techStack: ["React.js", "JavaScript", "Vite", "React Router"],
    description: "Designed and developed a single-page Student Management System using React.js, JavaScript, and Vite to efficiently manage student records. Supports full CRUD operations through reusable and modular React components. Implemented client-side routing using React Router and applied responsive UI design principles.",
    features: [
      "Full CRUD operations for managing student enrollment & department records",
      "Modular & reusable React components for clean maintainability",
      "Client-side routing using React Router for smooth SPA navigation",
      "Responsive UI design principles delivered for seamless user experience"
    ],
    highlights: [
      "React Single Page Application architecture built with Vite and React Router",
      "State-driven dynamic student table with search and department filtering",
      "Modular component hierarchy for reusable modal dialogs and form controls"
    ],
    github: "https://github.com/Azzmath-12/Student-Table-Management",
    liveDemo: null,
    hasLiveDemo: false
  },
  {
    id: 4,
    title: "Hexagon Web - Branding & Agency Site",
    category: "Static Web",
    badge: "HTML & CSS",
    imagePath: "/project-thumbnails/hexogan.png",
    techStack: ["HTML5", "CSS3"],
    description: "A multi-section responsive digital agency and branding web template built with modern HTML5 and pure CSS3. Features a hero banner, portfolio grid with hover overlays, services showcase, customer testimonials, and interactive CSS team cards.",
    features: [
      "Modern agency hero banner with call-to-action quote buttons",
      "Responsive CSS Grid portfolio section with image hover overlays",
      "Interactive services section and customer review testimonial cards",
      "Pure HTML5 & CSS3 implementation with zero JavaScript dependency"
    ],
    highlights: [
      "CSS Flexbox & Grid for smooth multi-column layout alignment",
      "Custom CSS root variables for prime color schemes",
      "Media query breakpoints for tablet and mobile responsiveness"
    ],
    github: "https://github.com/Azzmath-12/Project-Hexagon",
    liveDemo: "https://azzmath-12.github.io/Project-Hexagon/",
    hasLiveDemo: true
  },
  {
    id: 5,
    title: "Mart - E-Commerce Web Store UI",
    category: "Static Web",
    badge: "HTML & CSS",
    imagePath: "/project-thumbnails/mart.png",
    techStack: ["HTML5", "CSS3"],
    description: "A structured e-commerce fashion storefront template constructed purely with HTML5 and CSS3. Incorporates collection banners, badge-counter tabs, hoverable product cards with quick action overlays, newsletter subscriptions, and full contact details.",
    features: [
      "Hero poster banner with call-to-action shopping button",
      "Product grid featuring CSS hover overlays & 'Add to Cart' buttons",
      "Featured category tabs with badge count indicators",
      "Pure HTML5 & CSS3 build with zero JS dependency"
    ],
    highlights: [
      "Custom linear gradients & styled product card overlays",
      "Structured catalog grid layout with price badge highlights",
      "Responsive e-commerce footer & newsletter subscription form"
    ],
    github: "https://github.com/Azzmath-12/Project-Mart",
    liveDemo: "https://azzmath-12.github.io/Project-Mart/",
    hasLiveDemo: true
  },
  {
    id: 6,
    title: "Zola - Wedding Registry & Landing Page",
    category: "Static Web",
    badge: "HTML & CSS",
    imagePath: "/project-thumbnails/zola.png",
    techStack: ["HTML5", "CSS3"],
    description: "A clean landing page layout inspired by wedding registry platforms. Built with HTML5 and CSS3, showcasing brand collections, customer review star ratings, feature grids, and call-to-action registration banners.",
    features: [
      "Hero promo banner and registry value proposition sections",
      "Partner brand collections grid with custom typography",
      "Customer star-rating testimonial cards with Brooklyn/Dallas review styling",
      "Pure HTML5 & CSS3 implementation with clean semantic tags"
    ],
    highlights: [
      "Custom Google Font imports (Playwrite AU QLD & Playfair/Nunito styling)",
      "Flexbox alignment for brand logos and crew info feature blocks",
      "Clean semantic HTML structure for fast static rendering"
    ],
    github: "https://github.com/Azzmath-12/Project-Zola",
    liveDemo: "https://azzmath-12.github.io/Project-Zola/",
    hasLiveDemo: true
  }
];

export const timelineData = [
  {
    type: "internship",
    title: "Java Full Stack Developer Intern",
    organization: "Keyan Technologies, Chennai",
    period: "Jan 2026 — Apr 2026",
    status: "Completed",
    highlights: [
      "Assisted in developing responsive web pages using HTML, CSS, JavaScript, and React.js.",
      "Gained hands-on exposure by supporting senior developers in client-based application development.",
      "Acquired strong understanding and practical knowledge of backend technologies including Java Servlets, Spring Framework, and Spring Boot.",
      "Integrated frontend components with backend services under guidance."
    ]
  },
  {
    type: "course",
    title: "Frontend Development Certification Course",
    organization: "Inetz Technologies, Chennai",
    period: "Jul 2025 — Dec 2025",
    status: "Completed",
    highlights: [
      "Learned HTML5, CSS3, JavaScript, and React.js.",
      "Built mini projects to strengthen full-stack development skills."
    ]
  },
  {
    type: "education",
    title: "Bachelor of Science (B.Sc.) in Computer Science",
    organization: "The New College, Chennai",
    period: "2022 — 2025",
    status: "Graduated",
    highlights: [
      "Undergraduate degree in Computer Science covering core programming, web development, data structures, and database management systems."
    ]
  },
  {
    type: "education",
    title: "Higher Secondary Certificate (HSC)",
    organization: "St. Gabriel's Higher Secondary School, Chennai",
    period: "2020 — 2022",
    status: "Completed",
    highlights: [
      "Completed Higher Secondary Education focusing on Computer Science, Mathematics, and Physical Sciences."
    ]
  }
];
