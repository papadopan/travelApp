import React from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import LogIn from './LogIn';

const LOG_IN = gql`
  mutation logIn($username: String!, $email: String!) {
    logIn(username: $username, email: $email) {
      email
      username
    }
  }
`;

const SignUpContainer = () => {
  return (
    <Mutation mutation={LOG_IN}>
      {(logIn, { data, loading, error }) => {
        if (loading) {
          return 'Loading...';
        }

        if (error) {
          return `Error .... ${error.message}`;
        }

        if (data) {
          if (data.logIn) {
            return 'Success';
          }
          return 'Not user';
        }

        return <LogIn logIn={logIn} />;
      }}
    </Mutation>
  );
};

export default SignUpContainer;
