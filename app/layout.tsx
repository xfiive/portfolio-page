import type React from "react"
import type { Metadata, Viewport } from "next"
import "@/app/globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const SITE_URL = "https://mikhail.shytsko.com"
const SITE_NAME = "Mikhail Shytsko"
const SITE_TITLE = "Mikhail Shytsko — Software Engineer | Portfolio"
const SITE_DESCRIPTION =
  "Mikhail Shytsko — Solutions & AI Engineer at Slovenská sporiteľňa. Founder of Seedfast, a schema-aware data generator for PostgreSQL."

const personLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${SITE_URL}/#person`,
  name: SITE_NAME,
  url: SITE_URL,
  image: `${SITE_URL}/avatar.jpg`,
  jobTitle: "Solutions & AI Engineer",
  description:
    "Software engineer building AI-native systems and high-load backend services. Founder of Seedfast, a schema-aware data generator for PostgreSQL.",
  worksFor: {
    "@type": "Organization",
    name: "Slovenská sporiteľňa",
    url: "https://www.slsp.sk",
    description: "Slovakia's largest retail bank, serving 2M+ customers.",
  },
  knowsAbout: [
    "Software Engineering",
    "Backend Architecture",
    "Spring Framework",
    "Python",
    "Microservices",
    "LLM Engineering",
    "AI Systems",
    "PostgreSQL",
    "Schema-aware Data Generation",
  ],
  sameAs: [
    "https://github.com/xfiive",
    "https://x.com/mikhailshytsko",
    "https://www.linkedin.com/in/mikhail-shytsko/",
    "https://seedfa.st",
    "https://dzone.com/users/5530357",
    "https://linktr.ee/mikhsh",
  ],
}

const seedfastLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://seedfa.st/#organization",
  name: "Seedfast",
  url: "https://seedfa.st",
  description:
    "Schema-aware test data generator for PostgreSQL. Produces referentially consistent fake data directly from your database schema for compliance-sensitive industries.",
  founder: { "@id": `${SITE_URL}/#person` },
  sameAs: ["https://seedfa.st"],
}

const websiteLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: SITE_URL,
  name: "Mikhail Shytsko — Portfolio",
  description: SITE_DESCRIPTION,
  inLanguage: "en",
  author: { "@id": `${SITE_URL}/#person` },
  publisher: { "@id": `${SITE_URL}/#person` },
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

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#1a0033",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-[#1a0033] font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(seedfastLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteLd) }}
        />
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
