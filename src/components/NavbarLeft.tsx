'use client'
import AdjustmentsHorizontalIcon from '@/icons/AdjustmentsHorizontalIcon'
import ArrowBarToLeft from '@/icons/ArrowBarToLeft'
import ChevronRightIcon from '@/icons/ChevronRightIcon'
import ConsoleIcon from '@/icons/ConsoleIcon'
import DashboardIcon from '@/icons/DashboardIcon'
import FileReportIcon from '@/icons/FileReportIcon'
import UserShieldIcon from '@/icons/UserShieldIcon'
import UsersIcon from '@/icons/UsersIcon'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

function NavbarLeft() {
  const [navbarOpen, setNavbarOpen] = useState(false)

  const pathname = usePathname()

  const serverLinks = [
    {
      path: 'dashboard',
      icon: <DashboardIcon height={'36'} width={'36'} />,
      text: 'Dashboard',
    },
    {
      path: 'options',
      icon: <AdjustmentsHorizontalIcon height={'36'} width={'36'} />,
      text: 'Options',
    },
    {
      path: 'console',
      icon: <ConsoleIcon height={'36'} width={'36'} />,
      text: 'Console',
    },
    {
      path: 'log',
      icon: <FileReportIcon height={'36'} width={'36'} />,
      text: 'Log',
    },
    {
      path: 'players',
      icon: <UsersIcon height={'36'} width={'36'} />,
      text: 'Players',
    },
    {
      path: 'access',
      icon: <UserShieldIcon height={'36'} width={'36'} />,
      text: 'Access',
    },
  ]

  const handleClick = () => {
    setNavbarOpen((prevState) => !prevState)
  }

  return (
    <>
      <div
        className={
          'flex h-full max-h-screen flex-shrink-0 flex-col justify-between bg-primary text-accent font-bold transition-all duration-300 ease-in-out ' +
          (navbarOpen ? 'w-72' : 'w-[4.25rem]')
        }
      >
        <div className="">
          {serverLinks.map((link) => (
            <Link
              className={
                'group flex items-center gap-2 px-4 py-4 text-2xl hover:bg-primary-light hover:text-accent-light ' +
                (pathname.includes(link.path) ? 'bg-primary-dark ' : '') +
                (pathname.includes(link.path) && !navbarOpen
                  ? 'border-l-4 border-l-secondary-light pl-3'
                  : '')
              }
              key={link.path}
              href={link.path}
            >
              <span className="flex w-full items-center gap-2">
                <span>{link.icon}</span>
                {navbarOpen && link.text}
              </span>

              {navbarOpen && (
                <span
                  className={
                    (pathname.includes(link.path) ? 'block' : 'hidden') +
                    ' group-hover:block'
                  }
                >
                  <ChevronRightIcon height={'36'} width={'36'} />
                </span>
              )}
            </Link>
          ))}
        </div>
        <div className="relative flex w-full flex-row-reverse p-4">
          <button
            className={
              'absolute bottom-2 right-3 rounded-full p-2 transition duration-300 ease-in-out hover:bg-primary-light ' +
              (navbarOpen ? '' : 'rotate-180')
            }
            onClick={handleClick}
          >
            <ArrowBarToLeft height={'32'} width={'32'} />
          </button>
        </div>
      </div>
    </>
  )
}

export default NavbarLeft
