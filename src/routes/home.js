import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
    res.render('home'); // Renderiza la vista index.ejs
});

export default router;