const path = require('path');
const rootDir = require('../util/path');


exports.postAddProduct = (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
}

exports.getAddProduct = (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'add-product.html'))
}

exports.getProduct = (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'shop.html'));
}