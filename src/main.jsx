import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import FetchData from './components/FetchProducts.jsx'
import Card from './components/Card.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    {/* <FetchData /> */}
    {/* <Card /> */}
  </React.StrictMode>,
)
