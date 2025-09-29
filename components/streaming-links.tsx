import { Music2, Music } from "lucide-react"
import { Button } from "@/components/ui/button"

const streamingPlatforms = [
  {
    name: "Spotify",
    icon: Music2,
    url: "#",
    color: "hover:text-[#1DB954]",
  },
  {
    name: "Apple Music",
    icon: Music,
    url: "#",
    color: "hover:text-[#FA243C]",
  },
]

export function StreamingLinks() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-foreground">Stream the Album</h2>
          <p className="text-lg text-muted-foreground mb-12">
            Listen to "Tickets at the Door" on your favorite platform
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            {streamingPlatforms.map((platform) => (
              <Button
                key={platform.name}
                variant="outline"
                size="lg"
                className="min-w-[200px] border-2 hover:border-primary transition-all bg-transparent"
                asChild
              >
                <a href={platform.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3">
                  <platform.icon className={`h-6 w-6 ${platform.color}`} />
                  <span className="font-semibold">{platform.name}</span>
                </a>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
