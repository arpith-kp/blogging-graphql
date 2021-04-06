// Import helpers
const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLNonNull,
} = require('graphql');

const UserType = require('./types/user');
const pgdb = require('../db/pgdb');

// Root Query type is your starting point in data graph
const RootQueryType = new GraphQLObjectType({
  name: 'RootQueryType',

  fields: {
    user: {
      type: UserType,
      description: 'Current user identified by token id',
      args: {
        token: {type: new GraphQLNonNull(GraphQLString)},
      },
      resolve: (obj, args, {pgPool}) => {
        // Read from Postgres DB
        return pgdb(pgPool).getUser(args.token);
      },
    },
  },
});

const nsSchema = new GraphQLSchema({
  query: RootQueryType,
});

module.exports = nsSchema;
