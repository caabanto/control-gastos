import React from 'react'
import ReactDOM from 'react-dom/client'
import {App} from './App.tsx'
import './index.css'

import { StyledEngineProvider, ThemeProvider } from '@mui/material/styles'
import {CssBaseline, createTheme} from '@mui/material'
import { BudgetProvider } from './context/BudgetContext.tsx'

const rootElement = document.getElementById('root');

const theme = createTheme({
  components: {
    MuiPopover: {
      defaultProps: {
        container: rootElement,
      },
    },
    MuiPopper: {
      defaultProps: {
        container: rootElement,
      },
    },
  },
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
      <CssBaseline/>
        <BudgetProvider>
          <App />
        </BudgetProvider>
      </ThemeProvider>
    </StyledEngineProvider>
  </React.StrictMode>,
)