import React from 'react'
import { ProjectReuse } from './ProjectReuse'
import { motion } from "framer-motion"

export const Projects = () => {
  return (
    <>
    

     <h1 id='projects' className=' text-3xl font-thin  md:text-4xl  pb-0 p-4'>PROJECTS</h1>
      <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
       viewport={{ once: true }}
      transition={{duration: 1, delay:0.25}}>

      <h2 className=' text-2xl w-fit font-normal border-b-2 m-4 mt-6 mb-4 border-white '>FRONTEND</h2>
    <div className='grid md:grid-cols-2 lg:grid-cols-3' id="Frontend">

        <ProjectReuse imglink="/Project1Pic1.png" desc="Explore various destinations in South East Asia through this tour guide and learn more about all the countries and their top destinations!" role="Frontend" TechStack="HTML | CSS | JAVASCIPT" link="https://admirable-sawine-1675cb.netlify.app/" title="TOUR GUIDE"/>
       

    </div>
    </motion.div>
{/* 
    <motion.div 
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{duration: 1, delay:0.25}}>
    <h2 className=' text-2xl w-fit font-normal border-b-2 mb-0 border-white m-4'>FULLSTACK</h2>
    <div id="Fullstack"  className='grid md:grid-cols-2 lg:grid-cols-3'>
        <ProjectReuse/>
    </div>
    </motion.div> */}
    </>
  )
}
