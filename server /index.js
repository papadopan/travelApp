const { ApolloServer, gql } = require('apollo-server-express');
const express = require('express');
const mongoose = require('mongoose');

mongoose.connect(
  'mongodb+srv://papadopan:papadopan@cluster0-mvkmt.mongodb.net/test?retryWrites=true&w=majority',
  { useNewUrlParser: true }
);

const app = express();

const User = require('./db/schema');

const users = [
  { username: 'papadopan', email: 'apapa@gmail.com' },
  { username: 'sofia', email: 'sofiazste@gmail.com' }
];

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
  }

  type Query {
    users: [User]
  }

  type Mutation {
    signUp(username: String!, email: String!): User
    logIn(username: String!, email: String!): User
  }
`;

const resolvers = {
  Query: {
    users: () => User.find()
  },
  Mutation: {
    signUp: (_, { username, email }) => {
      const newUser = new User({
        _id: mongoose.Types.ObjectId(),
        username,
        email
      });
      newUser.save();
    },
    logIn: async (_, { username, email }) => {
      let registeredUser = {};
      await User.findOne({ email, username }).then(doc => {
        registeredUser = doc;
      });

      return registeredUser || null;
    }
  }
};

const server = new ApolloServer({ typeDefs, resolvers });
server.applyMiddleware({ app });

app.listen({ port: 4000 }, () => {
  console.log('The app is listening to port 4000');
});
