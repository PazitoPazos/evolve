'use client'
import { ServerUsageData, ConsoleData } from '@/types/types.d'
import { blobToJson } from '@/utils/blobToJson'
import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react'
import { useWebSocket } from './WebSocketContext'
import { isConsoleData, isServerUsageData } from '@/types/types'

type WebSocketData = ConsoleData | ServerUsageData

interface WebSocketDataContextType {
  webSocketData: WebSocketData | null
  wsSendData: (data: any, callback: (error: Error | null) => void) => void
}

const defaultValue: WebSocketDataContextType = {
  webSocketData: null,
  wsSendData: () => {},
}

const WebSocketDataContext = createContext(defaultValue)

export const useWebSocketData = () => useContext(WebSocketDataContext)

export const WebSocketDataProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [webSocketData, setWebSocketData] = useState<WebSocketData | null>(null)
  const { ws } = useWebSocket()

  useEffect(() => {
    if (!ws) return

    const handleMessage = (event: MessageEvent) => {
      blobToJson(event.data).then((json) => {
        // Actualiza los datos según el tipo de mensaje
        if (isServerUsageData(json) || isConsoleData(json)) {
          setWebSocketData(json)
        } else {
          console.error('El JSON está malito', json)
        }
      })
    }

    ws.onmessage = handleMessage

    return () => {
      ws.onmessage = null
    }
  }, [ws])

  function wsSendData(data: any, callback: (error: Error | null) => void) {
    if (!ws) {
      callback(new Error('WebSocket connection not available'))
      return
    }

    try {
      ws.send(JSON.stringify(data))
      callback(null)
    } catch (error) {
      callback(error as DOMException)
    }
  }

  return (
    <WebSocketDataContext.Provider value={{ webSocketData, wsSendData }}>
      {children}
    </WebSocketDataContext.Provider>
  )
}
