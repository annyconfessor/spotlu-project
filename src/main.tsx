import React from 'react'
import ReactDOM from 'react-dom/client'
import './reset.css'
import ThemeProvider from '@/theme'
import './index.css'
import { theme } from './theme/theme'
import { AuthContextProvider } from './contexts/auth'
import { GlobalStyles } from './GlobalStyles'
import { Router } from './router/Router'
import AppRouter from './router/AppRouter'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
    <React.StrictMode>
      <GlobalStyles/>
        <ThemeProvider theme={theme}>
          <AuthContextProvider>
            <Router>
              <AppRouter/>
            </Router>
          </AuthContextProvider>
        </ThemeProvider>
    </React.StrictMode>
);