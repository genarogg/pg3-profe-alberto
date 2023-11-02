import express from 'express';
import dotenv from 'dotenv';

const router = express.Router();

dotenv.config();
const { USER_ADMIN, PASS_ADMIN } = process.env

router.get('/', (req, res) => {
    res.render('home'); // Renderiza la vista index.ejs
});

router.get('/login', (req, res) => {
    res.render('login'); // Renderiza la vista login.ejs
});

router.post("/login", (req, res) => {
    const { email, password } = req.body;

    const data = {
        email,
        password
    }
    console.log(data)
    console.log({ USER_ADMIN, PASS_ADMIN })
    if (data.email === USER_ADMIN && password === PASS_ADMIN) {
        res.redirect("/admin");
    }

    else {
        res.json({ msg: "Usuario o contraseña incorrectos" });
    }
})

export default router;