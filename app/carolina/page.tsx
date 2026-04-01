import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Radio, TreePine, Calendar, Heart } from "lucide-react"
import Link from "next/link"

const WCOM_URL = "https://wcomfm.org/show/the-carolina-pines-radio-show/"

export default function CarolinaPage() {
  return (
    <main className="min-h-screen">

      {/* Hero */}
      <section className="py-20 md:py-28" style={{ background: "linear-gradient(to bottom, #e8ede2, #F8F6F0)" }}>
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-3 mb-3">
            <TreePine className="h-8 w-8 cp-sage" style={{ color: "#6B8A4E" }} />
            <span className="text-sm font-semibold tracking-[0.25em] uppercase" style={{ color: "#6B8A4E" }}>The</span>
            <TreePine className="h-8 w-8" style={{ color: "#6B8A4E" }} />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-1" style={{ color: "#1E2D4E" }}>
            Carolina Pines
          </h1>
          <p className="text-2xl md:text-3xl font-semibold tracking-widest uppercase mb-2" style={{ color: "#6B8A4E" }}>
            Radio Show
          </p>
          <p className="text-sm tracking-[0.2em] uppercase font-medium mb-8" style={{ color: "#1E2D4E", opacity: 0.7 }}>
            Americana, Bluegrass &amp; Country Music
          </p>
          <p className="text-lg mb-8" style={{ color: "#1E2D4E", opacity: 0.75 }}>
            with Carol Parker Schafer
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button
              size="lg"
              className="gap-2 text-white"
              style={{ backgroundColor: "#1E2D4E" }}
              asChild
            >
              <a href={WCOM_URL} target="_blank" rel="noopener noreferrer">
                <Radio className="h-4 w-4" />
                Listen on WCOM
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="gap-2"
              style={{ borderColor: "#6B8A4E", color: "#6B8A4E" }}
              asChild
            >
              <Link href="/contact?subject=Carolina+Pines+Sponsorship">
                Become a Sponsor
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* This Week */}
      <section className="py-14" style={{ backgroundColor: "#F8F6F0" }}>
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-2 mb-6">
              <Calendar className="h-6 w-6" style={{ color: "#6B8A4E" }} />
              <h2 className="text-2xl md:text-3xl font-bold" style={{ color: "#1E2D4E" }}>
                This Week on Carolina Pines
              </h2>
            </div>
            <Card className="p-8" style={{ borderColor: "#c8d4be", backgroundColor: "#f3f7ee" }}>
              <p className="text-lg text-center italic" style={{ color: "#4a6035" }}>
                Show updates and featured guest announcements coming soon.
              </p>
              <p className="text-center mt-4 text-sm" style={{ color: "#6B8A4E" }}>
                Check back weekly for the latest news from Carolina Pines
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="py-14" style={{ backgroundColor: "#F8F6F0" }}>
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-8" style={{ color: "#1E2D4E" }}>
              About the Show
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6" style={{ borderColor: "#c8d4be" }}>
                <h3 className="font-bold text-lg mb-3" style={{ color: "#6B8A4E" }}>The Show</h3>
                <p className="text-sm leading-relaxed" style={{ color: "#3a4a30" }}>
                  The Carolina Pines Radio Show is Carol Parker Schafer's weekly program on WCOM, celebrating Americana, Bluegrass, and Country music. Each episode features handpicked songs, artist spotlights, and the stories behind the music.
                </p>
              </Card>
              <Card className="p-6" style={{ borderColor: "#c8d4be" }}>
                <h3 className="font-bold text-lg mb-3" style={{ color: "#6B8A4E" }}>Find It On Air</h3>
                <p className="text-sm leading-relaxed mb-4" style={{ color: "#3a4a30" }}>
                  The Carolina Pines Radio Show airs weekly on WCOM. Visit WCOM's website for the schedule and to stream live.
                </p>
                <a
                  href={WCOM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold hover:underline"
                  style={{ color: "#1E2D4E" }}
                >
                  wcomfm.org →
                </a>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Sponsors */}
      <section className="py-16" style={{ backgroundColor: "#1E2D4E" }}>
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <Heart className="h-8 w-8 mx-auto mb-4" style={{ color: "#6B8A4E" }} />
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Support Carolina Pines
            </h2>
            <p className="mb-8 leading-relaxed" style={{ color: "#a8bfa0" }}>
              Interested in underwriting or sponsoring the show? Reach a dedicated audience of Americana, Bluegrass, and Country music lovers across the Carolinas and beyond.
            </p>
            <Button
              size="lg"
              className="text-white font-semibold"
              style={{ backgroundColor: "#6B8A4E" }}
              asChild
            >
              <Link href="/contact?subject=Carolina+Pines+Sponsorship">
                Inquire About Sponsorship
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
