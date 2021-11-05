const path = require('path');
const fs = require('fs');
const dbFilesDir = path.resolve('./server/db/json');
const files = fs.readdirSync(dbFilesDir);

let dbData = {};
files.forEach((fileName) => {
  const content = require(path.join(dbFilesDir, fileName));
  Object.assign(dbData, content);
});

module.exports = { dbData };
