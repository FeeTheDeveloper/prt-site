import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "PRT Logistics & Freight",
    short_name: "PRT Freight",
    description:
      "Veteran-owned freight brokerage delivering nationwide FTL, LTL, and dedicated logistics solutions.",
    start_url: "/",
    display: "standalone",
    theme_color: "#002040",
    background_color: "#F0F0F0",
    icons: [
      {
        src: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
      {
        src: "/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        src: "/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
    ],
  };
}
