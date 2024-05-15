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
    <div className="rounded-2xl bg-primary p-4 hover:cursor-pointer hover:bg-primary-light md:p-8">
      <div className="text-sm leading-5 md:text-xl">
        <div className="mb-4 flex items-center justify-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="w-8 md:h-16 md:w-16"
            src={user.imgUrl}
            alt="user-skin"
          />
        </div>
        <div className="text-[#b2b2b2]">
          <p className="">{user.name}</p>
        </div>
        <div className="text-accent-dark">
          <p>@{user.id}</p>
        </div>
      </div>
    </div>
  )
}

export default AccessUser
