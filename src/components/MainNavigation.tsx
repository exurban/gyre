'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { ThemeSwitcher } from './ThemeSwitcher'

export default function MainNavigation() {
  const pathname = usePathname()
  const navLinks = [
    { name: 'Gyre', href: '/' },
    { name: 'Sasha', href: '/sasha' },
    { name: 'Product', href: '/product' },
  ]

  return (
    <>
      {navLinks.map((link) => {
        let isActive = false
        if (pathname != null) {
          // compare the first 5 characters of the pathname and href
          isActive = pathname.slice(0, 5) === link.href.slice(0, 5)
        }

        return (
          <Link
            className={`mx-6 text-2xl font-light dark:text-slate-200 ${
              isActive
                ? 'text-brand-200 border-b-2 border-brand-200'
                : 'text-coolGray-800'
            }`}
            href={link.href}
            key={link.name}
          >
            {link.name}
          </Link>
        )
      })}
    </>
  )
}
