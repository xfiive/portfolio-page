import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter, JetBrains_Mono, Space_Grotesk } from "next/font/google"
import "@/app/globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin", "latin-ext"],
  weight: ["500", "600", "700"],
  variable: "--font-head",
})
const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-body",
})
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin", "latin-ext"],
  weight: ["500", "600"],
  variable: "--font-mono",
})

const SITE_URL = "https://mikhail.shytsko.com"
const SITE_NAME = "Mikhail Shytsko"
const SITE_TITLE = "Mikhail Shytsko — Software & AI Engineer | Portfolio"
const SITE_DESCRIPTION =
  "Mikhail Shytsko — Software & AI Engineer in Bratislava, Slovakia. Solutions & AI Engineer at Slovenská sporiteľňa and founder of Seedfast, a schema-aware synthetic-data generator for PostgreSQL."

// Single canonical Seedfast description — keep in sync with public/llms.txt and seedfa.st.
const SEEDFAST_DESCRIPTION =
  "Schema-aware synthetic test-data generator for PostgreSQL. Reads a database schema and produces referentially consistent, realistic data in under 3 minutes — built for compliance-sensitive industries where production data cannot leave secure environments."

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfilePage",
      "@id": `${SITE_URL}/#profilepage`,
      url: SITE_URL,
      name: SITE_TITLE,
      inLanguage: "en",
      isPartOf: { "@id": `${SITE_URL}/#website` },
      mainEntity: { "@id": `${SITE_URL}/#person` },
      dateCreated: "2025-05-17",
      dateModified: process.env.NEXT_PUBLIC_LAST_UPDATED,
    },
    {
      "@type": "Person",
      "@id": `${SITE_URL}/#person`,
      name: SITE_NAME,
      givenName: "Mikhail",
      familyName: "Shytsko",
      url: SITE_URL,
      email: "mailto:mikhail.shytsko@gmail.com",
      image: {
        "@type": "ImageObject",
        "@id": `${SITE_URL}/#avatar`,
        url: `${SITE_URL}/avatar.jpg`,
        contentUrl: `${SITE_URL}/avatar.jpg`,
        width: 640,
        height: 640,
        caption: "Mikhail Shytsko — Software & AI Engineer",
      },
      jobTitle: "Software & AI Engineer",
      description:
        "Software & AI engineer based in Bratislava, Slovakia. Founder of Seedfast, a schema-aware synthetic test-data generator for PostgreSQL, and Solutions & AI Engineer at Slovenská sporiteľňa.",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Bratislava",
        addressCountry: "SK",
      },
      identifier: {
        "@type": "PropertyValue",
        propertyID: "GitHub",
        value: "xfiive",
      },
      alumniOf: {
        "@type": "CollegeOrUniversity",
        name: "Technical University of Košice",
        url: "https://www.tuke.sk/",
      },
      worksFor: [
        { "@id": "https://seedfa.st/#organization" },
        {
          "@type": "EmployeeRole",
          roleName: "Solutions & AI Engineer",
          worksFor: { "@id": "https://www.slsp.sk/#organization" },
        },
      ],
      award:
        "1st place, DDAccelerator Finals 2026 — Intelligent Digital Technology category, as the only Slovak startup among 9 countries (with Seedfast)",
      knowsLanguage: ["en", "sk", "ru", "be"],
      knowsAbout: [
        "LLM Engineering",
        "Agentic AI Systems",
        "Model Context Protocol (MCP)",
        "LLM Evaluation",
        "Synthetic Data Generation",
        "Software Engineering",
        "Backend Architecture",
        "Spring Framework",
        "Kotlin",
        "Python",
        "Go",
        "Apache Kafka",
        "Microservices",
        "PostgreSQL",
      ],
      sameAs: [
        "https://seedfa.st/about",
        "https://www.linkedin.com/in/mikhail-shytsko/",
        "https://github.com/xfiive",
        "https://x.com/mikhailshytsko",
        "https://hackernoon.com/u/mikhail-shytsko",
        "https://linktr.ee/mikhsh",
      ],
    },
    {
      "@type": "Organization",
      "@id": "https://seedfa.st/#organization",
      name: "Seedfast",
      url: "https://seedfa.st",
      description: SEEDFAST_DESCRIPTION,
      founder: { "@id": `${SITE_URL}/#person` },
      award: "1st place, DDAccelerator Finals 2026 — Intelligent Digital Technology category",
    },
    {
      "@type": "Organization",
      "@id": "https://www.slsp.sk/#organization",
      name: "Slovenská sporiteľňa",
      url: "https://www.slsp.sk",
      description: "Slovakia's largest retail bank, serving 2M+ customers.",
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "Mikhail Shytsko — Portfolio",
      description: SITE_DESCRIPTION,
      inLanguage: "en",
      author: { "@id": `${SITE_URL}/#person` },
      publisher: { "@id": `${SITE_URL}/#person` },
    },
  ],
}

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
  alternates: {
    canonical: "/",
    types: {
      "text/markdown": "/llms.txt",
    },
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
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Mikhail Shytsko — Software & AI Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    creator: "@mikhailshytsko",
    images: ["/og-image.jpg"],
  },
  icons: {
    icon: [
      { url: "/icon.ico", sizes: "16x16 32x32 48x48" },
      { url: "/icon.png", type: "image/png", sizes: "192x192" },
    ],
    shortcut: "/icon.png",
    apple: "/apple-touch-icon.png",
  },
  verification: {
    google: "WUcNdWGO-M-hvrdpkuisrOvwGi_KZ_MzMqCYiPah5M4",
  },
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#04191d",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body className="min-h-screen bg-[#04191d] font-body antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
