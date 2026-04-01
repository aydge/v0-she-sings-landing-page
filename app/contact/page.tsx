"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Send, CheckCircle2 } from "lucide-react"

const subjects = [
  "General Inquiry",
  "Booking Request",
  "Song Cover Request",
  "Media / Press",
  "Carolina Pines Sponsorship",
  "Radio / Playlist",
  "Other",
]

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle")
  const [form, setForm] = useState({ name: "", email: "", subject: subjects[0], message: "" })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("sending")
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setStatus("success")
        setForm({ name: "", email: "", subject: subjects[0], message: "" })
      } else {
        setStatus("error")
      }
    } catch {
      setStatus("error")
    }
  }

  return (
    <main className="min-h-screen py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-xl mx-auto">
          <div className="text-center mb-10">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-3">Get in Touch</h1>
            <p className="text-muted-foreground text-lg">
              Booking, media, song covers, or just saying hello — we'd love to hear from you.
            </p>
          </div>

          {status === "success" ? (
            <Card className="p-10 text-center flex flex-col items-center gap-4">
              <CheckCircle2 className="h-14 w-14 text-primary" />
              <h2 className="text-2xl font-bold text-foreground">Message Sent!</h2>
              <p className="text-muted-foreground">Thanks for reaching out. We'll get back to you soon.</p>
              <Button variant="outline" onClick={() => setStatus("idle")}>Send Another</Button>
            </Card>
          ) : (
            <Card className="p-6 md:p-8">
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="name" className="text-sm font-medium text-foreground">Name</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="email" className="text-sm font-medium text-foreground">Email</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="subject" className="text-sm font-medium text-foreground">Subject</label>
                  <select
                    id="subject"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  >
                    {subjects.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="message" className="text-sm font-medium text-foreground">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="What's on your mind?"
                    className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                  />
                </div>

                {status === "error" && (
                  <p className="text-sm text-destructive">Something went wrong. Please try again or email us directly at musicbycarol@yahoo.com</p>
                )}

                <Button type="submit" size="lg" disabled={status === "sending"} className="gap-2">
                  <Send className="h-4 w-4" />
                  {status === "sending" ? "Sending…" : "Send Message"}
                </Button>
              </form>
            </Card>
          )}

          <p className="text-center text-sm text-muted-foreground mt-6">
            Or email directly:{" "}
            <a href="mailto:musicbycarol@yahoo.com" className="text-primary hover:underline">
              musicbycarol@yahoo.com
            </a>
          </p>
        </div>
      </div>
    </main>
  )
}
