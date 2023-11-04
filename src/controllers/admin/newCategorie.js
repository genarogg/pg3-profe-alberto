import Categoria from "../../models/producto/Categorias.js";

const newCategorie = async (req, res) => {
    try {
        const { nombre } = req.body;

        const nuevaCategoria = await Categoria.create({
            nombre,
        });

        res.status(201).json(nuevaCategoria);
    } catch (error) {
        console.error('Error al crear la categoría:', error);
        res.status(500).json({ mensaje: 'Error al crear la categoría' });
    }
};

export default newCategorie;