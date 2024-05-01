import type { Metadata } from 'next'
import '@/app/globals.css'
import { spaceMono } from '@/fonts/fonts'
import NavbarTop from '@/components/NavbarTop'
import { getSession } from '@/lib/session'
import { Providers } from '@/components/Providers'

export const metadata: Metadata = {
  title: 'Project SMWA',
  description: 'Server Management Web App',
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const session = await getSession()

  return (
    <html lang="en">
      <body className={'h-[94vh] ' + spaceMono.className}>
        <Providers session={session?.user}>
          <NavbarTop />
          <div className="mt-16 h-full">{children}</div>
        </Providers>
      </body>
    </html>
  )
}
