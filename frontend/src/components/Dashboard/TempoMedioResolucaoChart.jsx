import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

import { Card, CardContent, Typography, CircularProgress, Box } from '@mui/material';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const TempoMedioResolucaoChart = () => {
  const [chartData, setChartData] = useState({ labels: [], datasets: [] });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('http://localhost:4444/api/dashboard/tempo-medio-resolucao');
        if (!response.ok) throw new Error(`Erro HTTP! Status: ${response.status}`);
        const data = await response.json();

        setChartData({
          labels: data.map(item => item.categoria),
          datasets: [
            {
              label: 'Dias Médios para Resolução',
              data: data.map(item => Number(item.dias_medios_resolucao ?? 0)),
              backgroundColor: 'rgba(255, 159, 64, 0.8)',
              borderColor: 'rgba(255, 159, 64, 1)',
              borderWidth: 1,
              borderRadius: 6, // cantos arredondados nas barras
              maxBarThickness: 40, // barra não fica muito larga
            },
          ],
        });
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  if (loading) return (
    <Card sx={{ height: 400, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <CircularProgress />
    </Card>
  );

  if (error) return (
    <Card sx={{ height: 400, p: 2 }}>
      <Typography color="error" align="center">{`Erro ao carregar dados: ${error}`}</Typography>
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
        '&:hover': {
          boxShadow: 7,
          cursor: 'default',
        },
      }}
      elevation={4}
    >
      <CardContent sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
        <Typography variant="h6" component="h3" mb={2} fontWeight="bold" color="text.primary">
          Tempo Médio de Resolução por Categoria
        </Typography>

        {chartData.labels.length > 0 ? (
          <Box sx={{ flexGrow: 1, position: 'relative' }}>
            <Bar
              data={chartData}
              options={{
                responsive: true,
                maintainAspectRatio: false,
                animation: { duration: 500 },
                plugins: {
                  legend: { display: false },
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
                    ticks: { maxRotation: 30, minRotation: 0, autoSkip: true },
                    grid: { display: false },
                  },
                },
              }}
            />
          </Box>
        ) : (
          <Typography variant="body1" color="text.secondary" align="center" sx={{ mt: 'auto' }}>
            Nenhum dado de tempo médio disponível.
          </Typography>
        )}
      </CardContent>
    </Card>
  );
};

export default TempoMedioResolucaoChart;
