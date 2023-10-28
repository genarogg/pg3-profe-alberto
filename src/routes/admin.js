import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
const { USER_ADMIN, PASS_ADMIN } = process.env

const router = express.Router();

router.get('/login', (req, res) => {
    res.render('admin/login'); // Renderiza la vista login.ejs
});

router.post("/login", (req, res) => {
    const { name, password } = req.body;

    const data = {
        email: name,
        password
    }
    res.json({ redirect: "/admin" });
    if (data.email === USER_ADMIN && password === PASS_ADMIN) {

    }
})

router.get('/', (req, res) => {
    res.render('admin/admin'); // Renderiza la vista login.ejs
});

export default router;