import Categoria from "../../models/producto/Categorias.js";

const newProducto = async (req, res) => {
    try {
        const categorias = await Categoria.findAll(); // Busca todas las categorías en la base de datos
        res.render('admin/newProduct', { categorias });
    } catch (error) {
        console.error("Error al obtener el producto:", error);
        return res.status(500).json({ mensaje: "Error al obtener el producto" });
    }
}

export default newProducto;