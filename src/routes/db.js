import express from 'express';
import {
  crearProducto,
  getAllProductos,
  updateProducto,
  deleteProducto
} from '../controllers/productoController.js';

import { newCategorie, updateCategorie } from '../controllers/adminController.js';

import upload from '../config/multer.js';

const router = express.Router();

router.post('/new-producto', upload.fields([
  { name: "img1", maxCount: 1 },
  { name: "img2", maxCount: 1 },
  { name: "img3", maxCount: 1 },
  { name: "img4", maxCount: 1 },
]), crearProducto);

router.get('/obtener-productos', getAllProductos);

router.put('/update-producto/:id', upload.fields([
  { name: "img1", maxCount: 1 },
  { name: "img2", maxCount: 1 },
  { name: "img3", maxCount: 1 },
  { name: "img4", maxCount: 1 },
]), updateProducto);

router.delete('/delete/:productoId', deleteProducto);

router.post('/new-categoria', newCategorie)

router.put('/update-categoria/:id', updateCategorie)

export default router;