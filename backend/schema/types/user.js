const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLNonNull,
} = require('graphql');

module.exports = new GraphQLObjectType({
  name: 'UserType',

  fields: {
    id: {type: GraphQLID},
    firstName: {type: GraphQLString},
    email: {type: new GraphQLNonNull(GraphQLString)},
  },
});
