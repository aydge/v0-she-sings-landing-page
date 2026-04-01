import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Carolina Pines Radio Show — SheSings",
  description: "The Carolina Pines Radio Show with Carol Parker Schafer — Americana, Bluegrass & Country Music on WCOM.",
}

// Colors from the Carolina Pines logo:
//   Navy:      #1E2D4E  (dark navy blue — "THE CAROLINA PINES" text)
//   Sage:      #6B8A4E  (muted sage green — "RADIO SHOW" text + pine trees)
//   Light sage:#8FA86B  (lighter pine highlights)
//   Off-white: #F8F6F0  (warm paper background)

export default function CarolinaLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="carolina-theme">
      <style>{`
        .carolina-theme {
          --primary: oklch(0.28 0.07 240);
          --primary-foreground: oklch(1 0 0);
          --secondary: oklch(0.90 0.04 135);
          --secondary-foreground: oklch(0.22 0.06 240);
          --accent: oklch(0.56 0.10 135);
          --accent-foreground: oklch(1 0 0);
          --muted: oklch(0.96 0.01 100);
          --muted-foreground: oklch(0.45 0.04 200);
          --background: oklch(0.985 0.008 90);
          --card: oklch(0.97 0.01 100);
          --card-foreground: oklch(0.22 0.04 240);
          --foreground: oklch(0.22 0.06 240);
          --border: oklch(0.86 0.04 150);
          --ring: oklch(0.56 0.10 135);
        }
        .carolina-theme .cp-navy { color: #1E2D4E; }
        .carolina-theme .cp-sage { color: #6B8A4E; }
        .carolina-theme .cp-bg-navy { background-color: #1E2D4E; }
        .carolina-theme .cp-bg-sage { background-color: #6B8A4E; }
        .carolina-theme .cp-border-sage { border-color: #6B8A4E; }
      `}</style>
      {children}
    </div>
  )
}
