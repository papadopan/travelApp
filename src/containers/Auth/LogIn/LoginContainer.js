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
      {(logIn, { data }) => {
        if (!data) {
          return <LogIn logIn={logIn} />;
        }
        if (!data.logIn) {
          return <div>null</div>;
        }
        return 'Success';
      }}
    </Mutation>
  );
};

export default SignUpContainer;
