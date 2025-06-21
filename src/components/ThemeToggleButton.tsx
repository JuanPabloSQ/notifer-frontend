import { IconButton } from '@mui/material';
import { LightMode, DarkMode } from '@mui/icons-material';
import { useThemeMode } from '../styles/ThemeProvider';

const ThemeToggleButton = () => {
  const { mode, toggleMode } = useThemeMode();

  return (
    <IconButton onClick={toggleMode} color="inherit">
      {mode === 'light' ? <DarkMode /> : <LightMode />}
    </IconButton>
  );
};

export default ThemeToggleButton;
