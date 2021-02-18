import React, { useCallback, useEffect, useState } from 'react'
import { ThemeProvider } from 'styled-components'
import {
  ThemeProvider as MUIThemeProvider,
  createMuiTheme
} from '@material-ui/core/styles'

import Routes from './routes'
import GlobalStyles from './styles/global'
import light, { muiLight } from './styles/themes/light'
import dark, { muiDark } from './styles/themes/dark'

const App: React.FC = () => {
  const [theme, setTheme] = useState(light)
  const [muiTheme, setMuiTheme] = useState(createMuiTheme(muiLight))

  useEffect(() => {
    const storageValue = localStorage.getItem('@Paises:theme')

    if (storageValue) {
      const saved = JSON.parse(storageValue)
      setTheme(saved === 'light' ? light : dark)
      setMuiTheme(
        saved === 'light' ? createMuiTheme(muiLight) : createMuiTheme(muiDark)
      )
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('@Paises:theme', JSON.stringify(theme.title))
  }, [theme])

  const toogleTheme = useCallback(() => {
    const title = theme.title
    setMuiTheme(
      title === 'light' ? createMuiTheme(muiDark) : createMuiTheme(muiLight)
    )
    setTheme(title === 'light' ? dark : light)
  }, [theme])

  return (
    <MUIThemeProvider theme={muiTheme}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Routes toogleTheme={toogleTheme} />
      </ThemeProvider>
    </MUIThemeProvider>
  )
}

export default App
