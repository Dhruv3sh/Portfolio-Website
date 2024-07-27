import React from 'react'
import Nikestore from '../assets/portfolio/nikestore.png'
import Rk from '../assets/portfolio/rk.png'
import Spotify from '../assets/portfolio/spotify.png'
import Stationarymart from '../assets/portfolio/stationarymart.png'



const Portfolio = () => {

  const portfolio = [
    {
      id: 1,
      src: Nikestore,
      link:'https://nikeeshoestore.vercel.app/',
      href:'https://github.com/Dhruv3sh/Nike-Shoe-Store'
    },
    {
      id: 2,
      src: Spotify,
      link:'https://dhruv-spotify-ncs.netlify.app/',
      href:'https://github.com/Dhruv3sh/Spotify-Clone'
    },
    {
      id: 3,
      src: Stationarymart,
      link:'https://stationay-mart.000webhostapp.com/',
      href:'https://github.com/Dhruv3sh/stationary-mart'
    },
    {
      id: 4,
      src: WeatherApp,
      link:'https://weather-app-ds.vercel.app/,
      href:'https://github.com/Dhruv3sh/Weather-App'
    },
    {
      id: 5,
      src: Rk,
      link:'https://rk-enterprises.netlify.app/',
      href:'https://github.com/Dhruv3sh/Rk-Enterprise-Shop-Website'
    },
  ]


  return (
    <div name='portfolio' className='pt-40 bg-gradient-to-b from-black via-black to-gray-900 w-full text-white md:h-screen '>

      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>

          <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Portfolio</p>
          <p className='py-6'>Check out some of my work right here:</p>
        </div>

        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>

          {
            portfolio.map(({ id, src, link, href }) => (
              <div className='shadow-md shadow-gray-600 rounded-lg'>
              <img src={src} alt='' className=' rounded-md duration-200 hover:scale-105' />
              <div className=' flex items-center justify-center'>
                <button onClick={() => window.open(link, '_blank') } className=' w-1/2 px-6 py-3 m-4 hover:scale-125 duration-300 '>Demo</button>
                <button onClick={() => window.open(href, '_blank')} className=' w-1/2 px-6 py-3 m-4 hover:scale-125 duration-300'>Code</button>
              </div>
            </div>
          ))
          }
        </div>

      </div>

    </div>
  )
}

export default Portfolio
