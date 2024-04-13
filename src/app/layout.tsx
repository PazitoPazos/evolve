import type { Metadata } from 'next'
import './globals.css'
import { spaceMono } from '@/fonts/fonts'
import Navbar from '@/components/Navbar'
import { WebSocketProvider } from '@/contexts/WebSocketContext'
import { WebSocketDataProvider } from '@/contexts/WebSocketDataContext'

export const metadata: Metadata = {
  title: 'Project SMWA',
  description: 'Server Management Web App',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={
          'm-0 flex min-h-screen min-w-80 items-center justify-center ' +
          spaceMono.className
        }
      >
        <WebSocketProvider>
          <WebSocketDataProvider>
            <Navbar />
            {children}
          </WebSocketDataProvider>
        </WebSocketProvider>
      </body>
    </html>
  )
}
