import CustomList from '@/components/CustomList'
import UserIcon from '@/icons/UserIcon'
import CrownIcon from '@/icons/CrownIcon'
import UserOffIcon from '@/icons/UserOffIcon'
import LocationOffIcon from '@/icons/LocationOffIcon'

export default function Players() {
  const whiteList = [
    'Username 1',
    'Username 2',
    '...',
    'Username 9',
    'Username 10',
  ]
  const opList = [
    'Username 1',
    'Username 2',
    '...',
    'Username 9',
    'Username 10',
  ]
  const bannedPlayers = [
    'Username 1',
    'Username 2',
    '...',
    'Username 9',
    'Username 10',
  ]
  const bannedIPs = ['IP 1', 'IP 2', '...', 'IP 9', 'IP 10']

  return (
    <>
      <div className="">
        <h1 className="text-center text-3xl">Players</h1>
        <div className="mt-4 grid grid-cols-2 gap-8">
          {/* //TODO: Add logic to open lists in the middle of screen */}
          <CustomList
            title="Whitelist"
            icon={<UserIcon />}
            itemName="player"
            items={whiteList}
          />
          <CustomList
            title="OPs"
            icon={<CrownIcon />}
            itemName="player"
            items={opList}
          />
          <CustomList
            title="Banned Players"
            icon={<UserOffIcon />}
            itemName="player"
            items={bannedPlayers}
          />
          <CustomList
            title="Banned IPs"
            icon={<LocationOffIcon />}
            itemName="IP"
            items={bannedIPs}
          />
        </div>
      </div>
    </>
  )
}
