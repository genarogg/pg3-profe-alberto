import Categoria from "../../models/producto/Categorias.js";

const updateCategorie = async (req, res) => {
    try {
       
       const categoriaId = req.params.id;
        const { nombre } = req.body;

        const categoria = await Categoria.findByPk(categoriaId);

        if (!categoria) {
            return res.status(404).json({ mensaje: 'Categoría no encontrada' });
        }

        categoria.nombre = nombre;
        await categoria.save();

        res.status(200).json(categoria);
    } catch (error) {
        console.error('Error al actualizar la categoría:', error);
        res.status(500).json({ mensaje: 'Error al actualizar la categoría' });
    }
};

export default updateCategorie;