'use client'
import { useState } from 'react'
import NavLinks from './NavLinks'
import { SessionPayload } from '@/lib/definitions'
import CustomButton from './CustomButton'
import { useRouter } from 'next/navigation'

interface NavbarProps {
  session: { user: SessionPayload; expiresAt: Date } | null
} // Asignamos la interfaz SessionPayload a la prop session

function Navbar({ session }: NavbarProps) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const router = useRouter()

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
    <div className="absolute left-0 top-0 flex h-12 w-full justify-between bg-indigo-500 px-4 text-center">
      <div className="flex items-center">
        <img src="/logo.svg" alt="Logo" className="mr-4 h-8" />
        <span className="text-xl font-bold text-white">Evolve</span>
      </div>
      <nav className="inline-flex h-full items-center gap-4">
        <NavLinks />
      </nav>
      <div className="relative flex items-center">
        <button
          onClick={toggleDropdown}
          className="flex items-center text-white focus:outline-none"
        >
          {session ? (
            <span>Hi, {session.user.username}!</span>
          ) : (
            <span>Login</span>
          )}
          <svg
            className="ml-2 h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 12a1 1 0 0 1-.707-.293l-4-4a1 1 0 1 1 1.414-1.414L10 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414l-4 4A1 1 0 0 1 10 12z"
            />
          </svg>
        </button>
        {isDropdownOpen && (
          <div className="absolute right-0 top-full mt-2 w-48 rounded bg-white shadow-lg">
            <ul className="py-1">
              <li>
                <a
                  href="/account"
                  className="block px-4 py-2 text-gray-800 hover:bg-indigo-100"
                >
                  Account
                </a>
              </li>
              <li>
                <button
                  id="btnLogout"
                  className="block w-full px-4 py-2 text-center text-gray-800 hover:bg-indigo-100"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar
