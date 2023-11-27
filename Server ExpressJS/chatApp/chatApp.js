const fs = require('fs');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const loginRouter = require(`./routes/login.js`);
const messageRouter = require('./routes/message.js')

app.use(bodyParser.urlencoded());
app.use(loginRouter);
app.use(messageRouter);


app.listen(3000);