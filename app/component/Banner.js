import Image from 'next/image'
import React from 'react'
import ImageSlider from './ImageSlider'

const Banner = () => {
  const slides = [
    {url:'/images/banner1.jpg', title:'banner 1'},
    {url:'/images/banner2.jpg', title:'banner 2'},
    {url:'/images/banner3.jpg', title:'banner 3'},
    // {url:'/images/banner4.jpg', title:'banner 4'},
    {url:'/images/banner5.jpg', title:'banner 5'},
  ]
  return (
    <div className='relative h-[70vh] w-full '>
   
    <ImageSlider slides={slides} />

  </div>
  )
}

export default Banner
