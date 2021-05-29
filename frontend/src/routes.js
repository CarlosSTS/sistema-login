import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import SignUp from './pages/SignUp'
import SignIn from './pages/SignIn'
import Dashboard from './pages/Dashboard'

export default function Routes() {
  return(
<BrowserRouter>
<Switch>
  <Route path="/" exact component={SignIn} />
  <Route path="/register"  component={SignUp} />
  <Route path="/profile"  component={Dashboard} />

</Switch>
</BrowserRouter>
  )
}