'use client'
import ServerDetails from '@/components/ServerDetails'
import StartStop from '@/components/StartStop'
import { ServerUsageDetails } from '@/types/types.d'
import { isConsoleData, isServerUsageData } from '@/types/types'
import { useEffect, useRef, useState } from 'react'
import { useWebSocketData } from '@/contexts/WebSocketDataContext'
import { updateColorsAndStroke } from '@/utils/updateColorsAndStroke'

export default function Dashboard() {
  const serverDetails = {
    serverName: 'Server 3',
    serverId: '0003',
    serverAddress: 'server3.example.com',
    serverPort: '25565',
    serverVersion: 'Bukkit 1.19.0',
    serverDescription: 'Server 3 description',
    serverIcon:
      'https://cdn.shopify.com/s/files/1/0405/2058/1286/articles/how-to-add-a-server-icon-to-your-minecraft-server-435588.png?v=1662094872',
    serverStatus: 'offline',
  }

  const [serverUsage, setServerUsage] = useState<ServerUsageDetails | null>(
    null
  )
  const [strokeColor, setStrokeColor] = useState<string>('currentColor')
  const [borderColor, setBorderColor] = useState<string>('currentColor')
  const circleRef = useRef<SVGCircleElement>(null)

  const { webSocketData } = useWebSocketData()

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
    <div className="max-w-7xl text-center">
      <h1 className="text-3xl">Dashboard</h1>

      <ServerDetails serverDetails={serverDetails} />

      <StartStop status={serverDetails.serverStatus} />

      <div className="grid w-full grid-cols-[repeat(3,minmax(300px,1fr))] justify-items-center gap-8">
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
                x="50"
                y="50"
                dominantBaseline="middle"
                textAnchor="middle"
                fill="white"
                fontSize={20}
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
        <div className="flex h-24 w-full items-center justify-between border-2 border-solid border-white px-4">
          <div className="">
            <p>Players online</p>
          </div>
          <div className="">
            <div>
              <p>0/0</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
