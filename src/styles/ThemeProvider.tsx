import type { ReactNode } from 'react';
import  { useMemo, useState, createContext, useContext } from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import theme from './theme';
import darkTheme from './darktheme';

type ColorMode = 'light' | 'dark';

interface ThemeContextType {
  mode: ColorMode;
  toggleMode: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useThemeMode = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('useThemeMode must be used within AppThemeProvider');
  return context;
};

type Props = {
  children: ReactNode;
};

const AppThemeProvider = ({ children }: Props) => {
  const [mode, setMode] = useState<ColorMode>('light');

  const toggleMode = () => setMode(prev => (prev === 'light' ? 'dark' : 'light'));

  const currentTheme = useMemo(() => (mode === 'light' ? theme : darkTheme), [mode]);

  return (
    <ThemeContext.Provider value={{ mode, toggleMode }}>
      <ThemeProvider theme={currentTheme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default AppThemeProvider;
