import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App.jsx'
import './index.scss'
import { legacy_createStore as createStore } from 'redux'
import { Provider } from 'react-redux'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <App />
  </React.StrictMode>,
)
