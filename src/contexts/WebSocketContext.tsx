'use client'
import { createContext, useContext, useEffect, useState } from 'react'

interface WebSocketContextType {
  ws: WebSocket | null
}

const WebSocketContext = createContext<WebSocketContextType>({ ws: null })

export const useWebSocket = () => useContext(WebSocketContext)

interface WebSocketProviderProps {
  children: React.ReactNode
}

export const WebSocketProvider = ({ children }: WebSocketProviderProps) => {
  const [ws, setWs] = useState<WebSocket | null>(null)

  useEffect(() => {
    const newWs = new WebSocket('ws://localhost:4000')
    setWs(newWs)

    // return () => {
    //   newWs.close()
    // }
  }, [])

  return (
    <WebSocketContext.Provider value={{ ws }}>
      {children}
    </WebSocketContext.Provider>
  )
}
