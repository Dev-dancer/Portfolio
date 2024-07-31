import React from 'react'

export const ProjectReuse = (props) => {
  return (
    <> 
    {/* filter sepia transition-all duration-300  hover:sepia-0 */}
   <div className='m-4 flex flex-col items-center border-slate-300 border-2 rounded-lg text-white bg-gradient-to-b from-emerald-500 to-emerald-700 p-2 md:col-span-2 lg:col-span-1'>
          <h1 className='text-3xl w-fit font-thin border-b-2 mb-4 border-white'>{props.title}</h1>
          <div>
            <img className='w-full rounded-xl' src="/Project1Pic1.png" alt="" />
          </div>
            <div className='m-4'>
                
            <h3 className='inline font-semibold text-xl'>DESCRIPTION - </h3>
          <p className=' inline  font-thin text-xl  '>{props.desc} </p>
          <br />
          <h3 className='inline font-semibold text-xl'>ROLE - </h3>
          <p className=' inline  font-thin text-xl   '>{props.role}</p>
          <br />
          <h3 className='inline font-semibold text-xl'>TECH STACK - </h3>
          <p className=' inline  font-thin text-xl   '> {props.TechStack}</p>
          <br />
        <h3 className='inline font-semibold text-xl'>LINK - </h3>
        <p className=' inline  font-thin text-xl   '>{props.link}</p>
        
            </div>
        </div>
    </>
  )
}
