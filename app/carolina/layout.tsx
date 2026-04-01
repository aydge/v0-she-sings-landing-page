import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Carolina Pines — SheSings",
  description: "Carolina Pines with Carol Parker Schafer, heard on WCLM radio.",
}

export default function CarolinaLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="carolina-theme">
      <style>{`
        .carolina-theme {
          --primary: oklch(0.40 0.12 145);
          --primary-foreground: oklch(1 0 0);
          --secondary: oklch(0.92 0.05 90);
          --secondary-foreground: oklch(0.25 0 0);
          --accent: oklch(0.75 0.12 80);
          --accent-foreground: oklch(0.20 0 0);
          --muted: oklch(0.95 0.02 120);
          --muted-foreground: oklch(0.45 0.04 130);
          --background: oklch(0.99 0.01 100);
          --card: oklch(0.97 0.02 110);
          --border: oklch(0.88 0.04 130);
        }
        .carolina-theme a { color: oklch(0.40 0.12 145); }
      `}</style>
      {children}
    </div>
  )
}
