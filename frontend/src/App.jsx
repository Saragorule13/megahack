import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Home from './pages/Home'
import Landing from './pages/Landing'

export default function App() {
  return (
    <div className='font-bold'>
      <Routes>
        <Route path='/' element={<Landing/>} />
        <Route path='/home' element={<Home/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/QA' element={<h1>Forgot Password</h1>} />
      </Routes>
    </div>
  )
}
