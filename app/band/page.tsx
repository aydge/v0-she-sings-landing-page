import { Card } from "@/components/ui/card"
import { Users, Star } from "lucide-react"

const coreBand = [
  {
    name: "Carol Parker Schafer",
    role: "Lead Vocals, Rhythm Guitar, Banjo",
    bio: "Carol is the heart and creative force behind SheSings. A songwriter, vocalist, and multi-instrumentalist, she wrote all the songs on Tickets at the Door and serves as the group's Executive Producer. Her writing blends classic country storytelling with Americana warmth.",
  },
  {
    name: "Tracy Parker",
    role: "Harmony Vocals, Bass Guitar",
    bio: "Tracy brings deep musical experience to SheSings, grounding the trio's sound with her bass guitar work and rich harmony vocals. Her musical background spans decades of performance.",
  },
  {
    name: "Susan Colwell",
    role: "Harmony Vocals",
    bio: "Susan's voice is a cornerstone of the SheSings sound. Her harmony vocals complete the trio's signature three-part blend — alto, tenor, and bass intertwining to create the vibrant, resonant sound that defines the group.",
  },
]

const contributingArtists = [
  {
    name: "Dewey Brown",
    role: "Fiddle",
    bio: "Dewey Brown is a masterful fiddler who toured with bluegrass legend Dr. Ralph Stanley and the Clinch Mountain Boys for nearly a dozen years. His twin-fiddle work on 'Tickets at the Door' and his lively lead on 'Anna Rose' are highlights of the album.",
  },
  {
    name: "Robin Ruddy",
    role: "Steel Guitar",
    bio: "Robin Ruddy is a Grammy Award-winning Nashville musician and recording studio owner who has toured with Ray Stevens and Rod Stewart. His beautifully layered steel guitar stylings add depth and polish to 'Tickets at the Door.'",
  },
]

export default function BandPage() {
  return (
    <main className="min-h-screen py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">

          {/* Header */}
          <div className="text-center mb-14">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-3">The Band</h1>
            <p className="text-lg text-muted-foreground">
              SheSings is an acoustic trio that brings heart, harmony, and humor to every performance.
            </p>
          </div>

          {/* Core Members */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-foreground mb-8 flex items-center gap-2">
              <Users className="h-6 w-6 text-primary" />
              Core Members
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {coreBand.map((member) => (
                <Card key={member.name} className="p-6 flex flex-col items-center text-center gap-4">
                  <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center text-primary text-2xl font-bold">
                    {member.name[0]}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground">{member.name}</h3>
                    <p className="text-sm text-primary font-medium mb-3">{member.role}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">{member.bio}</p>
                  </div>
                </Card>
              ))}
            </div>
          </section>

          {/* Contributing Artists */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-2 flex items-center gap-2">
              <Star className="h-6 w-6 text-primary" />
              Contributing Artists
            </h2>
            <p className="text-muted-foreground mb-8">
              World-class musicians who contributed their artistry to <em>Tickets at the Door</em>
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {contributingArtists.map((artist) => (
                <Card key={artist.name} className="p-6 flex gap-5 items-start">
                  <div className="w-14 h-14 rounded-full bg-secondary flex items-center justify-center text-foreground font-bold text-lg flex-shrink-0">
                    {artist.name[0]}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground">{artist.name}</h3>
                    <p className="text-sm text-primary font-medium mb-2">{artist.role}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">{artist.bio}</p>
                  </div>
                </Card>
              ))}
            </div>
          </section>
        </div>
      </div>
    </main>
  )
}
