'use client'
import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { SunIcon } from '@heroicons/react/24/outline'
import { MoonIcon } from '@heroicons/react/24/outline'

export const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <button
      className={`justify-self-end p-2 rounded-md hover:scale-110 active:scale-100 duration-200 bg-stone-200 dark:bg-stone-800`}
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    >
      {theme === 'light' ? (
        <MoonIcon className="h-6 w-6  text-yellow-600" />
      ) : (
        <SunIcon className="h-6 w-6 text-yellow-200" />
      )}
    </button>
  )
}
