'use client'
import { useWebSocket } from '@/hooks/useWebSocket'
import { useWebSocketData } from '@/hooks/useWebSocketData'
import { isConsoleData } from '@/types/types'
import { isServerUsageData } from '@/types/types'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function About() {
  const [logLines, setLogLines] = useState<string[] | null>(null)

  const { webSocketData, wsSendData } = useWebSocketData()
  const { ws } = useWebSocket()

  useEffect(() => {
    // TODO: Make a interval for reconnect if ws is disconnected
    // Envía el mensaje a través del WebSocket
    if (ws) {
      wsSendData({ action: 'log', type: 'log' }, (error) => {
        if (error) {
          console.error('Error al enviar los datos:', error)
        }
      })
    }
  }, [ws])

  useEffect(() => {
    if (!webSocketData) return

    if (isServerUsageData(webSocketData)) {
    } else if (isConsoleData(webSocketData)) {
      const { data } = webSocketData
      const lines = data.split('\n').slice(0, -1)
      setLogLines((prevLines) => [...(prevLines ?? []), ...lines])
    } else {
      console.error('No se han podido recuperar los datos', webSocketData)
    }
  }, [webSocketData])

  return (
    <>
      <div className="overflow-auto py-4 font-bold md:w-2/3 md:py-0">
        <h1 className="text-center text-2xl text-accent md:text-4xl">Log</h1>
        <div className="mt-4 flex flex-col border-4 border-secondary-light text-[#b3b3b3]">
          <div className="flex items-center justify-end border-b-4 border-secondary-light p-2">
            <Link
              className="w-fit rounded bg-accent px-2 py-1 text-[#ddd] hover:bg-accent-dark md:text-lg"
              href={'console'}
            >
              Go to console -&gt;
            </Link>
          </div>
          {logLines ? (
            <div className="h-[32rem] w-64 md:w-full overflow-y-auto text-nowrap p-2 text-xs md:text-lg">
              <ul>
                {logLines.map((l, i) => {
                  let spl = l.split(': ')
                  let info = spl[0]
                  let msg = spl[1]
                  return (
                    <li className="" key={i}>
                      <span
                        className={
                          'font-bold ' +
                          (info.includes('INFO')
                            ? 'text-blue-500 selection:bg-blue-700 selection:text-neutral-200'
                            : 'text-red-500 selection:bg-red-600 selection:text-neutral-200')
                        }
                      >
                        {info}
                      </span>
                      <span className="text-neutral-200 selection:bg-blue-700 selection:text-neutral-200">
                        :&nbsp;{msg}
                      </span>
                    </li>
                  )
                })}
              </ul>
            </div>
          ) : (
            <div className="flex h-[32rem] items-center justify-center">
              <div className="flex items-center gap-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="icon icon-tabler icons-tabler-outline icon-tabler-file-off"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M3 3l18 18" />
                  <path d="M7 3h7l5 5v7m0 4a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-14" />
                </svg>
                <p className="text-xl md:text-3xl">No hay registro</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  )
}
