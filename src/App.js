import React, { createContext, useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import Rout from './components/Rout'
import './app.css';
import ReactSwitch from 'react-switch';

export const ThemeContext = createContext(null)

const App = () => {
  const [theme,setTheme] = useState('dark')
  const toggleTheme = ()=>{
    setTheme(theme=>(theme==="light"?"dark":"light"))
  }

  return (
    
    <ThemeContext.Provider theme={{theme,toggleTheme}}>
    <div className='App' id={theme} style={{backgroundColor:{theme}}}>
    <BrowserRouter>
    <Rout/>
    <div className='switch'>
    <label>{theme==="light"?"Light Mode":"Dark Mode"}</label>
      <ReactSwitch onChange={toggleTheme} checked={theme==="dark"}/>
    </div>
    </BrowserRouter>
    </div>
    </ThemeContext.Provider>

  )
}

export default App