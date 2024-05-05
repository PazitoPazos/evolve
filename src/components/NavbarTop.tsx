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
    <div className="absolute left-0 top-0 flex h-16 w-full justify-between bg-primary text-center text-2xl text-accent">
      <Link
        href={'/'}
        className="flex items-center gap-2 px-2"
      >
        <Image
          src="/logo.png"
          alt="Logo"
          className="py-2"
          height={64}
          width={64}
        />
      </Link>
      {serverId ? (
        <Link
          href={'/servers'}
          className="hover:text-accent-light flex items-center px-4 hover:bg-primary-light"
        >
          <ServerIcon />
          <span className="ml-2 font-bold">My servers</span>
        </Link>
      ) : (
        <></>
      )}
      <div className="relative flex items-center px-4">
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
                    className="hover:text-accent-light w-full rounded px-4 py-2 text-center text-xl hover:bg-primary-light"
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
