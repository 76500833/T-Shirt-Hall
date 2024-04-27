//model
//typedef
//query

const typeDefs = `
  
  type Cart {
    _id: ID
    products: [ID]
    user: ID!
    total: Float
  }
  type User {
    _id: ID!
    username: String
    email: String!
    cart(userId: ID!): [Cart]!
  }
  type Shirt {
    _id: ID!
    name: String!
    price: Float!
    size: String!
    description: String
    color: String!
    image: String
    stock: Int!
    category: String!
  }
  type Query {
    users: [User]!
    shirts: [Shirt]
    cart(userId: ID!): [Cart]
  }

  type Mutation {
    # when a client sends an addToCart mutation to your server, 
    # they should expect to receive a Cart object in response.
    createCart(userId: ID!, productId: [ID!]!): Cart!
    addToCart(cartId: ID!, productId: ID!): Cart!
 
    signup(username: String, email: String!, password: String!): AuthPayload!
    login(email: String!, password: String!): AuthPayload!
  }

  type AuthPayload {
    accessToken: String!
  }
`;

// The queries and mutations that you send from your React components 
//need to match the type definitions in here.
module.exports = typeDefs;
