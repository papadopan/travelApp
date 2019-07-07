import React from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import SignUp from './SignUp';

const SIGN_UP = gql`
  mutation signUp($username: String!, $email: String!) {
    signUp(username: $username, email: $email) {
      username
      email
    }
  }
`;

const SignUpContainer = () => {
  return <Mutation mutation={SIGN_UP}>{(signUp, { data }) => <SignUp signUp={signUp} />}</Mutation>;
};

export default SignUpContainer;
