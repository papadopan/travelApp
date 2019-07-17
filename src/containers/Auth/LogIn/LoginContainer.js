import React from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions';
import LogIn from './LogIn';

const LOG_IN = gql`
  mutation logIn($username: String!, $password: String!) {
    logIn(username: $username, password: $password) {
      email
      username
      token
      tokenExpiration
    }
  }
`;

const LogInContainer = ({ login, loadingOn, loadingOff }) => {
  return (
    <Mutation mutation={LOG_IN}>
      {(logIn, { data, loading, error }) => {
        if (loading) {
          loadingOn();
        }

        if (error) {
          return `Error .... ${error.message}`;
        }

        if (data) {
          // remove the spinner
          loadingOff();
          if (data.logIn) {
            // update the state that the user is loggedIn
            login();
            localStorage.setItem('token', data.logIn.token);
          }
          return 'Not user';
        }

        return <LogIn logIn={logIn} />;
      }}
    </Mutation>
  );
};

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  login: () => dispatch(actions.logIn()),
  loadingOn: () => dispatch(actions.requestStart()),
  loadingOff: () => dispatch(actions.requestEnd())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LogInContainer);
