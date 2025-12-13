import { ArrowRight, ExternalLink, Github, GithubIcon } from 'lucide-react'
import React from 'react'

const projects = [
    {
        id:1,
        title:"SL Real Estate Website",
        description:"A real estate website built using React for the frontend and Tailwind. It features property listings, and a contact form.",
        image:"projects/SL.png",
        tags:["React","Tailwind","web3 Forms"],
        projectUrl:"https://taiye-aa.github.io/SL-Real-Estate-Website",
        githubUrl:""
    },{
        id:2,
        title:"GetAway Vacation Website",
        description:"A responsive website for a vacation rental service built using HTML, Css and Javascript. It includes property listings, booking functionality, and user reviews.",
        image:"projects/getaway.png",
        tags:["HTML","CSS","Javascript"],
        projectUrl:"https://taiye-aa.github.io/Responsive-Vacation-Travel-site-template",
        githubUrl:""
    },
    {
        id:3,
        title:"Tasty Greens Website",
        description:" A responsive website for a healthy food restaurant built using HTML, CSS, and Javascript. It features a menu, about us section, and contact form.",
        image:"projects/tasty.png",
        tags:["HTML","CSS","Javascript"],
        projectUrl:"https://taiye-aa.github.io/Responsive-Restaurant-Website-Design-for-Tasty",
        githubUrl:""
    }
]
const Projects = () => {
  return (
    <section id='projects' className='py-24 px-4 relative '>
        <div className='container mx-auto max-w-5xl'>
            <h2 className='text-3xl md:text-4xl font-bold mb-4 text-center'>Projects</h2>
            <p className='text-center text-muted-primary mb-12 max-2-2xl mx-auto'>These are some of the Projects I have done</p>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {projects.map((project)=>(
                    <div key={project.id} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">
                        <div className='h-48 overflow-hidded'>
                            <img 
                            src={project.image}  
                            alt={project.title} 
                            className='w-full h-full object-cover transition-all duration-500 group-hover:scale-110'
                            />
                        </div>
                        <div className='p-6'>
                            <div className='flex flex-wrap gap-2 mb-4 '>
                                {project.tags.map((tag)=>(
                                    <span className='text-sm bg-secondary/5 text-primary-muted px-3 py-1 rounded-full backdrop-blur-xs'>{tag}</span>
                                ))}
                            </div>
                            <h3 className='text-xl font-semibold mb-1'>{project.title}</h3>
                            <p className='text-primary-muted text-sm mb-4'>{project.description}</p>
                            <div className='flex justify-between items-center'>
                                <div className='flex space-x-3'>
                                    <a href={project.projectUrl} target="_blank" className='text-primary hover:text-secondary transition-all duration-300'>
                                        <ExternalLink size={20}/>
                                    </a>
                                    <a href={project.githubUrl} target="_blank" className='text-primary hover:text-secondary transition-all duration-300'>
                                        <GithubIcon size={20}/>
                                    </a>
                                </div>
                            </div>

                        </div>
                    </div>
                ))}

            </div>
            <div className='text-center mt-12'>
                <a href="" target="_blank"className='cosmic-button w-fit flex items-center mx-auto gap-2'>
                    Check My GitHub <ArrowRight size={16}/>
                    </a>

            </div>
        </div>


    </section>
  )
}

export default Projects