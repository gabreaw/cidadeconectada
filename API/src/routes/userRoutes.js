// src/routes/userRoutes.js

import express from 'express'; // Importando express
import { createUser, listUsers, updateUser, deleteUser } from '../controllers/userController.js'; // Importando funções do controller
import { login } from '../auth/authController.js'; // Importando a função de login
import { autenticaToken } from '../auth/authMiddleware.js'; // Ajuste o caminho conforme necessário

const router = express.Router();

// Rotas de usuário
router.post('/users', createUser);
router.get('/users', listUsers);
router.put('/users/:id', updateUser);
router.delete('/users/:id', deleteUser);

// Rota de login
router.post('/login', login);

export default router; // Expondo o router
