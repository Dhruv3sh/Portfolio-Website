import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import {Link} from 'react-scroll';

const Navbar = () => {

  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: "home"
    },
    {
      id: 2,
      link: "about"
    },
    {
      id: 3,
      link: "portfolio"
    },
    {
      id: 4,
      link: "technologies"
    },
    
  ]


  return (
    <div className='flex justify-between items-center w-full h-20 px-4 text-white backdrop-blur-sm bg-black bg-opacity-60 md:fixed'>
      <div>
        <h1 className='text-5xl font-signature ml-2 '>Dhruv</h1>
      </div>
      <ul className='hidden md:flex'>

        {links.map(({ id, link }) => (
          <li key={id} className='px-4 cursor-pointer capitalize font-medium text-gray-400 hover:scale-125 duration-200'>
            
            <Link to={link} smooth duration={500} offset={30}>{link}</Link>
          
          </li>
        ))}
      </ul>

      <div onClick={() => setNav(!nav)} className='cursor-pointer pr-4 z-10 text-gray-400 md:hidden'>
        {nav ? < FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (

        <ul className='flex flex-col justify-center items-center absolute top-0 w-full h-screen bg-gradient-to-b from-gray-800 to-black'>

        {links.map(({ id, link }) => (
          <li key={id} className='px-4 cursor-pointer capitalize py-6 text-4xl'>
            <Link onClick={()=> setNav(!nav)} to={link} smooth duration={500}>{link}</Link>
          </li>
        ))}
      </ul>
      )}

      

    </div>
  )
}

export default Navbar
