const express = require(`express`);

const router = express.Router();

router.get('/login', (req, res, next) => {
    res.send(`<html>
    <body>
    <form action="/" onsubmit="localStorage.setItem('userName',document.getElementById('userName').value)"
     method="GET"><label for="userName">User Name</label><br>
    <input type="text" id="userName" name="userName"><br><button type="submit" id="sbmtBtn">Login</button></form>
    </body>
    </html>`);
});

module.exports = router;