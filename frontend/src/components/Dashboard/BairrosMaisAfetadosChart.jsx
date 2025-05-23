// frontend/src/components/Dashboard/BairrosMaisAfetadosChart.jsx
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

const BairrosMaisAfetadosChart = () => {
  const [chartData, setChartData] = useState({ labels: [], datasets: [] });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:4444/api/dashboard/bairros-mais-afetados');
        if (!response.ok) throw new Error(`Erro HTTP! Status: ${response.status}`);
        const data = await response.json();

        setChartData({
          labels: data.map(item => item.bairro),
          datasets: [{
            label: 'Total de Problemas',
            data: data.map(item => Number(item.total)),
            backgroundColor: 'rgba(75, 192, 192, 0.75)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
            borderRadius: 5,
          }],
        });
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <Card sx={{ minHeight: 400, boxShadow: 3 }}>
        <CardContent>
          <Box display="flex" justifyContent="center" alignItems="center" height={300}>
            <CircularProgress />
          </Box>
        </CardContent>
      </Card>
    );
  }

  if (error) {
    return (
      <Card sx={{ minHeight: 400, boxShadow: 3 }}>
        <CardContent>
          <Typography color="error" variant="body1" align="center">
            Erro ao carregar dados: {error}
          </Typography>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card sx={{ height: '100%', minHeight: 400, boxShadow: 3 }}>
      <CardContent>
        <Typography variant="h6" component="h2" gutterBottom sx={{ fontWeight: 'bold', mb: 2 }}>
          Bairros Mais Afetados
        </Typography>
        {chartData.labels.length > 0 ? (
          <Box sx={{ height: 300 }}>
            <Bar
              data={chartData}
              options={{
                indexAxis: 'y',
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                  tooltip: {
                    backgroundColor: '#333',
                    titleColor: '#fff',
                    bodyColor: '#fff',
                  },
                  legend: { display: false },
                },
                scales: {
                  x: {
                    beginAtZero: true,
                    ticks: { precision: 0, color: '#555' },
                    grid: { color: '#eee' }
                  },
                  y: {
                    ticks: { color: '#555' },
                    grid: { display: false }
                  }
                },
              }}
            />
          </Box>
        ) : (
          <Typography variant="body1" align="center">
            Nenhum dado de bairros disponível.
          </Typography>
        )}
      </CardContent>
    </Card>
  );
};

export default BairrosMaisAfetadosChart;
