const jsonServer = require('json-server');
const server = jsonServer.create();
const path = require('path');
const middlewares = jsonServer.defaults();
const response = require(path.join(__dirname, 'middlewares/response.js'));
const routes = require(path.join(__dirname, 'routes/routes.js'));
const enumDir = path.resolve('./server/enum');
const enums = require(path.join(enumDir, 'enum.js'));

server.use(jsonServer.bodyParser);
server.use(middlewares);
server.use(jsonServer.rewriter(routes));
server.use(enums.url.USER_RESPONSE, response.setGetUsersResponse);
server.use(enums.url.USERS_RESPONSE, response.setGetUsersTest);
server.use(enums.url.USER_DEL_RESPONSE, response.deleteDelUser);
server.use(enums.url.USER_EDIT_RESPONSE, response.putEditUser);
server.use(enums.url.USER_ADD_RESPONSE, response.postAddUser);

server.listen(process.env.PORT, () => {
  console.log('Server listening port ' + process.env.PORT);
});
