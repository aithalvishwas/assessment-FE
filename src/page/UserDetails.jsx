import React, { useEffect, useState } from 'react';
import { Container, Typography, Card, CardMedia, CardContent, CircularProgress, Grid } from '@mui/material';
import { useParams } from 'react-router-dom';
import { getUserById } from '../api/api';

const placeholderImage = 'https://via.placeholder.com/300';

const UserDetails = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const data = await getUserById(id);
        setUser(data);
      } catch (error) {
        console.error('Failed to load user details:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchUser();
  }, [id]);

  if (loading) {
    return (
      <Container sx={{ textAlign: 'center', marginTop: 4 }}>
        <CircularProgress />
      </Container>
    );
  }

  if (!user) {
    return (
      <Container sx={{ marginTop: 4 }}>
        <Typography variant="h6" color="error">
          User not found.
        </Typography>
      </Container>
    );
  }

  return (
    <Container maxWidth="md" sx={{ marginTop: 4 }}>
      <Card>
        <Grid container>
          <Grid item xs={12} md={4}>
            <CardMedia
              component="img"
              image={user.url || placeholderImage}
              alt={`${user.firstName} ${user.lastName}`}
              sx={{ height: 300 }}
            />
          </Grid>
          <Grid item xs={12} md={8}>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                {user.firstName} {user.lastName}
              </Typography>
              <Typography variant="body1">Email: {user.email}</Typography>
              <Typography variant="body1">SSN: {user.ssn}</Typography>
              <Typography variant="body1">Gender: {user.gender}</Typography>
              <Typography variant="body1">Birth Date: {user.birthDate}</Typography>
              <Typography variant="body1">Weight: {user.weight}</Typography>
              <Typography variant="body1">Height: {user.height}</Typography>
            </CardContent>
          </Grid>
        </Grid>
      </Card>
    </Container>
  );
};

export default UserDetails;
