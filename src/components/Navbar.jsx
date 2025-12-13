import React from 'react'
import {cn} from "@/lib/utils"
import { useState, useEffect} from 'react'
import {Menu, XIcon} from 'lucide-react'
// import {getLenis} from "@/components/SmoothScroll"

const navItems =[
    {name: "Home", href: "#hero"},
    {name: "About", href: "#about"},
    {name: "Skills", href: "#skills"},
    {name: "Projects", href: "#projects"},
    {name: "Contact", href: "#contact"},
]
const Navbar = () => {
    const[isScrolled, setisScrolled]= useState(false)
    const[isMenuOpen, setIsMenuOpen]= useState(false)
    // const[scrolled, setScrolled]= useState(false)

    useEffect(()=>{
        const handleScroll =()=>{
            setisScrolled(window.screenY >10)
            
        }
        window.addEventListener("scroll", handleScroll);


    return()=>window.removeEventListener("scroll", handleScroll)
            
    }, [])
//   useEffect(() => {
//     const lenis = getLenis();
//     if (!lenis) return;

//     if (isMenuOpen) {
//       lenis.stop();
//     } else {
//       lenis.start();
//     }
//   }, [isMenuOpen]);
  return (
    <nav className={cn("fixed w-full z-40 transition-all duration-300 py-5 h-20", 
          isScrolled? " bg-white/10 backdrop-blur-sm px-5 "
            : " bg-transparent"
        
    )}>
        <div className={cn("container flex justify-between space-x-10"
            
        )}>
                <a className='text-xl font-bold text-primary flex items-center'  href="#hero">
                    <span className='relative z-10'>
                        <span className=''>
                            Taiye
                        </span> Portfolio
                    </span>
                </a>
                <div className={cn('hidden md:flex space-x-8')}>
                    {navItems.map((item, index)=>(
                        <a key={index} href={item.href} className='text-primary font-normal hover:text-glow  transition-all duration-300'>
                            {item.name}</a>
                    ))}
                </div>
                            {/* Mobile Nav */}
                    <button onClick={()=>{setIsMenuOpen(prev => !prev)}} 
                    className='md:hidden p-2 text-primary z-100'
                    aria-label={isMenuOpen? "Close menu": "Open menu"}
                    >{isMenuOpen? <XIcon size={24}/>: <Menu size={24} /> }</button>
                <div className={cn("fixed inset-0 backdrop-blur-md z-40 flex flex-col items-center justify-center",
                    "transition-all duration-300 md:hidden",
                    isMenuOpen? "opacity-100 pointer-events-auto":"opacity-0 pointer-events-none"
                )}>
                    <div className={cn('flex flex-col  text-xl space-y-8')}>
                    {navItems.map((item, index)=>(
                        <a key={index} href={item.href} className='text-primary font-normal hover:text-glow hover:text-secondary transition-all duration-300'
                        onClick={()=> setIsMenuOpen(false)}>
                            {item.name}</a>
                    ))}
                </div>
                </div>
        </div>
    </nav>
  )
}

export default Navbar