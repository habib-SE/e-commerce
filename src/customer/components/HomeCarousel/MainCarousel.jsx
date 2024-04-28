// MainCarousel.js
import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { MainCarouselData} from './MainCarouselData';
import { useNavigate } from 'react-router-dom';

const MainCarousel = () => {
  
  const items = MainCarouselData.map((item, index) => 
    <img key={index} className='cursor-pointer' role='presentation' src={item.image} alt={`Image ${index + 1}`} style={{ width: '100%' }} />
  );

  return (
    <div>
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
