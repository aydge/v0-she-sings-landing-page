import { Suspense } from "react"
import { HeroSection } from "@/components/hero-section"
import { AudioPlayer } from "@/components/audio-player"
import { SocialLinks } from "@/components/social-links"
import { CreditsSection } from "@/components/credits-section"
import { RadioSection } from "@/components/radio-section"

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <Suspense fallback={<div className="py-16 text-center">Loading audio player...</div>}>
        <AudioPlayer />
      </Suspense>
      <RadioSection />
      <CreditsSection />
      <SocialLinks />
    </main>
  )
}
