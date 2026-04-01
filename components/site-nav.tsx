"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const mainLinks = [
  { href: "/music", label: "Music" },
  { href: "/band", label: "Band" },
  { href: "/merch", label: "Merch" },
  { href: "/shows", label: "Shows" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
]

export function SiteNav() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const isCarolina = pathname?.startsWith("/carolina")

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="container mx-auto px-4 flex h-16 items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="text-xl font-bold text-foreground hover:text-primary transition-colors"
        >
          SheSings
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {mainLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`px-3 py-2 text-sm rounded-md transition-colors hover:text-primary ${
                pathname === link.href
                  ? "text-primary font-medium"
                  : "text-muted-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/carolina"
            className={`ml-2 px-3 py-2 text-sm rounded-md border transition-colors ${
              isCarolina
                ? "bg-[oklch(0.40_0.12_145)] text-white border-[oklch(0.40_0.12_145)]"
                : "border-[oklch(0.40_0.12_145)] text-[oklch(0.35_0.12_145)] hover:bg-[oklch(0.40_0.12_145)] hover:text-white"
            }`}
          >
            🌲 Carolina Pines
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-border bg-background px-4 pb-4">
          <nav className="flex flex-col gap-1 pt-2">
            {mainLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`px-3 py-2 text-sm rounded-md transition-colors ${
                  pathname === link.href
                    ? "text-primary font-medium bg-primary/10"
                    : "text-muted-foreground hover:text-primary hover:bg-primary/5"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/carolina"
              onClick={() => setOpen(false)}
              className="mt-1 px-3 py-2 text-sm rounded-md border border-[oklch(0.40_0.12_145)] text-[oklch(0.35_0.12_145)] hover:bg-[oklch(0.40_0.12_145)] hover:text-white transition-colors"
            >
              🌲 Carolina Pines
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
