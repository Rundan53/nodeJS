const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const adminRoutes = require('./routes/admin.js');
const shopRoutes = require('./routes/shop.js');

app.use(bodyParser.urlencoded({ extended: false }));

app.use(`/admin`,adminRoutes);
app.use(shopRoutes);

app.use((req,res,next) => {
    res.status(404).send(`<h1>Page not found</h1>`)
})

//creates server and call listen method on server object using 'apply'
app.listen(3000);







