import {
  SiApifox,
  SiCplusplus,
  SiDocker,
  SiExpress,
  SiGit,
  SiGraphql,
  SiMongodb,
  SiNestjs,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiReact,
  SiReactquery,
  SiReactrouter,
  SiRedux,
  SiSocketdotio,
  SiTailwindcss,
  SiTypeorm,
  SiTypescript,
  SiWebrtc,
} from "react-icons/si";

export const skills = [
  // Programming Languages
  {
    name: "TypeScript",
    icon: <SiTypescript className="w-full h-full" />,
    category: "language",
  },
  {
    name: "C++",
    icon: <SiCplusplus className="w-full h-full" />,
    category: "language",
  },

  // Frontend
  {
    name: "React",
    icon: <SiReact className="w-full h-full" />,
    category: "frontend",
  },
  {
    name: "Next.js",
    icon: <SiNextdotjs className="w-full h-full" />,
    category: "frontend",
  },
  {
    name: "React Router",
    icon: <SiReactrouter className="w-full h-full" />,
    category: "frontend",
  },
  {
    name: "React Query",
    icon: <SiReactquery className="w-full h-full" />,
    category: "frontend",
  },
  {
    name: "Redux",
    icon: <SiRedux className="w-full h-full" />,
    category: "frontend",
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss className="w-full h-full" />,
    category: "frontend",
  },

  // Backend
  {
    name: "Node.js",
    icon: <SiNodedotjs className="w-full h-full" />,
    category: "backend",
  },
  {
    name: "Express.js",
    icon: <SiExpress className="w-full h-full" />,
    category: "backend",
  },
  {
    name: "Nest.js",
    icon: <SiNestjs className="w-full h-full" />,
    category: "backend",
  },

  // Databases
  {
    name: "MongoDB",
    icon: <SiMongodb className="w-full h-full" />,
    category: "database",
  },
  {
    name: "PostgreSQL",
    icon: <SiPostgresql className="w-full h-full" />,
    category: "database",
  },
  {
    name: "TypeORM",
    icon: <SiTypeorm className="w-full h-full" />,
    category: "database",
  },

  // APIs
  {
    name: "GraphQL",
    icon: <SiGraphql className="w-full h-full" />,
    category: "api",
  },
  {
    name: "RestAPI",
    icon: <SiApifox className="w-full h-full" />,
    category: "api",
  },

  // Real-time
  {
    name: "Socket.IO",
    icon: <SiSocketdotio className="w-full h-full" />,
    category: "realtime",
  },
  {
    name: "WebRTC",
    icon: <SiWebrtc className="w-full h-full" />,
    category: "realtime",
  },

  // DevOps
  {
    name: "Docker",
    icon: <SiDocker className="w-full h-full" />,
    category: "devops",
  },
  {
    name: "Git",
    icon: <SiGit className="w-full h-full" />,
    category: "devops",
  },
];
