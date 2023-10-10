import Navbar from './Navbar'
import About from './components/About'
import Explore from './components/Explore'
import GetStarted from './components/GetStarted'
import Hero from './components/Hero'
import WhatsNew from './components/WhatsNew'

export default function Home() {
  return (
   <div className='bg-primary-black overflow-hidden'>
    <Navbar/>
    <Hero/>
    <div className='relative'>
      <About/>
      <div className='gradient-03 z-0'/>
      <Explore/>
    </div>
    <div className='relative'>
      <GetStarted/>
      <div className='gradient-04 z-0'/>
      <WhatsNew/>
    </div>
   </div>
  )
}



{/* 
    <World/>
    <div className='relative'>
      <Insights/>
      <div className='gradient-04 z-0'/>
      <Feedback/>
    </div>
    <Footer/> */}