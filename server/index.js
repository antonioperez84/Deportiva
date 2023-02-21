import express from 'express';
import { PORT } from './config.js';
import {dirname, join}from 'path'
import { fileURLToPath } from 'url';
import indexRoutes from './routes/index.routes.js'
import taskRoutes from './routes/task.routes.js'
import cors from 'cors';

const app = express();
app.use(express.json())
app.use(cors({
    origin:'http://localhost:5173'
}))
app.use(indexRoutes);
app.use(taskRoutes)

//const __dirname = dirname(fileURLToPath(import.meta.url))
//app.use(express.static(join(__dirname,'../client/dist')))

app.listen(PORT);

console.log('Servidor corriendo en '+ PORT );
