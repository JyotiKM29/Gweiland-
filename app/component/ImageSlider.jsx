'use client'
import React, { useEffect, useState } from "react";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";

function ImageSlider({ slides }) {
  const [isHovered, setIsHovered] = useState(false);
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

  const autoSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  useEffect(() => {
    const interval = setInterval(autoSlide, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const slideStylesWidthBackground = {
    width: "100%",
    height: "100%",
    backgroundSize: "cover",
    backgroundPosition: "top",
    filter: "brightness(80%) contrast(110%)  grayscale(10%)",
    backgroundImage: `url(${slides[currentIndex].url})`,
  };

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className="relative h-full w-full" onMouseEnter={handleHover} onMouseLeave={handleLeave}>
      {/* Image Container */}
      <div style={slideStylesWidthBackground} className="relative">
        {/* arrows container */}
        {isHovered && (
          <div className="absolute top-0 flex justify-between items-center h-full w-full">
            <button onClick={goToPrevious} className="btn">
              <IoIosArrowRoundBack className="h-7 w-7" />
            </button>
            <button onClick={goToNext} className="btn">
              <IoIosArrowRoundForward className="h-7 w-7" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default ImageSlider;
