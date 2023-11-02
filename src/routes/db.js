import express from 'express';
import { crearProducto, getAllProductos, updateProducto, deleteProducto } from '../controllers/productoController.js';
import upload from '../config/multer.js';

const router = express.Router();

router.post('/new-producto', upload.fields([
    { name: 'img1', maxCount: 1 },
    { name: 'img2', maxCount: 1 },
    { name: 'img3', maxCount: 1 },
    { name: 'img4', maxCount: 1 },
]), crearProducto);

router.get('/obtener-productos', getAllProductos);

router.put('/update-producto/:productoId', updateProducto);

router.delete('/delete-producto/:productoId', deleteProducto);

export default router;