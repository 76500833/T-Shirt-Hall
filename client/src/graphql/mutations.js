import { gql } from "@apollo/client";
export const SIGNUP_MUTATION = gql`
  mutation Signup($username: String!, $email: String!, $password: String!) {
    signup(username: $username, email: $email, password: $password) {
      accessToken
    }
  }
`;
export const ADD_TO_CART = gql`
  mutation AddToCart($userId: ID!, $productId: ID!) {
    addToCart(userId: $userId, productId: $productId) {
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
export const CREATE_CART = gql`
  mutation CreateCart($userId: ID!, $productId: ID!) {
    createCart(userId: $userId, productId: $productId) {
      _id
      title
      description
      price
      imageUrl
    }
  }
`;
//disgregard this comment
