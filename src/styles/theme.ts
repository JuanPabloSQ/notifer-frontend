import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1976d2', 
    },
    secondary: {
      main: '#9c27b0', 
    },
    background: {
      default: '#f5f5f5',
      paper: '#ffffff',
    },
    text: {
      primary: '#212121',
      secondary: '#757575',
    },
  },
  typography: {
    fontFamily: `'Roboto', 'Helvetica', 'Arial', sans-serif`,
    h1: { fontSize: '2.5rem', fontWeight: 600 },
    h2: { fontSize: '2rem', fontWeight: 500 },
    body1: { fontSize: '1rem' },
    button: { textTransform: 'none' },
  },
  shape: {
    borderRadius: 8,
  },
  spacing: 8, 
});

export default theme;
