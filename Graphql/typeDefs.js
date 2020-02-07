const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Query {
    getAllUsers: [User]!
    getUser(id: Int!): User
    getAllPosts: [Post]!
    getPost(id: Int!): Post
  }

  type User {
    id: ID!
    firstName: String
    lastName: String
    email: String
  }

  type Post {
    id: ID!
    title: String
    description: String
    userId: Int
  }

  type Mutation {
    createUser(firstName: String!, lastName: String!, email: String!): User!
    editUser(
      id: ID!
      firstName: String!
      lastName: String!
      email: String!
    ): User!
    deleteUser(id: Int!): User!
    createPost(title: String!, description: String!, userId: Int!): Post!
    editPost(id: ID!, title: String!, description: String!): Post!
    deletePost(id: Int!): Post!
  }
`;

module.exports = typeDefs;
