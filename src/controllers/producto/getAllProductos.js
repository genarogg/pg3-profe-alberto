import Producto from "../../models/producto/Producto.js"; // Importa el modelo de Productos

// Controlador para obtener todos los productos
const getAllProductos = async (req, res) => {
    try {
        // Busca todos los productos en la base de datos
        const productos = await Producto.findAll();

        return res.status(200).json({ productos });
    } catch (error) {
        console.error("Error al obtener los productos:", error);
        return res.status(500).json({ mensaje: "Error al obtener los productos" });
    }
};

export default getAllProductos ;
