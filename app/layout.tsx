import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"

import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Suspense } from "react"

import { Dancing_Script, PT_Sans as V0_Font_PT_Sans, Fira_Sans as V0_Font_Fira_Sans, Roboto_Slab as V0_Font_Roboto_Slab } from 'next/font/google'

// Initialize fonts
const _ptSans = V0_Font_PT_Sans({ subsets: ['latin'], weight: ["400","700"], variable: '--v0-font-pt-sans' })
const _firaSans = V0_Font_Fira_Sans({ subsets: ['latin'], weight: ["100","200","300","400","500","600","700","800","900"], variable: '--v0-font-fira-sans' })
const _robotoSlab = V0_Font_Roboto_Slab({ subsets: ['latin'], weight: ["100","200","300","400","500","600","700","800","900"], variable: '--v0-font-roboto-slab' })
const _v0_fontVariables = `${_ptSans.variable} ${_firaSans.variable} ${_robotoSlab.variable}`

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  variable: "--font-cursive",
  display: "swap",
})

export const metadata: Metadata = {
  title: "v0 App",
  description: "Created with v0",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} ${dancingScript.variable} ${_v0_fontVariables}`}>
        <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
