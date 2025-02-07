import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './page/Home/Home';;
import { CircularProgress, Container } from '@mui/material';

// Lazy load the UserDetails page for performance optimization
const UserDetails = lazy(() => import('./page/UserDetails'));

const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={
        <Container sx={{ textAlign: 'center', marginTop: 4 }}>
          <CircularProgress />
        </Container>
      }>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user/:id" element={<UserDetails />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
