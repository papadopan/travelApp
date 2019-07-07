import React from 'react';
import { Mutation } from 'react-apollo';
import SIGN_UP from '../../../queries/index';
import SignUp from './SignUp';

const SignUpContainer = () => {
  return <Mutation mutation={SIGN_UP}>{(signUp, { data }) => <SignUp signUp={signUp} />}</Mutation>;
};

export default SignUpContainer;
