import { Button } from "@/components/ui/button"
import { Calendar, Mail } from "lucide-react"
import Link from "next/link"

export default function ShowsPage() {
  return (
    <main className="min-h-screen py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
            <Calendar className="h-10 w-10 text-primary" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Upcoming Shows</h1>
          <p className="text-lg text-muted-foreground mb-8">
            Performance calendar coming soon. Check back for upcoming shows, festivals, and events.
          </p>
          <p className="text-muted-foreground mb-10">
            Interested in booking SheSings for your event?
          </p>
          <Button asChild size="lg" className="gap-2">
            <Link href="/contact">
              <Mail className="h-4 w-4" />
              Contact Us About Booking
            </Link>
          </Button>
        </div>
      </div>
    </main>
  )
}
