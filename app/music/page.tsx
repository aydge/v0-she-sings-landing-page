import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Music, ExternalLink } from "lucide-react"

const tracks = [
  {
    number: 1,
    title: "Tickets at the Door",
    description:
      "A classic country music story of love lost and still hoped for — with a memorable melody highlighted by SheSings' three-part harmony and a smooth lead vocal. Tickets at the Door draws listeners in from the start, opening with twin-fiddle stylings by renowned musician Dewey Brown, who toured with bluegrass legend Dr. Ralph Stanley and the Clinch Mountain Boys for nearly a dozen years. Beautifully layered steel guitar stylings are added by Grammy Award-winning Nashville musician Robin Ruddy, who has toured with Ray Stevens and Rod Stewart.",
    instruments: "Lead Vocals, Rhythm Guitar, 5-string Banjo, Twin Fiddle, Steel Guitar, Bass Guitar",
  },
  {
    number: 2,
    title: "Anna Rose",
    description:
      "A fun, bluegrass-style song all about a girl in a bar with a heartache and nowhere else to go. This upbeat tune combines amusing lyrics with bright harmonies — you'll be singing along in no time! Dewey Brown provides a lively lead fiddle while Carol adds complementary 5-string banjo runs and riffs that keep the energy moving.",
    instruments: "Lead Vocals, Harmony Vocals, 5-string Banjo, Fiddle, Bass Guitar",
  },
  {
    number: 3,
    title: "Josie, Run",
    description:
      "The compelling tale of a lady outlaw in the Old West and how her legacy plays out through the generations. A driving melody builds as the listener falls deeper into the story, riding along with Josie as she runs desperately from her past. Dewey Brown's soulful fiddle skillfully interprets the ballad's emotion and underscores this lyrical tapestry woven by Carol Parker Schafer.",
    instruments: "Lead Vocals, Harmony Vocals, Fiddle, Rhythm Guitar, Bass Guitar",
  },
]

const bandMembers = [
  "Carol Parker Schafer — Lead Vocals, Rhythm Guitar, Banjo",
  "Tracy Parker — Harmony Vocals, Bass Guitar",
  "Susan Colwell — Harmony Vocals",
]

const contributingArtists = [
  "Dewey Brown — Fiddle (toured with Dr. Ralph Stanley & the Clinch Mountain Boys for nearly 12 years)",
  "Robin Ruddy — Steel Guitar (Grammy Award-winning Nashville musician; toured with Ray Stevens and Rod Stewart)",
]

const production = [
  "All songs written by Carol Parker Schafer",
  "Executive Producer: Carol Parker Schafer",
  "Producer: Craig Brandwein, Center Sound Productions",
  "Engineers: Nicholas Bagwell, James Bevelle",
  "Assistant Engineer: Amber Frazier",
]

export default function MusicPage() {
  return (
    <main className="min-h-screen py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">

          {/* Header */}
          <div className="text-center mb-14">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-3">Tickets at the Door</h1>
            <p className="text-lg text-muted-foreground mb-6">Debut EP by SheSings</p>
            <Button size="lg" asChild>
              <a href="https://digital-delivery-services.lnk.to/RpanuiryEM" target="_blank" rel="noopener noreferrer" className="gap-2">
                <ExternalLink className="h-4 w-4" />
                Listen on All Platforms
              </a>
            </Button>
          </div>

          {/* Tracks */}
          <section className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 flex items-center gap-2">
              <Music className="h-6 w-6 text-primary" />
              The Songs
            </h2>
            <div className="flex flex-col gap-6">
              {tracks.map((track) => (
                <Card key={track.number} className="p-6 md:p-8">
                  <div className="flex gap-4 items-start">
                    <span className="text-4xl font-bold text-primary/30 leading-none mt-1">{track.number}</span>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-foreground mb-3">{track.title}</h3>
                      <p className="text-muted-foreground leading-relaxed mb-4">{track.description}</p>
                      <p className="text-xs text-muted-foreground/70 italic">{track.instruments}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </section>

          {/* Credits */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">Album Credits</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="p-6">
                <h3 className="text-lg font-bold text-primary mb-4">The Band</h3>
                <ul className="space-y-2">
                  {bandMembers.map((m) => (
                    <li key={m} className="text-sm text-card-foreground leading-relaxed">{m}</li>
                  ))}
                </ul>
              </Card>
              <Card className="p-6">
                <h3 className="text-lg font-bold text-primary mb-4">Contributing Artists</h3>
                <ul className="space-y-3">
                  {contributingArtists.map((a) => (
                    <li key={a} className="text-sm text-card-foreground leading-relaxed">{a}</li>
                  ))}
                </ul>
              </Card>
              <Card className="p-6">
                <h3 className="text-lg font-bold text-primary mb-4">Production</h3>
                <ul className="space-y-2">
                  {production.map((p) => (
                    <li key={p} className="text-sm text-card-foreground leading-relaxed">{p}</li>
                  ))}
                </ul>
              </Card>
            </div>
          </section>
        </div>
      </div>
    </main>
  )
}
