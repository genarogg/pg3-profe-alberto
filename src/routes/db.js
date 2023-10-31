import express from 'express';
import { crearProducto, getAllProductos, updateProducto, deleteProducto } from '../controllers/productoController.js';

const router = express.Router();

router.post('/new-producto', crearProducto);

router.get('/obtener-productos', getAllProductos);

router.put('/update-producto/:productoId', updateProducto);

router.delete('/delete-producto/:productoId', deleteProducto);

export default router;