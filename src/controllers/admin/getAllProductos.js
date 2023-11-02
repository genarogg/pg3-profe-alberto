import Producto from "../../models/producto/Producto.js"; // Importa el modelo de Productos

// Controlador para obtener todos los productos
const getAllProductos = async (req, res) => {
    try {
        // Busca todos los productos en la base de datos
        const productos = await Producto.findAll();
       
        const transformedData = {
            "productos": productos.map(item => {
              return {
                "id": item.dataValues.id,
                "nombre": item.dataValues.nombre,
                "codigo": item.dataValues.codigo,
                "precio": item.dataValues.precio,
                "descripcion": item.dataValues.descripcion,
                "categoria_id": item.dataValues.categoria_id,
                "createdAt": item.dataValues.createdAt.toISOString(),
                "updatedAt": item.dataValues.updatedAt.toISOString()
              };
            })
          };

    
        return transformedData

    } catch (error) {
        console.error("Error al obtener los productos:", error.message);

    }
};

export default getAllProductos;
