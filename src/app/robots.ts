export const runtime = "edge";

import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: ["/", "/meet", "/cal", "/calendar", "/call"],
    },
    sitemap: "https://cueva.io/sitemap.xml",
  };
}
