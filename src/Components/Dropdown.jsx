import React,{useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfo,faHome } from "@fortawesome/free-solid-svg-icons";
export const Dropdown = () => {
  return (
    <>
    <div id="largeclasses" className=''>

    <ul className='p-4 text-lg text-white fixed flex flex-row items-center gap-4 bg-black bottom-2 left-12 h-12  ' >
        {/* <li><FontAwesomeIcon icon={faInfo} className=' size-7 ' style={{color: "white"}} /></li>
        <li><FontAwesomeIcon icon={faHome} className='size-7 ' style={{color: "white"}} /></li>
        <li><FontAwesomeIcon icon={faHome} className='size-7 pr-4 ' style={{color: "white"}} /></li> */}
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
    </ul>
        
    </div>
    </>
  )
}
