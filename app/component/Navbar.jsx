"use client";
import Image from "next/image";
import { useEffect, useLayoutEffect, useState } from "react";
import { FaTwitter } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaRegUser } from "react-icons/fa6";
import { GrCart } from "react-icons/gr";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { IoReorderThreeOutline } from "react-icons/io5";
import { IoSearchOutline } from "react-icons/io5";
import { RxCross1 } from "react-icons/rx";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const[isBrands , setBrands] = useState(false)
  const[isShop , setShop] = useState(false)
  const [isWidthSmallerThan1024, setIsWidthSmallerThan1024] = useState(false);
  const [isWidthSmallerThan700, setIsWidthSmallerThan700] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsWidthSmallerThan1024(window.innerWidth < 1060);
      setIsWidthSmallerThan700(window.innerWidth < 700);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleHoverBrand = () => {
    setBrands(true);
  };

  const handleLeaveBrand = () => {
    setBrands(false);
  };

  const handleHoverShop = () => {
    setShop(true);
  };

  const handleLeaveShop = () => {
    setShop(false);
  };

  return (
    <>
    <div className="flex justify-between items-center  w-screen bg-[#212122] text-zinc-50 py-4 px-6 md:px-12">
      {/* navbar */}

      {isWidthSmallerThan1024 ? (
        <>
          <button onClick={()=>setIsOpen(!isOpen)}>
            {isOpen ? (
              <RxCross1 className="hoverIcon h-6 w-7" />
            ) : (
              <IoReorderThreeOutline className="hoverIcon h-7 w-7" />
            )}
          </button>

         
        </>
      ) : (
        <div className="flex gap-8">
        <div className="relative">
          <button className="hover flex items-center gap-1"
          onMouseEnter={handleHoverBrand}
      onMouseLeave={handleLeaveBrand}
          >
            brands
            <IoIosArrowDown className="w-3 h-3" />
          </button>
          {isBrands && <div className="lineUp  absolute flex flex-col items-start h-auto w-auto p-6 gap-1 bg-[#2c2c2c] mt-2">
            <button className="hover">all brands</button>
            <button className="hover">shosky</button>
            <button className="hover">bitfins</button>
            <button className="hover whitespace-nowrap">cardano stonez club</button>
            <button className="hover">cryptoraggies</button>
            <button className="hover">danketsu</button>
            <button className="hover">future fest</button>
            <button className="hover">pendulum</button>
            <button className="hover">vudu brigada</button>
          </div>}</div>

          <div className="relative">
          <button className="hover flex items-center gap-1"
            onMouseEnter={handleHoverShop}
      onMouseLeave={handleLeaveShop}>
            shop
            <IoIosArrowDown className="w-3 h-3" />
          </button>
          {isShop && <div className="lineUp  absolute flex justify-between h-auto w-screen px-12 py-6 gap-1 bg-[#2c2c2c] mt-6" 
          style={{right: '-88.5vw'}}
          >
            <ul className="flex flex-col items-start">
            <button className="hover text-2xl">apperal</button>
            <button className="hover">unisex hoodies</button>
            <button className="hover">unisex zip hoodies</button>
            <button className="hover">unisex sweatshirt</button>
            <button className="hover">unisex tees</button>
            <button className="hover">womens tank</button>
            <button className="hover">unisex tanks</button>
            
            </ul>
            <ul className="flex flex-col items-start">
            <button className="hover text-2xl">home</button>
            <button className="hover">phone case</button>
            <button className="hover">framed posters</button>
            <button className="hover">posters</button>
           
            </ul>

          </div>}
          </div>
        

          <h4 className="hover">premium</h4>
          <h4 className="hover">gift cards</h4>
        </div>
      )}
      {/* logo */}
      <div>
        <Image src="/logo.svg" height={60} width={120} />
      </div>

      {/* Social links */}
      <div className="flex gap-2 sm:gap-4 md:gap-8 items-center ">
        {!isWidthSmallerThan1024 && (
          <>
            <h4 className="hover"> become an affiliate</h4>
            <FaTwitter className="hoverIcon h-5 w-5" />
            <FaTiktok className="hoverIcon h-5 w-5" />
            <FaInstagram className="hoverIcon h-5 w-5" />
          </>
        )}
        {!isWidthSmallerThan700 && <FaRegUser className="hoverIcon h-5 w-5" />}
        <IoSearchOutline className="hoverIcon h-5 w-5" />
        <GrCart className="hoverIcon h-5 w-5" />
      </div>
     
    </div>

{isOpen && <div className="lineUp flex flex-col  items-start h-[90vh] bg-[#212122] px-6 py-4 gap-8">
<button className="hoverIcon text-2xl flex justify-between items-center gap-1">
            brands
            <IoIosArrowForward className="w-5 h-5" />
          </button>
          <button className="hoverIcon text-2xl flex items-center justify-between gap-1">
            shop
            <IoIosArrowForward className="w-5 h-5" />
          </button>

          <button className="hoverIcon items-left text-2xl">premium</button>
          <button className="hoverIcon text-2xl">gift cards</button>
          <button className="hoverIcon text-2xl">become an affiliate</button>
          <div className="flex gap-2 my-2 ">
            
            <FaTwitter className="hoverIcon h-5 w-5" />
            <FaTiktok className="hoverIcon h-5 w-5" />
            <FaInstagram className="hoverIcon h-5 w-5" />
          </div>

</div>}
</>
  );
}

export default Navbar;
