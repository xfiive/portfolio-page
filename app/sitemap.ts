import type { MetadataRoute } from "next"

export const dynamic = "force-static"

const SITE_URL = "https://mikhail.shytsko.com"

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date(process.env.NEXT_PUBLIC_LAST_UPDATED ?? Date.now())

  return [
    {
      url: SITE_URL,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/cv.pdf`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ]
}
