import React from 'react'

const About = () => {
  return (
    
    <div className=' flex flex-row justify-center items-center w-full h-screen bg-gradient-to-b from-gray-900 via-gray-900 to-black text-white'>

      <div name="about" className='flex flex-col justify-center items-center w-3/5 h-screen bg-gradient-to-b from-gray-900 via-gray-900 to-black text-white'>
        <div className='max-w-screen-lg p-0 mx-auto flex flex-col justify-center w-auto h-full'>
          <div className='pb-5 pl-10'>
            <p className='text-4xl font-bold inline border-b-4 border-gray-500'>
              About
            </p>
          </div>
          <div className='pl-10'>
            <p className='text-xl mt-6'> I'm an aspiring web developer with a strong passion for creating beautiful, functional websites and applications. Although I'm at the beginning of my professional journey, I've dedicated myself to learning and honing my skills in web development.
            </p>

            <br />

            <p className='text-xl'>
              I focus on both front-end development and back-end development, striving to create engaging and user-friendly interfaces. My skills include: HTML, CSS, Tailwind CSS, JavaScript, ReactJs, C++ and MYSQL.
            </p>

            <br />

            <p className='text-xl'>

              I'm committed to learning and growing as a web developer. I believe in writing clean, maintainable code and following best practices.
              You can connect with me via social links and download my resume by clicking on the left.

            </p>
          </div>
        </div>
      </div>
      <div className='text-white w-1/4 pl-20' >

        
      </div>
    </div>
  )
}

export default About;
