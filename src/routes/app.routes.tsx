import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Structure from '../components/Structure'
import Leads from '../pages/Leads'

interface Props {
  toogleTheme: () => void
}

const AppRoutes: React.FC<Props> = ({ toogleTheme }) => (
  <Structure toogleTheme={toogleTheme}>
    <Switch>
      <Route exact path="/" component={Leads} />
      {/* <Route exact path="/furniture/:id" component={Furniture} /> */}
      {/* <Route path="*" component={NotFound} /> */}
    </Switch>
  </Structure>
)

export default AppRoutes
