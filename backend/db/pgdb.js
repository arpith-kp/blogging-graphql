const humps = require('humps');
module.exports = (pgPool) => {
  return {
    getUser(tokenId) {
      return pgPool.query(`
          select * from users
          where token_id = $1
        `, [tokenId]).then((res) => {
        return humps.camelizeKeys(res['0']);
      });
    },
    getPosts(user) {
      return pgPool.query(`
        select * from posts
        where author_id=$1
        `, [user.id]).then((res) => {
        return humps.camelizeKeys(res);
      });
    },
  };
};
