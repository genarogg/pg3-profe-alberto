import { Model, DataType } from "sequelize";
import sequelize from "../config/sqliteConfig";

class Producto extends Model { }

Producto.init({
    nombre: {
        type: DataType.STRING,
        allowNull: false,
    },
},
    {
        sequelize,
        modelName: "producto"

    }
)

export default Producto;