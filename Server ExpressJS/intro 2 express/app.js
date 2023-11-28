const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const rootDir = require('./util/path.js')
const adminRoutes = require('./routes/admin.js');
const shopRoutes = require('./routes/shop.js');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(rootDir,'public')))

app.use(`/admin`,adminRoutes);
app.use(shopRoutes);

app.use(require('./controllers/error.js').error)

//creates server and call listen method on server object using 'apply'
app.listen(3000);







