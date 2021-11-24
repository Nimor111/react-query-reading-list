import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { ThemeProvider } from '@emotion/react'
import { CssBaseline } from '@mui/material'
import theme from './theme'

import { QueryClient, QueryClientProvider } from 'react-query'

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <QueryClientProvider client={new QueryClient()}>
      <App />
    </QueryClientProvider>
  </ThemeProvider>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
