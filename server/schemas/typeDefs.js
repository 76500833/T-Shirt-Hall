const typeDefs = `
  type Query {
    hello: String
  }

  type Mutation {
    hello(_id: String!): String
  }
`;

module.exports = typeDefs;
