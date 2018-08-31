// sql语句
var sqlMap = {
  // 用户
  user: {
    login: 'SELECT password FROM admin WHERE username = ?;',
    add: 'insert into user(username, password, confirmPassword) values (0, ?, ?)'
  }
}

module.exports = sqlMap;
