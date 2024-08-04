import React from 'react'
import  {motion} from 'framer-motion'
export const ProjectReuse = (props) => {
  return (
    <> 
    {/* filter sepia transition-all duration-300  hover:sepia-0 */}
     <motion.div id='skills'
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{duration: 0.5, delay:0.25}}>

   <div className='m-4 md:m-8 md:mt-0 lg:m-4 mt-0 flex flex-col   md:col-span-2 lg:col-span-1 bg-gradient-to-t from-violet-100 text-black border-black border-2 hover:scale-105 transition-all duration-500 '>
          <div>
            <img className='w-full p-2' src={props.imglink} alt="" />
          </div>
            <div className='m-8 mt-0'>
          <h1 className='text-2xl p-2 pl-0 pb-0  font-thin '>{props.title}</h1>
                
          
          <p className=' inline  font-thin text-md   '>{props.desc} </p>

          <br />
          <br />
          <h3 className='inline font-normal text-lg'>ROLE - </h3>
          <p className=' inline  font-thin text-md   '>{props.role}</p>
          <br />
          <h3 className='inline font-normal text-lg'>TECH STACK - </h3>
          <p className=' inline  font-thin text-md  '> {props.TechStack}</p>
          <br />
        <h3 className='inline font-normal text-lg'>LINK - </h3>
        <a href={props.link} target="_blank" className='text-sky-500 hover:underline'>{props.link}</a>
        
            </div>
        </div>
        </motion.div>
    </>
  )
}
