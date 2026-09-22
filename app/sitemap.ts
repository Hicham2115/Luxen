import type { MetadataRoute } from "next";
import { services } from "@/lib/services";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://www.luxen.es",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    ...services.map((service) => ({
      url: `https://www.luxen.es/services/${service.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
