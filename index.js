import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import db from './config/Database.js';
import cors from 'cors';
import router from './routes/UserRoute.js';
import User from './model/User.js';
dotenv.config();

try {
    await db.authenticate();
    console.log('Database Connected...');
    await User.sync();
} catch (error) {
    console.error(error);
}

const app = express();
const port = process.env.PORT;

app.use(cors({ credentials:true, origin:'http://localhost:3000' }));
app.use(cookieParser());
app.use(express.json());
app.use(router);

app.listen(port, ()=> {
    console.log('Server up and running');
})