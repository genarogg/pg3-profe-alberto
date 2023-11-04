const getAllProductos = require("./admin/getAllProductos.js");
const getProduct = require("./admin/getProduct.js");
const getAllCategories = require("./admin/getAllCategories.js");
const newCategorie = require("./admin/newCategorie.js");
const updateCategorie = require("./admin/updateCategorie.js");
const newProducto = require("./admin/newProducto.js");

module.exports = { getAllProductos, newProducto, getProduct, getAllCategories, newCategorie, updateCategorie };
