import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useWebSocket } from '@/contexts/WebSocketContext'
import { SubscribeData } from '@/types/types.d'
import { useWebSocketData } from './WebSocketDataContext'

const useRouteWebSocket = () => {
  const router = useRouter()
  const { ws } = useWebSocket()
  const { wsSendData } = useWebSocketData()

  useEffect(() => {
    const handleMessageBasedOnRoute = () => {
      const currentRoute = router.pathname
      let message: SubscribeData | null = null

      // Determina el mensaje basado en la ruta actual
      switch (currentRoute) {
        case '/dashboard':
          message = { action: 'unsubscribe', type: 'console' }
          message = { action: 'subscribe', type: 'server' }
          break
        case '/console':
          message = { action: 'unsubscribe', type: 'server' }
          message = { action: 'subscribe', type: 'console' }
          break
        default:
          message = null
          break
      }

      // Envía el mensaje a través del WebSocket
      if (ws && message) {
        wsSendData(message, (error) => {
          if (error) {
            console.error('Error al enviar los datos:', error)
          }
        })
      }
    }

    // Llama a handleMessageBasedOnRoute cuando cambia la ruta
    router.events.on('routeChangeComplete', handleMessageBasedOnRoute)

    // Elimina el listener del evento cuando el componente se desmonta
    return () => {
      router.events.off('routeChangeComplete', handleMessageBasedOnRoute)
    }
  }, [router, ws])

  return null
}

export default useRouteWebSocket
