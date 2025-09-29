import { HeroSection } from "@/components/hero-section"
import { AudioPlayer } from "@/components/audio-player"
import { SocialLinks } from "@/components/social-links"
import { CreditsSection } from "@/components/credits-section"

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <AudioPlayer />
      <CreditsSection />
      <SocialLinks />
    </main>
  )
}
