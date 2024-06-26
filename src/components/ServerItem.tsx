import { ServerItemData } from '@/types/types.d'
import Link from 'next/link'

function ServerItem({ server }: { server: ServerItemData }) {
  return (
    <Link
      href={`/server/${server.id}/dashboard`}
      className="flex w-full cursor-pointer justify-between border-4 border-solid border-secondary-light px-4 py-0 font-bold hover:bg-primary"
    >
      <div className="flex items-center md:text-xl">
        <div className="">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="w-32 md:h-32" src={server.icon} alt="server-icon" />
        </div>
        <div className="mb-2 ml-3 mt-2 text-left leading-5">
          <div className="">
            <p>{server.name}</p>
          </div>
          <div className="text-accent-dark">
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
