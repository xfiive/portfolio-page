import type React from "react"
import type { Metadata } from "next"
import "@/app/globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const SITE_URL = "https://mikhail.shytsko.com"
const SITE_NAME = "Mikhail Shytsko"
const SITE_TITLE = "Mikhail Shytsko — Software Engineer | Portfolio"
const SITE_DESCRIPTION =
  "Portfolio of Mikhail Shytsko, software engineer building AI-native systems at the intersection of scalable backend architecture and intelligent automation. Spring, Python, high-load microservices, LLM-powered tooling."

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    template: "%s | Mikhail Shytsko",
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  keywords: [
    "Mikhail Shytsko",
    "Software Engineer",
    "Portfolio",
    "Backend Engineer",
    "Spring",
    "Python",
    "AI Engineer",
    "LLM",
    "Microservices",
  ],
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    locale: "en_US",
    images: [
      {
        url: "/avatar.jpg",
        width: 400,
        height: 400,
        alt: "Mikhail Shytsko",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    creator: "@mikhailshytsko",
    images: ["/avatar.jpg"],
  },
  icons: {
    icon: "/icon.ico",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
  verification: {
    google: "WUcNdWGO-M-hvrdpkuisrOvwGi_KZ_MzMqCYiPah5M4",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-[#1a0033] font-sans antialiased">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
