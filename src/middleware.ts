import { NextRequest, NextResponse } from 'next/server'
import { decrypt } from '@/lib/session'
import { cookies } from 'next/headers'

const protectedRoutes = [
  '/dashboard',
  '/servers',
  '/options',
  '/console',
  '/log',
  '/access',
  '/account',
]
const publicRoutes = ['/login', '/register', '/']

export default async function middleware(req: NextRequest) {
  // 1. Check if the current route is a dynamic server route without dashboard
  const path = req.nextUrl.pathname
  const isDynamicServerRoute =
    /^\/server\/[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}\/?$/i.test(
      path
    )

  // 2. If it is, redirect to /dashboard
  if (isDynamicServerRoute) {
    return NextResponse.redirect(new URL(`${path}/dashboard`, req.nextUrl))
  }

  // 3. Check if the current route is protected or public
  const isProtectedRoute = protectedRoutes.includes(path)
  const isPublicRoute = publicRoutes.includes(path)

  // 4. Decrypt the session from the cookie
  const cookie = cookies().get('session')?.value
  const session = await decrypt(cookie)

  // 5. Redirect to / if the user is not authenticated
  if (isProtectedRoute && !session) {
    return NextResponse.redirect(new URL('/login', req.nextUrl))
  }

  // 6. Redirect to /dashboard if the user is authenticated
  if (isPublicRoute && session?.user) {
    return NextResponse.redirect(new URL('/servers', req.nextUrl))
  }

  return NextResponse.next()
}

// Routes Middleware should not run on
export const config = {
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
}
