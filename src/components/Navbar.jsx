import React from 'react'
import profile from '../assets/profile.avif'
import { BellDot, Mail } from 'lucide-react'
function Navbar() {
  return (
    <div className="flex justify-end bg-white">
    <ul className="flex ">
      <li className="mr-6">
        <div className='flex items-center h-full'>
      <input type="search" placeholder='Search' className="px-4 py-3"/>
      </div>
      </li>
      <li className="mr-6">
      <div className='flex items-center h-full'>
      <div className='border border-gray p-1 rounded'>
        <BellDot size={25} color='blue'/>
        </div>
        </div>
      </li>
      <li className="mr-6">
      <div className='flex items-center h-full'>
        <div className='border border-gray p-1 rounded'>
        <Mail size={25} color='blue'/>
        </div>
        </div>
      </li>
      <li className="mr-6"> 
      <div className='flex items-center h-full'>
      <img
  src={profile}
  className="w-10 rounded-full"
  alt="Avatar" /></div>
      </li>
    </ul>
  </div>
  
  )
}

export default Navbar