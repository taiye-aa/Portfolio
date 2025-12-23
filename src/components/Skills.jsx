


  const frontendSkills = [
    "React",
    "HTML",
    "TypeScript",
    "TailwindCSS",
    "CSS",
    "JavaScript",
    "SASS",
  ];

  const QASKills = ["Selenium", "PostMan", "Selenium Webdriver", "Katalon Studio"];
  
const Skills = () => {

  return (
    <section id="skills" className='py-24 px-4 relative  bg-primary/5'>
      <div className='container mx-auto max-w-3xl'>
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Skills & Experience
          </h2>
        <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-secondary text-white py-1 px-3 rounded-full text-sm hover:bg-primary/20 
                                    transition-all duration-300 ease-in cursor-pointer
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> QA</h3>
                <div className="flex flex-wrap gap-2">
                  {QASKills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-secondary text-white py-1 px-3 rounded-full text-sm hover:bg-primary/20 
                                    transition-all duration-300 ease-in cursor-pointer
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all md:h-72">
              <h3 className="text-xl font-bold mb-4"> 🏫 Education </h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  <strong> B.S. in Computer Science </strong> - Veritas University
                  (2020-2024)
                </li>
                <li>
                  Relevant Coursework: Data Structures, Web Development, Cloud
                  Computing, Object Oriented Programming, Software Testing.
                </li>
              </ul>
            </div>
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> 💼 Work Experience </h3>
              <div className="space-y-4 text-gray-300">
                <ul className="list-disc list-inside text-gray-300 space-y-8">
                  <li><strong>QA Engineer at Hasob Integrated Services</strong>
                    <p className="text-xs sm:text-sm">
                    Conducted manual and automated testing across 15+ web and mobile applications, ensuring high-quality 
                  releases and improved user experience. 
                  </p>
                  </li>

                <li><strong>National Human Rights Commission</strong>
                  <p className="text-xs sm:text-sm">
                    Developed and maintained responsive web interfaces using React.js. 
                  </p>
                </li>
                <li><strong>AGES' N STAGES</strong>
                  <p className="text-xs sm:text-sm">
                  Translated UI/UX designs, wireframes, and product requirements into fully functional, pixel-accurate web 
                  pages. 
                  </p>
                </li>
                </ul>
              </div>
            </div>
          </div>
      </div>
    </section>
  )
}

export default Skills