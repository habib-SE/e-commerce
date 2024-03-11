import React from 'react'

const HomeSectionCard = ({product}) => {
  return (
    <div className="cursor-pointer flex flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden w-15rem mx-3">
    <div className="overflow-hidden h-[13rem] w-[10rem]">
    <img
      src={product.imageUrl}
      alt='/'
      className="object-cover object-top w-full h-full"
    />
  </div>
  <div className="py-4 px-6 text-center">
    <h2 className="text-xl font-bold"> {product.brand}</h2>
    <p>{product.title}</p>
  </div>
  </div>
);
 }

export default HomeSectionCard
