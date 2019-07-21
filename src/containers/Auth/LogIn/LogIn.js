import React from 'react';
import styled from 'styled-components';
import { Formik, Field, Form } from 'formik';
import * as yup from 'yup';
import Link from '@material-ui/core/Link';
import { NavLink } from 'react-router-dom';

import { FormattedMessage } from 'react-intl';
import logInLogo from '../../../assets/login.jpg';

const StyledLogIn = styled.div`
  height: 100%;
  width: 100%;
  height: calc(100vh - 4rem);
  display: flex;
`;

const HeroImg = styled.div`
  order: 1;
  flex: 2;
  background-image: url(${logInLogo});
  background-position: top;
  background-repeat: no-repeat;
  background-size: cover;
`;

const FormDiv = styled.div`
  order: 2;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  width: 70%;
`;

const StyledInput = styled.input`
  padding: 1rem;
  margin-bottom: 2rem;
  font-size: 1rem;
  outline: none;
  border: 0;
  border-bottom: 1px solid var(--color-main);
  color: var(--color-secondary);
  letter-spacing: 2px;
  text-align: center;
  width: 40rem;
`;

const InputWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledButton = styled.button`
  padding: 1rem;
  border-radius: 10px;
  outline: none;
  border: 1px solid var(--color-main);
  margin-top: 2rem;
  background: transparent;
  color: var(--color-secondary);
  cursor: pointer;
  font-size: 1rem;
  letter-spacing: 1px;

  &:hover {
    background: var(--color-secondary);
    color: var(--color-main);
    border: 1px solid var(--color-secondary);
  }
`;

const StyledError = styled.div`
  color: var(--color-main);
  text-align: center;
  position: absolute;
  bottom: 2px;
  font-size: 1rem;
`;

const LinkDiv = styled.div`
  width: 100%;
  padding: 1rem;
  text-align: center;
`;

const LinkTitle = styled(Link)`
  font-size: 3.5rem;
  padding-right: 2rem;

  &.active {
    color: var(--color-main);
  }
`;

const initialValues = {
  username: '',
  password: ''
};

const validationSchema = yup.object().shape({
  username: yup.string().required('username is required'),
  password: yup
    .string()
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/,
      '8 characters (1 lowercase, 1 uppercase, 1 digit)'
    )
    .required('password is required')
});

const LogIn = ({ logIn }) => {
  return (
    <StyledLogIn>
      <HeroImg />
      <FormDiv>
        <LinkDiv>
          <LinkTitle component={NavLink} to="/login" color="error" underline="none">
            <FormattedMessage id="login.title" defaultMessage="Log In" />
          </LinkTitle>
          <LinkTitle component={NavLink} to="/signup" color="error" underline="none">
            <FormattedMessage id="signup.title" defaultMessage="Sign Up" />
          </LinkTitle>
        </LinkDiv>
        <Formik
          validationSchema={validationSchema}
          initialValues={initialValues}
          onSubmit={values => {
            logIn({ variables: { username: values.username, password: values.password } });
          }}
        >
          {({ isSubmiting }) => {
            return (
              <StyledForm>
                <Field name="username">
                  {({ form: { errors, touched }, field }) => {
                    return (
                      <InputWrapper>
                        <StyledInput {...field} type="text" placeholder="username" />
                        {touched[field.name] && errors[field.name] ? (
                          <StyledError>{errors[field.name]}</StyledError>
                        ) : null}
                      </InputWrapper>
                    );
                  }}
                </Field>
                <Field name="password">
                  {({ form: { errors, touched }, field }) => {
                    return (
                      <InputWrapper>
                        <StyledInput {...field} type="password" placeholder="password" />
                        {touched[field.name] && errors[field.name] ? (
                          <StyledError>{errors[field.name]}</StyledError>
                        ) : null}
                      </InputWrapper>
                    );
                  }}
                </Field>
                <StyledButton type="submit" disabled={isSubmiting}>
                  log in
                </StyledButton>
              </StyledForm>
            );
          }}
        </Formik>
      </FormDiv>
    </StyledLogIn>
  );
};

export default LogIn;
