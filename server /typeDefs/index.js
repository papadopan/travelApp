const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
  }

  type SignData {
    email: String!
    username: String!
    token: String!
    tokenExpiration: Int!
  }

  type Query {
    users: [User]
  }

  type Mutation {
    signUp(username: String!, email: String!, password: String!): User!
    logIn(username: String!, password: String!): SignData
  }
`;

module.exports = typeDefs;
