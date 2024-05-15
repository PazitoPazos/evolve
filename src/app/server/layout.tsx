import NavbarLeft from '@/components/NavbarLeft'

export default function ServerLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="flex h-full">
      <NavbarLeft />
      <div className="flex h-full w-full flex-col items-center justify-center">
        {children}
      </div>
    </div>
  )
}
