const express = require('express');
const productoController = require('../controllers/productoController.js');
const adminController = require('../controllers/adminController.js');
const upload = require('../config/multer.js');

const router = express.Router();

router.post('/new-producto', upload.fields([
  { name: "img1", maxCount: 1 },
  { name: "img2", maxCount: 1 },
  { name: "img3", maxCount: 1 },
  { name: "img4", maxCount: 1 },
]), productoController.crearProducto);

router.get('/obtener-productos', productoController.getAllProductos);

router.put('/update-producto/:id', upload.fields([
  { name: "img1", maxCount: 1 },
  { name: "img2", maxCount: 1 },
  { name: "img3", maxCount: 1 },
  { name: "img4", maxCount: 1 },
]), productoController.updateProducto);

router.delete('/delete/:productoId', productoController.deleteProducto);

router.post('/new-categoria', adminController.newCategorie);

router.put('/update-categoria/:id', adminController.updateCategorie);

module.exports = router;
