import path from 'node:path';
import express from 'express';

const app = express();

// Middleware para parsear el body de las solicitudes
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Servir archivos estáticos desde el directorio "public"
app.use(express.static(joiner('/public')));

const joiner = (pathx) => {
    return path.join(process.cwd(), `./src${pathx}`)
}

// habilitando el motor de plantillas ejs 
app.set('views', joiner('/views'));
app.set("view engine", "ejs");

//Conexión a la base de datos

import sequelize from './config/sqliteConfig.js';

import Producto from "./models/model_Producto.js";

sequelize.sync().then(() => {
    console.log("db conectada!");
});

//fin de la conexión a la base de datos
app.post("/db", async(req, res) => {
    await Producto.create(req.body).then(() => {
  
      console.log(req.body)
      res.send("Informacion insertada");
    });
  });



// routers
import home from './routes/home.js';
import admin from './routes/admin.js';

app.use('/', home)
app.use('/admin', admin)

app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
});
