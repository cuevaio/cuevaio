import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { detectBot } from "./lib/detect-bot";

export function middleware(request: NextRequest) {
  // Check if the path is /meet
  if (
    request.nextUrl.pathname === "/meet" ||
    request.nextUrl.pathname === "/cal" ||
    request.nextUrl.pathname === "/calendar" ||
    request.nextUrl.pathname === "/call" ||
    request.nextUrl.pathname === "/movies"
  ) {
    // Check if it's a bot
    if (detectBot(request)) {
      // For bots, let them access the page
      return NextResponse.next();
    } else {
      if (request.nextUrl.pathname === "/movies") {
        // For users, redirect to the Google Docs
        return NextResponse.redirect(
          "https://docs.google.com/document/d/1pBCgOaqG1s9KEYl0vrcv42M8FrQbOrtv5r4onXRbOEI/edit?usp=sharing"
        );
      }

      // For users, redirect to the Notion calendar
      return NextResponse.redirect(
        "https://calendar.notion.so/meet/anthony-9n45j1rcc/4i9ij3lme"
      );
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/meet", "/cal", "/calendar", "/call", "/movies"],
};
