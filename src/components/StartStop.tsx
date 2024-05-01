import { useEffect, useState } from 'react'
import StartIcon from '../icons/StartIcon'
import StopIcon from '../icons/StopIcon'
import LoadingBar from './LoadingBar'
import { isConsoleData, isServerUsageData } from '@/types/types'
import { useWebSocketData } from '@/hooks/useWebSocketData'

function StartStop() {
  const [serverStatus, setServerStatus] = useState('offline')
  const { webSocketData, wsSendData } = useWebSocketData()

  useEffect(() => {
    if (!webSocketData) return

    if (isConsoleData(webSocketData)) {
      const { data } = webSocketData
      if (data.includes('Timings Reset')) {
        setServerStatus('running')
      } else if (data.includes('Closing Server')) {
        setServerStatus('offline')
      }
    } else if (isServerUsageData(webSocketData)) {
    } else {
      console.error('No se han podido recuperar los datos', webSocketData)
    }

    return () => {
      if (!webSocketData) setServerStatus('offline')
    }
  }, [webSocketData])

  function handleClickStart() {
    wsSendData({ action: 'start' }, (error) => {
      if (error) {
        console.error('Error al enviar los datos:', error)
      } else {
        setServerStatus('loading')
      }
    })
  }

  function handleClickStop() {
    wsSendData({ action: 'stop' }, (error) => {
      if (error) {
        console.error('Error al enviar los datos:', error)
      } else {
        setServerStatus('loading')
      }
    })
  }

  return (
    <div className="bt-0 relative mb-4 box-border flex h-12 w-full border-collapse items-center justify-center border-2 border-solid border-white">
      <button
        className={
          serverStatus === 'loading'
            ? 'hidden'
            : 'flex cursor-pointer items-center gap-1 text-lg hover:text-gray-400'
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
