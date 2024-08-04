import React,{useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars,faXmark } from "@fortawesome/free-solid-svg-icons";
import { Dropdown } from './Dropdown';

export const Navbar = () => {
    const [isActive,setisactive]=useState(true);
  const [openmenu,setopenmenu]=useState(false);
  return (
    <>
        <button   className='md:hidden w-12 h-12  bg-black m-2 flex flex-row justify-center items-center fixed bottom-0 '>
           
            <div >
              
              {isActive ? <FontAwesomeIcon icon={faBars} onClick={() => {setopenmenu((e) => !e),setisactive(!isActive)}}  className='size-10' style={{color: "white"}} /> : <FontAwesomeIcon onClick={() => {setopenmenu((e) => !e),setisactive(!isActive)}} icon={faXmark} style={{color: "white"}} className=' size-10 absolute left-1 bottom-1' /> }
             

            </div>
           

        
        </button>
{
          openmenu && <Dropdown/>
}
       
        </>
  )
}
