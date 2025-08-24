export const projects = [
  {
    id: 'flatlane',
    title: 'Flatlane',
    shortDescription:
      'Comprehensive ride-hailing platform with real-time tracking',
    description:
      'Built a customer and admin-facing ride-hailing web app with real-time chat, trip tracking, Stripe payments, and user management dashboard.',
    details: [
      'Built a customer-facing web app with real-time trip tracking, ride booking, secure in-app chat, and a driver rating system.',
      'Integrated Stripe and PayPal for secure payments, ensuring smooth and safe transactions.',
      'Applied design patterns (Adapter, Observer) for modular, maintainable architecture',
      'Developed an admin dashboard to monitor trips, manage drivers/customers, and track engagement metrics.',
    ],
    tags: ['Taxis', 'PayPal', 'Stripe'],
    image: '/project-flatlane.svg',
    liveUrl: 'https://flatlane.com',
  },
  {
    id: 'syrianlancer',
    title: 'Syrianlancer',
    shortDescription:
      'Freelancing platform for service seekers and freelancers',
    description:
      'Platform with detailed service listings, in-app messaging, reviews, and a secure payment system with admin tools.',
    details: [
      'Created a platform for service seekers and freelancers with detailed service listings, search/filter options, and secure transactions.',
      'Built a rating system to enhance trust and credibility.',
      'Integrated secure payment gateway and delivery system to protect both parties.',
      'Added real-time in-app chat for seamless communication.',
      'Developed an admin dashboard for service/user management, dispute resolution, and analytics tracking.',
    ],
    tags: ['React', 'Freelancing'],
    image: '/project-syrianlancer.png',
    liveUrl: 'https://syrianlancer.sy',
  },

  {
    id: 'edulive',
    title: 'Edulive',
    shortDescription: 'Real-time online classroom and course platform',
    description:
      'Graduation project featuring live classrooms with WebRTC, adaptive streaming for recorded content, and full backend with GraphQL and PostgreSQL.',
    details: [
      'Designed a platform with live classrooms (via WebRTC), recorded streaming (HLS/DASH), and adaptive playback for varied networks/devices.',
      'Implemented Nest.js, GraphQL APIs, Socket.io, PostgreSQL, and React for a full-stack solution.',
      'Built real-time signaling for video sessions and efficient querying for course data.',
      'Earned 96% as a graduation project',
    ],
    tags: ['React', 'Nest.js', 'WebRTC', 'GraphQL', 'PostgreSQL'],
    image: '/project-edulive.svg',
  },
  {
    id: 'observer-kit',
    title: 'React Intersection Observer Kit',
    shortDescription: 'Custom React hooks for viewport tracking',
    description:
      'Published NPM package with optimized hooks to track elements entering/exiting the viewport using Intersection Observer API.',
    details: [
      'Developed a lightweight, TypeScript-based library for using the Intersection Observer API in React.',
      'Provided hooks for viewport entry/exit detection, real-time tracking, and custom visibility conditions.',
      'Optimized performance to minimize re-renders.',
    ],
    tags: ['React', 'TypeScript', 'NPM'],
    githubUrl:
      'https://github.com/WardKhaddour/react-intersection-observer-kit',
    liveUrl: 'https://npmjs.com/package/react-intersection-observer-kit',
    image: '/project-observer-kit.svg',
  },
]
