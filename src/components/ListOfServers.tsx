import CustomButton from './CustomButton'
import ServerItem from './ServerItem'

function ListOfServers() {
  const serversList = [
    {
      serverName: 'Server 1',
      serverId: '0001',
      serverVersion: 'Paper 1.14.4',
      serverDescription: 'Server 1 description',
      serverIcon:
        'https://cdn.shopify.com/s/files/1/0405/2058/1286/articles/how-to-add-a-server-icon-to-your-minecraft-server-435588.png?v=1662094872',
      serverStatus: 'online',
    },
    {
      serverName: 'Server 2',
      serverId: '0002',
      serverVersion: 'Vanilla 1.9.4',
      serverDescription: 'Server 2 description',
      serverIcon:
        'https://cdn.shopify.com/s/files/1/0405/2058/1286/articles/how-to-add-a-server-icon-to-your-minecraft-server-435588.png?v=1662094872',
      serverStatus: 'offline',
    },
    {
      serverName: 'Server 3',
      serverId: '0003',
      serverVersion: 'Bukkit 1.19.0',
      serverDescription: 'Server 3 description',
      serverIcon:
        'https://cdn.shopify.com/s/files/1/0405/2058/1286/articles/how-to-add-a-server-icon-to-your-minecraft-server-435588.png?v=1662094872',
      serverStatus: 'online',
    },
  ]

  return (
    <div className="w-[48rem] text-right">
      <CustomButton id="create-server" value="+ Create a new server" />
      {serversList.map((server) => (
        <ServerItem key={server.serverId} server={server} />
      ))}
    </div>
  )
}

export default ListOfServers
