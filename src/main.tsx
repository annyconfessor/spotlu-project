import React from 'react'
import ReactDOM from 'react-dom/client'
import './reset.css'
import ThemeProvider from '@/theme'
import './index.css'
import { Container } from './styles'
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
          <Container>
            <Router>
              <AppRouter/>
            </Router>
          </Container>
          </AuthContextProvider>
        </ThemeProvider>
    </React.StrictMode>
);