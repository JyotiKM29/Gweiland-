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
          <h4 className="hover flex items-center gap-1">
            brands
            <IoIosArrowDown className="w-3 h-3" />
          </h4>
          <h4 className="hover flex items-center gap-1">
            shop
            <IoIosArrowDown className="w-3 h-3" />
          </h4>

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
