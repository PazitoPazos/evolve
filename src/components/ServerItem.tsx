import ArrowDownIcon from '../icons/ArrowDownIcon'
import ArrowUpIcon from '../icons/ArrowUpIcon'

interface ServerItemProps {
  server: {
    serverIcon: string
    serverName: string
    serverId: string
    serverDescription: string
    serverVersion: string
    serverStatus: string
  }
}

function ServerItem({ server }: ServerItemProps) {
  return (
    <div className="mt-4 flex cursor-pointer justify-between border-2 border-solid border-white px-4 py-0 hover:bg-neutral-700">
      <div className="flex items-center">
        <div className="">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="h-32 w-32"
            src={server.serverIcon}
            alt="server-icon"
          />
        </div>
        <div className="mb-2 ml-3 mt-2 text-left leading-5">
          <div className="">
            <p>{server.serverName}</p>
          </div>
          <div className="text-gray-400">
            <p>#{server.serverId}</p>
          </div>
          <div className="">
            <p>{server.serverDescription}</p>
          </div>
          <div className="">
            <p>{server.serverVersion}</p>
          </div>
        </div>
      </div>
      <div className="flex items-center">
        <div className="">
          {server.serverStatus === 'online' ? (
            <ArrowUpIcon />
          ) : (
            <ArrowDownIcon />
          )}
        </div>
      </div>
    </div>
  )
}

export default ServerItem
