'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function NavLinks() {
  const links = [
    {
      path: '/',
      text: 'Home',
    },
    {
      path: '/login',
      text: 'Login',
    },
    {
      path: '/register',
      text: 'Register',
    },
    {
      path: '/servers',
      text: 'Servers',
    },
    {
      path: '/dashboard',
      text: 'Dashboard',
    },
    {
      path: '/options',
      text: 'Options',
    },
    {
      path: '/console',
      text: 'Console',
    },
    {
      path: '/log',
      text: 'Log',
    },
    {
      path: '/players',
      text: 'Players',
    },
    {
      path: '/access',
      text: 'Access',
    },
    {
      path: '/account',
      text: 'Account',
    },
  ]

  const pathname = usePathname()

  return (
    <>
      {links.map((link) => (
        <Link
          className={
            'font-bold hover:text-neutral-300 ' +
            (pathname === link.path ? 'text-neutral-800' : '')
          }
          key={link.path}
          href={link.path}
        >
          {link.text}
        </Link>
      ))}
    </>
  )
}
