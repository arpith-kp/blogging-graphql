// Import helpers
const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
} = require('graphql');

// Root Query type is your starting point in data graph
const RootQueryType = new GraphQLObjectType({
  name: 'RootQueryType',

  fields: {
    hello: {
      type: GraphQLString,
      resolve: () => 'world',
    },
  },
});

const nsSchema = new GraphQLSchema({
  query: RootQueryType,
});

module.exports = nsSchema;
