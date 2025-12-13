import { ArrowDown } from 'lucide-react'
import React from 'react'

const HeroSection = () => {
  return (
    <section id="hero" className='relative min-h-screen flex flex-col items-center justify-center px-4 bg-cover bg-center bg-[url("/344277.jpg")]'>

        <div className='container max-w-4xl mx-auto text-center z-31'>
            <div className='space-y-6'>
                <h1 className='text-4xl md:text-6xl font-bold tracking-tight text-primary'>
                    <span className='opacity-0 animate-fade-in'>Hi, I'm </span>
                    <span className='opacity-0 animate-fade-in-delay-1'>Taiwo </span>
                    <span className='ml-2 opacity-0 animate-fade-in-delay-2'>Abiola-Ajayi</span>
                </h1>
                <p className='text-lg md:text-xl text-secondary-muted max-2-2xl mx-auto opacity-0 animate-fade-in-delay-4'>
                    I build digital experiences with depth and intention.
                    Specializing in front-end development, I create interfaces that feel effortless, immersive, and precise.
                </p>
                <div className=' pt-4 opacity-0 animate-fade-in-delay-4'>
                    <a href="#projects" className='cosmic-button'>
                        View My Works
                    </a>
                </div>
            </div>

        </div>
        
        <div className='absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce'>
        <span className='text-sm mb-2'>Scroll</span>
        <ArrowDown className='h-5 w-5 text-primary'/>

        </div>
    </section>
  )
}

export default HeroSection