import { useState } from 'react'
import './App.css'
import { Navbar } from './Components/Navbar'
import { Profile } from './Components/Profile'
import { Skills } from './Components/Skills'
import { Projects } from './Components/Projects'
import { Contact } from './Components/Contact'
import Landing from './Components/Landing'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
 
    <Landing/>
      <Profile/>
      <Skills/>
      <Projects/>
      <Contact/>
      <Navbar/>

    </>
  )
}

export default App
