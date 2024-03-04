import React from 'react'
import img1 from '../../assets/png-clipart-dress-red-gown-clothing-woman-dress-fashion-girl-thumbnail.png'
const HomeSectionCard = () => {
  return (
    <div className="cursor-pointer flex flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden w-15rem mx-3">
    <div className="overflow-hidden h-[13rem] w-[10rem]">
    <img
      src={img1}
      alt='/'
      className="object-cover object-top w-full h-full"
    />
  </div>
  <div className="py-4 px-6 text-center">
    <h2 className="text-xl font-bold"> Hello</h2>
    <p>this good for you</p>
  </div>
  </div>
);
 }

export default HomeSectionCard
