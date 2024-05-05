import type { Metadata } from 'next'
import '@/app/globals.css'
import { spaceMono } from '@/fonts/fonts'
import NavbarTop from '@/components/NavbarTop'
import { getSession } from '@/lib/session'
import { Providers } from '@/components/Providers'

export const metadata: Metadata = {
  title: 'Evolve',
  description: 'Minecraft Server Hosting',
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const session = await getSession()

  return (
    <html lang="en">
      <body className={'h-screen bg-primary-dark ' + spaceMono.className}>
        <Providers session={session?.user}>
        <NavbarTop />
        <div className="pt-16 h-full">{children}</div>
        </Providers>
      </body>
    </html>
  )
}
