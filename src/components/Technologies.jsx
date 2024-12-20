import React from "react";
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import react from "../assets/react.png";
import github from "../assets/github.png";
import tailwind from "../assets/tailwind.png";
import git from "../assets/git.png";
import firebase from "../assets/firebase.png";
import { motion } from "framer-motion";

const Technologies = () => {
  const tech = [
    {
      id: 1,
      src: html,
      title: "html",
      style: "shadow-orange-500",
      link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
      link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    },
    {
      id: 3,
      src: javascript,
      title: "javascript",
      style: "shadow-yellow-500",
      link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    },
    {
      id: 4,
      src: react,
      title: "react",
      style: "shadow-blue-500",
      link: "https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_getting_started",
    },
    {
      id: 5,
      src: tailwind,
      title: "tailwind",
      style: "shadow-sky-500",
      link: "https://tailwindcss.com/docs/installation",
    },
    {
      id: 6,
      src: git,
      title: "git",
      style: "shadow-orange-500",
      link: "https://git-scm.com/",
    },
    {
      id: 7,
      src: github,
      title: "github",
      style: "shadow-gray-500",
      link: "https://docs.github.com/en",
    },
    {
      id: 8,
      src: firebase,
      title: "Firebase",
      style: "shadow-yellow-500",
      link: "https://firebase.google.com/",
    },
  ];

  return (
    <div
      name="technologies"
      className=" pt-20 md:pt-40 bg-gradient-to-b from-gray-900 via-gray-900 to-black w-full"
    >
      <div className=" max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full text-white">
        <motion.div
          initial={{ opacity: 0, y: +150 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="max-md:text-center">
            <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline drop-shadow-[1px_1px_5px]">
              Technologies
            </p>
            <p className="pt-10 max-md:pr-8">
              These are the technologies i have worked on
            </p>
          </div>
        </motion.div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-10 md:gap-8 text-center py-8 px-6 md:px-12">
          {tech.map(({ id, src, title, style, link }) => (
            <motion.div
              key={id}
              initial={{ opacity: 0, y: +50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="max-md:w-36"
            >
              <div
                onClick={() => window.open(link, "_blank")}
                className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
              >
                <img src={src} alt="" className="w-20 mx-auto" />
                <p className="mt-4">{title}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Technologies;
