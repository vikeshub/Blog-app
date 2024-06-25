import express from "express";
import dotenv from "dotenv";
import Connection from "./database/db.js";
import Router from './routes/route.js';
import cors from 'cors';
import bodyParser from "body-parser";

dotenv.config();
const app = express();
const PORT = 8000;
app.use(cors());
app.use(bodyParser.json({extended:true}))
app.use(bodyParser.urlencoded({extended:true}))
app.use('/', Router);


app.listen(PORT, () => console.log(`server is Running in port ${PORT}`));

const Username = process.env.db_username;
const Password = process.env.db_password;

Connection(Username, Password);
