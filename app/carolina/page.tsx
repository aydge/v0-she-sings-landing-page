import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Radio, TreePine, Calendar, Heart } from "lucide-react"
import Link from "next/link"

export default function CarolinaPage() {
  return (
    <main className="min-h-screen">

      {/* Hero */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-[oklch(0.92_0.06_145)] to-[oklch(0.99_0.01_100)]">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <TreePine className="h-8 w-8 text-[oklch(0.40_0.12_145)]" />
            <h1 className="text-5xl md:text-6xl font-bold text-[oklch(0.20_0.06_145)]">Carolina Pines</h1>
            <TreePine className="h-8 w-8 text-[oklch(0.40_0.12_145)]" />
          </div>
          <p className="text-xl md:text-2xl text-[oklch(0.40_0.08_145)] mb-2">with Carol Parker Schafer</p>
          <div className="flex items-center justify-center gap-2 mt-4 mb-8">
            <Radio className="h-5 w-5 text-[oklch(0.40_0.12_145)]" />
            <span className="text-lg font-medium text-[oklch(0.35_0.10_145)]">Heard on WCLM</span>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button
              size="lg"
              className="bg-[oklch(0.40_0.12_145)] hover:bg-[oklch(0.35_0.12_145)] text-white gap-2"
              asChild
            >
              <a href="https://wclmradio.com" target="_blank" rel="noopener noreferrer">
                <Radio className="h-4 w-4" />
                Listen on WCLM
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-[oklch(0.40_0.12_145)] text-[oklch(0.35_0.12_145)] hover:bg-[oklch(0.40_0.12_145)] hover:text-white"
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
      <section className="py-14 bg-[oklch(0.97_0.02_110)]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-2 mb-6">
              <Calendar className="h-6 w-6 text-[oklch(0.40_0.12_145)]" />
              <h2 className="text-2xl md:text-3xl font-bold text-[oklch(0.20_0.06_145)]">This Week on Carolina Pines</h2>
            </div>
            <Card className="p-8 border-[oklch(0.88_0.04_130)]">
              <p className="text-[oklch(0.45_0.04_130)] text-lg text-center italic">
                Show updates and featured guest announcements coming soon.
              </p>
              <p className="text-center mt-4 text-sm text-[oklch(0.50_0.04_130)]">
                Check back weekly for the latest news from Carolina Pines
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="py-14">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-[oklch(0.20_0.06_145)] mb-6">About Carolina Pines</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6 border-[oklch(0.88_0.04_130)]">
                <h3 className="font-bold text-lg text-[oklch(0.30_0.10_145)] mb-3">The Show</h3>
                <p className="text-[oklch(0.40_0.04_130)] text-sm leading-relaxed">
                  Carolina Pines is Carol Parker Schafer's weekly radio show on WCLM, celebrating Americana, country, and the music of the Carolinas. Each episode features handpicked songs, artist spotlights, and the stories behind the music.
                </p>
              </Card>
              <Card className="p-6 border-[oklch(0.88_0.04_130)]">
                <h3 className="font-bold text-lg text-[oklch(0.30_0.10_145)] mb-3">Find It On Air</h3>
                <p className="text-[oklch(0.40_0.04_130)] text-sm leading-relaxed mb-4">
                  Carolina Pines airs weekly on WCLM radio. Visit WCLM's website for schedule and streaming information.
                </p>
                <a
                  href="https://wclmradio.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-[oklch(0.40_0.12_145)] hover:underline"
                >
                  wclmradio.com →
                </a>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Sponsors */}
      <section className="py-14 bg-[oklch(0.92_0.05_90)]/40">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <Heart className="h-8 w-8 text-[oklch(0.40_0.12_145)] mx-auto mb-4" />
            <h2 className="text-2xl md:text-3xl font-bold text-[oklch(0.20_0.06_145)] mb-4">Support Carolina Pines</h2>
            <p className="text-[oklch(0.40_0.04_130)] mb-8 leading-relaxed">
              Interested in underwriting or sponsoring Carolina Pines? Reach a dedicated audience of Americana and country music lovers across the Carolinas and beyond.
            </p>
            <Button
              size="lg"
              className="bg-[oklch(0.40_0.12_145)] hover:bg-[oklch(0.35_0.12_145)] text-white"
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
