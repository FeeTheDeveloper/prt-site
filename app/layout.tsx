import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://prtlogisticsandfreight.com"),
  title: {
    default: "PRT Logistics & Freight | Veteran-Owned Freight Brokerage",
    template: "PRT Logistics & Freight | %s",
  },
  description:
    "PRT Logistics and Freight LLC is a veteran-owned freight brokerage providing nationwide FTL, LTL, and dedicated logistics solutions with military-grade accountability.",
  openGraph: {
    type: "website",
    title: "PRT Logistics & Freight | Veteran-Owned Freight Brokerage",
    description:
      "Veteran-owned freight brokerage delivering disciplined execution, compliance-minded carrier vetting, and reliable nationwide logistics coordination.",
    url: "https://prtlogisticsandfreight.com",
    siteName: "PRT Logistics & Freight",
    locale: "en_US",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "PRT Logistics & Freight — Veteran-Owned Freight Brokerage",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PRT Logistics & Freight | Veteran-Owned Freight Brokerage",
    description:
      "Veteran-owned freight brokerage delivering disciplined execution, compliance-minded carrier vetting, and reliable nationwide logistics coordination.",
    images: ["/og.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen font-sans antialiased">{children}</body>
    </html>
  );
}
