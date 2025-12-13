import React from 'react'
import Navbar from '@/components/Navbar'
import HeroSection from '@/components/HeroSection'
import About from '@/components/About'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Contact from '../components/Contact'

const Home = () => {
  return (
    <div className='min-h-screen text-foreground overflow-x-hidden'>
  
        {/*Background effects */}
        
        {/*Navbar */}
        <Navbar/>
        
        {/*Main content */}
        <main> 
          <HeroSection/>
          <About/>
          <Skills/>
          <Projects/>
          <Contact/>
        </main>
        
        {/*Footer */}
    </div>
  )
}

export default Home