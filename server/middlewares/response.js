const path = require('path');
const dbDir = path.resolve('./server/db');
const data = require(path.join(dbDir, 'db.js'));

module.exports.setGetUsersResponse = (req, res, next) => {
  const user = data.dbData.data.find(user => user.nickName === req.query.nickName && user.password === req.query.password);
  res.send(user);
  next();
}
