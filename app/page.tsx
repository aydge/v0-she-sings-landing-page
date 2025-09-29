import { HeroSection } from "@/components/hero-section"
import { AudioPlayer } from "@/components/audio-player"
import { StreamingLinks } from "@/components/streaming-links"
import { SocialLinks } from "@/components/social-links"
import { CreditsSection } from "@/components/credits-section"

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <AudioPlayer />
      <StreamingLinks />
      <SocialLinks />
      <CreditsSection />
    </main>
  )
}
