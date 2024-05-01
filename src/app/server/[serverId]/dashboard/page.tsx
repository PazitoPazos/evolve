'use client'
import ServerDetails from '@/components/ServerDetails'
import StartStop from '@/components/StartStop'
import { ServerDetailsData, ServerUsageDetails } from '@/types/types.d'
import { isConsoleData, isServerUsageData } from '@/types/types'
import { useEffect, useRef, useState } from 'react'
import { useWebSocketData } from '@/hooks/useWebSocketData'
import { updateColorsAndStroke } from '@/utils/updateColorsAndStroke'
import { useWebSocket } from '@/hooks/useWebSocket'
import { useParams } from 'next/navigation'

export default function Dashboard() {
  const [serverDetails, setServerDetails] = useState<ServerDetailsData | null>(
    null
  )
  const [serverUsage, setServerUsage] = useState<ServerUsageDetails | null>(
    null
  )
  const [strokeColor, setStrokeColor] = useState<string>('currentColor')
  const [borderColor, setBorderColor] = useState<string>('currentColor')
  const circleRef = useRef<SVGCircleElement>(null)

  const { webSocketData, wsSendData } = useWebSocketData()
  const { ws } = useWebSocket()
  const { serverId } = useParams()

  useEffect(() => {
    fetch(`/api/server/id/${serverId}`, { method: 'GET' })
      .then((res) => res.json())
      .then((data) => {
        const details = JSON.parse(data)
        setServerDetails(details)
      })
  }, [])

  useEffect(() => {
    // TODO: Make a interval for reconnect if ws is disconnected
    // Envía el mensaje a través del WebSocket
    if (ws) {
      wsSendData({ action: 'subscribe', type: 'console' }, (error) => {
        if (error) {
          console.error('Error al enviar los datos:', error)
        }
      })
      wsSendData({ action: 'subscribe', type: 'heap' }, (error) => {
        if (error) {
          console.error('Error al enviar los datos:', error)
        }
      })
    }
  }, [ws])

  // TODO: Colors doesn't reset when close server
  useEffect(() => {
    if (!webSocketData) return

    if (isServerUsageData(webSocketData)) {
      const { data } = webSocketData
      setServerUsage(data)
    } else if (isConsoleData(webSocketData)) {
      const { data } = webSocketData
      if (data.includes('Closing Server')) {
        setServerUsage(null)
        setStrokeColor('currentColor')
        setBorderColor('currentColor')
      }
    } else {
      console.error('No se han podido recuperar los datos', webSocketData)
    }
  }, [webSocketData])

  useEffect(() => {
    if (!serverUsage) return

    const intervalServerUsage = setInterval(() => {
      const { strokeColor, borderColor } = updateColorsAndStroke(
        serverUsage,
        circleRef
      )

      setStrokeColor(strokeColor)
      setBorderColor(borderColor)
    }, 1000)

    return () => clearInterval(intervalServerUsage)
  }, [serverUsage])

  return (
    <div className="w-2/3">
      <h1 className="text-center text-4xl">Dashboard</h1>

      <ServerDetails serverDetails={serverDetails} />

      <StartStop />

      <div className="grid grid-cols-2 justify-items-center gap-8 text-lg">
        <div className="flex h-24 w-full items-center justify-between border-2 border-solid border-white px-4">
          <div className="">
            <p>CPU Usage</p>
          </div>
          <div className="">
            <svg className="h-16 w-16" viewBox="0 0 100 100">
              <circle
                className="transition-all duration-700 ease-in-out"
                ref={circleRef}
                cx="50"
                cy="50"
                r="40"
                fill="transparent"
                stroke={strokeColor}
                strokeWidth="8"
                transform="rotate(-90, 50, 50)"
              />
              <text
                x="52"
                y="52"
                dominantBaseline="middle"
                textAnchor="middle"
                fill="white"
                fontSize={24}
              >
                {serverUsage?.cpuUsage.toFixed(2) ?? 0}%
              </text>
            </svg>
          </div>
        </div>
        <div className="flex h-24 w-full items-center justify-between border-2 border-solid border-white px-4">
          <div className="">
            <p>RAM Usage</p>
          </div>
          <div className="">
            <div
              className="border-4 border-solid p-2 transition-all duration-700 ease-in-out"
              style={{ borderColor: borderColor }}
            >
              <p>
                {serverUsage?.usedMem.toFixed(2) ?? 0}GB /{' '}
                {serverUsage?.totalMem.toFixed(0) ?? 0}GB
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
