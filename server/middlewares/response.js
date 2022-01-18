const path = require('path');
const dbDir = path.resolve('./server/db');
const data = require(path.join(dbDir, 'db.js'));

module.exports.setGetUsersResponse = (req, res, next) => {
  const user = data.dbData.data.find(user => user.nickName === req.query.nickName && user.password === req.query.password);
  res.send(user);
  next();
}

module.exports.setGetUsersTest = (req, res, next) => {
  const usersTest = data.dbData.data;
  res.send(usersTest);
  next();
}

module.exports.deleteDelUser = (req, res, next) => {
	const users = data.dbData.data.filter(user => user.userId !== req.query.userId);
	data.dbData.data = users;
}

module.exports.putEditUser = (req, res, next) => {
	console.log('req.userEditForm', req.body.params.userEditForm);
	console.log('req.Id', req.body.params.userId);
	const user = data.dbData.data.find(user => user.userId === req.body.params.userId);
	const userIndex = data.dbData.data.findIndex(user => user.userId === req.body.params.userId);
	console.log('userIndex',userIndex)
	console.log('user befor edit:',user);

	user.nickName = req.body.params.userEditForm.nickName;
	user.firstName = req.body.params.userEditForm.firstName;
	user.lastName = req.body.params.userEditForm.lastName;
	user.age = req.body.params.userEditForm.age;
	/*изменить на isAdmin!!!*/
	user.isAdmin = req.body.params.userEditForm.userType;

	user.colleges = req.body.params.userEditForm.collegeArray;
}

module.exports.postAddUser = (req, res, next) => {
 const newUser = req.body.userCreateForm;
 newUser.isOnline = false;
 let testId = data.dbData.data[data.dbData.data.length - 1].userId;
  newUser.userId =  String(testId++);
  data.dbData.data.push(newUser);
}
