import { projects } from '@/data/projects'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa'

export default async function ProjectDetails({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const project = projects.find(p => p.id === id)

  if (!project) return notFound()

  return (
    <main className='py-10 '>
      <div className='container px-10'>
        <div className='max-w-4xl'>
          <h1 className='text-4xl font-bold mb-6 text-gray-900 dark:text-white'>
            {project.title}
          </h1>

          <div className='relative aspect-video w-full mb-8 rounded-xl overflow-hidden'>
            <Image
              src={project.image}
              alt={project.title}
              fill
              className='object-contain'
            />
          </div>

          <div className='flex flex-wrap gap-4 mb-8'>
            {project.tags.map(tag => (
              <span
                key={tag}
                className='px-4 py-2 bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-500 rounded-full'
              >
                {tag}
              </span>
            ))}
          </div>

          <div className='prose dark:prose-invert max-w-none mb-8'>
            <p className='text-lg'>{project.description}</p>
            {project.details && (
              <div className='mt-6 space-y-4'>
                {project.details.map((detail, i) => (
                  <p key={i}>{detail}</p>
                ))}
              </div>
            )}
          </div>

          <div className='flex gap-4'>
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                className='flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors'
                target='_blank'
                rel='noopener noreferrer'
              >
                <FaGithub /> View Code
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                className='flex items-center gap-2 px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors'
                target='_blank'
                rel='noopener noreferrer'
              >
                <FaExternalLinkAlt /> Live Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </main>
  )
}
