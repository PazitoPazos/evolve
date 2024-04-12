interface CustomListProps {
  title: string
  icon: React.ReactNode
  itemName: string
  items: string[]
}

function CustomList({ title, icon, itemName, items }: CustomListProps) {
  return (
    <div className="group w-64 border-2 border-solid border-white px-2 hover:cursor-pointer hover:bg-neutral-700">
      <div className="mb-1 mr-1 flex items-center justify-between border-b-2 border-solid border-b-white">
        <div className="mb-1 text-lg">
          <h2>{title}</h2>
        </div>
        <div className="list-info">
          <div className="flex">
            <div className="flex items-center">
              <h2>{items.length}</h2>
            </div>
            <div className="ml-1">{icon}</div>
          </div>
        </div>
      </div>
      <div className="pb-1">
        <ul>
          {items.map((item, index) => (
            <li className="ml-5 list-disc" key={index}>
              {item}
            </li>
          ))}
          <li className="ml-5 list-disc">
            <input
              type="text"
              className="border-none bg-neutral-800 outline-none group-hover:bg-zinc-700"
              placeholder={'Add a new ' + itemName}
            />
          </li>
        </ul>
      </div>
    </div>
  )
}

export default CustomList
