import React from 'react'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Profile } from './Profile'
import { faInfo,faHome,faDownload,faEnvelope  } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin,faGithub  } from '@fortawesome/free-brands-svg-icons'
import { motion } from "framer-motion"

function Landing() {
  return (
    <>


{/* bg-[url(public\sssurf.svg)] */}
    <div className='bg-black p-2  bg-[url(ccchaos.png)]  bg- to-black from-gray-700 h-48    md:h-80 lg:h-128'>
      {/* <img  src="hexagon.svg" className='w-72  h-72 -m-20 top-0 left-0 absolute animate-spin-slow opacity-90' alt="" />
      <img  src="hexagon.svg" className='w-72  h-72 -m-20 top-40 right-32 absolute animate-spin-slow opacity-90' alt="" /> */}
      {/* <img src="public\nnneon.svg" className='w-72  h-72 -m-20 top-0 left-0 absolute animate-ping opacity-90' alt="" /> */}
     
    
    
    <div className='md:flex md:flex-col md:items-center'>

    <h1 className=' font-semibold text-6xl grid  text-white  md:text-7xl md:inline lg:text-7xl   '>HI I AM <p className='text-transparent bg-clip-text bg-gradient-to-r to-sky-700 from-emerald-500  md:text-7xl md:inline lg:text-7xl '>DEVANSH</p></h1>
    <h2 className='font-thin text-2xl text-white md:text-4xl md:mt-4 lg:text-4xl '>Enthusiastic Coder and Developer</h2>
    </div>
    <div className=''>

      <div id='XL Navbar' className='hidden md:flex flex-row justify-center  text-white  '>
          <ul className='w-96  font-thin flex flex-row m-10 mb-0 border-t-2 border-white  justify-center gap-5 text-2xl'>

            <li className='hover:-translate-y-1  hover:text-gray-400 p-2 m-2 transition-all duration-300  '><a href="#skills">SKILLS</a></li>
            <li className='hover:-translate-y-1 hover:text-gray-400 p-2 m-2 transition-all duration-300  '><a href="#projects">PROJECTS</a></li>
            <li className='hover:-translate-y-1 hover:text-gray-400 p-2 m-2 transition-all duration-300  '><a href="#contact">CONTACT</a></li>
          </ul>

      </div>
      <div className='hidden md:flex flex-row justify-center'>
          <div className='w-60 border-white border-t-2'></div>
      </div>
    
  
    </div>
   </div>
    </>
  )
}

export default Landing


