import React from 'react';
import { AuthPage } from './pages/authPage/AuthPage';
import Container from '@mui/material/Container';

function App() {
  return (
    <Container sx={{height: '100vh'}} disableGutters>
      <AuthPage />
    </Container>
  );
}

export default App;
