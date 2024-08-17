import { Sequelize } from "sequelize";

const db = new Sequelize('jwt_auth', 'root', '', {
    host: "localhost",
    dialect: "mysql",
    port: '3308'
});

export default db;