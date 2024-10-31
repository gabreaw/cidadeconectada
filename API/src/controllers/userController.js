import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt'; // Importando bcrypt

const prisma = new PrismaClient();
const saltRounds = 10; // Número de rounds para bcrypt


// Função para criar um usuário
export const createUser = async (req, res) => {
    const { nome, email, cpf, senha_user } = req.body;

    // Validação simples
    if (!nome || !email || !cpf || !senha_user) {
        return res.status(400).json({ error: "Todos os campos são obrigatórios" });
    }

    try {
        // Hash da senha antes de armazená-la
        const hashedPassword = await bcrypt.hash(senha_user, saltRounds);

        const user = await prisma.usuario.create({
            data: {
                nome,
                email,
                cpf,
                senha_user: hashedPassword, // Armazenando a senha hasheada
            }
        });

        return res.status(201).json(user);
    } catch (error) {
        console.error("Erro ao criar usuário:", error);

        // Tratamento de erro para conflito de chave única
        if (error.code === 'P2002') {
            return res.status(409).json({ error: "Email já cadastrado" });
        }

        return res.status(500).json({ error: "Erro ao criar usuário" });
    }
};

// Função para listar todos os usuários
export const listUsers = async (req, res) => {
    try {
        const users = await prisma.usuario.findMany();
        return res.status(200).json(users);
    } catch (error) {
        console.error("Erro ao listar usuários:", error);
        return res.status(500).json({ error: "Erro ao listar usuários" });
    }
};

// Função para atualizar um usuário existente
export const updateUser = async (req, res) => {
    const id = parseInt(req.params.id);

    if (isNaN(id)) {
        return res.status(400).json({ error: "ID inválido" });
    }

    try {
        const user = await prisma.usuario.update({
            where: { id_usuario: id }, // Use o nome correto do campo da chave primária
            data: {
                nome: req.body.nome,
                email: req.body.email,
                cpf: req.body.cpf,
                senha_user: req.body.senha_user
            }
        });
        return res.status(200).json(user);
    } catch (error) {
        console.error("Erro ao editar usuário:", error);
        return res.status(500).json({ error: "Erro ao editar usuário" });
    }
};


// Função para excluir um usuário
export const deleteUser = async (req, res) => {
    const id = parseInt(req.params.id);

    // Verifica se o ID é um número inteiro
    if (!Number.isInteger(id)) {
        return res.status(400).json({ error: "ID deve ser um número inteiro." });
    }

    // Verifica se o usuário existe
    const userAlreadyExist = await prisma.usuario.findUnique({
        where: { id: id },
    });

    if (!userAlreadyExist) {
        return res.status(404).json({ error: "Usuário não encontrado." });
    }

    try {
        await prisma.usuario.delete({
            where: { id: id },
        });
        return res.status(200).json({ message: "Usuário excluído com sucesso!" });
    } catch (error) {
        console.error("Erro ao excluir usuário:", error);

        // Verifica se o erro é relacionado à integridade referencial
        if (error.code === 'P2003') {
            return res.status(400).json({ error: "Não é possível excluir o usuário, pois ele está relacionado a outros registros." });
        }

        return res.status(500).json({ error: "Erro ao excluir usuário. Tente novamente mais tarde." });
    }
};
