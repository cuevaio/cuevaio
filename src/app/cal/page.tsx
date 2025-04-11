import { Metadata } from "next";

export const runtime = "edge";
export const revalidate = 0;

export const metadata: Metadata = {
  title: "Schedule a Meeting with Anthony",
  description: "Book a time to meet with Anthony",
  openGraph: {
    title: "Schedule a Meeting with Anthony",
    description: "Book a time to meet with Anthony",
    images: [
      {
        url: "/meet.png",
        width: 1200,
        height: 630,
        alt: "Schedule a Meeting",
      },
    ],
  },
  metadataBase: new URL("https://cueva.io"),
};

export default function MeetPage() {
  return (
    <html lang="en">
      <head>
        <meta
          httpEquiv="refresh"
          content="0;url=https://calendar.notion.so/meet/anthony-9n45j1rcc/4i9ij3lme"
        />
      </head>
      <body>
        <p>Redirecting to scheduling page...</p>
      </body>
    </html>
  );
}
