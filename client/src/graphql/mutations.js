import { gql } from '@apollo/client';
export const SIGNUP_MUTATION = gql`
  mutation Signup($username: String!, $email: String!, $password: String!) {
    signup(username: $username, email: $email, password: $password) {
        
      accessToken
    }
  }
`;
//disgregard this comment