import Image from "next/image"
import { FaTwitter } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaRegUser } from "react-icons/fa6";
import { GrCart } from "react-icons/gr";
import { IoIosArrowDown } from "react-icons/io";

function Navbar() {
  return (
    <div className="flex justify-between items-center  w-screen bg-[#212122] text-zinc-50 py-4 px-6">
    {/* navbar */}
      <div className="flex gap-8">
        <h4 className="hover flex items-center">brands
        <IoIosArrowDown /></h4>
        <h4 className="hover flex items-center">shop
        <IoIosArrowDown /></h4>
        
        <h4 className="hover">premium</h4>
        <h4 className="hover">gift cards</h4>

      </div>
      {/* logo */}
      <div>
      <Image src='/logo.svg' height={60} width={120} />
      </div>
      
      {/* Social links */}
      <div className="flex gap-8 items-center ">
      <h4 className="hover"> become an affiliate</h4>
      <FaTwitter className="hoverIcon" />
      <FaTiktok className="hoverIcon" />
      <FaInstagram className="hoverIcon" />
      <FaRegUser className="hoverIcon" />
      <GrCart className="hoverIcon" />
      </div>
    </div>
  )
}

export default Navbar
