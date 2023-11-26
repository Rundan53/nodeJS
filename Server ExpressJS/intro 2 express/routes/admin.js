const express = require('express');

const router = express.Router();

// /admin/add-product => POST
router.post(`/add-product`, (req, res, next) => {
    console.log(req.body);
    res.redirect(`/`);
});

//  /admin/add-product => GET
router.get(`/add-product`, (req, res, next) => {
    res.send(`<form action="/admin/add-product" method="POST"><label for="prodName">Name</label>
    <input id="prodName" type="text" name="prodName"><label for="prodSize">Size</label>
    <input id="prodSize" type="text" name="prodSize"><button type="submit">Submit</button></form>`);
});

module.exports = router;