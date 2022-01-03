import React from 'react'
import ReactDOM from 'react-dom'
import { App } from './App'

import { theme } from 'styles/theme'
import GlobalStyles from 'styles/global'
import { ThemeProvider } from 'styled-components'

ReactDOM.render(
   <React.StrictMode>
      <ThemeProvider theme={theme}>
         <GlobalStyles />
         <App />
      </ThemeProvider>
   </React.StrictMode>,
   document.getElementById('root')
)
