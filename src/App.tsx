import { Box, Container, Typography } from '@mui/material';
import ThemeToggleButton from "./components/ThemeToggleButton";
import LoginView from './pages/LoginView';

function App() {
  return (
    <Container>
      <Box display="flex" justifyContent="space-between" alignItems="center" py={2}>
        <Typography variant="h4" color="primary">
          test app 
        </Typography>
        <ThemeToggleButton />
      </Box>      
      <Box display="flex" justifyContent="space-between" alignItems="center" py={2}>
        <LoginView/>
      </Box>
    </Container>
  );
}

export default App;