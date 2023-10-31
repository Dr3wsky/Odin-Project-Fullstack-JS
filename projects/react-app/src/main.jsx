import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import AussieGreeting from './AussieGreeting.jsx'
import './index.css'
import FoodList from './FoodList.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
    <FoodList />
  </React.StrictMode>,
)
