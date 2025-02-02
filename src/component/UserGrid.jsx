import React from 'react';
import { Grid, Card, CardActionArea, CardContent, Typography, CardMedia } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import placeholderImage from '../assets/placeholder.png';

const UserGrid = ({ users }) => {
  const navigate = useNavigate();

  const handleCardClick = (userId) => {
    navigate(`/user/${userId}`);
  };

  return (
    <Grid container spacing={2} sx={{ marginTop: 2 }}>
      {users.map((user) => (
        <Grid item xs={12} sm={6} md={4} key={user.id}>
          <Card>
            <CardActionArea onClick={() => handleCardClick(user.id)}>
              <CardMedia
                component="img"
                height="140"
                image={user.imageUrl || placeholderImage}
                alt={`${user.firstName} ${user.lastName}`}
              />
              <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                  {user.firstName} {user.lastName}
                </Typography>
                {/* Display additional attributes as desired */}
                <Typography variant="body2" color="text.secondary">
                  SSN: {user.ssn}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default UserGrid;
