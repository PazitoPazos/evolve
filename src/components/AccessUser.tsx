interface User {
  name: string
  id: string
  imgUrl: string
}

interface AccessUserProps {
  user: User
}

function AccessUser({ user }: AccessUserProps) {
  return (
    <div className="rounded-2xl bg-black p-8 hover:cursor-pointer hover:bg-neutral-700">
      <div className="text-xl leading-5">
        <div className="mb-4 flex items-center justify-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="h-16 w-16" src={user.imgUrl} alt="user-skin" />
        </div>
        <div className="">
          <p className="">{user.name}</p>
        </div>
        <div className="text-neutral-400">
          <p>@{user.id}</p>
        </div>
      </div>
    </div>
  )
}

export default AccessUser
