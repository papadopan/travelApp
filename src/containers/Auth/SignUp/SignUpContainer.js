import React from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import SignUp from './SignUp';
import Loader from '../../../components/Loader/Loader';
import * as actions from '../../../store/actions';

const SIGN_UP = gql`
  mutation signUp($username: String!, $email: String!, $password: String!) {
    signUp(username: $username, email: $email, password: $password) {
      username
      email
    }
  }
`;

const SignUpContainer = ({ login }) => {
  return (
    <Mutation mutation={SIGN_UP}>
      {(signUp, { data, loading, error }) => {
        if (loading) {
          return <Loader />;
        }

        if (error) {
          return `Error... ${error.message}`;
        }

        if (data) {
          if (data.signUp) {
            return <Redirect to="/login" exact />;
          }
          return 'This email is already registered';
        }

        return <SignUp signUp={signUp} />;
      }}
    </Mutation>
  );
};

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  login: () => dispatch(actions.logIn())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUpContainer);
