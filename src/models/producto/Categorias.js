const { Model, DataTypes } = require("sequelize");
const sequelize = require("../../config/sqliteConfig.js");

class Categoria extends Model { }

Categoria.init({
    nombre: {
        type: DataTypes.STRING,
        allowNull: false,
    },
},
{
    sequelize,
    modelName: "categoria"
});

module.exports = Categoria;
