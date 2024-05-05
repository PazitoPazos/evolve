import ListOfServers from '@/components/ListOfServers'

export default function Servers() {
  return (
    <>
      <div className="flex h-full flex-col items-center justify-center">
        <h1 className="text-center text-4xl text-accent">Your servers</h1>
        <ListOfServers />
      </div>
    </>
  )
}
