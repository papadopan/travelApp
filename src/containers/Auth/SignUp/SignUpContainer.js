import React from 'react';
import { Mutation } from 'react-apollo';
import SignUp from './SignUp';
import { SIGN_UP } from '../../../queries/index';

const SignUpContainer = () => {
  return (
    <Mutation mutation={SIGN_UP}>
      {(signUp, { data, loading, error }) => {
        if (loading) {
          return 'Loading....';
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
