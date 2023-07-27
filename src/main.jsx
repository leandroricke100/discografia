import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './Home/index'
import GlobalStyle from './styles/globalStyles.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Home />
    <GlobalStyle />
  </React.StrictMode>
)
