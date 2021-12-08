import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Container from '@mui/material/Container';
import { AuthPage } from './pages/authPage/AuthPage';
import { PrivatePage } from './pages/PrivatePage';

function App() {
  return (
    <Container sx={{height: '100vh'}} disableGutters>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<AuthPage />} />
          <Route path="/" element={<PrivatePage />} />
        </Routes>
      </BrowserRouter>
    </Container>
  );
}

export default App;
