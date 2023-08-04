'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { GyreLogo } from './GyreLogo'

export default function MainNavigation() {
  const pathname = usePathname()
  const navLinks = [
    { name: 'Sasha', href: '/sasha' },
    { name: 'Product', href: '/product' },
  ]

  return (
    <>
      <Link href="/" className="mx-6">
        <GyreLogo />
      </Link>

      {navLinks.map((link) => {
        let isActive = false
        if (pathname != null) {
          // compare the first 5 characters of the pathname and href
          isActive = pathname.slice(0, 5) === link.href.slice(0, 5)
        }

        return (
          <Link
            className={`mx-6 text-2xl font-light dark:text-neutral-200 self-center ${
              isActive ? 'border-b-2 border-rose-600' : 'text-neutral-800'
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
