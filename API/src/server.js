// src/server.js

import express from 'express'; // Importando express
import cors from 'cors'; // Importando cors
import dotenv from 'dotenv'; // Importando dotenv
import userRoutes from './routes/userRoutes.js'; // Importando as rotas de usuário

dotenv.config();

const app = express();
app.use(express.json()); // Para interpretar JSON
app.use(cors()); // Habilitar CORS

// Usando as rotas de usuário
app.use('/api', userRoutes);

// Rota de health check
app.get('/health', (req, res) => {
    return res.json("Servidor está funcionando");
});

// Inicializa o servidor
app.listen(4444, () => console.log("Servidor rodando em http://localhost:4444"));
