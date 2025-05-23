import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from 'chart.js';

import { Card, CardContent, Typography, CircularProgress, Box } from '@mui/material';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend
);

const AdministradoresSolucoesChart = () => {
  const [chartData, setChartData] = useState({ labels: [], datasets: [] });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:4444/api/dashboard/problemas-resolvidos-por-admin');
        if (!response.ok) throw new Error(`Erro HTTP! Status: ${response.status}`);
        const data = await response.json();

        setChartData({
          labels: data.map(item => item.administrador),
          datasets: [
            {
              label: 'Soluções Concluídas',
              data: data.map(item => Number(item.total_problemas_resolvidos) || 0),
              backgroundColor: 'rgba(153, 102, 255, 0.7)',
              borderColor: 'rgba(153, 102, 255, 1)',
              borderWidth: 1,
              borderRadius: 8, // barras arredondadas
              barThickness: 40,
            },
          ],
        });
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <Card
      sx={{
        height: 400,
        boxShadow: 3,
        borderRadius: 2,
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
          Desempenho dos Administradores
        </Typography>

        {loading ? (
          <Box display="flex" justifyContent="center" alignItems="center" height={300}>
            <CircularProgress />
          </Box>
        ) : error ? (
          <Typography color="error" align="center">
            Erro ao carregar dados: {error}
          </Typography>
        ) : chartData.labels.length > 0 ? (
          <Box sx={{ height: 300 }}>
            <Bar
              data={chartData}
              options={{
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                  legend: { display: false },
                },
                scales: {
                  y: {
                    beginAtZero: true,
                    ticks: { precision: 0, stepSize: 1 },
                    grid: { color: '#e0e0e0' },
                  },
                  x: {
                    ticks: { autoSkip: true },
                    grid: { display: false },
                  },
                },
              }}
            />
          </Box>
        ) : (
          <Typography variant="body1">Nenhum dado disponível.</Typography>
        )}
      </CardContent>
    </Card>
  );
};

export default AdministradoresSolucoesChart;
