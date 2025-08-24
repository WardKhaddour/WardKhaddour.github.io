import { education } from '@/data/education'
import { experience } from '@/data/experience'
import { cn } from '@/utils/cn'
import { FaBriefcase, FaGraduationCap } from 'react-icons/fa'

type Props = {
  className?: string
}

export function ExperienceEducation({ className = '' }: Props) {
  return (
    <section id='experience' className={cn('py-20', '', className)}>
      <div className='container mx-auto'>
        <div className='grid grid-cols-1 gap-12 lg:grid-cols-2'>
          {/* Work Experience */}
          <div>
            <div className='mb-8 flex items-center gap-4'>
              <div
                className={cn(
                  'rounded-full p-3',
                  'bg-primary/10 dark:bg-dark-primary/10',
                )}
              >
                <FaBriefcase
                  className={cn(
                    'text-xl',
                    'text-primary dark:text-dark-primary',
                  )}
                />
              </div>
              <h2
                className={cn(
                  'text-xl font-bold sm:text-3xl',
                  'text-text dark:text-dark-text',
                )}
              >
                Work Experience
              </h2>
            </div>

            <div className='space-y-8'>
              {experience.map(exp => (
                <div key={exp.id} className='relative pl-10'>
                  <div
                    className={cn(
                      'absolute top-1 left-0 h-4 w-4 rounded-full',
                      'bg-primary dark:bg-dark-primary',
                    )}
                  ></div>
                  <div
                    className={cn(
                      'absolute top-5 bottom-0 left-2 w-0.5',
                      'bg-border dark:bg-dark-border',
                    )}
                  ></div>
                  <h3
                    className={cn(
                      'text-xl font-bold',
                      'text-text dark:text-dark-text',
                    )}
                  >
                    {exp.role}
                  </h3>
                  <div
                    className={cn(
                      'xs:flex-row xs:items-center mb-2 flex flex-col gap-2',
                      'text-text-secondary dark:text-dark-text-muted',
                    )}
                  >
                    <span>{exp.company}</span>
                    <span className='xs:inline-block hidden'>•</span>
                    <span>{exp.period}</span>
                  </div>
                  <p
                    className={cn(
                      'text-text-secondary dark:text-dark-text-muted',
                    )}
                  >
                    {exp.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <div className='mb-8 flex items-center gap-4'>
              <div
                className={cn(
                  'rounded-full p-3',
                  'bg-primary/10 dark:bg-dark-primary/10',
                )}
              >
                <FaGraduationCap
                  className={cn(
                    'text-xl',
                    'text-primary dark:text-dark-primary',
                  )}
                />
              </div>
              <h2
                className={cn(
                  'text-xl font-bold sm:text-3xl',
                  'text-text dark:text-dark-text',
                )}
              >
                Education
              </h2>
            </div>

            <div className='space-y-8'>
              {education.map(edu => (
                <div key={edu.id} className='relative pl-10'>
                  <div
                    className={cn(
                      'absolute top-1 left-0 h-4 w-4 rounded-full',
                      'bg-primary dark:bg-dark-primary',
                    )}
                  ></div>
                  <div
                    className={cn(
                      'absolute top-5 bottom-0 left-2 w-0.5',
                      'bg-border dark:bg-dark-border',
                    )}
                  ></div>
                  <h3
                    className={cn(
                      'text-xl font-bold',
                      'text-text dark:text-dark-text',
                    )}
                  >
                    {edu.degree}
                  </h3>
                  <div
                    className={cn(
                      'xs:flex-row xs:items-center mb-2 flex flex-col gap-2',
                      'text-text-secondary dark:text-dark-text-muted',
                    )}
                  >
                    <span>{edu.institution}</span>
                    <span className='xs:inline-block hidden'>•</span>
                    <span>{edu.period}</span>
                  </div>
                  <p
                    className={cn(
                      'text-text-secondary dark:text-dark-text-muted',
                    )}
                  >
                    {edu.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
