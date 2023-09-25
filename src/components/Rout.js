import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Signup from './Signup'
import Login from "./Login"

const Rout = () => {
  return (
    <div >
    <Routes>
        <Route path='/' element={<Signup/>}/>
        <Route path='/login' element={<Login/>}/>
    </Routes>
    </div>
  )
}

export default Rout