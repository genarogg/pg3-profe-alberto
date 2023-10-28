import express from 'express';
import home from './routes/home.js';

import path from 'node:path';



const app = express();

// Middleware para parsear el body de las solicitudes
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// habilitando el motor de plantillas ejs 
app.set('views', path.join(process.cwd(), './src/views'));
app.set("view engine", "ejs");

// routers
app.use('/', home)


console.log(process.cwd())
app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
});

