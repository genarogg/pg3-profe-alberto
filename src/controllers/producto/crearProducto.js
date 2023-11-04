import Producto from '../../models/producto/Producto.js';
import Categoria from '../../models/producto/Categorias.js';
import Imagen from '../../models/producto/Imagenes.js';

const guardarImagenes = async (productoId, imagenes) => {
    const imagenesGuardadas = [];

    for (const imagenData of imagenes) {
        const { name, destacada } = imagenData;

        // Crea una nueva imagen y guarda en la base de datos
        const nuevaImagen = await Imagen.create({
            producto_id: productoId,
            url: "/uploads/" + name,
            destacado: destacada,
        });

        imagenesGuardadas.push(nuevaImagen);
    }

    return imagenesGuardadas;
};

const crearProducto = async (req, res) => {
    try {
        console.log();
        const { nombre, codigo, precio, descripcion, categoria } = req.body;
    console.log(categoria)
        /* const nuevaCategoria = await Categoria.create({ nombre: categoria });
         */

        const nuevoProducto = await Producto.create({
            nombre,
            codigo,
            precio,
            descripcion,
            categoria_id: categoria,
        });

        const nuevasImagenes = await guardarImagenes(nuevoProducto.id, JSON.parse(req.body.imgs));

        res.status(201).json({ mensaje: "Producto creado con éxito", producto: nuevoProducto, imagenes: nuevasImagenes, redirect: '/admin' });
    } catch (error) {
        console.error("Error al crear el producto:", error);
        return res.status(500).json({ mensaje: "Error al crear el producto" });
    }
};

export default crearProducto;