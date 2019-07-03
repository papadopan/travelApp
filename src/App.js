import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { IntlProvider } from 'react-intl';
import Layout from './Layout/Layout';
import Home from './containers/Home';
import Settings from './containers/Settings';
import messages from './translations';

const lang = 'el';
const App = () => (
  <IntlProvider locale={lang} messages={messages[lang]}>
    <React.Fragment>
      <Layout />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/settings" component={Settings} />
        <Redirect to="/" />
      </Switch>
    </React.Fragment>
  </IntlProvider>
);
export default App;
