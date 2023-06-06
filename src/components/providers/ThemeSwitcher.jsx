'use client'

import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'

const ThemeChanger = () => {
  const [mounted, setMounted] = useState(false)
  const { systemTheme, theme, setTheme } = useTheme()

  const renderThemeChanger = () => {
    const currentTheme = theme === 'system' ? systemTheme : theme

    if (currentTheme === 'dark') {
      return (
        <button
          className=' rounded-full text-white'
          onClick={() => setTheme('light')}
        >
          🔆
        </button>
      )
    } else {
      return (
        <button
          className='rounded-full text-white'
          onClick={() => setTheme('dark')}
        >
          🌙
        </button>
      )
    }
  }

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div className='flex space-x-3'>
      {/* {theme} */}
      <br />
      {renderThemeChanger()}
      <br />
    </div>
  )
}

export default ThemeChanger
