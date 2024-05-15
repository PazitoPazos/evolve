import AccessUser from '../components/AccessUser'

function AccessList() {
  const userList = [
    {
      imgUrl:
        'https://i.pinimg.com/736x/b4/6d/b3/b46db377e307f0be8ba6d5ae3f3acb61.jpg',
      name: 'Username 1',
      id: 'username1',
    },
    {
      imgUrl:
        'https://i.pinimg.com/736x/b4/6d/b3/b46db377e307f0be8ba6d5ae3f3acb61.jpg',
      name: 'Username 2',
      id: 'username2',
    },
    {
      imgUrl:
        'https://i.pinimg.com/736x/b4/6d/b3/b46db377e307f0be8ba6d5ae3f3acb61.jpg',
      name: 'Username 3',
      id: 'username3',
    },
    {
      imgUrl:
        'https://i.pinimg.com/736x/b4/6d/b3/b46db377e307f0be8ba6d5ae3f3acb61.jpg',
      name: 'Username 4',
      id: 'username4',
    },
    {
      imgUrl:
        'https://i.pinimg.com/736x/b4/6d/b3/b46db377e307f0be8ba6d5ae3f3acb61.jpg',
      name: 'Username 5',
      id: 'username5',
    },
    {
      imgUrl:
        'https://i.pinimg.com/736x/b4/6d/b3/b46db377e307f0be8ba6d5ae3f3acb61.jpg',
      name: 'Username 6',
      id: 'username6',
    },
    {
      imgUrl:
        'https://i.pinimg.com/736x/b4/6d/b3/b46db377e307f0be8ba6d5ae3f3acb61.jpg',
      name: 'Username 7',
      id: 'username7',
    },
    {
      imgUrl:
        'https://i.pinimg.com/736x/b4/6d/b3/b46db377e307f0be8ba6d5ae3f3acb61.jpg',
      name: 'Username 8',
      id: 'username8',
    },
  ]

  return (
    <div className="mt-4 grid grid-cols-2 gap-2 md:gap-8 overflow-auto md:grid-cols-4">
      {userList.map((user) => (
        <AccessUser key={user.id} user={user} />
      ))}
    </div>
  )
}

export default AccessList
