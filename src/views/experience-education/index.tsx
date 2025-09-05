import { cn } from '@/utils/cn'
import { useTranslations } from 'next-intl'
import { FaBriefcase, FaGraduationCap } from 'react-icons/fa'

type Props = {
  className?: string
}

export function ExperienceEducation({ className = '' }: Props) {
  const t = useTranslations('experienceEducation')

  const experience = t.raw('experienceList') as {
    role: string
    company: string
    period: string
    description: string
  }[]

  const education = t.raw('educationList') as {
    degree: string
    institution: string
    period: string
    description: string
  }[]

  return (
    <section id='experience' className={cn('py-20', className)}>
      <div className='container mx-auto'>
        <div className='grid grid-cols-1 gap-12 lg:grid-cols-2'>
          {/* Work Experience */}
          <div>
            <div className='mb-8 flex items-center gap-4'>
              <div className='bg-primary/10 dark:bg-dark-primary/10 rounded-full p-3'>
                <FaBriefcase className='text-primary dark:text-dark-primary text-xl' />
              </div>
              <h2 className='text-text dark:text-dark-text text-xl font-bold sm:text-3xl'>
                {t('work')}
              </h2>
            </div>

            <div className='space-y-8'>
              {experience.map((exp, i) => (
                <div key={i} className='relative ps-10'>
                  <div className='bg-primary dark:bg-dark-primary absolute start-0 top-1 h-4 w-4 rounded-full'></div>
                  <div className='bg-border dark:bg-dark-border absolute start-2 top-5 bottom-0 w-0.5'></div>
                  <h3 className='text-text dark:text-dark-text text-xl font-bold'>
                    {exp.role}
                  </h3>
                  <div className='xs:flex-row xs:items-center text-text-secondary dark:text-dark-text-muted mb-2 flex flex-col gap-2'>
                    <span>{exp.company}</span>
                    <span className='xs:inline-block hidden'>•</span>
                    <span>{exp.period}</span>
                  </div>
                  <p className='text-text-secondary dark:text-dark-text-muted'>
                    {exp.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <div className='mb-8 flex items-center gap-4'>
              <div className='bg-primary/10 dark:bg-dark-primary/10 rounded-full p-3'>
                <FaGraduationCap className='text-primary dark:text-dark-primary text-xl' />
              </div>
              <h2 className='text-text dark:text-dark-text text-xl font-bold sm:text-3xl'>
                {t('education')}
              </h2>
            </div>

            <div className='space-y-8'>
              {education.map((edu, i) => (
                <div key={i} className='relative ps-10'>
                  <div className='bg-primary dark:bg-dark-primary absolute start-0 top-1 h-4 w-4 rounded-full'></div>
                  <div className='bg-border dark:bg-dark-border absolute start-2 top-5 bottom-0 w-0.5'></div>
                  <h3 className='text-text dark:text-dark-text text-xl font-bold'>
                    {edu.degree}
                  </h3>
                  <div className='xs:flex-row xs:items-center text-text-secondary dark:text-dark-text-muted mb-2 flex flex-col gap-2'>
                    <span>{edu.institution}</span>
                    <span className='xs:inline-block hidden'>•</span>
                    <span>{edu.period}</span>
                  </div>
                  <p className='text-text-secondary dark:text-dark-text-muted'>
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
