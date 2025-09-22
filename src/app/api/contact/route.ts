import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

// Check if API key is configured
if (!process.env.RESEND_API_KEY) {
  console.error('RESEND_API_KEY environment variable is not set')
}

export async function POST(request: NextRequest) {
  try {
    // Check if Resend is properly configured
    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY is not configured')
      return NextResponse.json(
        { error: 'Email service not configured. Please contact support.' },
        { status: 500 }
      )
    }

    const body = await request.json()
    const { name, email, phone, dueDate, service, message } = body

    // Validate required fields
    if (!name || !email || !phone || !service || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }

    // Format the service name for display
    const serviceNames: { [key: string]: string } = {
      'birth-doula': 'Birth Doula Services',
      'postpartum-doula': 'Postpartum Support',
      'prenatal-visits': 'Prenatal Visits',
      'lactation-support': 'Lactation Support',
      'consultation': 'Initial Consultation',
      'other': 'Other'
    }

    const serviceDisplayName = serviceNames[service] || service

    // Create email content
    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
        <div style="background-color: #ec4899; color: white; padding: 20px; border-radius: 8px 8px 0 0; text-align: center;">
          <h1 style="margin: 0; font-size: 24px;">New Contact Form Submission</h1>
        </div>
        
        <div style="background-color: white; padding: 30px; border-radius: 0 0 8px 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
          <h2 style="color: #374151; margin-top: 0; border-bottom: 2px solid #ec4899; padding-bottom: 10px;">Contact Information</h2>
          
          <div style="margin-bottom: 20px;">
            <strong style="color: #6b7280;">Name:</strong>
            <p style="margin: 5px 0; color: #374151; font-size: 16px;">${name}</p>
          </div>
          
          <div style="margin-bottom: 20px;">
            <strong style="color: #6b7280;">Email:</strong>
            <p style="margin: 5px 0; color: #374151; font-size: 16px;">${email}</p>
          </div>
          
          <div style="margin-bottom: 20px;">
            <strong style="color: #6b7280;">Phone:</strong>
            <p style="margin: 5px 0; color: #374151; font-size: 16px;">${phone}</p>
          </div>
          
          ${dueDate ? `
          <div style="margin-bottom: 20px;">
            <strong style="color: #6b7280;">Due Date:</strong>
            <p style="margin: 5px 0; color: #374151; font-size: 16px;">${new Date(dueDate).toLocaleDateString('en-US', { 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}</p>
          </div>
          ` : ''}
          
          <div style="margin-bottom: 20px;">
            <strong style="color: #6b7280;">Service Interest:</strong>
            <p style="margin: 5px 0; color: #374151; font-size: 16px;">${serviceDisplayName}</p>
          </div>
          
          <div style="margin-bottom: 20px;">
            <strong style="color: #6b7280;">Message:</strong>
            <div style="margin: 10px 0; padding: 15px; background-color: #f8fafc; border-left: 4px solid #ec4899; border-radius: 4px;">
              <p style="margin: 0; color: #374151; font-size: 16px; line-height: 1.6; white-space: pre-wrap;">${message}</p>
            </div>
          </div>
          
          <div style="margin-top: 30px; padding: 20px; background-color: #fef2f2; border-radius: 8px; border: 1px solid #fecaca;">
            <p style="margin: 0; color: #991b1b; font-size: 14px;">
              <strong>Next Steps:</strong> Please respond to this inquiry within 24 hours to maintain excellent client service.
            </p>
          </div>
        </div>
        
        <div style="text-align: center; margin-top: 20px; color: #6b7280; font-size: 12px;">
          <p>This email was sent from your website contact form</p>
        </div>
      </div>
    `

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: 'Adison Doula Website <onboarding@resend.dev>', // You'll need to verify your domain
      to: [process.env.DOULA_EMAIL || 'hello@adison.com'], // Use environment variable or fallback
      subject: `New Contact Form Submission from ${name}`,
      html: emailHtml,
      replyTo: email, // This allows you to reply directly to the client
    })

    if (error) {
      console.error('Resend error:', error)
      console.error('Error details:', JSON.stringify(error, null, 2))
      return NextResponse.json(
        { error: 'Failed to send email', details: error.message || 'Unknown error' },
        { status: 500 }
      )
    }

    return NextResponse.json(
      { message: 'Email sent successfully', data },
      { status: 200 }
    )

  } catch (error) {
    console.error('API error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
