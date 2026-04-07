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
      "A modern pizza-ordering web app with cart flow, order creation and tracking, geolocation-based address autofill, and responsive UX.",
    href: "https://fast-pizza-sigma.vercel.app/",
    gitLink: "https://github.com/Shahoriarratul/Fast-Pizza",
    image: "/assets/projects/Fast_pizza.png",
    bgImage: "/assets/backgrounds/curtains.jpg",
    frameworks: [
      { id: 1, name: "Next.js 15" },
      { id: 2, name: "React 18" },
      { id: 3, name: "TypeScript" },
      { id: 4, name: "Redux Toolkit" },
      { id: 5, name: "Tailwind CSS" },
    ],
  },
  {
    id: 3,
    name: "Popcorn - Movie rating app",
    description:
      "A modern movie search and rating app with a cinematic UI, detailed movie views, and watched-list tracking with local storage.",
    href: "https://use-pop-corn-ebon.vercel.app/",
    gitLink: "https://github.com/Shahoriarratul/usePopCorn",
    image: "/assets/projects/PopCorn.png",
    bgImage: "/assets/backgrounds/curtains.jpg",
    frameworks: [
      { id: 1, name: "Next.js" },
      { id: 2, name: "React" },
      { id: 3, name: "Tailwind CSS" },
      { id: 4, name: "TMDB API" },
    ],
  },
];
export const socials = [
  { name: "GitHub", href: "https://github.com/Shahoriarratul" },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/shahoriar-ratul/" },
  { name: "Email", href: "mailto:shahoriar.ratul@gmail.com" },
];
