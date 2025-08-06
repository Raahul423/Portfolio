import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from './Pages/About'
import Home from './Pages/Home'
import Myskills from './Pages/Myskills'
import Projects from './Pages/Projects'
import Navbar from './Components/Navbar'

const App = () => {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/About' element={<About/>}/>
        <Route path='/' element={<Home/>}/>
        <Route path='/Skills' element={<Myskills/>}/>
        <Route path='/Project' element={<Projects/>}/>
      </Routes>
    </>
  )
}

export default App
