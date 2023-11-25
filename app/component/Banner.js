import Image from 'next/image'
import React from 'react'
import ImageSlider from './ImageSlider'
import Carousel from './Carousel'

const Banner = () => {
  const slides = [
    '/images/banner1.jpg',
    '/images/banner2.jpg',
    '/images/banner3.jpg',
    '/images/banner5.jpg',
   
  ] 

  const slideStylesWidthBackground = {
    width: "100%",
    height: "100%",
    objectFit: "container",
    backgroundPosition: "center top",
    filter: "brightness(80%) contrast(110%)  grayscale(10%)",
    // backgroundImage: `url(${slides[currentIndex].url})`,
  };

  return (
    <div className='relative h-[70vh] w-screen '>
   
    {/* <ImageSlider slides={slides} /> */}
    <Carousel>
      {
        slides.map((s) => <img 
         style={slideStylesWidthBackground}
        key={s} src={s} alt='img' />)

      }
    </Carousel>

  </div>
  )
}

export default Banner
