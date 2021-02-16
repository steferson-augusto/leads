import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from '../pages/Home'
import Login from '../pages/Login'

const AuthRoutes: React.FC = () => (
  <>
    {/* <AuthHeader /> */}
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/login" component={Login} />
      {/* <Route path="*" component={NotFound} /> */}
    </Switch>
  </>
)

export default AuthRoutes
