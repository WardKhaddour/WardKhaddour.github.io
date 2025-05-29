export const projects = [
  {
    id: "flatlane",
    title: "Flatlane",
    shortDescription:
      "Comprehensive ride-hailing platform with real-time tracking",
    description:
      "Built a customer and admin-facing ride-hailing web app with real-time chat, trip tracking, Stripe payments, and user management dashboard.",
    details: [
      "Real-time updates and chat between users and drivers",
      "Stripe integration for secure payments",
      "Admin dashboard for monitoring rides and managing users",
      "Used Observer and Adapter patterns for modularity",
    ],
    tags: ["Taxis", "PayPal", "Stripe"],
    image: "/project-flatlane.svg",
    liveUrl: "https://flatlane.com",
  },
  {
    id: "syrianlancer",
    title: "Syrianlancer",
    shortDescription:
      "Freelancing platform for service seekers and freelancers",
    description:
      "Platform with detailed service listings, in-app messaging, reviews, and a secure payment system with admin tools.",
    details: [
      "Freelancer profiles with portfolios and reviews",
      "Secure payments and dispute resolution",
      "Admin tools for content and user management",
    ],
    tags: ["React", "Freelancing"],
    image: "/project-syrianlancer.png",
    liveUrl: "https://syrianlancer.sy",
  },

  {
    id: "edulive",
    title: "Edulive",
    shortDescription: "Real-time online classroom and course platform",
    description:
      "Graduation project featuring live classrooms with WebRTC, adaptive streaming for recorded content, and full backend with GraphQL and PostgreSQL.",
    details: [
      "Live video classrooms using WebRTC + Socket.io",
      "GraphQL API and PostgreSQL backend",
      "Earned 96% as a graduation project",
    ],
    tags: ["React", "Nest.js", "WebRTC", "GraphQL", "PostgreSQL"],
    image: "/project-edulive.svg",
  },
  {
    id: "observer-kit",
    title: "React Intersection Observer Kit",
    shortDescription: "Custom React hooks for viewport tracking",
    description:
      "Published NPM package with optimized hooks to track elements entering/exiting the viewport using Intersection Observer API.",
    details: [
      "Real-time tracking of visible elements",
      "Custom callbacks and observer configurations",
      "Written in TypeScript with zero dependencies",
    ],
    tags: ["React", "TypeScript", "NPM"],
    githubUrl:
      "https://github.com/WardKhaddour/react-intersection-observer-kit",
    liveUrl: "https://npmjs.com/package/react-intersection-observer-kit",
    image: "/project-observer-kit.svg",
  },
];
