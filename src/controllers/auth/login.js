import dotenv from 'dotenv';

dotenv.config();
const { USER_ADMIN, PASS_ADMIN } = process.env

const login = (req, res) => {

    const { email, password } = req.body;

    if (email === USER_ADMIN && password === PASS_ADMIN) {
        res.redirect("/admin");
    }

    else {
        res.json({ msg: "Usuario o contraseña incorrectos" });
    }
}

export default login;