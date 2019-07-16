const { ApolloServer } = require('apollo-server-express');
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const typeDefs = require('./typeDefs');
const resolvers = require('./resolvers');
const isAuth = require('./middleware/isAuth');

mongoose.connect(
  'mongodb+srv://papadopan:papadopan@cluster0-mvkmt.mongodb.net/test?retryWrites=true&w=majority',
  { useNewUrlParser: true }
);

const app = express();

app.use(cors());
app.use(cookieParser());

app.use(isAuth);

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req, res }) => {
    return { req, res };
  }
});

server.applyMiddleware({ app });

app.listen({ port: 4000 }, () => {
  console.log('The app is listening to port 4000');
});
