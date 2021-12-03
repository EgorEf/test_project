import React from 'react';
import LoginPage from './components/LoginPage';
import Container from '@mui/material/Container';

function App() {
  return (
    <Container sx={{height: '100vh'}} disableGutters>
      <LoginPage />
    </Container>
  );
}

export default App;
