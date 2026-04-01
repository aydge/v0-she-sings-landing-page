import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ShoppingBag, ExternalLink } from "lucide-react"

const albums = [
  {
    title: "Tickets at the Door",
    artist: "SheSings",
    year: "2024",
    description: "The debut EP from SheSings — three original Americana songs featuring world-class Nashville musicians. Available as a CD.",
    available: true,
    buyUrl: "https://musicbycarol.square.site/s/order",
    badge: "Current Release",
  },
  {
    title: "Around My World",
    artist: "Carol Parker Schafer",
    year: "2014",
    description: "Carol's 2014 album featuring purples, golds, and a different chapter of her songwriting journey.",
    available: true,
    buyUrl: "https://musicbycarol.square.site/s/order",
    badge: null,
  },
  {
    title: "Tracy's Album",
    artist: "Tracy Parker",
    year: "90s Reissue",
    description: "A reissue of Tracy Parker's classic album from the 90s. Check back soon for availability.",
    available: false,
    buyUrl: null,
    badge: "Coming Soon",
  },
]

export default function MerchPage() {
  return (
    <main className="min-h-screen py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">

          {/* Header */}
          <div className="text-center mb-14">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-3">Merch & Music</h1>
            <p className="text-lg text-muted-foreground mb-8">
              Pick up a CD and support SheSings directly
            </p>
            <Button size="lg" asChild>
              <a href="https://musicbycarol.square.site/s/order" target="_blank" rel="noopener noreferrer" className="gap-2">
                <ShoppingBag className="h-4 w-4" />
                Visit the Store
              </a>
            </Button>
          </div>

          {/* Albums */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-8">Albums</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {albums.map((album) => (
                <Card key={album.title} className="p-6 flex flex-col gap-4">
                  {/* Placeholder album art */}
                  <div className="w-full aspect-square rounded-md bg-primary/10 flex items-center justify-center">
                    <span className="text-5xl font-bold text-primary/30">{album.title[0]}</span>
                  </div>

                  <div className="flex-1 flex flex-col gap-2">
                    {album.badge && (
                      <span className={`text-xs font-semibold px-2 py-0.5 rounded-full w-fit ${
                        album.badge === "Coming Soon"
                          ? "bg-muted text-muted-foreground"
                          : "bg-primary/10 text-primary"
                      }`}>
                        {album.badge}
                      </span>
                    )}
                    <h3 className="text-lg font-bold text-foreground">{album.title}</h3>
                    <p className="text-sm text-primary font-medium">{album.artist} · {album.year}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed flex-1">{album.description}</p>
                  </div>

                  {album.available && album.buyUrl ? (
                    <Button asChild variant="default" size="sm" className="gap-2">
                      <a href={album.buyUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-3.5 w-3.5" />
                        Buy Now
                      </a>
                    </Button>
                  ) : (
                    <Button variant="outline" size="sm" disabled>
                      Coming Soon
                    </Button>
                  )}
                </Card>
              ))}
            </div>
          </section>
        </div>
      </div>
    </main>
  )
}
