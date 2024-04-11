const typeDefs = `
  type Query {
    users: [User]!
  }

  type Mutation {
    # when a client sends an addToCart mutation to your server, 
    # they should expect to receive a Cart object in response.
    addToCart(userId: ID!, productId: ID!, total: Float!): Cart!
  }
  type Cart {
    _id: ID!
    products: [ID!]!
    user: ID!
    total: Float!
  }
  type User {
    _id: ID!
    username: String!
    email: String!
    password: String!
    cart: [Cart]!
  }
`;

module.exports = typeDefs;
