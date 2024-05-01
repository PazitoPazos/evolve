import { ServerItemData } from '@/types/types.d'
import Link from 'next/link'

function ServerItem({ server }: { server: ServerItemData }) {
  return (
    <Link
      href={`/server/${server.id}/dashboard`}
      className="mt-4 flex cursor-pointer justify-between border-2 border-solid border-white px-4 py-0 hover:bg-neutral-700"
    >
      <div className="flex items-center">
        <div className="">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="h-32 w-32" src={server.icon} alt="server-icon" />
        </div>
        <div className="mb-2 ml-3 mt-2 text-left leading-5">
          <div className="">
            <p>{server.name}</p>
          </div>
          <div className="text-gray-400">
            <p>#{server.id}</p>
          </div>
          <div className="">
            <p>{server.description}</p>
          </div>
          <div className="">
            <p>{server.version}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default ServerItem
