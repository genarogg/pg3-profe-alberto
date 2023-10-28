import express from 'express';
import { crearProducto } from '../controllers/productoController.js';


/* import crearProducto from '../controllers/producto/crearProducto.js'; */

const router = express.Router();

router.post('/new-producto', crearProducto);

export default router;