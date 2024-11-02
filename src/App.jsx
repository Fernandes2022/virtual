import React from 'react'
import logo from "./assets/logo.png"
import { useState } from 'react'
import {Menu, X} from "lucide-react"
import video1 from "./assets/video1.mp4"
import video2 from "./assets/video2.mp4"
import { features, workFlow, pricing, testimonials, resourceLinks, platformLinks, CommunityLinks } from './constants'
import code from "./assets/code.jpg"
import { CheckCircle2 } from 'lucide-react'

const App = () => {

  const [toggleOpen, createToggle] = useState(false);

  const navBar = () => {
    createToggle(!toggleOpen)
  }


  return (
    <>
   
      <nav className='sticky  border-b border-neutral-500 top-0 right-0 left-0 backdrop-blur-lg'>
        <div className="container relative mx-auto p-2">
          <div className="flex justify-between items-center ">
            <div className='flex justify-start items-center flex-shrink-0'>
              <img className='w-11 h-11' src={logo} alt="logo" />
              <a href="#home" className='text-xl tracking-tight '>Virtualr</a>
            </div>

            <div className="hidden lg:flex space-x-12">
              <a href="#features" className='font-semibold'>Features</a>
              <a href="#workflow" className='font-semibold'>Workflow</a>
              <a href="#pricing" className='font-semibold'>Pricing</a>
              <a href="#testimonials" className='font-semibold'>Testimonials</a>
            </div>

            <div className="hidden lg:flex justify-end space-x-6">
              <a href="#home" className='border rounded-md border-white inline-flex justify-center items-center w-20 h-10'>Sign in</a>
              <a href="#home" className='border rounded-md border-white inline-flex justify-center items-center w-40 h-10 bg-gradient-to-r from-orange-900 to-orange-500'>Create Account</a>
            </div>

            <div className="lg:hidden">
            <h1 onClick={navBar} className='cursor-pointer'>
              {toggleOpen ? <X /> : <Menu />}
            </h1>
          </div>
          </div>
          {toggleOpen && 
          <div className='max-w-4xl flex flex-col mt-4 relative justify-center items-center bg-neutral-900'>
            <div className="flex flex-col lg:hidden space-y-8 mt-10">
              <a href="#features" className='font-semibold'>Features</a>
              <a href="#workflow" className='font-semibold'>Workflow</a>
              <a href="#pricing" className='font-semibold'>Pricing</a>
              <a href="#testimonials" className='font-semibold'>Testimonials</a>
            </div>

            <div className="flex lg:hidden justify-end space-x-6 mt-8 mb-6">
              <a href="home" className='border rounded-md border-white inline-flex justify-center items-center w-20 h-6'>Sign in</a>
              <a href="home" className=' rounded-md  inline-flex justify-center items-center w-40 h-6 bg-gradient-to-r from-orange-900 to-orange-500'>Create Account</a>
            </div>
          </div>
          }
          
        </div>

      </nav>
   

    <section id='main' className='max-w-7xl mx-auto p-6'>

      <div id='home' className=' mt-12 mb-6 pt-16 flex flex-col justify-center items-center pl-8'>
        <h1 className="tracking-wide font-semibold text-4xl sm:text-6xl lg:text-7xl text-center">
        Virtual build tools <span className='bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text'> {" "} for developers</span>
        </h1>
        <p className='text-xl text-neutral-500 mt-10 text-center max-w-4xl'>
        Empower your creativity and bring your VR app to life with our intuitive development tools. Get started and turn your imagination into immersive reality
        </p>
        <div className='flex justfify-center mt-12 space-x-6'>
        <a href="home" className=' rounded-md  inline-flex justify-center items-center w-40 h-12 bg-gradient-to-r from-orange-900 to-orange-500'>Start for free</a>
        <a href="home" className='border rounded-md border-white inline-flex justify-center items-center w-40 h-12'>Documentation</a>
        </div>

        <div className="mt-20 flex justify-center">
          <video src={video1} loop muted autoPlay className=' w-1/2 mx-2 border rounded-lg border-orange-500'></video>
          
          <video src={video2} muted loop autoPlay className=' w-1/2 mx-2 border rounded-lg border-orange-500'></video>
          
        </div>

      </div>



      <div id='features' className="my-20 flex flex-col p-4  jusity-center items-center">
        <div>
          <h2 className='text-xl text-center rounded-full bg-neutral-900 text-orange-500 inline-flex justify-center items-center h-12 w-36'>FEATURES</h2>
        </div>

        <div className="mt-14">
        <h1 className=" font-semibold text-3xl sm:text-4xl lg:text-7xl text-center">
        Easily build <span className='bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text'>  your code</span>
        </h1>
        </div>

        <div className="flex flex-wrap mt-20 justify-center">
         
          {features.map((item, index) => (
            <div key={index} className='flex   w-full sm:w-1/2 lg:w-1/3 justify-center'>
            
              <div className='text-red-700'>{item.icon}</div>
              <div >
              <h2 className="text-xl font-semibold mx-4 mb-6 ">
                {item.title}
              </h2>
              <p className='mt-2 mb-20 p-4 text-sm text-neutral-500 '>{item.description}</p>
              </div>
          
            </div>
          ))}
          
        </div>
      </div>

      <hr className='border-neutral-500 ' />

      <div className='min-h-screen'  id="workflow">
      <div className="my-16 flex flex-col justify-center items-center">
        <div>
        <h1 className="tracking-wide font-semibold text-4xl  lg:text-7xl text-center">
        Accelerate your <span className='bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text'> {" "} coding workflow</span>
        </h1>

        <div className="mt-6 flex flex-col md:flex-row ">
          <div className="w-full md:w-1/2">
          <img src={code} alt="code" />
          </div>
          <div className='flex flex-col md:w-1/2 p-6'>
            {workFlow.map((item, index) => (
              <div key={index} className="flex my-4">
                <div className='mt-1 text-red-400'><CheckCircle2 /></div>
                <div className='mx-6 mb-2'>
                  <h3 className="text-xl font-semibold">
                    {item.title}
                  </h3>
                  <p className="pt-4 text-neutral-500">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        </div>
      </div>
      </div>


      <div id='pricing' className="my-20 flex-flex-col justify-center">
        <div>
          <h1 className="text-5xl text-center">
            Pricing
          </h1>
        </div>

        <div className="flex flex-wrap mt-10 justify-center">
            {pricing.map((item, index) => (
              <div key={index} className="rounded-lg border border-neutral-500 flex flex-col   px-14 py-10 md:w-1/2 lg:w-1/4  my-6 mx-6">
                <h1 className="text-3xl my-4">
                  {item.title}
                  {item.title === "Pro" && <span className='text-xl text-orange-700'>{" "}/(Most Popular)</span>}
                </h1>

                <h1 className="text-5xl my-4">
                  {item.price} <span className='text-xl text-orange-700'>{" "}/Month</span>
                </h1>

                <ul className='flex flex-col'>
                  {item.features.map((link, index) => (
                   <li key={index} className='flex items-center my-4 space-x-2'>
                    <h2><CheckCircle2 /></h2>
                    <p className="text-xl">
                      {link}
                    </p>
                   </li>
                  ))}
                </ul>
                <div className='mt-10'>
                 <a href="" className="hover:bg-red-700 rounded-lg inline-flex items-center justify-center h-14 w-48 border-neutral-700 text-2xl font-semibold border">Subscribe</a>
               </div>
              </div>
              
            ))}

            
        </div>
      </div>


      <div id='testimonials' className="my-24 flex-flex-col justify-center ">
        <div>
          <h1 className="text-5xl text-center tracking-wider">
            What people are saying
          </h1>
        </div>
        <div className="mt-16 flex flex-wrap justify-center">
            {testimonials.map((item, index) => (
              <div key={index} className="w-full md:w-1/3 lg:w-1/4 flex flex-col p-6 border border-neutral-700 m-2">
                <div>
                  <p className="max-w-2xl text-neutral-400">
                    {item.text}
                  </p>
                </div>
                <div className="flex space-x-2 mt-6">
                  <div >
                    <img className='w-11 h-12 rounded-full' src={item.image} alt="" />
                  </div>
                  <div>
                    <h3 className="text-xl">
                      {item.user}
                    </h3>
                    <p className="text-neutral-600">
                      {item.company}
                    </p>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>

      <hr className='border-neutral-500 ' />


      <footer className="bottom-0 mt-16">
        <div className="m-6 grid grid-cols-1 md:grid-cols-2 gap-4 lg:grid-cols-3 mb-16">
            <div>
              <h3 className="text-2xl font-semibold">
                Resources
              </h3>
              {resourceLinks.map((item, index) => (
                <ul className='flex flex-col '>
                  <li className="mt-6">
                    <a href={item.href} className='text-xl text-neutral-300'>
                      {item.label}
                    </a>
                  </li>
                </ul>
              ))}
            </div>
            <div>
              <h3 className="text-2xl font-semibold">
                Platform
              </h3>
              {platformLinks.map((item, index) => (
                <ul className='flex flex-col '>
                  <li className="mt-6">
                    <a href={item.href} className='text-xl text-neutral-300'>
                      {item.label}
                    </a>
                  </li>
                </ul>
              ))}
            </div>
            <div>
              <h3 className="text-2xl font-semibold">
                Community
              </h3>
              {CommunityLinks.map((item, index) => (
                <ul className='flex flex-col '>
                  <li className="mt-6">
                    <a href={item.href} className='text-xl text-neutral-300'>
                      {item.label}
                    </a>
                  </li>
                </ul>
              ))}
            </div>
        </div>

        <hr className='border-neutral-500 ' />

        <div className='mt-5'>
          <h1 className='text-center'> &copy; 2024 @Timi-tech</h1>
        </div>
      </footer>
    </section>
</>
  )
}

export default App