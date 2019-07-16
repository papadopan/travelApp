const { AuthenticationError } = require('apollo-server');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const JWT = require('jsonwebtoken');
const User = require('.././db/schema');

const resolvers = {
  Query: {
    users: (parent, args, { req }) => {
      console.log('as', req.isAuth);

      if (!req.isAuth) {
        throw new AuthenticationError('Unauthorized');
      }
      return User.find();
    }
  },
  Mutation: {
    signUp: async (_, { username, email, password }) => {
      const user = await User.find({ email, username });

      if (user.length > 0) {
        return null;
      }

      const newUser = new User({
        _id: mongoose.Types.ObjectId(),
        username,
        email,
        password: await bcrypt.hash(password, 12)
      });
      // save and return the user
      await newUser.save();
      return newUser;
    },
    logIn: async (_, { username, password }, { res }) => {
      const registeredUser = await User.findOne({ username });

      // if the user does not exist
      if (!registeredUser) {
        return null;
      }

      const pwdCheck = await bcrypt.compare(password, registeredUser.password);

      // if the password is not the correct
      if (!pwdCheck) {
        throw new AuthenticationError('The username/password are not valid');
      }

      // create a token
      const token = JWT.sign(
        {
          iss: 'papadopan',
          sub: registeredUser.id,
          iat: new Date().getTime(), // current time
          exp: new Date().setDate(new Date().getDate() + 1) // current date + 1 day
        },
        'TheSecretCombinationIsAMysteryForYou'
      );

      return {
        email: registeredUser.email,
        username: registeredUser.username,
        token,
        tokenExpiration: 1
      };
    }
  }
};

module.exports = resolvers;
