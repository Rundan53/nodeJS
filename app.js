let http = require('http');

let routes = require('./routes.js');

const server = http.createServer(routes);

server.listen(4000);
