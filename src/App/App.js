import React, { useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { IntlProvider, addLocaleData } from 'react-intl';
import en from 'react-intl/locale-data/en';
import el from 'react-intl/locale-data/el';
import { connect } from 'react-redux';
import Layout from '../Layout/Layout';
import LogIn from '../containers/Auth/LogIn';
import SignUp from '../containers/Auth/SignUp';
import Countries from '../containers/Countries';
import Profile from '../containers/Profile';
import * as actions from '../store/actions';

import messages from '../translations';
import Loader from '../components/Loader/Loader';

addLocaleData([...en, ...el]);

const lang = 'en';
const App = ({ loggedIn, login }) => {
  useEffect(() => {
    if (document.cookie) {
      login();
    }
  });

  return (
    <IntlProvider locale={lang} messages={messages[lang]}>
      <Layout>
        <Loader />
        <Switch>
          <Route path="/countries" component={Countries} />
          <Route path="/profile" component={Profile} />
          {loggedIn && <Redirect to="/countries" exact />}
          {!loggedIn && <Route path="/login" component={LogIn} />}
          {!loggedIn && <Route path="/signup" component={SignUp} />}
          {!loggedIn && <Redirect to="/login" exact />}
        </Switch>
      </Layout>
    </IntlProvider>
  );
};

const mapStateToProps = state => ({
  loggedIn: state.loggedIn
});

const mapDispatchToProps = dispatch => ({
  login: () => dispatch(actions.logIn())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
