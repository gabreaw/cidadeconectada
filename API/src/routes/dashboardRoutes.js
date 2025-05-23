// src/routes/dashboardRoutes.js
import { Router } from 'express';
import {
  requireAuth, // Se for usar o middleware, importe-o
  getProblemasResolvidosPorAdmin,
  getStatusProblemas,
  getProblemasPorCategoria,
  getTempoMedioResolucao,
  getBairrosMaisAfetados,
  getRegistroReclamacoesPorMes
} from '../controllers/dashboardController.js'; // Caminho e .js corretos

const router = Router();

// Aplica o middleware de autenticação/autorização (opcionalmente)
// router.use(requireAuth); // Descomente e use se tiver lógica de autenticação

router.get('/problemas-resolvidos-por-admin', getProblemasResolvidosPorAdmin);
router.get('/status-problemas', getStatusProblemas);
router.get('/problemas-por-categoria', getProblemasPorCategoria);
router.get('/tempo-medio-resolucao', getTempoMedioResolucao);
router.get('/bairros-mais-afetados', getBairrosMaisAfetados);
router.get('/registro-reclamacoes-por-mes', getRegistroReclamacoesPorMes);

export default router; // Exporta o router como padrão