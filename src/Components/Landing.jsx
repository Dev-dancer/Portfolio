import React from 'react'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Profile } from './Profile'
import { faInfo,faHome,faDownload,faEnvelope  } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin,faGithub  } from '@fortawesome/free-brands-svg-icons'


function Landing() {
  return (
    <>

    <div className='bg-slate-200 p-2 bg-[url("public/background.jpg")] bg-cover opacity-80 h-full  md:h-72 lg:h-128'>
    <div className='md:flex md:flex-col md:items-center'>

    <h1 className=' font-extrabold text-6xl grid  text-white  md:text-7xl md:inline lg:text-7xl lg:mt-20 xl:text-9xl '>HI I AM <p className='text-transparent bg-clip-text bg-gradient-to-r to-sky-700 from-emerald-500  md:text-7xl md:inline lg:text-7xl xl:text-9xl'>ABC</p></h1>
    <h2 className='font-semibold text-2xl text-white md:text-4xl md:mt-4 lg:text-4xl xl:text-6xl'>Enthusiastic Coder and Developer</h2>
    </div>
    <div className='flex flex-row justify-center'>

    <button className='bg-transparent transition ease-in outline outline-white outline-4  p-2   text-xl font-semibold  mr-5 mb-5 mt-5 text-white   hover:bg-teal-100 hover:bg-opacity-20 hover:translate-x-1 w-52 md:mt-12  md:p-4 lg:p-6 lg:text-2xl'>Hire Me&nbsp;<FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon></button>
    </div>

   </div>
    </>
  )
}

export default Landing


