import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import App from './components/App'
import './assets/goal.webp'
import './assets/todo.webp'
import './assets/Inter-VariableFont.ttf'
import './assets/LexendDeca-VariableFont_wght.ttf'
import './index.scss'
import { legacy_createStore as createStore } from 'redux'
import { Provider } from 'react-redux'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
)
