const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Query {
    getAllUsers: [User]!
    getUser(id: ID!): User
  }

  type User {
    id: ID!
    firstName: String
    lastName: String
    email: String
  }
`;

module.exports = typeDefs;
