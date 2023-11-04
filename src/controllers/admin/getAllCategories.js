import Categoria from "../../models/producto/Categorias.js"; // Importa el modelo de Categoria

// Controlador para obtener todas las categorías
const getAllCategories = async (req, res) => {
  try {
    const categorias = await Categoria.findAll();

    res.render('admin/categoria', {datos: categorias});
  } catch (error) {
    console.error('Error al obtener las categorías:', error);
    res.status(500).json({ mensaje: 'Error al obtener las categorías' });
  }
};

export default getAllCategories;