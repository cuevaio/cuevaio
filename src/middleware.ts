import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // Check if the request is for /meet
  if (request.nextUrl.pathname === '/meet') {
    return NextResponse.redirect('https://calendar.notion.so/meet/anthony-9n45j1rcc/4i9ij3lme')
  }

  return NextResponse.next()
}

// Configure the middleware to run only on the /meet path
export const config = {
  matcher: '/meet',
}
