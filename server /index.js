const { ApolloServer, gql } = require('apollo-server-express');
const express = require('express');

const app = express();

const User = require('./db/schema');

const users = [
  { username: 'papadopan', email: 'apapa@gmail.com' },
  { username: 'sofia', email: 'sofiazste@gmail.com' }
];

const typeDefs = gql`
  type User {
    username: String
    email: String
  }

  type Query {
    users: [User]
  }

  type Mutation {
    signUp(username: String!, email: String!): User
  }
`;

const resolvers = {
  Query: {
    users: () => users
  },
  Mutation: {
    signUp: (_, { username, email }) => {
      const user = { username, email };
      users.push(user);
      return user;
    }
  }
};

const server = new ApolloServer({ typeDefs, resolvers });
server.applyMiddleware({ app });

app.listen({ port: 4000 }, () => {
  console.log('The app is listening to port 4000');
});
