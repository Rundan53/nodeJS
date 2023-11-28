const path = require('path');

const rootDir = require('../util/path');
const productController = require('../controllers/product');
const contactController = require('../controllers/contact');

const express = require('express');

const router = express.Router();

// /admin/add-product => POST
router.post(`/add-product`,productController.postAddProduct);

//  /admin/add-product => GET
router.get(`/add-product`,productController.getAddProduct );

router.get('/contact-us', contactController.contactUS);

router.post('/success', contactController.contactformSuccess);

module.exports = router;