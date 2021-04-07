const humps = require('humps');
module.exports = (pgPool) => {
  return {
    getUser(tokenId) {
      return pgPool.query(`
          select * from users
          where token_id = $1
        `, [tokenId]).then((res) => {
        console.log(res);
        return humps.camelizeKeys(res['0']);
      });
    },
  };
};
