import type { Metadata } from 'next'
import './globals.css'
import { spaceMono } from '@/fonts/fonts'
import Navbar from '@/components/Navbar'
import { useWebSocket, WebSocketProvider } from '@/contexts/WebSocketContext'

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
        {/* <WebSocketProvider> */}
        <Navbar />
        {/* </WebSocketProvider> */}
        {children}
      </body>
    </html>
  )
}
