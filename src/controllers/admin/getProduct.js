import Producto from "../../models/producto/Producto.js"; // Importa el modelo de Productos
import Imagen from '../../models/producto/Imagenes.js'; // Importa el modelo de Imagen
import Categoria from '../../models/producto/Categorias.js'; // Importa el modelo de Categoria

// Controlador para obtener la información de un producto por su ID y renderizar la vista
const getProduct = async (req, res) => {
    try {
        const { id } = req.params; // Obtiene el ID del producto de los parámetros de la URL

        // Busca el producto por su ID en la base de datos e incluye las relaciones con Imagen y Categoria
        const producto = await Producto.findByPk(id, {
            include: [
                { model: Imagen, as: 'imagenes' },
                { model: Categoria, as: 'categoria' },
            ],
        });

        if (!producto) {
            return res.status(404).json({ mensaje: "Producto no encontrado" });
        }

        // Renderiza la vista "newProduct.ejs" con los datos del producto, la imagen y la categoría
        res.render('admin/newProduct', { producto });
        /* res.status(200).json({ producto }); */
    } catch (error) {
        console.error("Error al obtener el producto:", error);
        return res.status(500).json({ mensaje: "Error al obtener el producto" });
    }
};

export default getProduct;
