import CircleArrowDownIcon from '../icons/CircleArrowDownIcon'
import CircleArrowUpIcon from '../icons/CircleArrowUpIcon'
import PencilIcon from '../icons/PencilIcon'

interface ServerDetailsProps {
  serverDetails: {
    serverIcon: string
    serverName: string
    serverId: string
    serverAddress: string
    serverPort: string
    serverDescription: string
    serverVersion: string
    serverStatus: string
  }
}

function ServerDetails({ serverDetails }: ServerDetailsProps) {
  return (
    <div className="mt-4 box-border flex w-full items-center justify-between border-2 border-b-0 border-solid border-white px-4 py-0">
      <div className="flex items-center">
        <div className="h-32 w-32">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={serverDetails.serverIcon} alt="" />
        </div>
        <div className="mb-4 ml-4 mt-4 text-lg leading-6">
          <div className="group flex">
            <p className="">{serverDetails.serverName}</p>
            <p className="text-gray-400">#{serverDetails.serverId}</p>
            <div className="hidden hover:cursor-pointer group-hover:flex">
              <PencilIcon />
            </div>
          </div>
          <div className="group flex">
            <span className="">{serverDetails.serverAddress}</span>:
            <span className="">{serverDetails.serverPort}</span>
            <div className="hidden hover:cursor-pointer group-hover:flex">
              <PencilIcon />
            </div>
          </div>
          <div className="group flex">
            <p>{serverDetails.serverDescription}</p>
            <div className="hidden hover:cursor-pointer group-hover:flex">
              <PencilIcon />
            </div>
          </div>
          <div className="group flex">
            <p>{serverDetails.serverVersion}</p>
            <div className="hidden hover:cursor-pointer group-hover:flex">
              <PencilIcon />
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <div className="">
          {serverDetails.serverStatus === 'online' ? (
            <CircleArrowUpIcon />
          ) : (
            <CircleArrowDownIcon />
          )}
        </div>
      </div>
    </div>
  )
}

export default ServerDetails
