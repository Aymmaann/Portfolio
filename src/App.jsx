import { useState } from 'react'
import './App.css'
import Project from './components/Project/Project'
import Phone from './components/Phone/Phone'
import ProjectInverse from './components/Project/ProjectInverse'
import Sidebar from './components/Sidebar/Sidebar'
import Home from './components/Home/Home'
import Contact from './components/Contact/Contact'
import About from './components/About/About'

const App = () => {

  return (
    <>
      <Sidebar />

      <Home />
      <About />
      <Phone />

      <h1 className='project-heading text-purple uppercase text-[28px] sl:text-[37px] font-bold text-center pt-10 l:pt-14 xxl:text-[55px] xl:text-[45px]' id="Projects">Projects</h1>
      <section className="projects-section">
        <Project number={1}/>
        <ProjectInverse number={2}/>
        <Project number={3}/>
        <ProjectInverse number={4}/>
        <Project number={5}/>
      </section>

      <Contact />
    </>
  )
}

export default App
