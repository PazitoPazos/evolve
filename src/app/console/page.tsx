import ChevronRight from '@/icons/ChevronRight'
import Link from 'next/link'

export default function Console() {
  const logHistory = [
    '[12:00:00] [ServerMain/INFO]: Player1 joined the game',
    '[12:05:00] [ServerMain/WARN]: Player2 left the game',
    '[12:10:00] [ServerMain/INFO]: Player3: Hello everyone!',
    '[12:15:00] [ServerMain/INFO]: Player4 was slain by Zombie',
    '[12:20:00] [ServerMain/INFO]: Player1 joined the game',
    '[12:25:00] [ServerMain/WARN]: Player2 left the game',
    '[12:30:00] [ServerMain/INFO]: Player3: Hello everyone!',
    '[12:35:00] [ServerMain/INFO]: Player4 was slain by Zombie',
    '[12:40:00] [ServerMain/INFO]: Player1 joined the game',
    '[12:45:00] [ServerMain/WARN]: Player2 left the game',
    '[12:50:00] [ServerMain/INFO]: Player3: Hello everyone!',
    '[12:55:00] [ServerMain/INFO]: Player4 was slain by Zombie',
    '[13:00:00] [ServerMain/INFO]: Player1 joined the game',
    '[13:05:00] [ServerMain/WARN]: Player2 left the game',
    '[13:10:00] [ServerMain/INFO]: Player3: Hello everyone!',
    '[13:15:00] [ServerMain/INFO]: Player4 was slain by Zombie',
    '[13:20:00] [ServerMain/INFO]: Player1 joined the game',
    '[13:25:00] [ServerMain/WARN]: Player2 left the game',
    '[13:30:00] [ServerMain/INFO]: Player3: Hello everyone!',
    '[13:35:00] [ServerMain/INFO]: Player4 was slain by Zombie',
    '[13:40:00] [ServerMain/INFO]: Player1 joined the game',
    '[13:45:00] [ServerMain/WARN]: Player2 left the game',
    '[13:50:00] [ServerMain/INFO]: Player3: Hello everyone!',
    '[13:55:00] [ServerMain/INFO]: Player4 was slain by Zombie',
    '[14:00:00] [ServerMain/INFO]: Player1 joined the game',
    '[14:05:00] [ServerMain/WARN]: Player2 left the game',
    '[14:10:00] [ServerMain/INFO]: Player3: Hello everyone!',
    '[14:15:00] [ServerMain/INFO]: Player4 was slain by Zombie',
  ]

  return (
    <>
      <div className="w-2/3">
        <h1 className="text-center text-3xl">Console</h1>
        <div className="mt-4 flex flex-col border-2">
          <div className="flex items-center justify-end border-b-2 p-2">
            <Link
              className="w-fit rounded bg-neutral-500 px-2 py-1 text-sm"
              href={'/log'}
            >
              Go to log -&gt;
            </Link>
          </div>
          <div className="flex h-[32rem] flex-col-reverse overflow-y-auto p-2">
            <ul>
              {logHistory.map((l, i) => {
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
            <ChevronRight />
            <input
              className="w-full border-b-2 bg-transparent outline-none"
              autoFocus
              type="text"
              name=""
              id=""
            />
          </div>
        </div>
      </div>
    </>
  )
}
