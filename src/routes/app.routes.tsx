import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import Structure from '../components/Structure'
import Lead from '../pages/Lead'
import Leads from '../pages/Leads'
import NotFound from '../pages/NotFound'
import People from '../pages/People'

interface Props {
  toogleTheme: () => void
}

const AppRoutes: React.FC<Props> = ({ toogleTheme }) => (
  <Structure toogleTheme={toogleTheme}>
    <Switch>
      <Redirect exact from="/" to="/leads" />
      <Route exact path="/leads/:id" component={Lead} />
      <Route path="/leads" component={Leads} />
      <Route path="/people" component={People} />
      <Route path="*" component={NotFound} />
    </Switch>
  </Structure>
)

export default AppRoutes
