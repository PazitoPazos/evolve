'use client'
import { useEffect, useState } from 'react'
import { useParams, useRouter } from 'next/navigation'
import LoginIcon from '@/icons/LoginIcon'
import Link from 'next/link'
import ChevronDownIcon from '@/icons/ChevronDownIcon'
import { useAuth } from '@/hooks/useAuth'
import ServerIcon from '@/icons/ServerIcon'
import Image from 'next/image'

function NavbarTop() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const router = useRouter()
  const { serverId } = useParams()
  const { session } = useAuth()

  useEffect(() => {
    if (!session) {
      setIsDropdownOpen(false)
    }
  }, [session])

  const toggleDropdown = () => {
    setIsDropdownOpen((prevState) => !prevState)
  }

  const handleLogout = async () => {
    try {
      const response = await fetch('/api/logout', {
        method: 'POST',
      })
      if (response.ok) {
        router.push('/') // Redirige a la página de inicio u otra página
      } else {
        console.error('Error al cerrar sesión:', response.statusText)
      }
    } catch (error) {
      console.error('Error al cerrar sesión:', error)
    }
  }

  return (
    <div className="fixed left-0 top-0 z-10 flex h-20 w-full justify-between bg-primary text-center text-xl text-accent lg:text-2xl">
      <Link href={'/'} className="flex items-center gap-2 px-2">
        <Image
          src="/logo.png"
          alt="Logo"
          className="py-2"
          height={80}
          width={80}
        />
      </Link>
      {serverId ? (
        <Link
          href={'/servers'}
          className="flex items-center px-4 hover:bg-primary-light hover:text-accent-light"
        >
          <ServerIcon />
          <span className="ml-2 hidden md:inline font-bold">My servers</span>
        </Link>
      ) : (
        <></>
      )}
      <div className="relative flex items-center px-4 font-bold">
        {session ? (
          <button
            onClick={toggleDropdown}
            className="flex items-center focus:outline-none"
          >
            <span className="mr-2">{session.username}</span>
            <ChevronDownIcon />
          </button>
        ) : (
          <Link href="/login" className="flex items-center focus:outline-none">
            <span className="mr-2">Login</span>
            <LoginIcon />
          </Link>
        )}
        {isDropdownOpen && (
          <div className="absolute right-0 top-full mr-3 mt-2 w-36 rounded bg-primary shadow-lg">
            {session ? (
              <ul className="">
                <li>
                  <button
                    id="btnLogout"
                    className="w-full rounded px-4 py-2 text-center text-xl hover:bg-primary-light hover:text-accent-light"
                    onClick={handleLogout}
                  >
                    Logout
                  </button>
                </li>
              </ul>
            ) : (
              <></>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

export default NavbarTop
