import React, { useState } from "react";
import AliceCarousel from "react-alice-carousel";
import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import { Button } from "@mui/material";

const HomeSectionCarousel = ({data}) => {

  const [activeIndex, setActiveIndex] = useState(0);
  const responsive = {
    0: { items: 1 },
    720: { items: 3 },
    1024: { items:5.5 },
  };

  const slidePrev=()=>setActiveIndex(activeIndex-1);
  const slideNext=()=>setActiveIndex(activeIndex+1);

  const syncActiveIndex=({item})=>setActiveIndex(item);

  const items =data.slice(0,10).map((item) => <HomeSectionCard product={item} />);
  return (
    <div className=" relative px-4 lg:px-8">
      <div className=" relative p-5">
        <AliceCarousel
          items={items}
          disableDotsControls
          responsive={responsive}
          onSlideChange={syncActiveIndex}
          activeIndex={activeIndex}
        />

        {/* Right button */}
        { activeIndex !== items.length-5 && <Button
        onClick={slideNext}
        variant="contained"
        className=" z-50 absolute"
        aria-label="next"
        sx={{
          position:"absolute",
          top:"8rem",
          right:"0rem",
          transform:"translateX(50%) rotate(90deg)",
          bgcolor:"white"
        }}
        
        >
          <KeyboardArrowLeftIcon sx={{ transform:"translateX(50%) rotate(90deg)"}} />
        </Button>}

        {/* Left Button */}
        {activeIndex !== 0 &&<Button
        onClick={slidePrev}
          variant="contained"
          className=" z-50 absolute"
          aria-label=" previous"
          sx={{
            position:"absolute",
            top:"8rem",
            left:"0rem",
            transform:" translateX(-50%) rotate(-90deg)",
            bgcolor:"white"
          }}
        >
          <KeyboardArrowLeftIcon sx={{ transform:"translateX(-50%) rotate(90deg)"}}/>
        </Button>}
      </div>
    </div>
  );
};

export default HomeSectionCarousel;
