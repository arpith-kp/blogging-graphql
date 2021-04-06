module.exports = (pgPool) => {
  return {
    getUser(tokenId) {
      return pgPool.query(`
          select * from users
          where token_id = $1
        `, [tokenId]).then((res) => {
        return res['0'];
      });
    },
  };
};
