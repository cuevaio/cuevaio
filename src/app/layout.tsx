export const runtime = 'edge';

import type { Metadata } from "next";
import "./globals.css";

import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { cn } from "@/lib/utils";
import { Fathom } from "@/components/fathom";
import Noise from "@/components/noise";

export const metadata: Metadata = {
  title: "Anthony Cueva (caverne.io)",
  description: "Anthony Cueva is a software engineer based in Peru",
  openGraph: {
    title: "Anthony Cueva (caverne.io)",
    description: "Anthony Cueva is a software engineer based in Peru",
    images: [
      {
        url: "https://www.caverne.io/caverne_io_screenshot.png",
        width: 1200,
        height: 630,
        alt: "caverne.io",
      },
    ],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Anthony Cueva",
  url: "https://caverne.io",
  sameAs: [
    "https://www.linkedin.com/in/caverneio",
    "https://www.x.com/caverneio",
    "https://www.github.com/caverneio",
  ],
  email: "hi@caverne.io",
  jobTitle: "Software Engineer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(GeistMono.variable, GeistSans.variable)}>
        <Fathom />
        <div className="absolute top-0 bottom-0 right-0 left-0 overflow-hidden opacity-20 z-[9999] pointer-events-none">
          <Noise />
        </div>
        {children}
        <section>
          {/* Add JSON-LD to your page */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          />
        </section>
      </body>
    </html>
  );
}
