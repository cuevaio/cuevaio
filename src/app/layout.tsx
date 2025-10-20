import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Noise from "@/components/noise";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Anthony Cueva (cueva.io)",
  description: "Anthony Cueva is a software engineer based in Peru",
  openGraph: {
    title: "Anthony Cueva (cueva.io)",
    description: "Anthony Cueva is a software engineer based in Peru",
    images: [
      {
        url: "https://www.cueva.io/cueva_io_screenshot.png",
        width: 1200,
        height: 630,
        alt: "cueva.io",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="absolute top-0 bottom-0 right-0 left-0 overflow-hidden opacity-20 z-9999 pointer-events-none">
          <Noise />
        </div>
        {children}
      </body>
    </html>
  );
}
