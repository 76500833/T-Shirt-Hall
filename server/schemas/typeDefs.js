const typeDefs = `
  type Query {
    users: [User]!
    shirts: [Shirt]
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
    cart: [Cart]!
  }
  type Shirt {
    name: String!
    price: Float!
    size: String!
    description: String
    color: String!
    image: String
    stock: Int!
    category: String!
  }
`;

// The queries and mutations that you send from your React components 
//need to match the type definitions in here.
module.exports = typeDefs;
