import express from 'express';
import { crearProducto, getAllProductos, updateProducto, deleteProducto } from '../controllers/productoController.js';
import upload from '../config/multer.js';

const router = express.Router();

router.post('/new-producto',upload.single('imagen'), crearProducto);

router.get('/obtener-productos', getAllProductos);

router.put('/update-producto/:productoId', updateProducto);

router.delete('/delete-producto/:productoId', deleteProducto);

export default router;