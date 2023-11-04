import express from 'express';
import { getAllProductos, getProduct, getAllCategories, newProducto } from "../controllers/adminController.js";

const router = express.Router();


router.get('/', getAllProductos);

router.get('/new', newProducto)

router.get('/update-producto/:id', getProduct)
/*  */

router.get('/categoria', getAllCategories)



export default router;