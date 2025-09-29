import { Instagram, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"

const socialPlatforms = [
  {
    name: "Instagram",
    icon: Instagram,
    url: "#",
    color: "hover:text-[#E4405F]",
  },
  {
    name: "X (Twitter)",
    icon: Twitter,
    url: "#",
    color: "hover:text-[#1DA1F2]",
  },
]

export function SocialLinks() {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-foreground">Follow She Sings</h2>
          <p className="text-lg text-muted-foreground mb-12">Stay connected for updates, tour dates, and more</p>

          <div className="flex justify-center gap-6">
            {socialPlatforms.map((platform) => (
              <Button
                key={platform.name}
                variant="outline"
                size="icon"
                className="h-16 w-16 rounded-full border-2 hover:border-primary transition-all bg-transparent"
                asChild
              >
                <a href={platform.url} target="_blank" rel="noopener noreferrer" aria-label={platform.name}>
                  <platform.icon className={`h-8 w-8 ${platform.color}`} />
                </a>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
