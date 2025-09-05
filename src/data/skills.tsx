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
} from 'react-icons/si'

export const skills = [
  {
    id: 'typescript',
    icon: <SiTypescript className='h-full w-full' />,
    category: 'language',
  },
  {
    id: 'cplusplus',
    icon: <SiCplusplus className='h-full w-full' />,
    category: 'language',
  },

  {
    id: 'react',
    icon: <SiReact className='h-full w-full' />,
    category: 'frontend',
  },
  {
    id: 'nextjs',
    icon: <SiNextdotjs className='h-full w-full' />,
    category: 'frontend',
  },
  {
    id: 'reactRouter',
    icon: <SiReactrouter className='h-full w-full' />,
    category: 'frontend',
  },
  {
    id: 'reactQuery',
    icon: <SiReactquery className='h-full w-full' />,
    category: 'frontend',
  },
  {
    id: 'redux',
    icon: <SiRedux className='h-full w-full' />,
    category: 'frontend',
  },
  {
    id: 'tailwind',
    icon: <SiTailwindcss className='h-full w-full' />,
    category: 'frontend',
  },

  {
    id: 'node',
    icon: <SiNodedotjs className='h-full w-full' />,
    category: 'backend',
  },
  {
    id: 'express',
    icon: <SiExpress className='h-full w-full' />,
    category: 'backend',
  },
  {
    id: 'nestjs',
    icon: <SiNestjs className='h-full w-full' />,
    category: 'backend',
  },

  {
    id: 'mongodb',
    icon: <SiMongodb className='h-full w-full' />,
    category: 'database',
  },
  {
    id: 'postgresql',
    icon: <SiPostgresql className='h-full w-full' />,
    category: 'database',
  },
  {
    id: 'typeorm',
    icon: <SiTypeorm className='h-full w-full' />,
    category: 'database',
  },

  {
    id: 'graphql',
    icon: <SiGraphql className='h-full w-full' />,
    category: 'api',
  },
  {
    id: 'restapi',
    icon: <SiApifox className='h-full w-full' />,
    category: 'api',
  },

  {
    id: 'socketio',
    icon: <SiSocketdotio className='h-full w-full' />,
    category: 'realtime',
  },
  {
    id: 'webrtc',
    icon: <SiWebrtc className='h-full w-full' />,
    category: 'realtime',
  },

  {
    id: 'docker',
    icon: <SiDocker className='h-full w-full' />,
    category: 'devops',
  },
  { id: 'git', icon: <SiGit className='h-full w-full' />, category: 'devops' },
] as const
