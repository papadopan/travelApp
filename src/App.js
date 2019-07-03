import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Layout from './Layout/Layout';
import Home from './containers/Home';
import Settings from './containers/Settings';

const App = () => (
  <React.Fragment>
    <Layout />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/settings" component={Settings} />
      <Redirect to="/" />
    </Switch>
  </React.Fragment>
);
export default App;
