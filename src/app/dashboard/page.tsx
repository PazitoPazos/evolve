'use client'
import ServerDetails from '@/components/ServerDetails'
import StartStop from '@/components/StartStop'
import { useWebSocket, WebSocketProvider } from '@/contexts/WebSocketContext'
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
  const [percentage, setPercentage] = useState<number>(0)
  const [strokeColor, setStrokeColor] = useState<string>('')
  const [borderColor, setBorderColor] = useState<string>('')
  const [usedRam, setUsedRam] = useState<number>(0)
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

    const intervalPercentage = setInterval(() => {
      const newPercentage = serverUsage.cpuUsage
      const newColor = getColor(newPercentage)
      setPercentage(newPercentage)
      setStrokeColor(newColor)
    }, 1000)

    return () => clearInterval(intervalPercentage)
  }, [serverUsage])

  useEffect(() => {
    const circle = circleRef.current
    if (circle) {
      const circumference = circle.getTotalLength()
      circle.style.strokeDasharray = `${circumference}px`
      circle.style.strokeDashoffset = `${((100 - percentage) / 100) * circumference}px`
    }
  }, [percentage])

  useEffect(() => {
    if (!serverUsage) return

    const intervalUsedRam = setInterval(() => {
      const newRamUsage = serverUsage.usedMem
      const newColor = getColor((newRamUsage / 6) * 100)
      setUsedRam(newRamUsage)
      setBorderColor(newColor)
    }, 1000)

    return () => clearInterval(intervalUsedRam)
  }, [serverUsage])

  function getColor(percentage: number): string {
    const green = [0, 137, 111]
    const yellow = [251, 191, 36]
    const red = [195, 74, 54]

    let color: number[]

    if (percentage <= 50) {
      color = interpolateColor(green, yellow, percentage / 50)
    } else {
      color = interpolateColor(yellow, red, (percentage - 50) / 50)
    }

    return `rgb(${color[0]}, ${color[1]}, ${color[2]})`
  }

  function interpolateColor(
    color1: number[],
    color2: number[],
    factor: number
  ): number[] {
    const result = []
    for (let i = 0; i < 3; i++) {
      result[i] = Math.round(color1[i] + factor * (color2[i] - color1[i]))
    }
    return result
  }

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
                {percentage.toFixed(2)}%
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
              className=" border-4 border-solid p-2"
              style={{ borderColor: borderColor }}
            >
              <p>{usedRam.toFixed(2)}GB / 6GB</p>
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
