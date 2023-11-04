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


        const transformarProducto = (objetoOriginal) => {
            const { nombre, descripcion, codigo, precio } = objetoOriginal;
            const categoria = objetoOriginal.categoria.nombre;
            const imgs = objetoOriginal.imagenes.map((imagen) => {
                return {
                    name: imagen.dataValues.url, // Asumiendo que el nombre de la imagen se encuentra en dataValues
                    destacada: imagen.dataValues.destacado, // Asumiendo que destacada se encuentra en dataValues
                };
            });

            const objetoTransformado = {
                nombre,
                descripcion,
                codigo,
                precio: precio.toString(),
                categoria,
                imgs,
            };

            return objetoTransformado;

        }

        const productoTransformado = transformarProducto(producto.dataValues);

        const categorias = await Categoria.findAll(); // Busca todas las categorías en la base de datos

       

        // Renderiza la vista "newProduct.ejs" con los datos del producto, la imagen y la categoría
        res.render('admin/updateProduct', { producto: productoTransformado, categorias });

    } catch (error) {
        console.error("Error al obtener el producto:", error);
        return res.status(500).json({ mensaje: "Error al obtener el producto" });
    }
};

export default getProduct;
