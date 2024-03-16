import React from 'react'
import './ProductCard.css'
const ProductCard = ({Product}) => {
  return (
    <div className=' productCard flex flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden w-15rem mx-3 w-[15rem] m-3 transition-all cursor-pointer'>
      <img className=' object-cover object-top w-full h-full' src= {Product.imageUrl} alt="" />
        <div className='textPart bg-white p-3'>
            <div>
                <p className=' font-bold opacity-60'>{Product.brand}</p>
                <p>{Product.title}</p>
            </div>
            <div className=' flex items-center space-x-2'>
                <p className=' font-semibold '>pkr{Product.discountedPrice}</p>
                <p className=' line-through opacity-50'>pkr{Product.price}</p>
                <p className=' text-green-500 font-semibold'>{Product.discountPersent}% Off</p>
            </div>
        </div>
    </div>
  )
}

export default ProductCard
