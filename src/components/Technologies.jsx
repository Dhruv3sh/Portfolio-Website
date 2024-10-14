import React from 'react'
import html from '../assets/html.png'
import css from '../assets/css.png'
import javascript from '../assets/javascript.png'
import react from '../assets/react.png'
import nextjs from '../assets/nextjs.png'
import github from '../assets/github.png'
import tailwind from '../assets/tailwind.png'

const Technologies = () => {

    const tech = [
        {
            id: 1,
            src: html,
            title: 'html',
            style: 'shadow-orange-500',
            link:'https://developer.mozilla.org/en-US/docs/Web/HTML'
        },
        {
            id: 2,
            src: css,
            title: 'CSS',
            style: 'shadow-blue-500',
            link:'https://developer.mozilla.org/en-US/docs/Web/CSS'
        },
        {
            id: 3,
            src: javascript,
            title: 'javascript',
            style: 'shadow-yellow-500',
            link:'https://developer.mozilla.org/en-US/docs/Web/JavaScript'
        },
        {
            id: 4,
            src: react,
            title: 'react',
            style: 'shadow-blue-500',
            link:'https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_getting_started'
        },
        {
            id: 5,
            src: nextjs,
            title: 'nextjs',
            style: 'shadow-white',
            link:'https://nextjs.org/docs'
        },
        {
            id: 6,
            src: tailwind,
            title: 'tailwind',
            style: 'shadow-sky-500',
            link:'https://tailwindcss.com/docs/installation'

        },
        {
            id: 7,
            src: github,
            title: 'github',
            style: 'shadow-gray-500',
            link:'https://docs.github.com/en'

        },
    ]


    return (
        <div name='technologies' className='pt-80 bg-gradient-to-b from-gray-900 via-gray-900 to-black w-full h-screen '>
            <div className=' max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
                <div>
                    <p className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline drop-shadow-[1px_1px_5px]'>Technologies</p>
                    <p className='pt-10'>These are the technologies i have worked on</p>
                </div>

                <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>

                    {
                        tech.map(({ id, src, title, style, link }) => (
                            <div key={id} onClick={()=> window.open(link, '_blank')} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                                <img  src={src} alt="" className='w-20 mx-auto' />
                                <p className='mt-4'>{title}</p>
                            </div>

                        ))
                    }

                </div>
            </div>
            <div className='bg-gradient-to-b from-black to-black h-52'>
            </div>
        </div>
    )
}

export default Technologies
