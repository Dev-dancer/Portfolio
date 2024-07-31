import React from 'react'
import { ProjectReuse } from './ProjectReuse'

export const Projects = () => {
  return (
    <>
     <h1 id='projects' className='text-transparent bg-clip-text bg-gradient-to-r to-slate-700 from-slate-500 text-3xl w-fit font-extrabold border-b-4 ml-4 border-slate-700 md:text-4xl'>PROJECTS</h1>
      
      <h2 className='text-xl w-fit font-extrabold m-4'>FRONTEND</h2>
    <div className='grid md:grid-cols-2 lg:grid-cols-3' id="Frontend">

        <ProjectReuse desc="sdgfsdfsdgsd" role="sdgsvsdv" TechStack="sadfsda" link="sdgdfgdfg" title="TOURISM GUIDE"/>
        <ProjectReuse desc="sdgfsdfsdgsd" role="sdgsvsdv" TechStack="sadfsda" link="sdgdfgdfg" title="TOURISM GUIDE"/>

    </div>
      <h2 className='text-xl w-fit font-extrabold m-4 '>FULLSTACK</h2>
    <div id="Fullstack"  className='grid md:grid-cols-2 lg:grid-cols-3'>
        <ProjectReuse/>
        
    </div>
    </>
  )
}
