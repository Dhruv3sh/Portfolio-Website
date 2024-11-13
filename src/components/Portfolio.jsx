import React from "react";
import Movie from "../assets/portfolio/movie.png";
import Music from "../assets/portfolio/music.png";
import Rk from "../assets/portfolio/rk.png";
import Stationarymart from "../assets/portfolio/stationarymart.png";
import Weatherapp from "../assets/portfolio/weatherapp.png";
import { motion } from "framer-motion";

const Portfolio = () => {
  const portfolio = [
    {
      id: 1,
      src: Movie,
      link: "https://feelmmovies.vercel.app/",
      href: "https://github.com/Dhruv3sh/Feelm-Streaming-app",
    },
    {
      id: 2,
      src: Music,
      link: "https://music-player-ds.vercel.app/",
      href: "https://github.com/Dhruv3sh/Music-player",
    },
    {
      id: 3,
      src: Stationarymart,
      link: "https://stationary-mart.vercel.app/",
      href: "https://github.com/Dhruv3sh/stationary-mart",
    },
    {
      id: 4,
      src: Weatherapp,
      link: "https://weather-app-ds.vercel.app/",
      href: "https://github.com/Dhruv3sh/Weather-App",
    },
    {
      id: 5,
      src: Rk,
      link: "https://rk-enterprises.netlify.app/",
      href: "https://github.com/Dhruv3sh/Rk-Enterprise-Shop-Website",
    },
  ];

  return (
    <div
      name="portfolio"
      className=" pt-20 md:pt-20 bg-gradient-to-b from-black via-black to-gray-900 w-full text-white md:h-screen "
    >
      <div className="max-w-screen-lg md:p-4 mx-auto flex flex-col justify-center w-full ">
        <motion.div
          initial={{ opacity: 0, y: +150 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="pb-8 max-md:text-center w-full">
            <p className=" text-4xl font-bold inline border-b-4 border-gray-500 drop-shadow-[1px_1px_5px]">
              Portfolio
            </p>
            <p className="pt-6 max-md:pr-16 ">
              Check out some of my work right here:
            </p>
          </div>
        </motion.div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolio.map(({ id, src, link, href }) => (
            <motion.div
              key={id}
              initial={{ opacity: 0, y: +150 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="shadow-md shadow-gray-600 rounded-lg">
                <img
                  src={src}
                  alt=""
                  className=" rounded-md duration-200 hover:scale-105"
                />
                <div className=" flex items-center justify-center">
                  <button
                    onClick={() => window.open(link, "_blank")}
                    className=" w-1/2 px-6 py-3 m-4 hover:scale-125 duration-300 "
                  >
                    Demo
                  </button>
                  <button
                    onClick={() => window.open(href, "_blank")}
                    className=" w-1/2 px-6 py-3 m-4 hover:scale-125 duration-300"
                  >
                    Code
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
