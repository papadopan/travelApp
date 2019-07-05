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
  font-size: 1.2rem;
  outline: none;
  border: 0;
  border-bottom: 1px solid var(--color-main);
  color: var(--color-secondary);
  letter-spacing: 2px;
  text-align: center;
  width: 200px;
`;

const InputWrapper = styled.div`
  background: red;
`;

const StyledButton = styled.button`
  padding: 1rem;
  border-radius: 10px;
  outline: none;
`;

const StyledError = styled.div`
  color: red;
  text-align: center;
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
                    <div>
                      <StyledInput {...field} type="text" placeholder="username" />
                      {errors[field.name] ? <StyledError>{errors[field.name]}</StyledError> : null}
                    </div>
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
