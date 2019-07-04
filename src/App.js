import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { IntlProvider, addLocaleData } from 'react-intl';
import en from 'react-intl/locale-data/en';
import el from 'react-intl/locale-data/el';
import Layout from './Layout/Layout';
import Home from './containers/Home';
import Settings from './containers/Settings';
import messages from './translations';

addLocaleData([...en, ...el]);

const lang = 'en';
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
