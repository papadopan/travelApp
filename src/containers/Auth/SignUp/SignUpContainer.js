import React from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import SignUp from './SignUp';
import Loader from '../../../components/Loader/Loader';

const SIGN_UP = gql`
  mutation signUp($username: String!, $email: String!, $password: String!) {
    signUp(username: $username, email: $email, password: $password) {
      username
      email
    }
  }
`;

const SignUpContainer = () => {
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
            return 'Success';
          }
          return 'This email is already registered';
        }

        return <SignUp signUp={signUp} />;
      }}
    </Mutation>
  );
};
export default SignUpContainer;
