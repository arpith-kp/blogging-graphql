const app = require('express')();
const pgp = require('pg-promise')();
const connectString = 'postgres://localhost:5432/blogging';
const db = {};
db.conn = pgp(connectString);
const pgPool = db.conn;

const ncSchema = require('../schema');
const graphqlHTTP = require('express-graphql');

// Execute the query
app.use('/graphql', graphqlHTTP({
  schema: ncSchema,
  graphiql: true,
  context: {pgPool},
}));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
