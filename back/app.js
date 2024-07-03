import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import router from './routes/route.js';
dotenv.config();

const app = express();

app.use(express.json());

// app.use(
//   cors({
//     origin: process.env.CLIENT_URL, // Variable a changer, en lien avec le fichier .env
//     optionsSuccessStatus: 200,
//     credentials: true,
//   })
// );
app.use(
  cors({
    origin: process.env.CLIENT_URL, // Autoriser toutes les origines
    credentials: true, // Activer l'échange de credentials (cookies, etc.)
  })
);

app.use('/api', router);

export default app;
