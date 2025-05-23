// src/server.js
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import userRoutes from './routes/userRoutes.js';
import dashboardRoutes from './routes/dashboardRoutes.js'; // Importação padrão, como definido em dashboardRoutes.js

dotenv.config();

const app = express();
app.use(express.json()); // Para interpretar JSON
app.use(cors());         // Habilitar CORS

// Rotas de Usuário
app.use('/api/users', userRoutes);

// Rotas do Dashboard
app.use('/api/dashboard', dashboardRoutes);

// Health check
app.get('/health', (req, res) => {
    res.json({ message: "Servidor está funcionando" });
});

// Inicializa o servidor
const PORT = process.env.PORT || 4444;
app.listen(PORT, () => console.log(`Servidor rodando em http://localhost:${PORT}`));