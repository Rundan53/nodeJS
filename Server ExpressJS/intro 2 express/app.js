let http = require('http');

let express = require('express');

const app = express();

app.use((req,res,next)=>{
    if (req.url !== '/favicon.ico') {
        console.log('Into the middleware');
        next();
      }
})

app.use((req,res)=>{
    console.log('Into the another middleware');
    res.send(`<h1>Welcome To Express</h1>`)
})


app.listen(3000);







