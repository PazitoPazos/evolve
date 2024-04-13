import { useEffect, useState } from 'react'
import StartIcon from '../icons/StartIcon'
import StopIcon from '../icons/StopIcon'
import LoadingBar from './LoadingBar'
import { blobToJson } from '@/utils/blobToJson'
import { useWebSocket } from '@/contexts/WebSocketContext'
import { isConsoleData, isServerUsageData } from '@/types/types'

interface StartStopProps {
  status: string
}

function StartStop({ status }: StartStopProps) {
  const [serverStatus, setServerStatus] = useState(status)
  const { ws } = useWebSocket()

  useEffect(() => {
    if (!ws) return

    const handleMessage = (event: MessageEvent) => {
      blobToJson(event.data).then((json) => {
        if (isConsoleData(json)) {
          const { stream, type, data } = json
          if (data.includes('Timings Reset')) {
            setServerStatus('running')
          } else if (data.includes('Closing Server')) {
            setServerStatus('offline')
          }
        } else if (isServerUsageData(json)) {
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

  function handleClickStart() {
    if (ws) {
      ws.send('start')
      setServerStatus('loading')
    }
  }

  function handleClickStop() {
    if (ws) {
      ws.send('stop')
      setServerStatus('loading')
    }
  }

  return (
    <div className="bt-0 relative mb-4 box-border flex h-12 w-full border-collapse items-center justify-center border-2 border-solid border-white">
      <button
        className={
          serverStatus === 'loading'
            ? 'hidden'
            : 'flex cursor-pointer items-center gap-1 hover:text-gray-400'
        }
        onClick={
          serverStatus === 'running' ? handleClickStop : handleClickStart
        }
      >
        {serverStatus === 'running' ? <StopIcon /> : <StartIcon />}
        {serverStatus === 'running' ? <p>Stop</p> : <p>Start</p>}
      </button>
      {serverStatus === 'loading' && <LoadingBar barsNumber={3} />}
    </div>
  )
}

export default StartStop
