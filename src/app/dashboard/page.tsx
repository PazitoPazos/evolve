'use client'
import ServerDetails from '@/components/ServerDetails'
import StartStop from '@/components/StartStop'
import { useWebSocket, WebSocketProvider } from '@/contexts/WebSocketContext'
import { blobToText } from '@/utils/blobToText'
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

  const [percentage, setPercentage] = useState<number>(0)
  const [strokeColor, setStrokeColor] = useState<string>('')
  const [borderColor, setBorderColor] = useState<string>('')
  const [usedRam, setUsedRam] = useState<number>(0)
  const circleRef = useRef<SVGCircleElement>(null)

  const { ws } = useWebSocket()

  useEffect(() => {
    if (!ws) return

    const handleMessage = (event: MessageEvent) => {
      blobToText(event.data).then((text) => {
        console.log(text)
        if (text.includes('Timings Reset')) {
          
        } else if (text.includes('Closing Server')) {
          
        }
      })
    }

    ws.onmessage = handleMessage

    return () => {
      ws.onmessage = null
    }
  }, [ws])

  useEffect(() => {
    const intervalPercentage = setInterval(() => {
      const newPercentage = getRandomPercentage(0, 100)
      const newColor = getColor(newPercentage)
      setPercentage(newPercentage)
      setStrokeColor(newColor)
    }, 1000)

    return () => clearInterval(intervalPercentage)
  }, [])

  useEffect(() => {
    const circle = circleRef.current
    if (circle) {
      const circumference = circle.getTotalLength()
      circle.style.strokeDasharray = `${circumference}px`
      circle.style.strokeDashoffset = `${((100 - percentage) / 100) * circumference}px`
    }
  }, [percentage])

  useEffect(() => {
    const intervalUsedRam = setInterval(() => {
      const newRamUsage = getRandomUsedRam(0, 6)
      const newColor = getColor((newRamUsage / 6) * 100)
      setUsedRam(newRamUsage)
      setBorderColor(newColor)
    }, 1000)

    return () => clearInterval(intervalUsedRam)
  }, [])

  function getRandomPercentage(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min
  }

  function getRandomUsedRam(min: number, max: number): number {
    return parseFloat((Math.random() * (max - min) + min).toFixed(2))
  }

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
    <WebSocketProvider>
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
                  {percentage}%
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
    </WebSocketProvider>
  )
}
