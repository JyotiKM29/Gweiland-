import Image from 'next/image'
import React from 'react'

function Card({name , src , color}) {
  return (
    <div className='mx-4 flex-self-strech 
    h-40 w-[26rem] rounded-tl-[150px] rounded-bl-[150px] rounded-br-[16px] rounded-tr-[16px] flex justify-between items-center p-4'
    style={{ backgroundColor: color }}
    >
    <div className='relative  h-full w-1/2 rounded-full overflow-hidden'>
     <Image src={src}
    //   className='p-2'
      alt="Card"
        layout="fill"
        objectFit="cover" />
    </div>
    <div className='h-full flex flex-col justify-between items-end text-zinc-50'>
    <h2 className='text-3xl font-bold'>{name}</h2>
    <p className='font-poppins text-lg font-light border-b'>Shop</p>
    </div>
  </div>
  
  )
}

export default Card
