import "dotenv/config";
import express from 'express';

import { routes } from "./routes";
import './database'
import { emmiter } from "./database";


const app = express();
app.use(express.json());
app.use(routes);

export { app, emmiter }


