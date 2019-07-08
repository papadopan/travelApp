import React from 'react';
import styled from 'styled-components';
import { Formik, Field, Form } from 'formik';
import * as yup from 'yup';

const StyledSignUp = styled.div`
  height: 100%;
  border: 1px solid var(--color-secondary);
  padding: 2rem;
  width: 90%;
  max-width: 60rem;
`;

const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
`;

const StyledInput = styled.input`
  padding: 1rem;
  margin-bottom: 2rem;
  font-size: 1.5rem;
  outline: none;
  border: 0;
  border-bottom: 1px solid var(--color-main);
  color: var(--color-secondary);
  letter-spacing: 2px;
  text-align: center;
  width: 100%;
`;

const InputWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;
`;

const StyledButton = styled.button`
  padding: 1rem;
  border-radius: 10px;
  outline: none;
  border: 1px solid var(--color-main);
  margin-top: 4rem;
  background: transparent;
  color: var(--color-secondary);
  cursor: pointer;
  font-size: 1.5rem;
  letter-spacing: 1px;

  &:hover {
    background: var(--color-secondary);
    color: var(--color-main);
    border: 0;
  }
`;

const StyledError = styled.div`
  color: var(--color-main);
  text-align: center;
  position: absolute;
  bottom: 0;
  font-size: 1.2rem;
`;

const initialValues = {
  username: '',
  email: '',
  password: ''
};

const validationSchema = yup.object().shape({
  username: yup.string().required('username is required'),
  email: yup
    .string()
    .email()
    .required('The email is required'),
  password: yup
    .string()
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/,
      '8 characters (1 lowercase, 1 uppercase, 1 digit)'
    )
    .required('password is required')
});

const SignUp = ({ signUp }) => {
  return (
    <StyledSignUp>
      <Formik
        validationSchema={validationSchema}
        initialValues={initialValues}
        onSubmit={values => {
          signUp({
            variables: { username: values.username, email: values.email, password: values.password }
          });
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
              <Field name="email">
                {({ form: { errors, touched }, field }) => {
                  return (
                    <InputWrapper>
                      <StyledInput {...field} type="text" placeholder="email" />
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
                sign up
              </StyledButton>
            </StyledForm>
          );
        }}
      </Formik>
    </StyledSignUp>
  );
};

export default SignUp;