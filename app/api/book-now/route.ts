import { NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend("re_W3gWmEvd_FvyKQeiiXSvbrQVDLh7b7RHE")

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { firstName, lastName, email, phone, roomType, moveInDate, message } = body

    await resend.emails.send({
      from: "Booking Inquiry <onboarding@resend.dev>",
      to: "yadavharsh319@gmail.com",
      subject: "New Booking Inquiry",
      html: `<p><b>First Name:</b> ${firstName}</p>
             <p><b>Last Name:</b> ${lastName}</p>
             <p><b>Email:</b> ${email}</p>
             <p><b>Phone:</b> ${phone}</p>
             <p><b>Preferred Room Type:</b> ${roomType}</p>
             <p><b>Preferred Move-in Date:</b> ${moveInDate}</p>
             <p><b>Additional Information:</b> ${message}</p>`,
    })

    return NextResponse.json(
      { message: "Booking inquiry sent successfully!" },
      { status: 200 }
    )
  } catch (error) {
    console.error("Error processing booking inquiry:", error)
    return NextResponse.json(
      { message: "Something went wrong. Please try again." },
      { status: 500 }
    )
  }
}
