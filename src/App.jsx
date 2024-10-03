
import React from 'react'
import "./App.css"
import Menu from './Pages/Menu/Menu'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Category from './Pages/Category/Category'
import Home from './Pages/Home/Home'
import Meal from './Pages/SingleMeal/Meal'
import Navbar from './Components/Navbar'
const App = () => {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      
      <Route path='/' element={<Home/>}/>
      <Route path='/menu' element={<Menu/>}/>
      <Route path='category/:category' element={<Category/>}/>
      <Route path='meal/:id' element={<Meal/>}/>
    </Routes>  

    </BrowserRouter>
  )
}

export default App
