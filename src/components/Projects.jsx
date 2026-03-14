import { ArrowRight, ExternalLink, Github, GithubIcon } from 'lucide-react'
import React from 'react'

const projects = [
    {
        id:5,
        title:"Gym Master (In Progress)",
        description:"A data-driven web application designed to architect custom gym routines based on individual user profiles. It features dynamic filtering for physical constraints and equipment availability, a robust state management system for user preferences, and a high-performance, accessible UI designed for seamless use in a gym environment.",
        image:"./development.png",
        tags:["React","Tailwind CSS","Typescript", "React Router v7", "Tanstack/React Query", "Neon Auth"],
        projectUrl:"",
        githubUrl:"https://github.com/taiye-aa/gym-planner"
    },
    {
        id:4,
        title:"Midnight Garden",
        description:"A responsive website showcasing the fictional book 'Midnight Garden'. Built with React, Tailwind CSS, and Typescript, it features book details, author bio, reader reviews, and a newsletter subscription form with a modern, elegant design.",
        image:"./midnight.png",
        tags:["React","Tailwind CSS","Typescript", "Javascript"],
        projectUrl:"https://taiye-aa.github.io/Midnight-Garden/",
        githubUrl:"https://github.com/taiye-aa/Midnight-Garden"
    },
    {
        id:1,
        title:"SL Real Estate Website",
        description:"A real estate website built using React for the frontend and Tailwind. It features property listings, and a contact form.",
        image:"./SL.png",
        tags:["React","Tailwind","web3 Forms"],
        projectUrl:"https://taiye-aa.github.io/SL-Real-Estate-Website",
        githubUrl:"https://github.com/taiye-aa/SL-Real-Estate-Website"
    },{
        id:2,
        title:"GetAway Vacation Website",
        description:"A responsive website for a vacation rental service built using HTML, Css and Javascript. It includes property listings, booking functionality, and user reviews.",
        image:"./getaway.png",
        tags:["HTML","CSS","Javascript"],
        projectUrl:"https://taiye-aa.github.io/Responsive-Vacation-Travel-site-template",
        githubUrl:"https://github.com/taiye-aa/Responsive-Vacation-Travel-site-template"
    },
    {
        id:3,
        title:"Tasty Greens Website",
        description:" A responsive website for a healthy food restaurant built using HTML, CSS, and Javascript. It features a menu, about us section, and contact form.",
        image:"./tasty.png",
        tags:["HTML","CSS","Javascript"],
        projectUrl:"https://taiye-aa.github.io/Responsive-Restaurant-Website-Design-for-Tasty",
        githubUrl:"https://github.com/taiye-aa/Responsive-Restaurant-Website-Design-for-Tasty"
    }
    
]

const Projects = () => {
  return (
    <section id='projects' className='py-24 px-4 relative '>
        <div className='container mx-auto max-w-5xl'>
            <h2 className='text-3xl md:text-4xl font-bold mb-4 text-center'>Projects</h2>
            <p className='text-center text-muted-primary mb-12 max-w-2xl mx-auto'>These are some of my recent Projects</p>
            <p className='text-center text-muted-primary mb-12 max-w-2xl mx-auto'>I have more projects being worked on so keep watch!</p>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                {projects.map((project)=>(
                    <div key={project.id} className="group bg-card border rounded-lg overflow-hidden shadow-xs card-hover hover:border-primary">
                        <div className='h-48 overflow-hidden'>
                            <img 
                            src={project.image}  
                            alt={project.title} 
                            className='w-full h-full object-cover transition-all duration-500 group-hover:scale-110'
                            />
                        </div>
                        <div className='p-6'>
                            <div className='flex flex-wrap gap-2 mb-4 '>
                                {project.tags.map((tag)=>(
                                    <span className='text-sm bg-secondary/60 backdrop-blur-md text-primary-muted px-3 py-1 rounded-full '>{tag}</span>
                                ))}
                            </div>
                            <h3 className='text-xl font-semibold mb-1'>{project.title}</h3>
                            <p className='text-primary-muted text-sm mb-4'>{project.description}</p>
                            <div className='flex justify-between items-end'>
                                <div className='flex space-x-3 '>
                                    <a href={project.projectUrl ? project.projectUrl : '#'} target={project.projectUrl?"_blank": ''} className='text-primary hover:text-secondary transition-all duration-300'>
                                        <ExternalLink size={20}/>
                                    </a>
                                    <a href={project.githubUrl ? project.githubUrl : '#'} target="_blank" className='text-primary hover:text-secondary transition-all duration-300' >
                                        <GithubIcon size={20}/>
                                    </a>
                                </div>
                            </div>

                        </div>
                    </div>
                ))}

            </div>
            <div className='text-center mt-12'>
                <a href="https://github.com/taiye-aa" target="_blank"className='cosmic-button w-fit flex items-center mx-auto gap-2'>
                    Check Out My GitHub <ArrowRight size={16}/>
                    </a>

            </div>
        </div>


    </section>
  )
}

export default Projects