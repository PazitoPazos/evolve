'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import LoginIcon from '@/icons/LoginIcon'
import Link from 'next/link'
import ChevronDownIcon from '@/icons/ChevronDownIcon'
import { useAuth } from '@/hooks/useAuth'

function NavbarTop() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const router = useRouter()
  const { session } = useAuth()

  const toggleDropdown = () => {
    setIsDropdownOpen((prevState) => !prevState)
  }

  const handleLogout = async () => {
    try {
      const response = await fetch('/api/logout', {
        method: 'POST',
      })
      if (response.ok) {
        router.replace('/') // Redirige a la página de inicio u otra página
      } else {
        console.error('Error al cerrar sesión:', response.statusText)
      }
    } catch (error) {
      console.error('Error al cerrar sesión:', error)
    }
  }

  return (
    <div className="absolute left-0 top-0 flex h-16 w-full justify-between bg-indigo-500 px-4 text-center text-2xl">
      <Link href={'/'} className="flex items-center">
        <img src="/logo.svg" alt="Logo" className="mr-4 h-8" />
        <span className="font-bold text-white">Evolve</span>
      </Link>
      <div className="relative flex items-center">
        {session ? (
          <button
            onClick={toggleDropdown}
            className="flex items-center text-white focus:outline-none"
          >
            <span className="mr-2">{session.username}</span>
            <ChevronDownIcon />
          </button>
        ) : (
          <Link
            href="/login"
            className="flex items-center text-white focus:outline-none"
          >
            <span className="mr-2">Login</span>
            <LoginIcon />
          </Link>
        )}
        {isDropdownOpen && (
          <div className="absolute right-0 top-full mt-2 w-48 rounded bg-white shadow-lg">
            {session ? (
              <ul className="py-1">
                <li>
                  <Link
                    href="/account"
                    className="block px-4 py-2 text-xl text-gray-800 hover:bg-indigo-100"
                  >
                    Account
                  </Link>
                </li>
                <li>
                  <button
                    id="btnLogout"
                    className="block w-full px-4 py-2 text-center text-xl text-gray-800 hover:bg-indigo-100"
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
