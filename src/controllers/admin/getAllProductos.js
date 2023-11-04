import Producto from "../../models/producto/Producto.js"; // Importa el modelo de Productos
import Imagen from "../../models/producto/Imagenes.js"; // Importa el modelo de Imagen
import Categoria from "../../models/producto/Categorias.js"; // Importa el modelo de Categoria

// Controlador para obtener todos los productos
const getAllProductos = async (req, res) => {
  try {
    
    
    // Busca todos los productos en la base de datos e incluye las relaciones con Imagen y Categoria
    const productos = await Producto.findAll({
      include: [
        {
          model: Imagen,
          as: 'imagenes',
        },
        {
          model: Categoria,
          as: 'categoria',
        },
      ],
    });

    // Mapea los productos y sus imágenes
    const producto = {
      "productos": productos.map(item => {
        const productoData = {
          "id": item.dataValues.id,
          "nombre": item.dataValues.nombre,
          "codigo": item.dataValues.codigo,
          "precio": item.dataValues.precio,
          "descripcion": item.dataValues.descripcion,
          "categoria": item.dataValues.categoria ? item.dataValues.categoria.nombre : null,
          "createdAt": item.dataValues.createdAt.toISOString(),
          "updatedAt": item.dataValues.updatedAt.toISOString()
        };

        // Si hay imágenes asociadas al producto, agrégalas al objeto del producto
        if (item.dataValues.imagenes) {
          productoData.imagenes = item.dataValues.imagenes.map(imagen => ({
            "id": imagen.id,
            "url": imagen.url,
            "destacado": imagen.destacado,
            // Agrega más propiedades de imagen si es necesario
          }));
        }

        return productoData;
      }),
    };

    /* console.log(producto.productos[5].imagenes[0].url); */
    res.render('admin/allProduct', producto);
    /* return transformedData; */
  } catch (error) {
    console.error("Error al obtener los productos:", error.message);
  }
};

export default getAllProductos;