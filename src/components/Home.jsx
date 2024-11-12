import React from "react";
import HeroImage from "../assets/heroImage.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div
    name='home'
      className=" w-full max-md:pt-20 bg-gradient-to-b from-black via-black to-gray-900 overflow-hidden"
    >
      <div className=" max-w-screen-lg mx-auto flex flex-col items-center justify-center px-6 py-36 md:py-32 md:flex-row">
        <motion.div
          initial={{ opacity: 0, y: -150 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 1 }}
          className="md:w-[510px]"
        >
          <div className=" flex flex-col justify-center h-full">
            <h1 className="text-[42px] sm:text-7xl font-bold text-white font-signature">
              Hey I'm,
            </h1>

            <TypeAnimation
              sequence={[
                "Dhruv Sharma",
                2000,
                "Frontend Dev..",
                1000,
                "Coder..",
                1000,
              ]}
              speed={50}
              repeat={Infinity}
              className="pt-0 md:pt-2 text-gray-400 text-3xl md:text-6xl italic- mb-4"
            />
            <p className=" text-2xl text-gray-400 py-2 max-w-md max-md:pt-10 font-mono">
              I code simple yet functional websites. I love building and
              designing creative and responsive web applicatons.
            </p>
            <motion.div
              initial={{ opacity: 0, y: +200 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 1 }}
              className=" pt-6 md:pt-0"
            >
              <Link
                to="portfolio"
                smooth
                duration={500}
                className=" group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
              >
                Portfolio
                <span className=" group-hover:rotate-90 duration-300 ">
                  <MdOutlineKeyboardArrowRight size={25} className=" ml-1" />
                </span>
              </Link>
            </motion.div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 1, delay:0.7}}
          className=" max-md:absolute max-md:top-[188px] max-md:right-7"
        >
          <img
            src={HeroImage}
            alt="my portfolio"
            className="rounded-2xl mx-auto w-32 md:w-full"
          ></img>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
