import {gql} from '@apollo/client'
const GET_SHIRTS = gql`
  query GetShirts {
    shirts {
      _id
      name
      description
      image
      
    }
  }
`;

const LOGIN_MUTATION = gql`
  mutation Login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      token
    }
  }
`;

const SIGNUP_MUTATION = gql`
mutation Signup($username: String!, $password: String!) {
  signup(username: $username, password: $password) {
    token
  }
}`;

const GET_CART = gql`
  query GetCart($userId: ID!) {
    cart(userId: $userId) {
      _id
      products {
        _id
        title
        description
        price
        imageUrl
      }
    }
  }
`;
export { GET_SHIRTS, LOGIN_MUTATION, SIGNUP_MUTATION, GET_CART};
