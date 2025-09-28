import { layoutPadding } from '@/constants/class-names'
import { cn } from '@/utils/cn'
import {
  AboutMe,
  BlogSection,
  CertificationsSection,
  Contact,
  ExperienceEducation,
  Hero,
  OpenSource,
  Projects,
  Skills,
} from '@/views'

export default async function HomePage() {
  return (
    <main>
      <Hero className={layoutPadding} />
      <AboutMe
        className={cn(
          layoutPadding,
          'bg-background-secondary dark:bg-dark-background-secondary',
        )}
      />
      <Projects className={layoutPadding} />
      <Skills
        className={cn(
          layoutPadding,
          'bg-background-secondary dark:bg-dark-background-secondary',
        )}
      />
      <ExperienceEducation className={layoutPadding} />
      <OpenSource
        className={cn(
          layoutPadding,
          'bg-background-secondary dark:bg-dark-background-secondary',
        )}
      />
      <CertificationsSection className={layoutPadding} />
      <BlogSection
        className={cn(
          layoutPadding,
          'bg-background-secondary dark:bg-dark-background-secondary',
        )}
      />
      <Contact className={layoutPadding} />
    </main>
  )
}
