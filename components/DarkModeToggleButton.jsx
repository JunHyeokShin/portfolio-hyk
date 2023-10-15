'use client'
import React, { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { MdDarkMode, MdLightMode } from 'react-icons/md'

export default function DarkModeToggleButton() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div>
      <button
        className="inline-flex items-center border-0 p-1
        rounded text-base md:mt-0 focus:outline-none text-gray-600 hover:text-orange-500
        dark:text-gray-400 dark:hover:text-yellow-300"
        type="button"
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      >
        {theme === 'light' ? <MdLightMode /> : <MdDarkMode />}
      </button>
    </div>
  )
}
