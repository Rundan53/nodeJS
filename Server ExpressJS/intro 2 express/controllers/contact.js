const path = require('path');
const rootDir = require('../util/path');

exports.contactUS = (req, res,next) => {
    res.sendFile(path.join(rootDir, 'views', 'contact-us.html'))
};

exports.contactformSuccess = (req, res, next) => {
    console.log(req.body);
    res.send('<h1>Form successfuly filled</h1>');
}