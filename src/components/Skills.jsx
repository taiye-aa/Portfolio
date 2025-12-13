import React from 'react'
import {cn} from '@/lib/utils'
import {useState} from 'react'


const skills=[
  {name: "HTML/CSS", category: "Frontend"},
  {name: "React", category: "Frontend"},
  {name: "Javascript", category: "Frontend"},
  {name: "TypeScript", category: "Frontend"},
  {name: "Next.js", category: "Frontend"},
  {name: "SASS", category: "Frontend"},
  {name: "Node.js", category: "Backend"},

  {name: "Selenium", category: "QA"},
  {name: "Katalon Studio", category: "QA"},
  {name: "Postman", category: "QA"},
]
const categories=["All","Frontend","Backend","QA"]
const Skills = () => {
  const [activeCategory, setActiveCategory]=useState("All")

  const filteredSkills= skills.filter((skill)=> activeCategory==="All" || skill.category===activeCategory)
  return (
    <section id="skills" className='py-24 px-4 relative  bg-primary/5'>
      <div className='container mx-auto ma-w-5xl'>
        <h2 className='text-3xl md:text-4xl font-bold mb-12 text-center'>My Skills</h2>

        <div className='flex flex-wrap justify-center gap-4 mb-12'>
          {categories.map((category,key)=>(
            <button key={key}
            onClick={()=>setActiveCategory(category)}
            className={cn(
              'px-5 py-2 rounded-full transition-all duration-300',
              activeCategory===category ? 'bg-secondary text-white' : 'bg-white/10 hover:bg-secondary/70')}>
              {category}</button>
          ))}
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
          {filteredSkills.map((skill,key)=>(
            <div key={key} className=' p-6 skill-card-hover bg-white/5 backdrop-blur-xs rounded-xl shadow-xs'>

                <div className=' mb-4 text-primary'>
                  <h3 className='font-semibold text-lg'>{skill.name}</h3>
                </div>

            </div>
          )
            
          )}
        </div>
      </div>
    </section>
  )
}

export default Skills