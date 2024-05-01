import CustomList from '@/components/CustomList'
import UserIcon from '@/icons/UserIcon'
import CrownIcon from '@/icons/CrownIcon'
import UserOffIcon from '@/icons/UserOffIcon'
import LocationOffIcon from '@/icons/LocationOffIcon'

export default function Players() {
  const whiteList = [
    'Username 1',
    'Username 2',
    'Username 3',
    'Username 4',
    'Username 5',
    'Username 6',
    'Username 7',
    'Username 8',
    'Username 9',
    '...',
  ]
  const opList = [
    'Username 1',
    'Username 2',
    'Username 3',
    'Username 4',
    'Username 5',
    'Username 6',
    'Username 7',
    'Username 8',
    'Username 9',
    '...',
  ]
  const bannedPlayers = [
    'Username 1',
    'Username 2',
    'Username 3',
    'Username 4',
    'Username 5',
    'Username 6',
    'Username 7',
    'Username 8',
    'Username 9',
    '...',
  ]
  const bannedIPs = [
    'IP 1',
    'IP 2',
    'IP 3',
    'IP 4',
    'IP 5',
    'IP 6',
    'IP 7',
    'IP 8',
    'IP 9',
    '...',
  ]

  return (
    <>
      <div className="">
        <h1 className="text-center text-4xl">Players</h1>
        <div className="mt-4 grid grid-cols-2 gap-8">
          {/* //TODO: Add logic to open lists in the middle of screen */}
          <CustomList
            title="Whitelist"
            icon={<UserIcon height={'32'} width={'32'} />}
            itemName="player"
            items={whiteList}
          />
          <CustomList
            title="OPs"
            icon={<CrownIcon height={'32'} width={'32'} />}
            itemName="player"
            items={opList}
          />
          <CustomList
            title="Banned Players"
            icon={<UserOffIcon height={'32'} width={'32'} />}
            itemName="player"
            items={bannedPlayers}
          />
          <CustomList
            title="Banned IPs"
            icon={<LocationOffIcon height={'32'} width={'32'} />}
            itemName="IP"
            items={bannedIPs}
          />
        </div>
      </div>
    </>
  )
}
