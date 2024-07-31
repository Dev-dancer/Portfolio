import { faInfo,faHome,faDownload,faEnvelope  } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin,faGithub  } from '@fortawesome/free-brands-svg-icons'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export const Profile = () => {
  return (
    <>
    <div id="large-display-classes" className='lg:grid lg:grid-cols-2 '>
     <div className="flex flex-row p-4 m-4 bg-slate-200 rounded-xl md:justify-center lg:items-center lg:flex-col xl:flex-row">

    <img className="w-32 h-32 rounded-full border-4 border-white  outline-blue-400 outline md:w-40 md:h-40 lg:w-72 lg:h-72 lg:outline-none lg:rounded-xl lg:border-none" src="public\placeholder image.png" alt="" />
    <div className="p-3  lg:text-center xl:text-left" id="header">
        <h1 className="text-3xl font-semibold">ABC</h1>
        <p className='text-xl font-medium'>Web Developer</p>

    <div className="flex flex-row flex-wrap lg:justify-center xl:justify-normal" id="socials">
        <ul className='flex flex-row flex-wrap gap-4' >
        <li><FontAwesomeIcon icon={faLinkedin} className='size-7 pt-2 pr-2 pb-2 hover:bg-sky-200 hover:rounded-2xl' style={{color: "black"}} /></li>
        <li>
          <a href="mailto:devanshc5@gmail.com">
          <FontAwesomeIcon icon={faEnvelope} className='hover:bg-sky-200 hover:rounded-2xl size-7 p-2' style={{color: "black"}} />
          </a>
          </li>

        <li><FontAwesomeIcon icon={faGithub} className='hover:bg-sky-200 hover:rounded-2xl size-7 p-2' style={{color: "black"}} /></li>
        </ul>
        
    </div>
    <div className=" hidden flex-row justify-evenly lg:justify-normal lg:flex xl:flex-wrap" id="Resume">
        <button className='bg-violet-500 justify-center  flex flex-row items-center gap-1  p-4 m-2 lg:ml-0 borderradius font-medium hover:bg-violet-400 transition ease-in rounded-lg shadow-lg shadow-violet-500/50  md:p-6 md:w-52 '><p className='text-xl text-white'> Resume&nbsp;</p> <FontAwesomeIcon style={{color:'white'}} icon={faDownload} className='size-5'></FontAwesomeIcon>   </button>


        <button className='bg-transparent outline-dashed  justify-center flex flex-row items-center gap-1  p-4 m-2 borderradius font-medium hover:bg-slate-300  transition ease-in rounded-lg shadow-lg shadow-slate-500/50  md:p-6 md:w-52 lg:ml-0'><p className='text-xl text-black'> Projects&nbsp;</p> <FontAwesomeIcon style={{color:'black'}} icon={faDownload} className='size-6'></FontAwesomeIcon>   </button>
    </div>    
       
    </div>
    
    </div>
    

    <div className="flex flex-row justify-evenly lg:justify-normal lg:hidden  " id="Resume">
        <button className='bg-violet-500 justify-center  flex flex-row items-center gap-1  p-4 m-2 borderradius font-medium hover:bg-violet-400 transition ease-in rounded-lg shadow-lg shadow-violet-500/50  md:p-6 md:w-52 '><p className='text-xl text-white'> Resume&nbsp;</p> <FontAwesomeIcon style={{color:'white'}} icon={faDownload} className='size-5'></FontAwesomeIcon>   </button>


        <button className='bg-transparent outline-dashed  justify-center flex flex-row items-center gap-1  p-4 m-2 borderradius font-medium hover:bg-slate-200  transition ease-in rounded-lg shadow-lg shadow-slate-500/50  md:p-6 md:w-52'><p className='text-xl text-black'> Projects&nbsp;</p> <FontAwesomeIcon style={{color:'black'}} icon={faDownload} className='size-6'></FontAwesomeIcon>   </button>
    </div>    
    

    <div id="about" >

      <h1 className='text-transparent bg-clip-text bg-gradient-to-r to-slate-700 from-slate-500 text-3xl w-fit font-extrabold border-b-4 ml-4 border-slate-700 md:mt-4 md:text-4xl'>ABOUT</h1>

        <p className='m-4  font-medium text-lg tracking-tighter text-justify  ' >Hello! I'm an enthusiastic code and web developer with a passion for creating dynamic, user-friendly websites and applications. My journey in the world of coding began with a curiosity for how things work behind the scenes, and it has since evolved into a full-fledged career that I love.
          Birthday:
1 May 1995
Website:
www.example.com
Phone:
+123 456 7890
City:
New York, USA
Age:
30
Degree:
Master
Email:
email@example.com
Freelance:
Available 
        </p>

        <h1 className='text-transparent bg-clip-text bg-gradient-to-r to-slate-700 from-slate-500 text-3xl w-fit font-extrabold border-b-4 ml-4 border-slate-700 md:text-4xl'>WHY HIRE ME</h1>
        <p className='m-4  font-medium text-lg tracking-tighter text-justify  ' >I am currently looking for new job opportunities where I can leverage my skills and passion for web development. I am eager to join a dynamic team and contribute to exciting projects. If you are looking for a dedicated and innovative web developer, I would love to connect and discuss how I can be a valuable addition to your team.</p>
    </div>
 
</div>
    </>
    
  )
}
