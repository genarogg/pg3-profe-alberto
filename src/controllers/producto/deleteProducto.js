import Producto from '../../models/producto/Producto.js';

// Controlador para eliminar un producto por su ID
const deleteProducto = async (req, res) => {
    try {
        console.log(req.params);
        const { productoId } = req.params; // Obtiene el ID del producto de los parámetros de la URL

        // Busca el producto por su ID
        const producto = await Producto.findByPk(productoId);

        if (!producto) {
            return res.status(404).json({ mensaje: "Producto no encontrado" });
        }

        // Elimina el producto de la base de datos
        await producto.destroy();

        return res.status(200).json({ mensaje: "Producto eliminado con éxito" });
    } catch (error) {
        console.error("Error al eliminar el producto:", error);
        return res.status(500).json({ mensaje: "Error al eliminar el producto" });
    }
};

export default deleteProducto;