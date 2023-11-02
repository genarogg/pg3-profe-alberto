import Producto from '../../models/producto/Producto.js';
import Categoria from '../../models/producto/Categorias.js';
import Imagen from '../../models/producto/Imagenes.js';

const crearProducto = async (req, res) => {

    try {
        // Datos del producto desde la solicitud
        console.log();

        const { nombre, codigo, precio, descripcion, categoria, imagen } = req.body;

        // Crea la categoría
        const nuevaCategoria = await Categoria.create({ nombre: categoria });

        // Crea el producto y asocia la categoría
        const nuevoProducto = await Producto.create({
            nombre,
            codigo,
            precio,
            descripcion,
            categoria_id: nuevaCategoria.id,
        });

        // Crea las imágenes asociadas al producto
        
       /*  const url = `/uploads/${req.file.originalname}`
        const nuevasImagenes = await Imagen.create({
            producto_id: nuevoProducto.id,
            url,
 
        }); */

        return res.status(201).json({ mensaje: "Producto creado con éxito", producto: nuevoProducto, imagenes: nuevasImagenes });
    } catch (error) {
        console.error("Error al crear el producto:", error);
        return res.status(500).json({ mensaje: "Error al crear el producto" });
    }

}

export default crearProducto;