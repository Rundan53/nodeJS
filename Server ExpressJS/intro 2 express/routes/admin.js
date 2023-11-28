const path = require('path');

const rootDir = require('../util/path');

const express = require('express');

const router = express.Router();

// /admin/add-product => POST
router.post(`/add-product`, (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
});

//  /admin/add-product => GET
router.get(`/add-product`, (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'add-product.html'))
});

router.get('/contact-us', (req, res,next) => {
    res.sendFile(path.join(rootDir, 'views', 'contact-us.html'))
});

router.post('/success', (req, res, next) => {
    console.log(req.body);
    res.send('<h1>Form successfuly filled</h1>');
})

module.exports = router;