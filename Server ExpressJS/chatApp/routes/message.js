const fs = require('fs');

const express = require(`express`);

const router = express.Router();

router.get('/',(req, res, next) => {
    fs.readFile('data.txt','utf-8',(err, data) => {
        if(err){
            console.log(err.message);
            data='no chat exists';
        }   
            res.send(`<form onsubmit="document.getElementById('userName').value= localStorage.getItem('userName')" action="/" method="POST">
            <body>${data}</body><br>
            <body>
            <input type="text" name="message">
            <input type="hidden" name="userName" id="userName"><br>
            <button type="submit">Send</button>
            </body>
            </form>`);
        
    });
   
});

router.post('/', (req, res, next) => {
    const userName = req.body.userName;
    const message = req.body.message;

    fs.writeFile('data.txt', `${userName}:${message}`, {flag:'a'}, (err,data)=>{
        res.redirect('/');
    });
})

module.exports = router;