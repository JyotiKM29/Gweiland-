'use client'
import React, { useState } from "react";
import { IoIosArrowRoundBack } from "react-icons/io";
import { IoIosArrowRoundForward } from "react-icons/io";

function ImageSlider({ slides }) {
    const [currentIndex, setCurrentIndex] = useState(0);
  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };


  const slideStylesWidthBackground = {
    width: "100%",
    height: "100%",
    
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundImage: `url(${slides[currentIndex].url})`,
  };

  return (
    <div className="relative h-full w-full">
      {/* arrows container */}
      <div className="absolute flex justify-between items-center h-full w-full">
        <button onClick={goToPrevious} className="btn">
          <IoIosArrowRoundBack className="h-7 w-7"/>
        </button>
        <button onClick={goToNext} className="btn">
          <IoIosArrowRoundForward className="h-7 w-7"/>
        </button>
      </div>
      {/* Image Container */}
      <div  style={slideStylesWidthBackground}></div>
    </div>
  );
}

export default ImageSlider;
