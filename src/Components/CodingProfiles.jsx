import React from 'react'

export const CodingProfiles = (props) => {
  return (
    <>

    <a  className='w-56 h-40 flex flex-col items-center rounded-xl text-black  ml-0   m-2  '  href={props.link} target='_blank'>
  <img className='rounded-xl min-w-full min-h-full hover:scale-105 border-black border-2 transition-all duration-500 ' src={props.image} alt="" />
    </a>
    
    
    </>
  )
}
