import React from "react";
import Carousel from "./Carousel";
import BannerCard from "./BannerCard";

const Banner = () => {
  const slides = [
    {
      id: 1,
      img: "/images/banner1.jpg",
      text: "Heritage Hoodies",
      position: "left",
    },
    {
      id: 5,
      img: "/images/banner5.jpg",
      text: "Heritage tees",
      position: "right",
    },
    {
      id: 3,
      img: "/images/banner3.jpg",
      text: "premium tees",
      position: "left",
    },
    {
      id: 4,
      img: "/images/banner4.jpg",
      text: "Heritage women's tanks",
      position: "right",
    },
    {
      id: 2,
      img: "/images/banner2.jpg",
      text: "premium zip Hoodies",
      position: "left",
    }
    
   
    
  ];

  return (
    <div className="relative h-[70vh] w-screen">
      <Carousel className="relative h-full w-full">
        {slides.map((slide) => (
          <BannerCard
            key={slide.id}
            img={slide.img}
            text={slide.text}
            pos={slide.position}

          />
        ))}
      </Carousel>
    </div>
  );
};

export default Banner;
