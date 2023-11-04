const express = require('express');
const adminController = require('../controllers/adminController.js');

const router = express.Router();

router.get('/', adminController.getAllProductos);

router.get('/new', adminController.newProducto);

router.get('/update-producto/:id', adminController.getProduct);

router.get('/categoria', adminController.getAllCategories);

module.exports = router;
