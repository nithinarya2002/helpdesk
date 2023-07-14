import React, { createContext, useReducer } from 'react'
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
import Sportsresponse from './Components/Sportsresponse'
import Aecresponse from './Components/Aecresponse'
import Libraryresponse from './Components/Libraryresponse'
import Response from './Components/Response'
import Errorpage from './Components/Errorpage'
import Logout from './Components/Logout'

import { initialState,reducer } from './reducer/UseReducer'
export const UserContext=createContext();

const Routing=()=>{
  return (
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
        <Route path='/sportsresponse' element={<Sportsresponse/>}/>
        <Route path='/aecresponse' element={<Aecresponse/>}/>
        <Route path='/libraryresponse' element={<Libraryresponse/>}/>
        <Route path='/response' element={<Response/>}/>
        <Route path='/logout' element={<Logout/>}/>
        <Route path='*' element={<Errorpage/>}/>      
      </Routes>
  )
}
const App = () => {
  const [state,dispatch]=useReducer(reducer,initialState)
  return (
    <>
      <UserContext.Provider value={{state,dispatch}}>
        <Navbar/>
        <Routing/>
      </UserContext.Provider>
    </>
  )
}

export default App