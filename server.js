const jsonServer = require('json-server');

const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middleWares = jsonServer.defaults();

const port = process.env.PORT || 8000;

server.use(middleWares);
server.use(router);
server.listen(port, () => {
    // eslint-disable-next-line no-console
  console.log(`JSON Server is running in ${port}`);
});
