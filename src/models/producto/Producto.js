import { Model, DataTypes } from "sequelize";
import sequelize from "../../config/sqliteConfig.js";

class Producto extends Model { }

Producto.init({
    nombre: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    codigo: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    precio: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    descripcion: {
        type: DataTypes.STRING,
    },
    categoria_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
},
    {
        sequelize,
        modelName: "producto"
    });

export default Producto;
