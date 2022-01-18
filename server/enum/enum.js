const url = {
  USER_RESPONSE: '/api/users/getUserList',
	USERS_RESPONSE: '/api/users/getUsersList',
	USER_DEL_RESPONSE:  '/api/users/deleteDelUser',
	USER_EDIT_RESPONSE: '/api/users/putEditUser',
	USER_ADD_RESPONSE: '/api/users/postAddUser',
};

const server = {
  INFO: ''
};

Object.freeze(url);
Object.freeze(server);

module.exports = { url, server };
