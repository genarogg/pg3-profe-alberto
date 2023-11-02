import Producto from "../../models/producto/Producto.js"; // Importa el modelo de Productos


try {
    const { productoId } = req.params; // Obtiene el ID del producto de los parámetros de la URL

    // Busca el producto por su ID
    const producto = await Producto.findByPk(productoId);

    if (!producto) {
        return res.status(404).json({ mensaje: "Producto no encontrado" });
    }

    // Renderiza la vista con la información del producto
    res.render('admin/newProduct', { producto });
} catch (error) {
    console.error("Error al obtener el producto:", error);
    return res.status(500).json({ mensaje: "Error al obtener el producto" });
}