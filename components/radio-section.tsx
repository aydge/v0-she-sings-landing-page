import { Card } from "@/components/ui/card"
import { Radio } from "lucide-react"

const stations = [
  { name: "KSOI", location: "Iowa", url: null },
  { name: "WHUP", location: "Hillsborough, NC", url: null },
  { name: "WCOMFM", location: "Carrboro, NC", url: "https://wcomfm.org/show/the-carolina-pines-radio-show/", note: "Home of Carolina Pines" },
  { name: "Your Station?", location: "Accepting submissions", url: null, placeholder: true },
]

export function RadioSection() {
  return (
    <section className="relative py-16 md:py-20 bg-gradient-to-b from-primary/10 to-background overflow-hidden">
      {/* Background texture overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('/weathered-wood-texture.jpg')] bg-cover bg-center" />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-3">
            <Radio className="h-6 w-6 text-primary" />
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">On the Radio</h2>
          </div>
          <p className="text-muted-foreground mb-10 text-lg">
            A tip of the hat to the stations spinning SheSings
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stations.map((station) => (
              <Card
                key={station.name}
                className={`p-5 flex flex-col items-center gap-2 text-center ${station.placeholder ? "border-dashed opacity-60" : ""}`}
              >
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-1">
                  <Radio className="h-7 w-7 text-primary" />
                </div>
                {station.url ? (
                  <a
                    href={station.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-lg text-primary hover:underline"
                  >
                    {station.name}
                  </a>
                ) : (
                  <span className="font-bold text-lg text-foreground">{station.name}</span>
                )}
                <span className="text-xs text-muted-foreground">{station.location}</span>
                {station.note && (
                  <span className="text-xs text-primary font-medium">{station.note}</span>
                )}
              </Card>
            ))}
          </div>
          <p className="mt-6 text-sm text-muted-foreground">
            Playing SheSings on your station?{" "}
            <a href="/contact" className="text-primary hover:underline">
              Let us know
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
