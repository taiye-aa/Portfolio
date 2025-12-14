import { Github, Linkedin, MailIcon, MapIcon, Phone, Send } from 'lucide-react'
import React from 'react'
import{cn} from "@/lib/utils"

const Contact = () => {
    const handleSubmit = (e)=>{
        e.prevenetDefault()
        setTimeout(()=>{
             
        }, 1500)
    }
  return (
    <section id="contact" className='py-24 px-4 relative'>
        <div className='container mx-auto max-w-5xl'>
            <h2 className='text-3xl md:text-4xl font-bold mb-4 text-center'>
                Get In Touch</h2>

            <p className='text-center text-primary-muted mb-12 max-2-2xl mx-auto'>
                Have a project in mind or want to collaborate? Feel free to reach out.
                I'm always open to discussing new opportunities.
            </p>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
                <div className='space-y-8 '>
                    <h3 className='text-2xl font-semibold mb-6'>Contact Information</h3>
                    <div className='space-y-6 justify-center'>
                        <div className='flex items-start space-x-4'>
                            <div className='p-3 rounded-full bg-primary/10'>
                                <MailIcon className='h-6 w-6'/>
                            </div>
                            <div>
                                <h4 className='font-medium'>Email</h4>
                                <a href="mailto:taiwoaa04@gmail.com" className='hover:text-green-300 transition-all duration-300'>taiwoaa04@gmail.com</a>
                            </div>
                        </div>
                    </div>
                    <div className='space-y-6 justify-center'>
                        <div className='flex items-start space-x-4'>
                            <div className='p-3 rounded-full bg-primary/10'>
                                <Phone className='h-6 w-6'/>
                            </div>
                            <div>
                                <h4 className='font-medium'>Phone</h4>
                                <a href="tel:08112246154" className='hover:text-green-300 transition-all duration-300'>+234 (0) 8112246154</a>
                            </div>
                        </div>
                    </div>
                    <div className='space-y-6 justify-center'>
                        <div className='flex items-start space-x-4'>
                            <div className='p-3 rounded-full bg-primary/10'>
                                <MapIcon className='h-6 w-6'/>
                            </div>
                            <div>
                                <h4 className='font-medium'>Location</h4>
                                <a href="#" className='hover:text-green-300 transition-all duration-300'>Abuja, Nigeria</a>
                            </div>
                        </div>
                    </div>
                    <div className='pt-8'>
                        <h4 className='font-medium mb-4'>Connect with me</h4>
                        <div className='flex space-x-5 justify-center'>
                            <a href="https://www.linkedin.com/in/taiwo-abiola-ajayi/" className='hover:bg-secondary p-2 rounded-lg transition-all duration-300'><Linkedin/></a>
                            <a href="https://github.com/taiye-aa" className='hover:bg-secondary p-2 rounded-lg transition-all duration-300'><Github/></a>
                        </div>
                    </div>
                </div>
                <div className='bg-card p-8 rounded-lg shadow-xs'>
                    <h3 className='text-2xl font-semibold mb-6'>Send a Message</h3>
                    <form action="" className='space-y-6'>
                        <div>
                            <label htmlFor="name" className='block text-sm font-medium mb-2'>Your Name</label>
                            <input type="text" name="name" id="name"  required className='w-full px-4 py-3 rounded-md border border-input bg-secondary focus:outline-hidden focus:ring-2 focus:ring-primary' 
                            placeholder='Enter Your Name'/>
                        </div>
                        <div>
                            <label htmlFor="email" className='block text-sm font-medium mb-2'>Your Email</label>
                            <input type="Email" name="email" id="email"  required className='w-full px-4 py-3 rounded-md border border-input bg-secondary focus:outline-hidden focus:ring-2 focus:ring-primary' 
                            placeholder='your@email.com'/>
                        </div>
                        <div>
                            <label htmlFor="name" className='block text-sm font-medium mb-2'>Your Name</label>
                            <textarea  name="message" id="message"  required className='w-full px-4 py-3 rounded-md border border-input bg-secondary resize-none focus:outline-hidden focus:ring-2 focus:ring-primary' 
                            placeholder="Hi I'm..."/>
                        </div>
                        <button type='submit' className={cn(" cursor-pointer cosmic-button w-full flex items-center justify-center gap-2",

                        )}>
                            Send Message
                            <Send size={16}/>
                        </button>
                        
                    </form>
                </div>
            </div>

        </div>
        </section>
  )
}

export default Contact