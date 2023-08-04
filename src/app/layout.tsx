import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProvider } from './theme-provider'
import { ThemeSwitcher } from '@/components/ThemeSwitcher'

import MainNavigation from '../components/MainNavigation'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
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
          <div className="sticky top-0 bg-gray-50 dark:bg-stone-900 z-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
              <div className="flex justify-between items-center border-b-1 border-gray-200 dark:border-stone-500 py-4 md:justify-start md:space-x-10">
                <nav className="flex flex-row h-full w-full font-sans  text-coolGray-800 dark:text-stone-100">
                  <MainNavigation />
                </nav>
                <ThemeSwitcher />
              </div>
            </div>
          </div>

          <main className="min-h-screen bg-gray-50 dark:bg-stone-800 text-stone-800 dark:text-stone-200">
            <div className="mx-auto p-2 max-w-7xl">{children}</div>
          </main>
        </ThemeProvider>
      </body>
    </html>
  )
}