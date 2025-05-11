import React from 'react'
import Header from '../../src/components/Header'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Testimonials from './pages/Testimonials'
import Product from './pages/Product'


const App = () => {
  return (
    <div >
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='testimonials' element={<Testimonials />} />
        <Route path='product/:productId' element={<Product />} />
      </Routes>
    </div>
  )
}

export default App