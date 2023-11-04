import express from 'express';
import { login } from '../controllers/authController.js';

const router = express.Router();

router.get('/', (req, res) => {
    res.render('home'); // Renderiza la vista index.ejs
});

router.get('/demo', (req, res) => {
    res.render('demo'); // Renderiza la vista index.ejs
});

router.get('/login', (req, res) => {
    res.render('login'); // Renderiza la vista login.ejs
});

router.post("/login", login)

export default router;