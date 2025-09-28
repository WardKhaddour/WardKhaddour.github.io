import emailjs from '@emailjs/browser'
emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!)

export async function sendEmail(data: {
  message: string
  name: string
  email: string
  subject: string
}) {
  try {
    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!
    if (!serviceId || !templateId) {
      throw new Error(
        'EmailJS environment variables are not properly configured',
      )
    }
    const res = await emailjs.send(serviceId, templateId, {
      name: data.name,
      email: data.email,
      subject: data.subject,
      content: data.message,
      date: new Date().toLocaleString(),
    })

    console.log(res)

    if (res.status !== 200) {
      throw new Error(`Email sending failed with status: ${res.status}`)
    }

    return { success: true }
  } catch (_) {
    return { success: false, error: 'Failed to send message' }
  }
}
