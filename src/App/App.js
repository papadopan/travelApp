import React, { useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { connect } from 'react-redux';
import Layout from '../Layout/Layout';
import LogIn from '../containers/Auth/LogIn';
import SignUp from '../containers/Auth/SignUp';
import Countries from '../containers/Countries';
import Profile from '../containers/Profile';
import * as actions from '../store/actions';

import Loader from '../components/Loader/Loader';

const App = ({ loggedIn, login }) => {
  useEffect(() => {
    console.log('loggedIn', loggedIn);
    if (localStorage.getItem('token')) {
      login();
    }
  });

  return (
    <Layout>
      <Loader />
      <Switch>
        <Route path="/countries" exact component={Countries} />
        {loggedIn && <Route path="/profile" exact component={Profile} />}
        {!loggedIn && <Route from="/" path="/login" component={LogIn} exact />}
        {!loggedIn && <Route path="/signup" component={SignUp} />}
        {loggedIn && <Redirect to="/profile" />}
        {!loggedIn && <Redirect to="/login" exact />}
      </Switch>
    </Layout>
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
