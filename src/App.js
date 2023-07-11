import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Query from './Components/Query'
import Login from './Components/Login'
import Register from './Components/Register'
import About from './Components/About'
import Contact from './Components/Contact'
import Dept from './Components/Dept'
import Select from './Components/Select'

import Library from './Components/Library'
import Aec from './Components/Aec'
import Sports from './Components/Sports'

const App = () => {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
         <Route path='/dept' element={<Dept/>}/>
        <Route path='/library' element={<Library/>}/>
        <Route path='/aec' element={<Aec/>}/>
        <Route path='/sports' element={<Sports/>}/> 
        <Route path='/select' element={<Select/>}/>
        <Route path='/query' element={<Query/>}/>
        {/* <Route path='*' element={</>}/> */}     {/* for error page */}
      </Routes>
    </>
  )
}

export default App