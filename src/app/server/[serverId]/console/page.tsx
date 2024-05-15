'use client'
import { useWebSocket } from '@/hooks/useWebSocket'
import { useWebSocketData } from '@/hooks/useWebSocketData'
import ChevronRightIcon from '@/icons/ChevronRightIcon'
import { isConsoleData, isServerUsageData } from '@/types/types'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function Console() {
  const [consoleLines, setConsoleLines] = useState<string[] | null>(null)
  const { webSocketData, wsSendData } = useWebSocketData()
  const { ws } = useWebSocket()

  const lineRegex = /^\[\d{2}:\d{2}:\d{2} [A-Z]*\]/

  useEffect(() => {
    // TODO: Make a interval for reconnect if ws is disconnected
    // Envía el mensaje a través del WebSocket
    if (ws) {
      wsSendData({ action: 'unsubscribe', type: 'console' }, (error) => {
        if (error) {
          console.error('Error al enviar los datos:', error)
        }
      })
      wsSendData({ action: 'unsubscribe', type: 'heap' }, (error) => {
        if (error) {
          console.error('Error al enviar los datos:', error)
        }
      })
      wsSendData({ action: 'subscribe', type: 'console' }, (error) => {
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
      if (lineRegex.test(data)) {
        const lines = data.split('\n').filter((line) => line.trim() !== '')
        setConsoleLines((prevLines) => [...(prevLines ?? []), ...lines])
      } else if (data.includes('Closing Server')) {
        setConsoleLines(null)
      }
    } else {
      console.error('No se han podido recuperar los datos', webSocketData)
    }
  }, [webSocketData])

  return (
    <>
      <div className="overflow-auto py-4 font-bold md:w-2/3 md:py-0">
        <h1 className="text-center text-2xl text-accent md:text-4xl">
          Console
        </h1>
        <div className="mt-4 flex flex-col border-4 border-secondary-light text-[#b3b3b3]">
          <div className="flex items-center justify-end border-b-4 border-secondary-light p-2">
            <Link
              className="w-fit rounded bg-accent px-2 py-1 text-[#ddd] hover:bg-accent-dark md:text-lg"
              href={'log'}
            >
              Go to log -&gt;
            </Link>
          </div>
          {consoleLines ? (
            <>
              <div className="flex h-[32rem] flex-col-reverse overflow-y-auto p-2 text-xs md:text-lg">
                <ul>
                  {consoleLines.map((l, i) => {
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
              <div className="flex gap-1 p-2 pr-10">
                <ChevronRightIcon />
                <input
                  className="w-full border-b-2 bg-transparent outline-none"
                  autoFocus
                  type="text"
                  name=""
                  id=""
                />
              </div>
            </>
          ) : (
            <>
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
                    className="icon icon-tabler icons-tabler-outline icon-tabler-plug-connected-x"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M20 16l-4 4" />
                    <path d="M7 12l5 5l-1.5 1.5a3.536 3.536 0 1 1 -5 -5l1.5 -1.5z" />
                    <path d="M17 12l-5 -5l1.5 -1.5a3.536 3.536 0 1 1 5 5l-1.5 1.5z" />
                    <path d="M3 21l2.5 -2.5" />
                    <path d="M18.5 5.5l2.5 -2.5" />
                    <path d="M10 11l-2 2" />
                    <path d="M13 14l-2 2" />
                    <path d="M16 16l4 4" />
                  </svg>
                  <p className="text-xl md:text-3xl">Desconectado</p>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  )
}
