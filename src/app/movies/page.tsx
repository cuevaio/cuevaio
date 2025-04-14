import { Metadata } from "next";

export const runtime = "edge";

export const metadata: Metadata = {
  title: "Anthony's recommended movies",
  description: "collection of movies recommended by Anthony",
  openGraph: {
    title: "Anthony's recommended movies",
    description: "collection of movies recommended by Anthony",
    images: [
      {
        url: "/movies.png",
        width: 1200,
        height: 630,
        alt: "Anthony's recommended movies",
      },
    ],
    url: "https://cueva.io/movies",
  },
  metadataBase: new URL("https://cueva.io"),
};

export default function MoviesPage() {
  return (
    <html lang="en">
      <head>
        <meta
          httpEquiv="refresh"
          content="0;url=https://docs.google.com/document/d/1pBCgOaqG1s9KEYl0vrcv42M8FrQbOrtv5r4onXRbOEI/edit?usp=sharing"
        />
      </head>
      <body>
        <p>Redirecting to movies list...</p>
      </body>
    </html>
  );
}
