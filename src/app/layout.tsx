import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import { ThemeProvider } from './theme-provider'
import { ThemeSwitcher } from '@/components/ThemeSwitcher'

import MainNavigation from '../components/MainNavigation'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'The Gyre',
  description: 'Brad Gibbs personal website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="sticky top-0 bg-neutral-200 dark:bg-neutral-800 z-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
              <div className="flex justify-between items-end  py-4 md:justify-start md:space-x-10">
                <nav className="flex flex-row h-full w-full font-sans  text-gray-800 dark:text-gray-200">
                  <MainNavigation />
                </nav>
                <ThemeSwitcher />
              </div>
            </div>
          </div>

          <main className="min-h-screen bg-neutral-100 dark:bg-neutral-900 text-neutral-800 dark:text-neutral-200">
            <div className="mx-auto p-2 max-w-7xl">{children}</div>
          </main>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
