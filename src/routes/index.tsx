import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import { useAuth } from '../contexts/auth'
import AppRoutes from './app.routes'
import AuthRoutes from './auth.routes'

interface Props {
  toogleTheme: () => void
}

const Routes: React.FC<Props> = ({ toogleTheme }) => {
  const { signed } = useAuth()
  return (
    <BrowserRouter>
      {signed ? <AppRoutes toogleTheme={toogleTheme} /> : <AuthRoutes />}
    </BrowserRouter>
  )
}

export default Routes
