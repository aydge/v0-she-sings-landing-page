import Image from "next/image"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-primary/10 to-background">
      {/* Background texture overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('/weathered-wood-texture.jpg')] bg-cover bg-center" />
      </div>

      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          {/* Album Cover */}
          <div className="relative w-full max-w-2xl mx-auto aspect-square rounded-lg overflow-hidden shadow-2xl">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/She-Sings_TATD-4000px-jGf96FutX5wdrtIMzCLCPHOAm1CW1z.jpg"
              alt="She Sings - Tickets at the Door Album Cover"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Album Title */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold text-foreground">SheSings</h1>
            <p className="text-3xl md:text-5xl font-cursive text-primary">Tickets at the Door</p>
          </div>

          {/* Release Date */}
          <p className="text-xl md:text-2xl text-muted-foreground">Album Available Now</p>

          {/* CTA Buttons */}
          <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="text-lg px-8 py-6 bg-primary hover:bg-primary/90 text-primary-foreground"
              asChild
            >
              <a href="https://digital-delivery-services.lnk.to/RpanuiryEM" target="_blank" rel="noopener noreferrer">
                Listen Here
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-6 border-2 border-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
              asChild
            >
              <a href="https://musicbycarol.square.site/" target="_blank" rel="noopener noreferrer">
                Buy Here
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative floral elements */}
      <div className="absolute top-8 right-8 opacity-20 hidden md:block">
        <Image src="/baby-s-breath-flowers.jpg" alt="" width={200} height={200} className="rotate-12" />
      </div>
      <div className="absolute bottom-8 left-8 opacity-20 hidden md:block">
        <Image src="/baby-s-breath-flowers.jpg" alt="" width={200} height={200} className="-rotate-12" />
      </div>
    </section>
  )
}
