import { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Schedule a Meeting with Anthony",
  description: "Book a time to meet with Anthony",
  openGraph: {
    title: "Schedule a Meeting with Anthony",
    description: "Book a time to meet with Anthony",
    images: [
      {
        url: "/api/og/meet",
        width: 1200,
        height: 630,
        alt: "Schedule a Meeting with Anthony",
      },
    ],
  },
  metadataBase: new URL("https://cueva.io"),
};

export default function MeetPage() {
  redirect("https://calendar.notion.so/meet/anthony-9n45j1rcc/4i9ij3lme");
}
