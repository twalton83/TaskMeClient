import React from 'react'
import ReactDOM from 'react-dom'
import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import App from './App'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#eb5e28"
              },
    secondary: {
      main: "#eb5e28"
              }
  }
});

ReactDOM.render(
  <BrowserRouter>
  <ThemeProvider theme = { theme }>
    <App />
  </ThemeProvider>

  </BrowserRouter>,
  document.getElementById('root')
)
