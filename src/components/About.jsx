import { Code, PenBoxIcon, User } from 'lucide-react'
import React from 'react'

const About = () => {
  return (
    <section id='about' className='py-24 px-4 relative z-31'>

        <div className='container mx-auto max-w-5xl'>
            <h2 className='text-3xl md:text-4xl font-bold mb-12 text-center'>
                About Me
            </h2>

            <div className='space-y-6'>
                <h3 className='text-2xl font-semibold'>Passionate Web Developer & Quality Assurance Engineer</h3>
                <p className='text-primary'>
                    With over 2 years of experience in web development, I specialize in creating seamless digital experiences. 
                    My expertise lies in front-end development, where I bring designs to life with precision and creativity. 
                    I am proficient in modern frameworks enabling me to build responsive and user-friendly interfaces.
                </p>
                <p className='text-primary'>
                    In addition to development, I have a strong background in quality assurance, ensuring that every product I work on meets the highest standards of performance and reliability.
                </p>
                <div className='flex flex-col sm:flex-row gap-4 pt-4 justify-center'>
                    <a href="#contact" className='cosmic-button'>Get in touch</a>
                    <a href="../src/assets/CV/ABIOLA AJAYI TAIWO CV.pdf" className='px-6 py-2 rounded-full border border-primary text-primary hover:bg-secondary transition-all duration-300'>Download my Cv</a>
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4 items-center mt-4'>
                <div className='gradient-border p-6 card-hover bg-primary/5 backdrop-blur-xs'>
                    <div className='flex items-start gap-4 md:h-30'>
                        <div className='p-3 rounded-full bg-primary/10'>
                            <Code className='h-6 w-6 text-primary'/>
                        </div>
                        <div className='text-left'>
                            <h4 className='font-semibold text-lg'>Web Development</h4>
                            <p className='text-sm text-primary-muted'> 
                                Building responsive and engaging web applications using modern frameworks and technologies.
                            </p>
                        </div>
                        <div>
                        </div>

                    </div>
                    
                    
                </div>
                <div className='gradient-border p-6 card-hover bg-primary/5 backdrop-blur-xs'>
                    <div className='flex items-start gap-4 md:h-30'>
                        <div className='p-3 rounded-full bg-primary/10'>
                            <PenBoxIcon className='h-6 w-6 text-primary'/>
                        </div>
                        <div className='text-left'>
                            <h4 className='font-semibold text-lg'>Qualiy Assurance</h4>
                            <p className='text-sm text-primary-muted'> 
                                Ensuring software quality through meticulous testing and validation processes.
                            </p>
                        </div>
                        <div>
                        </div>
                    </div>
                </div>
                <div className='gradient-border p-6 card-hover bg-primary/5 backdrop-blur-xs'>
                    <div className='flex items-start gap-4 md:h-30'>
                        <div className='p-3 rounded-full bg-primary/10'>
                            <User className='h-6 w-6 text-primary'/>
                        </div>
                        <div className='text-left'>
                            <h4 className='font-semibold text-lg'>UI/UX Design</h4>
                            <p className='text-sm text-primary-muted'>
                                Crafting intuitive and visually appealing user interfaces that enhance user experience.

                            </p>
                        </div>
                        <div>
                        </div>
                    </div>
                </div>
                

            </div>
        </div>
        
    </section>
  )
}

export default About