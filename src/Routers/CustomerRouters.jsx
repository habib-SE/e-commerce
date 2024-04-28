import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../customer/pages/HomePage'
import Cart from '../customer/components/cart/Cart'
import Navigation from '../customer/components/navigation/Navigation'
import Footer from '../customer/components/footer/Footer'
import Product from '../customer/components/product/Product'
import ProductDetails from'../customer/components/productDetail/ProductDetails'
import Checkout from '../customer/components/checkout/Checkout'
import Order from '../customer/components/order/Order'
import OrderDetail from '../customer/components/order/OrderDetail'
const CustomerRouters = () => {
  return (
    <div>
      <div>
        <Navigation/>
      </div>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/:lavelOne/:lavelTwo/:lavelThree' element={<Product/>} />
        <Route path='/product/:id' element={<ProductDetails/>}/>
        <Route path='/checkout' element={<Checkout/>}/>
        <Route path='/account/order' element={< Order/>}/>
        <Route path='/account/order/:orderId' element={<OrderDetail/>}/>
        
      </Routes>
      <div>
        <Footer/>
      </div>
    </div>
  )
}

export default CustomerRouters
