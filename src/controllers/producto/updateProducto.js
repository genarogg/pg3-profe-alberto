import Producto from "../../models/producto/Producto.js"; // Importa el modelo de Productos
import Categoria from "../../models/producto/Categorias.js"; // Importa el modelo de Categorías

// Controlador para actualizar un producto por su ID
const updateProducto = async (req, res) => {
    try {
        const { productoId } = req.params; // Obtiene el ID del producto de los parámetros de la URL
        const { nombre, codigo, precio, descripcion, categoria } = req.body;

        // Busca el producto por su ID
        const producto = await Producto.findByPk(productoId);

        if (!producto) {
            return res.status(404).json({ mensaje: "Producto no encontrado" });
        }

        // Si se proporciona una nueva categoría, busca o crea la categoría
        let nuevaCategoria;
        if (categoria) {
            nuevaCategoria = await Categoria.findOrCreate({ where: { nombre: categoria } });
        }

        // Actualiza las propiedades del producto
        producto.nombre = nombre || producto.nombre;
        producto.codigo = codigo || producto.codigo;
        producto.precio = precio || producto.precio;
        producto.descripcion = descripcion || producto.descripcion;

        // Asigna la nueva categoría si se proporciona
        if (nuevaCategoria) {
            producto.categoria_id = nuevaCategoria[0].id;
        }

        // Guarda los cambios en la base de datos
        await producto.save();

        return res.status(200).json({ mensaje: "Producto actualizado con éxito", producto });
    } catch (error) {
        console.error("Error al actualizar el producto:", error);
        return res.status(500).json({ mensaje: "Error al actualizar el producto" });
    }
};

export default updateProducto;
