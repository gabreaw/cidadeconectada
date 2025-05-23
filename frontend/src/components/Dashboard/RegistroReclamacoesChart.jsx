import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

import { Card, CardContent, Typography, CircularProgress, Box } from '@mui/material';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const RegistroReclamacoesChart = () => {
  const [chartData, setChartData] = useState({ labels: [], datasets: [] });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('http://localhost:4444/api/dashboard/registro-reclamacoes-por-mes');
        if (!response.ok) throw new Error(`Erro HTTP! Status: ${response.status}`);

        const data = await response.json();
        console.log('Dados recebidos da API:', data);

        if (!Array.isArray(data) || data.length === 0) {
          setError('Nenhum dado disponível para o gráfico.');
          setLoading(false);
          return;
        }

        // Garantindo que todos os campos necessários estão definidos e corretos
        const labels = data.map(item => item.periodo ?? 'Sem Período');
        const values = data.map(item => Number(item.total_reclamacoes ?? 0));

        setChartData({
          labels,
          datasets: [
            {
              label: 'Número de Reclamações',
              data: values,
              fill: true,
              backgroundColor: 'rgba(54, 162, 235, 0.2)',
              borderColor: 'rgba(54, 162, 235, 1)',
              tension: 0.1,
              pointRadius: 4,
              pointHoverRadius: 6,
            },
          ],
        });
        setError(null);
      } catch (err) {
        console.error('Erro ao buscar dados:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  if (loading)
    return (
      <Card sx={{ height: 400, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <CircularProgress />
      </Card>
    );

  if (error)
    return (
      <Card sx={{ height: 400, p: 2, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Typography color="error" align="center" variant="body1">
          {`Erro: ${error}`}
        </Typography>
      </Card>
    );

  return (
    <Card
      sx={{
        height: 400,
        borderRadius: 3,
        boxShadow: 4,
        p: 2,
        bgcolor: 'background.paper',
        transition: 'box-shadow 0.3s ease',
        '&:hover': { boxShadow: 7, cursor: 'default' },
        display: 'flex',
        flexDirection: 'column',
      }}
      elevation={4}
    >
      <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
        <Typography variant="h6" component="h3" mb={2} fontWeight="bold" color="text.primary">
          Registro de Reclamações ao Longo do Tempo
        </Typography>

        {chartData.labels.length > 0 ? (
          <Box sx={{ flexGrow: 1, position: 'relative' }}>
            <Line
              data={chartData}
              options={{
                responsive: true,
                maintainAspectRatio: false,
                animation: { duration: 500 },
                plugins: {
                  legend: { display: true },
                  tooltip: {
                    backgroundColor: 'rgba(0,0,0,0.75)',
                    titleFont: { size: 14, weight: 'bold' },
                    bodyFont: { size: 13 },
                    padding: 8,
                    cornerRadius: 6,
                  },
                },
                scales: {
                  y: {
                    beginAtZero: true,
                    ticks: { precision: 0, stepSize: 1 },
                    grid: { color: 'rgba(0,0,0,0.1)' },
                  },
                  x: {
                    ticks: { maxRotation: 45, minRotation: 0, autoSkip: true },
                    grid: { display: false },
                  },
                },
              }}
            />
          </Box>
        ) : (
          <Typography variant="body1" color="text.secondary" align="center" sx={{ mt: 'auto' }}>
            Nenhum dado de registro de reclamações disponível.
          </Typography>
        )}
      </CardContent>
    </Card>
  );
};

export default RegistroReclamacoesChart;
