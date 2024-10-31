// src/auth/authController.js

import { PrismaClient } from '@prisma/client'; // Importando Prisma Client
import jwt from 'jsonwebtoken'; // Importando JWT
import bcrypt from 'bcrypt'; // Importando bcrypt

const prisma = new PrismaClient();
const JWT_SECRET = process.env.JWT_SECRET || 'sua_chave_secreta'; // Chave secreta para JWT

// Função de login
export const login = async (req, res) => {
    const { email, senha } = req.body;

    console.log("Email fornecido:", email);
    console.log("Senha fornecida:", senha);

    try {
       
        const user = await prisma.usuario.findUnique({ where: { email } });
        console.log("Usuário encontrado:", user);

       
        if (!user) {
            return res.status(401).json({ error: 'Usuário não encontrado' });
        }

        console.log("Hash da senha do usuário:", user.senha_user); // Log do hash

        // Verificando a senha
        const isPasswordValid = bcrypt.compare(senha, user.senha_user);

        console.log("Senha válida:", isPasswordValid); // Log do resultado da verificação

        if (isPasswordValid) {
            const token = jwt.sign(
                { userId: user.id, email: user.email },
                JWT_SECRET,
                { expiresIn: '1h' }
            );
            return res.json({ token });
        } else {
            return res.status(401).json({ error: 'Credenciais inválidas' });
        }
    } catch (error) {
        console.error("Erro ao fazer login:", error);
        return res.status(500).json({ error: "Erro ao fazer login" });
    }
};
