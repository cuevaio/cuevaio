import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // Check if the request is for /meet
  if (request.nextUrl.pathname === '/meet') {
    // Create a response with the redirect
    const response = NextResponse.redirect('https://calendar.notion.so/meet/anthony-9n45j1rcc/4i9ij3lme')
    
    // Set Open Graph metadata
    response.headers.set('og:image', 'https://www.cueva.io/meet.png')
    response.headers.set('og:title', 'Schedule a Meeting with Anthony')
    response.headers.set('og:description', 'Book a time to meet with Anthony')
    
    return response
  }

  return NextResponse.next()
}

// Configure the middleware to run only on the /meet path
export const config = {
  matcher: '/meet',
}
