"use client";
import { useState, useEffect } from "react";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
export default function Carousel({
  children: slides,
  autoSlide = false,
  autoSlideInterval = 3000,
}) {
  const [isHovered, setIsHovered] = useState(false);
  const [curr, setCurr] = useState(0);

  const prev = () =>
    setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));
  const next = () =>
    setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));

  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(next, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, []);

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className="overflow-hidden relative w-full h-full"
      onMouseEnter={handleHover}
      onMouseLeave={handleLeave}
    >
      <div
        className="relative flex transition-transform ease-out duration-500  w-full h-full"
        style={{ transform: `translateX(-${curr * 100}%)` }}
      >
        {slides}
      </div>

      {isHovered && (
        <div className="absolute inset-0 flex items-center justify-between p-4">
          <button onClick={prev} className="btn">
            <IoIosArrowRoundBack className="h-7 w-7" />
          </button>
          <button onClick={next} className="btn">
            <IoIosArrowRoundForward className="h-7 w-7" />
          </button>
        </div>
      )}

      <div className="absolute bottom-4 right-0 left-0">
        <div className="flex items-center justify-center gap-2">
          {slides.map((_, i) => (
            <div
              className={`
              transition-all w-3 h-3 bg-white rounded-full
              ${curr === i ? "p-2" : "bg-opacity-50"}
            `}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
