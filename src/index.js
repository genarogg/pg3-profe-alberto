import path from 'node:path';
import express from 'express';

import dotenv from 'dotenv';
const { USER_ADMIN } = process.env

const app = express();

// cargando las variables de entorno
dotenv.config();

const joiner = (pathx) => {
    return path.join(process.cwd(), `./src${pathx}`)
}

// Servir archivos estáticos desde el directorio "public"
app.use(express.static(joiner('/public')));

// Middleware para parsear el body de las solicitudes
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// habilitando el motor de plantillas ejs 
app.set('views', joiner('/views'));
app.set("view engine", "ejs");

import home from './routes/home.js';
import admin from './routes/admin.js';
// routers
app.use('/', home)
app.use('/admin', admin)


app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
});

