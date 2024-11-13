import React from "react";
import Ui from "../assets/UI.gif";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className=" flex flex-row justify-center items-center w-full bg-gradient-to-b from-gray-900 via-gray-900 to-black text-white">
      <div
        name="about"
        className="flex flex-row justify-center items-center w-full pt-16 bg-gradient-to-b from-gray-900 via-gray-900 to-black text-white"
      >
        <div className=" p-0 mx-auto flex flex-col justify-center w-full md:w-3/5 h-full">
          <motion.div
            initial={{ opacity: 0, y: +150 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="pb-5 max-md:text-center md:pl-10">
              <p className="text-4xl font-bold inline border-b-4 border-gray-500 drop-shadow-[1px_1px_5px]">
                About
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: +150 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className=" p-3 md:pl-10">
              <p className="md:text-xl mt-6 opacity-80">
                {" "}
                I'm an aspiring web developer with a strong passion for creating
                beautiful, functional websites and applications. Although I'm at
                the beginning of my professional journey, I've dedicated myself
                to learning and honing my skills in web development.
              </p>

              <br />

              <p className=" md:text-xl opacity-80">
                I focus on front-end development, striving to create engaging
                and user-friendly interfaces. My skills include: HTML, CSS,
                Tailwind CSS, JavaScript, ReactJs, git/github for version
                control and source code management.
              </p>

              <br />

              <p className=" md:text-xl opacity-80">
                I'm committed to learning and growing as a web developer. I
                believe in writing clean, maintainable code and following best
                practices. You can connect with me via social links and download
                my resume by clicking on the left.
              </p>
            </div>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: +150 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="h-96 w-96 max-md:hidden max-md:h-40 max-md:w-40 pt-[74px] pr-6">
            <img
              className=" h-80 rounded-md shadow-md shadow-slate-900"
              src={Ui}
              alt="gif"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
