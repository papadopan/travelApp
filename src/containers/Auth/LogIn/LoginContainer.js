import React from 'react';
import { Mutation } from 'react-apollo';
import LOG_IN from '../../../queries/index';
import LogIn from './LogIn';

const LoginContainer = () => {
  return <Mutation mutation={LOG_IN}>{(logIn, { data }) => <LogIn logIn={logIn} />}</Mutation>;
};

export default LoginContainer;
