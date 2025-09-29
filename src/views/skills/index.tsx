'use client'

import { Motion } from '@/components/motion'
import { SectionHeader } from '@/components/section-header'
import { SectionDescription } from '@/components/setion-description'
import { skills } from '@/data/skills'
import { cn } from '@/utils/cn'
import { useTranslations } from 'next-intl'

type Props = {
  className?: string
}

export function Skills({ className = '' }: Props) {
  const t = useTranslations('skills')
  return (
    <section id='skills' className={cn('py-20', className)}>
      <div className='container mx-auto'>
        <Motion
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className='mb-16 text-center'
        >
          <SectionHeader>{t('header')}</SectionHeader>

          <SectionDescription>{t('description')} </SectionDescription>
        </Motion>

        <div className='grid grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-4'>
          {skills.map((skill, index) => (
            <Motion
              key={skill.id}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className='flex flex-col items-center'
            >
              <div className='text-primary dark:text-dark-primary mb-4 h-16 w-16'>
                {skill.icon}
              </div>
              <h3 className='text-text dark:text-dark-text mb-1 text-lg font-medium'>
                {t(`items.${skill.id}`)}
              </h3>
            </Motion>
          ))}
        </div>
      </div>
    </section>
  )
}
