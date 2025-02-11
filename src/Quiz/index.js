import React from 'react'
import ReactDOM from 'react-dom/client'

import Quiz from './App'
import Dropdown from './Dropdown'


import reportWebVitals from './reportWebVitals'
import { BrowserRouter } from 'react-router-dom'
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <BrowserRouter>

  <React.StrictMode>
    <Quiz />
    <Dropdown/>
  </React.StrictMode>
  </BrowserRouter>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
