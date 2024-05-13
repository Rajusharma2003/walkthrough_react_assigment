import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// in the second way with react Hook => 
import {BrowserRouter} from 'react-router-dom'


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App/>
  </BrowserRouter>   // this is from react-router-dom. 
)
