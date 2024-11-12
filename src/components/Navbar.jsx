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
    <div className='flex justify-between items-center w-full h-20 max-md:h-[60px] px-4 text-white  bg-black bg-opacity-95 fixed z-10'>
      <div>
        <h1 className='text-5xl max-md:text-5xl pt-2 font-signature ml-2 '>Dhruv</h1>
      </div>
      <ul className='hidden md:flex'>

        {links.map(({ id, link }) => (
          <li key={id} className='px-4 cursor-pointer capitalize font-medium text-gray-400 hover:scale-125 duration-200'>
            
            <Link to={link} smooth duration={500} >{link}</Link>
          
          </li>
        ))}
      </ul>

      <div onClick={() => setNav(!nav)} className='cursor-pointer pr-4 z-20 text-gray-400 md:hidden'>
        {nav ? < FaTimes size={28} /> : <FaBars size={28} />}
      </div>

      {nav ? (

        <ul className='flex flex-col justify-center items-center absolute top-[60px] right-0 w-44 h-80 backdrop-blur-2xl bg-black duration-300 mr-[-10px]  bg-opacity-50 z-10'>

        {links.map(({ id, link }) => (
          <li key={id} className='px-4 cursor-pointer capitalize py-6 text-2xl'>
            <Link onClick={()=> setNav(!nav)} to={link} smooth duration={500}>{link}</Link>
          </li>
        ))}
      </ul>
      ) : <ul className='flex flex-col justify-center items-center absolute top-[60px] right-0 w-44 h-80 bg-black duration-300 mr-[-180px]'>

      {links.map(({ id, link }) => (
        <li key={id} className='px-4 cursor-pointer capitalize py-6 text-2xl'>
          <Link onClick={()=> setNav(!nav)} to={link} smooth duration={500}>{link}</Link>
        </li>
      ))}
    </ul>}

      

    </div>
  )
}

export default Navbar
