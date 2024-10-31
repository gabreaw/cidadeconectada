// Middleware para verificar tokens (proteção de rotas)
import express from 'express';

const app = express();
app.use(express.json()); // Para que o body da requisição seja lido como JSON

import jwt from 'jsonwebtoken';
const JWT_SECRET = process.env.JWT_SECRET || 'sua_chave_secreta';

export const autenticaToken = (req, res, next) => {
    const token = req.headers['authorization']?.split(' ')[1]

    console.log("Token recebido:", token); // Log do token recebido

    if (!token) {
        return res.status(401).json({ error: 'Acesso negado. Token não fornecido.' });
    }

    jwt.verify(token, JWT_SECRET, (err, user) => {
        if (err) {
            console.error("Erro ao verificar token:", err); // Log do erro  
            return res.status(403).json({ error: 'Token inválido ou expirado.' });
        }
        req.user = user; // Adiciona o usuário à requisição
        next();
    });
};
