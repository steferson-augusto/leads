import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Leads from '../pages/Leads'

const AppRoutes: React.FC = () => (
  <>
    {/* <AppHeader /> */}
    <Switch>
      <Route exact path="/" component={Leads} />
      {/* <Route exact path="/furniture/:id" component={Furniture} /> */}
      {/* <Route path="*" component={NotFound} /> */}
    </Switch>
  </>
)

export default AppRoutes
