'use server'

export async function sendEmail(data: {
  message: string
  name: string
  email: string
  subject: string
}) {
  try {
    const serviceId = process.env.EMAILJS_SERVICE_ID!
    const templateId = process.env.EMAILJS_TEMPLATE_ID!
    const publicKey = process.env.EMAILJS_PUBLIC_KEY!
    const privateKey = process.env.EMAILJS_PRIVATE_KEY!
    if (!serviceId || !templateId || !publicKey || !privateKey) {
      throw new Error(
        'EmailJS environment variables are not properly configured',
      )
    }
    const res = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        service_id: serviceId,
        template_id: templateId,
        user_id: publicKey,
        accessToken: privateKey,
        template_params: {
          name: data.name,
          email: data.email,
          subject: data.subject,
          content: data.message,
          date: new Date().toLocaleString(),
        },
      }),
    })

    if (!res.ok) {
      throw new Error(`Email sending failed with status: ${res.status}`)
    }

    return { success: true }
  } catch (_) {
    return { success: false, error: 'Failed to send message' }
  }
}
