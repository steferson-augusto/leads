import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import AppRoutes from './app.routes'

interface Props {
  toogleTheme: () => void
}

const Routes: React.FC<Props> = ({ toogleTheme }) => {
  return (
    <BrowserRouter>
      <AppRoutes toogleTheme={toogleTheme} />
    </BrowserRouter>
  )
}

export default Routes
