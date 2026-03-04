// index.js
export const servicesData = [
  {
    title: "Frontend Development",
    description:
      "Building modern web interfaces with React and Next.js, with focus on responsiveness, SEO, and performance optimization.",
    items: [
      {
        title: "React & Next.js",
        description: "(SSR, SSG, ISR, reusable component architecture)",
      },
      {
        title: "TypeScript & JavaScript",
        description: "(Clean code, maintainability, ES6+)",
      },
      {
        title: "UI/UX Implementation",
        description: "(Tailwind CSS, responsive design, animation workflows)",
      },
    ],
  },
  {
    title: "Backend Integration",
    description:
      "Integrating robust backend features for production-ready apps using API routes, authentication, and validation.",
    items: [
      {
        title: "API Development",
        description: "(Next.js API Routes, Express.js, REST APIs)",
      },
      {
        title: "Authentication",
        description: "(Next-Auth, Clerk, role-based access)",
      },
      {
        title: "Data Validation",
        description: "(Zod schemas and secure request handling)",
      },
    ],
  },
  {
    title: "Database & State",
    description:
      "Working with SQL and NoSQL data layers plus scalable client state and data-fetching patterns.",
    items: [
      {
        title: "Databases",
        description: "(MongoDB, PostgreSQL, MySQL, Prisma ORM)",
      },
      {
        title: "State Management",
        description: "(Redux, Context API, SWR)",
      },
      {
        title: "Performance",
        description: "(Web vitals, optimized rendering and data flow)",
      },
    ],
  },
  {
    title: "Tools & Delivery",
    description:
      "Shipping complete products with strong tooling, testing practices, and modern deployment pipelines.",
    items: [
      {
        title: "Developer Tools",
        description: "(Git/GitHub, Figma collaboration, Vercel deployment)",
      },
      {
        title: "Testing",
        description: "(Jest, React Testing Library)",
      },
      {
        title: "Continuous Learning",
        description: "(MSc in High Integrity Systems, latest web technologies)",
      },
    ],
  },
];
export const projects = [
  {
    id: 1,
    name: "UpScale - Online Learning Platform",
    description:
      "Full-stack learning platform with role-based workflows, modern UI, and production-ready architecture.",
    href: "https://online-learning-platform-5lqm.vercel.app",
    gitLink: "https://github.com/Shahoriarratul/online_learning_platform",
    image: "/assets/projects/UpScale.png",
    bgImage: "/assets/backgrounds/blanket.jpg",
    frameworks: [
      { id: 1, name: "Next.js" },
      { id: 2, name: "React" },
      { id: 3, name: "Tailwind CSS" },
      { id: 4, name: "Prisma" },
      { id: 5, name: "MySQL" },
      { id: 6, name: "Clerk" },
    ],
  },
  {
    id: 2,
    name: "Fast Pizza - Delivery App",
    description:
      "A fast and responsive pizza delivery interface built with vanilla React and CSS fundamentals.",
    href: "https://github.com/Shahoriarratul",
    image: "/assets/projects/plant-shop.jpg",
    bgImage: "/assets/backgrounds/curtains.jpg",
    frameworks: [
      { id: 1, name: "React" },
      { id: 2, name: "CSS" },
      { id: 3, name: "UI Components" },
      { id: 4, name: "Routing" },
    ],
  },
  {
    id: 3,
    name: "Next.js App Architecture",
    description:
      "Hands-on experience with pages router, API routes, and scalable component patterns for maintainable frontend systems.",
    href: "",
    image: "/assets/projects/apple-tech-store.jpg",
    bgImage: "/assets/backgrounds/map.jpg",
    frameworks: [
      { id: 1, name: "Next.js Pages Router" },
      { id: 2, name: "TypeScript" },
      { id: 3, name: "REST API Integration" },
      { id: 4, name: "SEO Best Practices" },
    ],
  },
  {
    id: 4,
    name: "Backend & API Integration",
    description:
      "Building backend-connected web applications with authentication, validation, and reliable data handling.",
    href: "",
    image: "/assets/projects/electronics-store.jpg",
    bgImage: "/assets/backgrounds/poster.jpg",
    frameworks: [
      { id: 1, name: "Node.js" },
      { id: 2, name: "Express.js" },
      { id: 3, name: "Next.js API Routes" },
      { id: 4, name: "Zod Validation" },
    ],
  },
  {
    id: 5,
    name: "Data & State Management",
    description:
      "Implementing efficient data patterns across SQL/NoSQL stores and frontend state for responsive user experiences.",
    href: "",
    image: "/assets/projects/home-decor-store.jpg",
    bgImage: "/assets/backgrounds/table.jpg",
    frameworks: [
      { id: 1, name: "MongoDB" },
      { id: 2, name: "PostgreSQL" },
      { id: 3, name: "Prisma" },
      { id: 4, name: "Redux" },
      { id: 5, name: "SWR" },
    ],
  },
  {
    id: 6,
    name: "Academic & Research Foundation",
    description:
      "MSc student in High Integrity Systems and recipient of National Science and Technology Fellowship for research in opportunistic network routing.",
    href: "",
    image: "/assets/projects/game-store.jpg",
    bgImage: "/assets/backgrounds/curtains.jpg",
    frameworks: [
      { id: 1, name: "High Integrity Systems" },
      { id: 2, name: "ICT" },
      { id: 3, name: "IELTS C1" },
      { id: 4, name: "Research Fellowship" },
    ],
  },
];
export const socials = [
  { name: "GitHub", href: "https://github.com/Shahoriarratul" },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/shahoriar-ratul/" },
  { name: "Email", href: "mailto:shahoriar.ratul@gmail.com" },
];
