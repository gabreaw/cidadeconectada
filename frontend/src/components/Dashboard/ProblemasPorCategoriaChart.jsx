// frontend/src/components/Dashboard/ProblemasPorCategoriaChart.jsx
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
  ArcElement
} from 'chart.js';

import { Card, CardContent, Typography, CircularProgress, Box } from '@mui/material';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement);

const ProblemasPorCategoriaChart = () => {
  const [chartData, setChartData] = useState({ labels: [], datasets: [] });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:4444/api/dashboard/problemas-por-categoria');
        if (!response.ok) throw new Error(`Erro HTTP! Status: ${response.status}`);
        const data = await response.json();

        setChartData({
          labels: data.map(item => item.categoria),
          datasets: [{
            label: 'Total de Problemas',
            data: data.map(item => Number(item.total_problemas)),
            backgroundColor: [
              '#ff6384', '#36a2eb', '#ffce56', '#4bc0c0',
              '#9966ff', '#ff9f40', '#c7c7c7', '#53667e',
              '#b6ffd1', '#ffdfba'
            ],
            borderColor: '#e0e0e0',
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
      <Card sx={{ minHeight: 400 }}>
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
      <Card sx={{ minHeight: 400 }}>
        <CardContent>
          <Typography color="error">Erro ao carregar dados: {error}</Typography>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card sx={{ height: '100%', minHeight: 400, boxShadow: 3 }}>
      <CardContent>
        <Typography variant="h6" component="h2" gutterBottom sx={{ fontWeight: 'bold', mb: 2 }}>
          Problemas por Categoria
        </Typography>
        {chartData.labels.length > 0 ? (
          <Box sx={{ height: 300 }}>
            <Bar
              data={chartData}
              options={{
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                  tooltip: {
                    mode: 'index',
                    intersect: false,
                    backgroundColor: '#333',
                    titleColor: '#fff',
                    bodyColor: '#fff',
                  },
                  legend: { display: false },
                },
                scales: {
                  y: {
                    beginAtZero: true,
                    ticks: { precision: 0, color: '#555' },
                    grid: { color: '#eee' }
                  },
                  x: {
                    ticks: { color: '#555' },
                    grid: { display: false }
                  }
                }
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

export default ProblemasPorCategoriaChart;
