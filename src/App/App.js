import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { IntlProvider, addLocaleData } from 'react-intl';
import en from 'react-intl/locale-data/en';
import el from 'react-intl/locale-data/el';
import Layout from '../Layout/Layout';
import LogIn from '../containers/Auth/LogIn';
import SignUp from '../containers/Auth/SignUp';

import messages from '../translations';

addLocaleData([...en, ...el]);

const lang = 'en';
const App = () => (
  <IntlProvider locale={lang} messages={messages[lang]}>
    <Layout>
      <Switch>
        <Route path="/login" component={LogIn} />
        <Route path="/signup" component={SignUp} />
        <Redirect to="/" />
      </Switch>
    </Layout>
  </IntlProvider>
);
export default App;
