import express from 'express';
import { getAllProductos, getProduct, getAllCategories } from "../controllers/adminController.js";

const router = express.Router();


router.get('/', getAllProductos);

router.get('/new', (req, res) => {
    res.render('admin/newProduct')
})

router.get('/update-producto/:id', getProduct)
/*  */

router.get('/categoria', getAllCategories)



export default router;