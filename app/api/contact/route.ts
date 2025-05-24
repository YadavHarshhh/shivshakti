import { NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend("re_W3gWmEvd_FvyKQeiiXSvbrQVDLh7b7RHE")

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, message } = body

    await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: "yadavharsh319@gmail.com",
      subject: "New Contact Form Submission",
      html: `<p><b>Name:</b> ${name}</p>
             <p><b>Email:</b> ${email}</p>
             <p><b>Message:</b> ${message}</p>`,
    })

    return NextResponse.json(
      { message: "Message sent successfully!" },
      { status: 200 }
    )
  } catch (error) {
    console.error("Error processing form:", error)
    return NextResponse.json(
      { message: "Something went wrong. Please try again." },
      { status: 500 }
    )
  }
} 