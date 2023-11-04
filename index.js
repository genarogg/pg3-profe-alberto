const path = require('path');
const express = require('express');

const app = express();

const joiner = (pathx) => {
    return path.join(process.cwd(), `./src${pathx}`);
}

// Middleware para parsear el body de las solicitudes
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Servir archivos estáticos desde el directorio "public"
app.use(express.static(joiner('/public')));

// habilitando el motor de plantillas ejs 
app.set('views', joiner('/views'));
app.set("view engine", "ejs");

//Conexión a la base de datos
const sequelize = require('./src/config/sqliteConfig.js');

sequelize.sync({ logging: false }).then(() => {
    console.log("db conectada!");
});

//fin de la conexión a la base de datos

// routers
const home = require('./src/routes/home.js');
const admin = require('./src/routes/admin.js');
const db = require('./src/routes/db.js');

app.use('/', home);
app.use('/admin', admin);
app.use('/db', db);

app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
});
