// frontend/src/pages/Dashboard.jsx
import React from 'react';
import Header from "../components/Header/Header";
import Sidebar from "../components/Sidebar/Sidebar";
import HighlightSidebar from "../components/HighlightSidebar/HighlightSidebar";

import { Box, Typography, Grid } from '@mui/material';

import ProblemasPorCategoriaChart from '../components/Dashboard/ProblemasPorCategoriaChart';
import BairrosMaisAfetadosChart from '../components/Dashboard/BairrosMaisAfetadosChart';
import StatusProblemasCard from '../components/Dashboard/StatusProblemasCard';
import AdministradoresSolucoesChart from '../components/Dashboard/AdministradoresSolucoesChart';
import TempoMedioResolucaoChart from '../components/Dashboard/TempoMedioResolucaoChart';
import RegistroReclamacoesChart from '../components/Dashboard/RegistroReclamacoesChart';

const Dashboard = () => {
    return (
        <>
            <Header />
            <div className="flex">
                <Sidebar />

                {/* Área de Conteúdo Principal */}
                <Box
                    sx={{
                        flexGrow: 1,
                        bgcolor: '#F9F9F9', // Cor de fundo muito sutil, quase branco.
                                            // Experimente também 'white' se preferir a base totalmente branca e depender só da sombra dos cards.
                        minHeight: '100vh',
                        p: { xs: 2, md: 4 },
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        overflowX: 'hidden'
                    }}
                >
                    {/* Container interno para o conteúdo real do dashboard */}
                    <Box
                        sx={{
                            maxWidth: 1400,
                            width: '100%',
                            mx: 'auto',
                            pb: 4
                        }}
                    >
                        <Typography variant="h4" component="h1" gutterBottom align="center" sx={{ fontWeight: '700', mt: 2 }}>
                            Dashboard de Monitoramento Cidade Conectada
                        </Typography>
                        <Typography
                            variant="subtitle1"
                            gutterBottom
                            align="center"
                            color="text.secondary"
                            sx={{ mb: 4, maxWidth: 600, mx: 'auto' }}
                        >
                            Visão abrangente sobre problemas, soluções e desempenho administrativo.
                        </Typography>

                        <Grid container spacing={4}>
                            <Grid item xs={12} md={6} lg={4}>
                                <StatusProblemasCard />
                            </Grid>
                            <Grid item xs={12} md={6} lg={4}>
                                <ProblemasPorCategoriaChart />
                            </Grid>
                            <Grid item xs={12} md={6} lg={4}>
                                <BairrosMaisAfetadosChart />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <AdministradoresSolucoesChart />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <TempoMedioResolucaoChart />
                            </Grid>
                            <Grid item xs={12}>
                                <RegistroReclamacoesChart />
                            </Grid>
                        </Grid>
                    </Box>
                </Box>

                <HighlightSidebar />
            </div>
        </>
    );
};

export default Dashboard;