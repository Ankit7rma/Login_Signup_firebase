import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Rout from './components/Rout'
import './index.css';

const App = () => {
  return (
    <div >
    <BrowserRouter>
    <Rout/>
    </BrowserRouter>

    </div>
  )
}

export default App