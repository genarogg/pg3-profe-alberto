import Producto from "../../models/producto/Producto.js"; // Importa el modelo de Productos
import Categoria from "../../models/producto/Categorias.js"; // Importa el modelo de Categorías
import Imagen from "../../models/producto/Imagenes.js"; // Importa el modelo de Imagenes

const actualizarImagenes = async (productoId, imagenes) => {
    const imagenesActualizadas = [];

    // Recupera las imágenes existentes asociadas al producto
    const imagenesExisten = await Imagen.findAll({
        where: { producto_id: productoId }
    });

    const asignarIdsAImagenes = (arr, imagenesExisten) => {
        // Verifica que los arreglos tengan la misma longitud
        if (arr.length !== imagenesExisten.length) {
            throw new Error("Los arreglos tienen diferentes longitudes.");
        }

        // Itera sobre el arreglo de imágenes y asigna un ID a cada elemento
        for (let i = 0; i < arr.length; i++) {
            arr[i].id = imagenesExisten[i].dataValues.id;
        }

        return arr;
    }

    const arregloConIds = asignarIdsAImagenes(imagenes, imagenesExisten);

    // Itera sobre las imágenes existentes y las actualiza según los datos proporcionados
    for (const imagenData of arregloConIds) {
        const { id, name, destacada } = imagenData;


        // Encuentra la imagen existente con el mismo ID
        const imagenExistente = imagenesExisten.find(imagen => imagen.id === id);



        if (name === "fileName") continue

        if (imagenExistente) {
            // Actualiza las propiedades de la imagen existente
            imagenExistente.url = "/uploads/" + name;
            imagenExistente.destacado = destacada;

            // Guarda la imagen actualizada en la base de datos
            await imagenExistente.save();

            imagenesActualizadas.push(imagenExistente);
        }
    }

    return imagenesActualizadas;
};

const updateProducto = async (req, res) => {
    try {
        const { nombre, codigo, precio, descripcion, categoria, imgs } = req.body;

        const productId = req.params.id;
        // Comprueba si el producto existe en la base de datos
        const productoExistente = await Producto.findByPk(productId);

        if (!productoExistente) {
            return res.status(404).json({ mensaje: "El producto no existe." });
        }

        // Actualiza los datos del producto
        productoExistente.nombre = nombre;
        productoExistente.codigo = codigo;
        productoExistente.precio = precio;
        productoExistente.descripcion = descripcion;

        // Busca la categoría existente o crea una nueva si no existe
        let productoCategoria = await Categoria.findOne({ where: { nombre: categoria } });
        if (!productoCategoria) {
            productoCategoria = await Categoria.create({ nombre: categoria });
        }

        productoExistente.categoria_id = productoCategoria.nombre;

        // Guarda los cambios en el producto
        await productoExistente.save();

        // Actualiza las imágenes del producto
        const imagenesActualizadas = await actualizarImagenes(productId, JSON.parse(imgs));

        res.status(200).json({
            mensaje: "Producto actualizado con éxito",
            producto: productoExistente,
            imagenes: imagenesActualizadas,
            redirect: '/admin'
        });
    } catch (error) {
        console.error("Error al actualizar el producto:", error);
        return res.status(500).json({ mensaje: "Error al actualizar el producto" });
    }
};

export default updateProducto;


