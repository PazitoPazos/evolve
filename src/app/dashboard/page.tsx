'use client'
import ServerDetails from '@/components/ServerDetails'
import StartStop from '@/components/StartStop'
import { useWebSocket } from '@/contexts/WebSocketContext'
import { ServerUsageDetails } from '@/types/types.d'
import { isConsoleData, isServerUsageData } from '@/types/types'
import { blobToJson } from '@/utils/blobToJson'
import { useEffect, useRef, useState } from 'react'

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
  const [strokeColor, setStrokeColor] = useState<string>('')
  const [borderColor, setBorderColor] = useState<string>('')
  const circleRef = useRef<SVGCircleElement>(null)

  const { ws } = useWebSocket()

  useEffect(() => {
    if (!ws) return

    const handleMessage = (event: MessageEvent) => {
      blobToJson(event.data).then((json) => {
        console.log(json)

        if (isServerUsageData(json)) {
          const { stream, type, data } = json
          const { cpuUsage, usedMem, totalMem } = data
          setServerUsage(data)
        } else if (isConsoleData(json)) {
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

  useEffect(() => {
    if (!serverUsage) return

    const intervalServerUsage = setInterval(() => {
      const { cpuUsage, usedMem } = serverUsage
      const newColorCpu = getColor(cpuUsage)
      const newColorRam = getColor((usedMem / 6) * 100)
      setStrokeColor(newColorCpu)
      setBorderColor(newColorRam)
    }, 1000)

    return () => clearInterval(intervalServerUsage)
  }, [serverUsage])

  useEffect(() => {
    const circle = circleRef.current
    if (circle && serverUsage) {
      const circumference = circle.getTotalLength()
      circle.style.strokeDasharray = `${circumference}px`
      circle.style.strokeDashoffset = `${((100 - serverUsage.cpuUsage) / 100) * circumference}px`
    }
  }, [serverUsage?.cpuUsage])

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
                {serverUsage?.totalMem ?? 0}GB
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
              <p>11/20</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
