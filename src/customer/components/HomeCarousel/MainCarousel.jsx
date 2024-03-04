// MainCarousel.js
import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { images } from './MainCarouselData';

const MainCarousel = () => {
  const items = images.map((image, index) => (
    <img key={index} src={image} alt={`Image ${index + 1}`} style={{ width: '20%' }} />
  ));

  return (
    <div className=' container items-center'>
      <AliceCarousel items={items}
      disableButtonsControls
      autoPlay
      autoPlayInterval={1000}
      infinite
      />
    </div>
  );
};

export default MainCarousel;
