import { ServerDetailsData } from '@/types/types.d'
import CircleArrowDownIcon from '../icons/CircleArrowDownIcon'
import CircleArrowUpIcon from '../icons/CircleArrowUpIcon'
import PencilIcon from '../icons/PencilIcon'
import Image from 'next/image'

function ServerDetails({
  serverDetails,
}: {
  serverDetails: ServerDetailsData | null
}) {
  return (
    <div className="mt-4 box-border flex w-full items-center justify-between border-4 border-b-0 border-solid border-secondary-light px-4 py-0 text-[#b3b3b3]">
      <div className="flex items-center">
        <div className="h-32 w-32">
          <Image
            height={256}
            width={256}
            src={serverDetails?.icon ?? ''}
            alt=""
          />
          {/* <img src={serverDetails?.icon} alt="" /> */}
        </div>
        <div className="mb-4 ml-4 mt-4 text-lg leading-6">
          <div className="group flex">
            <p className="">{serverDetails?.name}</p>
            <p className="text-accent-dark">#{serverDetails?.id}</p>
            <div className="hidden hover:cursor-pointer group-hover:flex">
              <PencilIcon />
            </div>
          </div>
          <div className="group flex">
            <span className="">{serverDetails?.address ?? 'localhost'}</span>:
            <span className="">{serverDetails?.port ?? 25565}</span>
            <div className="hidden hover:cursor-pointer group-hover:flex">
              <PencilIcon />
            </div>
          </div>
          <div className="group flex">
            <p>{serverDetails?.description}</p>
            <div className="hidden hover:cursor-pointer group-hover:flex">
              <PencilIcon />
            </div>
          </div>
          <div className="group flex">
            <p>{serverDetails?.version}</p>
            <div className="hidden hover:cursor-pointer group-hover:flex">
              <PencilIcon />
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <div className="">
          {serverDetails?.status === 'online' ? (
            <CircleArrowUpIcon height={'64'} width={'64'} />
          ) : (
            <CircleArrowDownIcon height={'64'} width={'64'} />
          )}
        </div>
      </div>
    </div>
  )
}

export default ServerDetails
