import React from 'react'
import CartItem from './CartItem'
import { Button } from '@mui/material'
import { Link } from 'react-router-dom'

const Cart = () => {
  return (
    <div>
      <div className=' lg:grid grid-cols-3 lg:px-16 relative'>
          <div className=' col-span-2'>
          {[1,1,1].map((item)=><CartItem/> ) }
          </div>
          <div className=' px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0'>
        <div className=' border'>
          <p className=' uppercase font-bold opacity-60 pb-4'>Price details</p>
          <hr/>
          <div className=' space-y-3 font-semibold '>
            <div className=' flex justify-between pt-3 text-black'>
              <span>Price</span>
              <span>$4000</span>
            </div>
            <div className=' flex justify-between pt-3'>
              <span>Disccount</span>
              <span className=' text-green-600'>$3500</span>
            </div>
            <div className=' flex justify-between pt-3'>
              <span>Delivery Charge</span>
              <span className='  text-green-600'>Free</span>
            </div>
            <div className=' flex justify-between pt-3'>
              <span>Total Amount</span>
              <span className=' text-green-600'>$4500</span>
            </div>

          </div>
          <Button variant='contained' className=' w-full mb-10' sx={{px:"2.5rem",py:"0.7rem", bgcolor:"#9155fd"}}>
           <Link to={'/checkout'}>Checkout</Link> 
          </Button>
        </div>
      </div>
      </div>
      
      
    </div>
  )
}

export default Cart
