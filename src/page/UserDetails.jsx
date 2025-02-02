import React, { useEffect, useState } from 'react';
import { Container, Typography, Card, CardMedia, CardContent, CircularProgress } from '@mui/material';
import { useParams } from 'react-router-dom';
import { getUserById } from '../api/api';

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
    <Container maxWidth="sm" sx={{ marginTop: 4 }}>
      <Card>
        <CardMedia
          component="img"
          height="300"
          image={user.imageUrl || placeholderImage}
          alt={`${user.firstName} ${user.lastName}`}
        />
        <CardContent>
          <Typography variant="h5" gutterBottom>
            {user.firstName} {user.lastName}
          </Typography>
          <Typography variant="body1">
            SSN: {user.ssn}
          </Typography>
          {/* Render additional attributes as desired */}
        </CardContent>
      </Card>
    </Container>
  );
};

export default UserDetails;
