import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import AppThemeProvider from './styles/ThemeProvider'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppThemeProvider>
      <App />
    </AppThemeProvider>
  </StrictMode>,
)
