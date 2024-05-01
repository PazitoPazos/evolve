'use client'

import { AuthProvider } from '@/hooks/useAuth'
import { WebSocketProvider } from '@/hooks/useWebSocket'
import { WebSocketDataProvider } from '@/hooks/useWebSocketData'
import { SessionPayload } from '@/lib/definitions'

export function Providers({
  session,
  children,
}: Readonly<{
  session: SessionPayload | undefined
  children: React.ReactNode
}>) {
  return (
    <AuthProvider session={session}>
      <WebSocketProvider>
        <WebSocketDataProvider>{children}</WebSocketDataProvider>
      </WebSocketProvider>
    </AuthProvider>
  )
}
