import express from 'express';
import { getAllProductos } from "../controllers/adminController.js";

const router = express.Router();


router.get('/', async (req, res) => {
    try {
        const producto = await getAllProductos(); // Llama a la función getAllProductos

        console.log(producto);

        // Renderiza la vista con los productos obtenidos
        res.render('admin/allProduct', producto);
    } catch (error) {
        console.error("Error al obtener los productos:", error);
        // Maneja el error apropiadamente, por ejemplo, mostrando un mensaje de error en la vista.
        res.render('error', { message: 'Error al obtener los productos.' });
    }
});


router.get('/new', (req, res) => {
    res.render('admin/newProduct/:productoId'); // Renderiza la vista newProduct.ejs
});
export default router;