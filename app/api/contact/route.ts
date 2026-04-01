import { NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"

export async function POST(req: NextRequest) {
  const resend = new Resend(process.env.RESEND_API_KEY ?? "placeholder")
  try {
    const { name, email, subject, message } = await req.json()

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    const { error } = await resend.emails.send({
      from: "SheSings Contact Form <noreply@carolparkerschafer.com>",
      to: ["musicbycarol@yahoo.com"],
      replyTo: email,
      subject: `[SheSings] ${subject} — from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\n\n${message}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px;">
          <h2 style="color: #333;">New message from carolparkerschafer.com</h2>
          <table style="width:100%; border-collapse: collapse;">
            <tr><td style="padding:8px 0; font-weight:bold; color:#555;">Name</td><td style="padding:8px 0;">${name}</td></tr>
            <tr><td style="padding:8px 0; font-weight:bold; color:#555;">Email</td><td style="padding:8px 0;"><a href="mailto:${email}">${email}</a></td></tr>
            <tr><td style="padding:8px 0; font-weight:bold; color:#555;">Subject</td><td style="padding:8px 0;">${subject}</td></tr>
          </table>
          <hr style="margin: 16px 0; border-color: #eee;" />
          <p style="white-space: pre-wrap; color: #333;">${message.replace(/</g, "&lt;").replace(/>/g, "&gt;")}</p>
        </div>
      `,
    })

    if (error) {
      console.error("Resend error:", error)
      return NextResponse.json({ error: "Failed to send email" }, { status: 500 })
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error("Contact API error:", err)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
