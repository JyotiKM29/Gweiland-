import Image from 'next/image'
import Navbar from './component/Navbar'
import Slider from './component/Slider'
import Banner from './component/Banner'
import Announcement from './component/Announcement'

export default function Home() {
  return (
   <div className='relative'>
   <Announcement />
   <div className="sticky top-0 z-50">
       <Navbar className="nav" />
     </div>
    <Banner />
    <Slider />
    <Banner />
    <Slider />
    <Banner />
    <Slider />
   </div>
  )
}
