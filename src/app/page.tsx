'use client'

import { useTheme } from 'next-themes'
import { Button } from '@/components/ui/button'
import { Sun, Moon } from 'lucide-react'
import { useState, useEffect } from 'react'

export default function Home() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null // Prevent SSR mismatch by not rendering anything until mounted
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold mb-6">Welcome to My Next.js App!</h1>

      <Button
        variant="outline"
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        className="flex items-center"
      >
        {theme === 'dark' ? <Sun className="mr-2" /> : <Moon className="mr-2" />}
        Toggle {theme === 'dark' ? 'Light' : 'Dark'} Mode
      </Button>
    </main>
  )
}