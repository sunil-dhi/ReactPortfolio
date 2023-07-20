import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import React from "../assets/react.png";
import Node from "../assets/node.png";
import Bootstrap from "../assets/boot.png";
import github from "../assets/github.png";
import tailwind from "../assets/tailwind.png";

let techs = [
  {
    id: 1,
    tech: html,
    title: "HTML",
    style: "shadow-orange-500",
  },
  {
    id: 2,
    tech: css,
    title: "CSS",
    style: "shadow-blue-600",
  },
  {
    id: 3,
    tech: javascript,
    title: "Javascript",
    style: "shadow-orange-500",
  },
  {
    id: 4,
    tech: React,
    title: "REACTjs",
    style: "shadow-blue-500",
  },
  {
    id: 5,
    tech: Node,
    title: "NODEjs",
    style: "shadow-green-500",
  },
  {
    id: 6,
    tech: Bootstrap,
    title: "BOOTSTRAP",
    style: "shadow-purple-500",
  },
  {
    id: 7,
    tech: tailwind,
    title: "TAILWIND",
    style: "shadow-sky-500",
  },
  {
    id: 8,
    tech: github,
    title: "GITHUB",
    style: "shadow-gray-500",
  },
];

const Experience = () => {
  return (
    <div
      name="experience"
      className="bg-gradient-to-b from-gray-800 to-black w-full h-screen"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Experience
          </p>
          <p className="py-6">These are the technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, tech, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={tech} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>

  );
};

export default Experience;
