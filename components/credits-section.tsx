import { Card } from "@/components/ui/card"

const credits = [
  {
    category: "Band Members",
    items: [
      "Carol Parker Schafer: Lead Vocals, Rhythm Guitar, Banjo",
      "Tracy Parker: Harmony Vocals, Bass Guitar",
      "Susan Colwell: Harmony Vocals",
      "Dewey Brown: Fiddle",
      "Robin Ruddy: Steel Guitar",
    ],
  },
  {
    category: "Production",
    items: [
      "All songs written by Carol Parker Schafer",
      "Executive Producer: Carol Parker Schafer",
      "Producer: Craig Brandwein, Center Sound Productions",
      "Engineers: Nicholas Bagwell, James Bevelle",
      "Assistant Engineer: Amber Frazier",
    ],
  },
]

export function CreditsSection() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">Album Credits</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {credits.map((section) => (
              <Card key={section.category} className="p-6 bg-card">
                <h3 className="text-xl font-bold mb-4 text-primary">{section.category}</h3>
                <ul className="space-y-2">
                  {section.items.map((item, index) => (
                    <li key={index} className="text-sm text-card-foreground leading-relaxed">
                      {item}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>

          {/* Footer */}
          <div className="mt-16 text-center text-sm text-muted-foreground">
            <p>© 2025 She Sings. All rights reserved.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
