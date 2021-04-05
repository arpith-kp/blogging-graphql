const {nodeEnv} = require('./util');
console.log(`Running in ${nodeEnv} mode...`);

// Query argument
const queryArg = process.argv[2];

const ncSchema = require('../schema');
const {graphql} = require('graphql');

// Execute the query with our Schema
graphql(ncSchema, queryArg).then((result) => {
  console.log(JSON.parse(JSON.stringify(result)));
});
