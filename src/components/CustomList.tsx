interface CustomListProps {
  title: string
  icon: React.ReactNode
  itemName: string
  items: string[]
}

function CustomList({ title, icon, itemName, items }: CustomListProps) {
  return (
    <div className="group h-fit w-80 border-4 border-solid border-secondary-light px-2 hover:cursor-pointer hover:bg-primary">
      <div className="mb-1 mr-1 flex items-center justify-between border-b-4 border-solid border-b-secondary-light text-xl">
        <div className="my-2">
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
      <div className="pb-1 text-lg">
        <ul>
          {items.map((item, index) => (
            <li className="ml-5 list-disc" key={index}>
              {item}
            </li>
          ))}
          <li className="ml-5 list-disc">
            <input
              type="text"
              className="border-none bg-primary-dark outline-none group-hover:bg-primary"
              placeholder={'Add a new ' + itemName}
            />
          </li>
        </ul>
      </div>
    </div>
  )
}

export default CustomList
