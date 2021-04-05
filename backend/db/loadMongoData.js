const { MongoClient } = require('mongodb');
const assert = require('assert');
const { nodeEnv } = require('../lib/util');
const mongoConfig = require('../config/mongo')[nodeEnv];

MongoClient.connect(mongoConfig.url, (err, db) => {
  assert.equal(null, err);

  db.collection('users').insertMany([
    {
      userId: 1,
      postsCount: 0,
      votesCount: 4,
    },
    {
      userId: 2,
      postsCount: 4,
      votesCount: 4,
    },
  ]).then((response) => {
    console.log(response);
    db.close();
  });
});
