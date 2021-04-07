const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLNonNull,
  GraphQLList,
} = require('graphql');
const pgdb = require('../../db/pgdb');

const PostType = require('./post');

module.exports = new GraphQLObjectType({
  name: 'UserType',

  fields: {
    id: {type: GraphQLID},
    firstName: {type: GraphQLString},
    lastName: {type: GraphQLString},
    email: {type: new GraphQLNonNull(GraphQLString)},
    createdAt: {type: GraphQLString},
    posts: {
      type: new GraphQLList(PostType),
      resolve: (obj, args, {pgPool}) => {
        return pgdb(pgPool).getPosts(obj);
      },
    },
  },
});
