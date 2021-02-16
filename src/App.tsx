import React from 'react'

import Routes from './routes'
import GlobalStyles from './styles/global'
import { AuthProvider } from './contexts/auth'

const App: React.FC = () => {
  return (
    <>
      <GlobalStyles />
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </>
  )
}

export default App
