import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

// Import desired react component to display
// import App from './App.jsx'
// import AussieGreeting from './AussieGreeting.jsx'
// import Demo from './AppDemo.jsx'; 
import UseEffect from './UseEffect'
  

// Display react component
ReactDOM.createRoot(document.getElementById('root')).render(
      <React.StrictMode> 
        <UseEffect /> 
    </React.StrictMode>, 
)
