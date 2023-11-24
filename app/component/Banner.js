import Image from 'next/image'
import React from 'react'

const Banner = () => {
  return (
    <div className='relative h-[60vh] w-full bg-red-50'>
    <Image 
   src='/images/banner1.jpg'
        alt="Banner"
        layout="fill"
        objectFit="cover"
        
    />
  </div>
  )
}

export default Banner
