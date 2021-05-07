import React from 'react';
import { BrowserRouter as Switch, Route } from 'react-router-dom';

//importing pages
import Homepage from './pages/Homepage';
import Requests from './pages/Requests'
import Legal from './pages/Legal'
import Vaccine from './pages/Vaccine'
import Thread from './pages/Thread'
import Resources from './pages/Resources'
import Volunteer from './pages/Volunteer'

const App = () => {
  return (
    <Switch>
      <Route exact={true} path='/' component={Homepage} />
      <Route exact={true} path='/requests' component={Requests} />
      <Route exact={true} path='/legal' component={Legal} />
      <Route exact={true} path='/vaccine' component={Vaccine} />
      <Route exact={true} path='/resource' component={Resources} />
      <Route exact={true} path='/thread/:id' component={Thread} />
      <Route exact={true} path='/volunteer' component={Volunteer} />
    </Switch>
  );
}

export default App;
