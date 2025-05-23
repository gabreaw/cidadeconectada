// src/controllers/dashboardController.js
import { PrismaClient } from '@prisma/client'; // Importa o PrismaClient

const prisma = new PrismaClient(); // Instancia o PrismaClient para uso

// Middleware de autenticação (simplificado, como combinado)
const requireAuth = (req, res, next) => {
    // Por enquanto, não faz nada e permite o acesso.
    // Em um cenário real, você teria sua lógica de autenticação aqui.
    next();
};

const getProblemasResolvidosPorAdmin = async (req, res) => {
    try {
        // Usando $queryRaw com Prisma, como tínhamos antes
        const data = await prisma.$queryRaw`
            SELECT 
                id_administrador,
                administrador,
                CAST(total_problemas_resolvidos AS TEXT) AS total_problemas_resolvidos
            FROM bancocidade.vw_problemas_resolvidos_por_admin;
        `;
        res.json(data);
    } catch (error) {
        console.error('Erro ao buscar problemas resolvidos por admin:', error);
        res.status(500).json({ error: 'Erro interno do servidor' });
    }
};

const getStatusProblemas = async (req, res) => {
    try {
        // Usando $queryRaw com Prisma
        const data = await prisma.$queryRaw`
            SELECT 
                CAST(total_problemas AS TEXT), 
                CAST(problemas_parados AS TEXT), 
                CAST(problemas_em_andamento AS TEXT), 
                CAST(problemas_resolvidos AS TEXT) 
            FROM bancocidade.vw_status_problemas;
        `;
        res.json(data[0]);
    } catch (error) {
        console.error('Erro ao buscar status dos problemas:', error);
        res.status(500).json({ error: 'Erro interno do servidor' });
    }
};

const getProblemasPorCategoria = async (req, res) => {
    try {
        // Usando $queryRaw com Prisma
        const data = await prisma.$queryRaw`
            SELECT 
                categoria, 
                CAST(total_problemas AS TEXT) 
            FROM bancocidade.vw_problemas_por_categoria;
        `;
        res.json(data);
    } catch (error) {
        console.error('Erro ao buscar problemas por categoria:', error);
        res.status(500).json({ error: 'Erro interno do servidor' });
    }
};

const getTempoMedioResolucao = async (req, res) => {
    try {
        // Usando $queryRaw com Prisma
        const data = await prisma.$queryRaw`
            SELECT * FROM bancocidade.vw_tempo_medio_resolucao_por_categoria;
        `;
        res.json(data);
    } catch (error) {
        console.error('Erro ao buscar tempo médio de resolução:', error);
        res.status(500).json({ error: 'Erro interno do servidor' });
    }
};

const getBairrosMaisAfetados = async (req, res) => {
    try {
        // Esta query pode ser feita com Prisma.groupBy, mas manterei $queryRaw para consistência com as views.
        // O ideal é ter esta como view também se for muito usada.
        const data = await prisma.$queryRaw`
            SELECT 
                SPLIT_PART(LOWER(endereco), ',', 1) AS bairro,
                CAST(COUNT(*) AS TEXT) AS total -- Cast para TEXT para evitar BigInt
            FROM bancocidade.problema
            GROUP BY bairro
            ORDER BY total DESC
            LIMIT 10;
        `;
        res.json(data);
    } catch (error) {
        console.error('Erro ao buscar bairros mais afetados:', error);
        res.status(500).json({ error: 'Erro interno do servidor' });
    }
};

const getRegistroReclamacoesPorMes = async (req, res) => {
  try {
    const data = await prisma.$queryRaw`
      SELECT 
        TO_CHAR(data, 'YYYY-MM') AS periodo,
        CAST(COUNT(*) AS TEXT) AS total_reclamacoes
      FROM bancocidade.problema
      GROUP BY periodo
      ORDER BY periodo;
    `;
    res.json(data);
  } catch (error) {
    console.error('Erro ao buscar registro de reclamações por mês:', error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
};


export {
  requireAuth,
  getProblemasResolvidosPorAdmin,
  getStatusProblemas,
  getProblemasPorCategoria,
  getTempoMedioResolucao,
  getBairrosMaisAfetados,
  getRegistroReclamacoesPorMes
};