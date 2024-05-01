'use client'
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react'

interface WebSocketContextType {
  ws: WebSocket | null
}

const WebSocketContext = createContext<WebSocketContextType>({ ws: null })

export const useWebSocket = () => useContext(WebSocketContext)

export const WebSocketProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [ws, setWs] = useState<WebSocket | null>(null)

  useEffect(() => {
    const newWs = new WebSocket('ws://localhost:4000')

    newWs.onopen = () => {
      console.log('Evolve API conectada')
      setWs(newWs)
    }

    newWs.onclose = () => {
      console.log('Evolve API cerrada')
    }

    newWs.onerror = (error) => {
      // Manejar errores de conexión
      console.error('Error en la conexión con Evolve API:', error)
    }

    return () => {
      if (newWs.readyState === WebSocket.OPEN) {
        newWs.close()
      }
    }
  }, [])

  return (
    <WebSocketContext.Provider value={{ ws }}>
      {children}
    </WebSocketContext.Provider>
  )
}
