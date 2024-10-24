import express from 'express';
import { PrismaClient } from '@prisma/client';
import cors from 'cors';

// Inicialize o express e o prisma
const app = express();
const prisma = new PrismaClient();

// Middlewares
app.use(express.json()); // Para interpretar JSON
app.use(cors());         // Habilitar CORS

// Rota para criar um novo usuário
app.post('/usuario', async (req, res) => {
    try {
        const user = await prisma.usuario.create({
            data: {
                nome: req.body.nome,
                email: req.body.email,
                cpf: req.body.cpf,
                senha_user: req.body.senha_user
            }
        });
        return res.status(201).json(user);  // Retornando o usuário criado
    } catch (error) {
        console.error("Erro ao criar usuário:", error);
        return res.status(500).json({ error: "Erro ao criar usuário" });
    }
});

// Rota para listar todos os usuários
app.get('/usuario', async (req, res) => {
    try {
        const users = await prisma.usuario.findMany();
        return res.status(200).json(users); // Status 200 para sucesso na listagem
    } catch (error) {
        console.error("Erro ao listar usuários:", error);
        return res.status(500).json({ error: "Erro ao listar usuários" });
    }
});

// Rota para atualizar um usuário existente
app.put('/usuario/:id', async (req, res) => {
    const id = parseInt(req.params.id);

    // Verifica se o 'id' é um número válido
    if (isNaN(id)) {
        return res.status(400).json({ error: "ID inválido" });
    }

    try {
        const user = await prisma.usuario.update({
            where: { id: id },
            data: {
                nome: req.body.nome,
                email: req.body.email,
                cpf: req.body.cpf,
                senha: req.body.senha // Corrigido 'req.body.senha'
            }
        });
        return res.status(200).json(user);  // Retornando o usuário atualizado
    } catch (error) {
        console.error("Erro ao editar usuário:", error);
        return res.status(500).json({ error: "Erro ao editar usuário" });
    }
});

// Rota para excluir um usuário
app.delete('/usuario/:id', async (req, res) => {
    const id = parseInt(req.params.id);

    if (isNaN(id)) {
        return res.status(400).json({ error: "ID inválido" });
    }

    const userAlreadyExist = await prisma.usuario.findUnique({
        where: { id: id },
    });

    if (!userAlreadyExist) {
        return res.status(404).json({ error: "Usuário não encontrado!" });
    }

    try {
        await prisma.usuario.delete({
            where: { id: id },
        });
        return res.status(200).json('Usuário excluído com sucesso!');
    } catch (error) {
        console.error("Erro ao excluir usuário:", error);
        return res.status(500).json({ error: "Erro ao excluir usuário" });
    }
});

// Rota de health check
app.get('/health', (req, res) => {
    return res.json("Servidor está funcionando");
});

// Inicializa o servidor
app.listen(4444, () => console.log("Servidor rodando em http://localhost:4444"));
