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
    '203.184.56.102',
    '87.231.109.198',
    '124.76.212.17',
    '162.214.98.55',
    '81.62.177.34',
    '190.92.143.208',
    '104.27.32.149',
    '198.51.100.38',
    '219.117.234.66',
    '...',
  ]

  return (
    <>
      <div className="font-bold text-[#b2b2b2]">
        <h1 className="text-center text-4xl text-accent">Players</h1>
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
