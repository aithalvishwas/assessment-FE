import React, { useState } from 'react';
import { Container, Typography } from '@mui/material';
import SearchBar from '../component/SearchBar';
import UserGrid from '../component/UserGrid';
import { searchUsers } from '../api/api';
import '../style/Home.css';
const Home = () => {
  const [users, setUsers] = useState([]);

  const handleSearch = async (query) => {
    try {
      const data = await searchUsers(query);
      setUsers(data);
    } catch (error) {
      console.error('Search failed:', error);
    }
  };

  return (
    <Container maxWidth="md" sx={{ marginTop: 4 }}>
      <Typography variant="h4" align="center" gutterBottom>
        User Search
      </Typography>
      <SearchBar onSearch={handleSearch} />
      <UserGrid users={users} />
    </Container>
  );
};

export default Home;
