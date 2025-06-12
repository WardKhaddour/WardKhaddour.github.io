import ContactForm from './ContactForm'
import ContactInfo from './ContactInfo'
import { Motion } from './Motion'

type Props = {
  className?: string
}
export default function Contact({ className = '' }: Props) {
  return (
    <section
      id='contact'
      className={`py-20 bg-gray-50 dark:bg-gray-900 ${className}`}
    >
      <div className='container mx-auto'>
        <Motion
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className='text-center mb-16'
        >
          <h2 className='text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white'>
            Get In Touch
          </h2>
          <p className='text-gray-600 dark:text-gray-300 max-w-2xl mx-auto'>
            Have a project in mind or want to discuss potential opportunities?
            Reach out through the form or connect with me directly.
          </p>
        </Motion>

        <div className='flex flex-col lg:flex-row gap-8 max-w-6xl mx-auto'>
          <Motion
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className='lg:w-1/3 bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8'
          >
            <ContactInfo />
          </Motion>

          <Motion
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className='lg:w-2/3 bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8'
          >
            <ContactForm />
          </Motion>
        </div>
      </div>
    </section>
  )
}
