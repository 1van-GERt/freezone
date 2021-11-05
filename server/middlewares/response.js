const path = require('path');
const dbDir = path.resolve('./server/db');
const data = require(path.join(dbDir, 'db.js'));

module.exports.setGetUsersResponse = (req, res, next) => {
  res.send(data.dbData);
  next();
}
