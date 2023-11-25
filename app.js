let http = require('http');

let express = require('express');

const app = express();

let routes = require('./routes.js');

const server = http.createServer(routes);

server.listen(4000);







