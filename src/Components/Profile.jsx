import { faInfo,faHome,faDownload,faEnvelope,faLink  } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin,faGithub  } from '@fortawesome/free-brands-svg-icons'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { CodingProfiles } from './CodingProfiles'


export const Profile = () => {
  return (
    <>
    <div id="large-display-classes" className='lg:grid lg:grid-cols-2 '>
     <div className="flex flex-row xl:p-0 mb-2 m-4 md:justify-center lg:items-center lg:flex-col xl:flex-row  items-center rounded-lg  bg-gradient-to-t to-black from-gray-700  border-black border-2 text-white  p-2">

    <img className=" lg:mr-0 w-32 h-32 rounded-full border-4 border-white outline-blue-400 outline md:w-40 md:h-40 lg:w-72 lg:h-72 md:mr-10 lg:outline-none lg:rounded-md lg:border-none xl:rounded-r-none xl:w-96 xl:h-96 " src="profile pic.jpg" alt="" />
    <div className="p-3  lg:text-center xl:text-center" id="header">
        <h1 className="text-4xl font-thin">Devansh Chopra</h1>
        <p className='text-xl font-thin'>Web Developer</p>

    <div className="flex flex-row flex-wrap lg:justify-center xl:justify-center xl:p-2" id="socials">
        <ul className='flex flex-row flex-wrap gap-4' >
        <li><a href="https://www.linkedin.com/in/devansh-chopra-6a0282267" target='_blank'><FontAwesomeIcon icon={faLinkedin} className='size-7 pt-2 pr-2 pb-2 pl-2 rounded-2xl hover:bg-gray-700  transition-all duration-400' style={{color: "white"}} /> </a> </li>
        <li>
          <a href="mailto:devanshc5@gmail.com" >
          <FontAwesomeIcon icon={faEnvelope} className='hover:bg-gray-700 rounded-2xl  transition-all duration-400 size-7 p-2' style={{color: "white  "}} />
          </a>
          </li>

        </ul>
        
    </div>
    <div className=" hidden flex-row justify-evenly lg:justify-normal lg:flex xl:flex-wrap xl:justify-center" id="Resume">
      <a href='https://drive.google.com/file/d/1arozAF7m3cdnaxuzJl02cfqnrdUNSbc_/view?usp=drive_link' target='_blank'>
        <button className='bg-white rounded-lg justify-center  flex flex-row items-center gap-1  p-4 m-2 lg:ml-0 font-medium  ease-in  shadow-lg shadow-black-500/50  md:p-6 md:w-52 hover:scale-105 transition-all duration-300 '><p className='text-xl text-black'> Resume&nbsp;</p> <FontAwesomeIcon style={{color:'black'}} icon={faLink} className='size-5'></FontAwesomeIcon>   </button></a>

        <a href="https://github.com/Dev-dancer" target='_blank'>
        <button className=' hover:scale-105  duration-300 bg-transparent outline-dashed  justify-center flex flex-row items-center gap-1  p-4 m-2 borderradius font-medium  transition ease-in rounded-lg shadow-lg shadow-slate-500/50  md:p-6 md:w-52 lg:ml-0'><p className='text-xl text-white '> Projects&nbsp;</p> <FontAwesomeIcon style={{color:'white'}} icon={faGithub} className='size-6'></FontAwesomeIcon>   </button> </a>
    </div>    
       
    </div>
    
    </div>
    

    <div className="flex flex-row justify-evenly lg:justify-normal lg:hidden   " id="Resume">
            <a href='https://drive.google.com/file/d/1arozAF7m3cdnaxuzJl02cfqnrdUNSbc_/view?usp=drive_link' target='_blank'>

        <button className='bg-violet-500 justify-center  flex flex-row items-center gap-1  p-4 m-2 borderradius font-medium hover:bg-violet-400 transition ease-in rounded-lg shadow-lg shadow-violet-500/50  md:p-6 md:w-52 '><p className='text-xl text-white'> Resume&nbsp;</p> <FontAwesomeIcon style={{color:'white'}} icon={faDownload} className='size-5'></FontAwesomeIcon>   </button>
</a>

      <a href="https://github.com/Dev-dancer" target='_blank'>
        <button className='bg-transparent outline-dashed  justify-center flex flex-row items-center gap-1  p-4 m-2 borderradius font-medium hover:bg-slate-200  transition ease-in rounded-lg shadow-lg shadow-slate-500/50  md:p-6 md:w-52'><p className='text-xl text-black'> Projects&nbsp;</p> <FontAwesomeIcon style={{color:'black'}} icon={faGithub} className='size-6'></FontAwesomeIcon>   </button>
      </a>
    </div>    
    

    <div id="about" >

      <h1 className='mt-6 text-black text-3xl  font-thin ml-4  md:mt-2 md:text-4xl '>ABOUT</h1>

        <p className='m-4 mt-2  font-normal text-lg tracking-tighter text-justify  ' >Hello! I'm an enthusiastic code and web developer with a passion for creating dynamic, user-friendly websites and applications. My journey in the world of coding began with a curiosity for how things work behind the scenes, and it has since evolved into a full-fledged career that I love.
         
        </p>

        {/* <h1 className='mt-6 text-black   text-3xl w-fit font-thin ml-4  md:mt-2 md:text-4xl'>WHY HIRE ME</h1>
        <p className='m-4 mt-2  font-normal  text-lg tracking-tighter text-justify  ' >I am currently looking for new job opportunities where I can leverage my skills and passion for web development. I am eager to join a dynamic team and contribute to exciting projects. If you are looking for a dedicated and innovative web developer, I would love to connect and discuss how I can be a valuable addition to your team.</p> */}


    <h1 className='mt-6 text-black text-3xl  font-thin ml-4  md:mt-2 md:text-4xl'>PROFILES</h1>
<div id="Codingprofiles" className='lg:flex lg:flex-row flex flex-col items-center   bg-gradient-to-t  text-black  p-2 '>
       <div className='m-2 ml-2 flex flex-col gap-5 md:grid md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 '>

          <CodingProfiles image="gfg-image.jpg" link="https://www.geeksforgeeks.org/user/devanzkpp/"/>
          <CodingProfiles image="LeetCode.png" link="https://leetcode.com/u/devdancer/"/>

          <CodingProfiles  image="CodingNinjas.webp" link="https://www.naukri.com/code360/profile/f5a7bfdd-7aec-4c1e-afb2-8e6e09d53c9f" />
          </div>  
    </div>
</div>

 
</div>
    </>
    
  )
}
