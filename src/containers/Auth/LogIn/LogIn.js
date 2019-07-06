import React from 'react';
import styled from 'styled-components';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as yup from 'yup';

const StyledLogIn = styled.div`
  height: 100%;
  border: 1px solid var(--color-secondary);
  padding: 2rem;
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
  bottom: 2px;
  font-size: 1.2rem;
`;

const initialValues = {
  username: '',
  email: ''
};

const validationSchema = yup.object().shape({
  username: yup.string().required('username is required'),
  email: yup
    .string()
    .email()
    .required()
});

const LogIn = () => {
  return (
    <StyledLogIn>
      <Formik
        validationSchema={validationSchema}
        initialValues={initialValues}
        onSubmit={values =>
          setTimeout(() => {
            console.log(JSON.stringify(values, null, 2));
          }, 1000)
        }
      >
        {({ isSubmiting }) => {
          return (
            <StyledForm>
              <Field name="username">
                {({ form: { errors }, field }) => {
                  return (
                    <InputWrapper>
                      <StyledInput {...field} type="text" placeholder="username" />
                      {errors[field.name] ? <StyledError>{errors[field.name]}</StyledError> : null}
                    </InputWrapper>
                  );
                }}
              </Field>
              <Field name="email">
                {({ form: { errors }, field }) => {
                  return (
                    <InputWrapper>
                      <StyledInput {...field} type="text" placeholder="email" />
                      {errors[field.name] ? <StyledError>{errors[field.name]}</StyledError> : null}
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
    </StyledLogIn>
  );
};

export default LogIn;
