import { faInfo,faHome,faDownload,faEnvelope  } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin,faGithub  } from '@fortawesome/free-brands-svg-icons'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
export const Contact = (  ) => {
  return (
  <>
    <footer id='contact' className='bg-black h-96 mt-6'>

    <h1 className='text-white p-4 text-3xl font-medium '>LETS CONNECT!</h1>
    <p className='pl-4 pr-4 text-white font-normal text-lg tracking-tighter text-justify'>I'm always excited to connect with fellow developers, potential employers. Feel free to reach out if you'd like to hire me or collaborate.</p>
    <br />
    <div id="info"  className='text-white'>

    <p className='pl-4 pr-4 text-white font-normal text-lg tracking-tighter text-justify  '>Contact number- 123</p>
    <p className='pl-4 pr-4 text-white font-normal text-lg tracking-tighter text-justify flex flex-row items-center'>Email- abc <a href="mailto:devanshc5@gmail.com">
          <FontAwesomeIcon icon={faEnvelope} className='ml-2 hover:bg-slate-400 hover:rounded-2xl size-7 p-2' style={{color: "white"}} />
          </a>
          </p>

    </div>

    <div className="flex flex-row flex-wrap" id="socials">
        <ul className='flex flex-row flex-wrap gap-4' >
        <li><FontAwesomeIcon icon={faLinkedin} className='size-7 p-2 ml-2 hover:bg-slate-400 hover:rounded-2xl' style={{color: "white"}} /></li>
        <li>
          <a href="mailto:devanshc5@gmail.com">
          <FontAwesomeIcon icon={faEnvelope} className='hover:bg-slate-400 hover:rounded-2xl size-7 p-2' style={{color: "white"}} />
          </a>
          </li>

        <li><FontAwesomeIcon icon={faGithub} className='hover:bg-slate-400 hover:rounded-2xl size-7 p-2' style={{color: "white"}} /></li>
        </ul>
    </div>

    </footer>
 

  {/* <form >
    event.
  Subject: <br />
  <input className='border-2   border-black' type="text" /> <br />
  Email: <br />
  <input className='border-2   border-black' type="email" placeholder='Your email' />
  Message: <br />
  <textarea className='border-2  border-black' name="" rows={"5"} cols={"30"} placeholder='Your message' id=""></textarea> <br />
  <button className='p-4 bg-blue-500' type='submit'>Submit</button>
  </form>

     */}

  </>

    


  )
}

