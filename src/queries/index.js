import gql from 'graphql-tag';

const SIGN_UP = gql`
  mutation signUp($username: String!, $email: String!) {
    signUp(username: $username, email: $email) {
      username
      email
    }
  }
`;

const LOG_IN = gql`
  mutation logIn($username: String!, $email: String!) {
    logIn(username: $username, email: $email) {
      email
      username
    }
  }
`;

export default SIGN_UP;
