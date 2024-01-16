import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { CssBaseline, GeistProvider } from '@geist-ui/core'
import './index.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GeistProvider themeType="dark">
      <CssBaseline />
      <App />
    </GeistProvider>
  </React.StrictMode>
)
