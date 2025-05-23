import React, { useEffect, useState } from 'react';
import { Card, CardContent, Typography, CircularProgress, Box, Divider, Stack } from '@mui/material';

const StatusProblemasCard = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:4444/api/dashboard/status-problemas');
        if (!response.ok) {
          throw new Error(`Erro HTTP! Status: ${response.status}`);
        }
        const jsonData = await response.json();
        setData(jsonData);
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
      <Card sx={{ height: 260, boxShadow: 3, borderRadius: 2 }}>
        <CardContent>
          <Box display="flex" justifyContent="center" alignItems="center" height={180}>
            <CircularProgress />
          </Box>
        </CardContent>
      </Card>
    );
  }

  if (error) {
    return (
      <Card sx={{ height: 260, boxShadow: 3, borderRadius: 2 }}>
        <CardContent>
          <Typography color="error" align="center" variant="body1">
            Erro ao carregar status: {error}
          </Typography>
        </CardContent>
      </Card>
    );
  }

  if (!data) {
    return (
      <Card sx={{ height: 260, boxShadow: 3, borderRadius: 2 }}>
        <CardContent>
          <Typography variant="body1" align="center">
            Nenhum dado de status disponível.
          </Typography>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card
      sx={{
        height: 260,
        boxShadow: 3,
        borderRadius: 2,
        transition: 'box-shadow 0.3s ease',
        '&:hover': {
          boxShadow: 8,   // só aumenta a sombra no hover, sem zoom
          cursor: 'pointer',
        },
      }}
      elevation={3}
    >
      <CardContent>
        <Typography variant="h6" component="h3" gutterBottom sx={{ fontWeight: 'bold', mb: 2 }}>
          Status dos Problemas
        </Typography>
        <Divider sx={{ mb: 3 }} />
        <Typography variant="h4" color="primary" sx={{ mb: 3, fontWeight: 700 }}>
          Total: {Number(data.total_problemas || 0)}
        </Typography>
        <Stack spacing={1}>
          <Typography variant="body1" color="text.secondary">
            Parados: <strong>{Number(data.problemas_parados || 0)}</strong>
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Em Andamento: <strong>{Number(data.problemas_em_andamento || 0)}</strong>
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Resolvidos: <strong>{Number(data.problemas_resolvidos || 0)}</strong>
          </Typography>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default StatusProblemasCard;
