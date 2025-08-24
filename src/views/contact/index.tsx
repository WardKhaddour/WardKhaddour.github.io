import { Motion } from '@/components/motion'
import { SectionHeader } from '@/components/section-header'
import { SectionDescription } from '@/components/setion-description'
import { cn } from '@/utils/cn'
import ContactForm from './contact-form'
import { ContactInfo } from './contact-info'

type Props = {
  className?: string
}

export default function Contact({ className = '' }: Props) {
  return (
    <section id='contact' className={cn('py-20', className)}>
      <div className='container mx-auto'>
        <Motion
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className='mb-16 text-center'
        >
          <SectionHeader>Get In Touch</SectionHeader>
          <SectionDescription>
            Have a project in mind or want to discuss potential opportunities?
            Reach out through the form or connect with me directly.
          </SectionDescription>
        </Motion>

        <div className='mx-auto flex max-w-6xl flex-col gap-8 lg:flex-row'>
          <Motion
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={cn(
              'rounded-xl p-8 shadow-lg lg:w-1/3',
              'bg-surface dark:bg-dark-surface',
            )}
          >
            <ContactInfo />
          </Motion>

          <Motion
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={cn(
              'rounded-xl p-8 shadow-lg lg:w-2/3',
              'bg-surface dark:bg-dark-surface',
            )}
          >
            <ContactForm />
          </Motion>
        </div>
      </div>
    </section>
  )
}
