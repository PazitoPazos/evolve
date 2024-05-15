import ListOfServers from '@/components/ListOfServers'

export default function Servers() {
  return (
    <>
      <div className="flex h-full flex-col items-center justify-center p-6">
        <h1 className="text-center text-2xl font-bold text-accent md:text-4xl">
          Your servers
        </h1>
        <ListOfServers />
      </div>
    </>
  )
}
