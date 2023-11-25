import Image from 'next/image';

function BannerCard({img ,text , pos}) {
  return (
    <div className='relative h-full w-full'>
      <div className='relative h-full w-full  p-20'>
        <Image 
          src={img} 
          alt='banner Img' 
          layout='fill' 
          objectFit='cover'
        />
        <div className={`absolute ${pos}-[6%] top-[30%] h-auto  w-[20vw]`} >
        <p className='lineUp text-5xl md:text-6xl lg:text-[5rem] leading-none font-[800] text-[#fff]'>{text}</p>
          <button className='lineUp absolute w-40 h-18 p-3 md:p-4 z-10 mt-4 bg-[#fff] text-zinc-950 rounded-full cursor-pointer transition-all ease-in-out duration-300 hover:text-zinc-50 hover:bg-zinc-950
          '>Show</button> 
        </div>
       
      </div>
    </div>
  );
}

export default BannerCard;
