import { SunIcon, MoonIcon } from '@heroicons/react/solid'
import cx from 'classnames'
import { useTheme } from 'next-themes'
import { useState, useEffect } from 'react'

import styles from './ThemeToggler.module.css'

type Props = {
  className?: string
}
export default function ThemeToggler({ className }: Props) {
  const { systemTheme, theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  const handleSetLightTheme = () => setTheme('light')
  const handleSetDarkTheme = () => setTheme('dark')

  useEffect(() => {
    setMounted(true)
  }, [])

  const renderThemeChanger = () => {
    if (!mounted) return null

    const currentTheme = theme === 'system' ? systemTheme : theme

    if (currentTheme === 'dark') {
      return (
        <div onClick={handleSetLightTheme} role="button" data-testid="sun-icon">
          <SunIcon className={styles.sun} />
        </div>
      )
    }
    return (
      <div onClick={handleSetDarkTheme} role="button" data-testid="moon-icon">
        <MoonIcon className={styles.moon} />
      </div>
    )
  }

  return <div className={styles.container}>{renderThemeChanger()}</div>
}
