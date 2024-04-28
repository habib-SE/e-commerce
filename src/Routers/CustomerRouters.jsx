import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../customer/pages/HomePage'
import Cart from '../customer/components/cart/Cart'
import Navigation from '../customer/components/navigation/Navigation'
import Footer from '../customer/components/footer/Footer'
import Product from '../customer/components/product/Product'

const CustomerRouters = () => {
  return (
    <div>
      <div>
        <Navigation/>
      </div>
      <Routes>
        {/* <Route path='/' element={<HomePage/>} />
        <Route path='/cart' element={<Cart/>} /> */}
        <Route path='/' element={<Product/>} />
      </Routes>
      <div>
        <Footer/>
      </div>
    </div>
  )
}

export default CustomerRouters
