import { Sequelize } from 'sequelize';

const sequelize = new Sequelize("database", {
  dialect: 'sqlite',
  storage: './db.sqlite', // Ruta a tu archivo SQLite
});

export default sequelize;