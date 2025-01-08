import React from 'react'
import ReactDOM from 'react-dom/client'
import './reset.css'
import ThemeProvider from '@/theme'
import './index.css'
import App from './App'
import { Container } from './styles'
import { theme } from './theme/theme'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
          <Container>
            <App />
          </Container>
        </ThemeProvider>
    </React.StrictMode>
);