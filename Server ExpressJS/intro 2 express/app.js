let http = require('http');

let express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.post(`/product`, (req, res, next) => {
    console.log(req.body);
    res.redirect(`/`);
})

app.use(`/add-product`, (req, res, next) => {
    res.send(`<form action="/product" method="POST"><label for="prodName">Name</label>
    <input id="prodName" type="text" name="prodName"><label for="prodSize">Size</label>
    <input id="prodSize" type="text" name="prodSize"><button type="submit">Submit</button></form>`);
});

app.use(`/`, (req, res, next) => {
    res.send('<h1>Home Page</h1>');
})





//creates server and call listen method on server object using 'apply'
app.listen(3000);







