import React, { useCallback, useEffect, useState } from 'react'
import { ThemeProvider } from 'styled-components'

import Routes from './routes'
import { AuthProvider } from './contexts/auth'
import GlobalStyles from './styles/global'
import light from './styles/themes/light'
import dark from './styles/themes/dark'

const App: React.FC = () => {
  const [theme, setTheme] = useState(light)

  useEffect(() => {
    const storageValue = localStorage.getItem('@Paises:theme')

    if (storageValue) {
      setTheme(JSON.parse(storageValue) === 'light' ? light : dark)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('@Paises:theme', JSON.stringify(theme.title))
  }, [theme])

  const toogleTheme = useCallback(() => {
    setTheme(theme.title === 'light' ? dark : light)
  }, [theme])

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <AuthProvider>
        <Routes toogleTheme={toogleTheme} />
      </AuthProvider>
    </ThemeProvider>
  )
}

export default App
