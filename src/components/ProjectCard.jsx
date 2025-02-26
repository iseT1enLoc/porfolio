import React from "react";
import "../css/Hero.css"
import "../index.css"

import { FaGithub, FaYoutube } from "react-icons/fa";

const ProjectCard = ({ name, image, description, github, youtube }) => {
  return (
    <div className="m-5 bg-white shadow-lg rounded-2xl overflow-hidden w-80 sm:w-96 transform transition duration-300 hover:scale-105 hover:shadow-xl">
      <img src={image} alt={name} className="w-full h-48 object-cover" />
      <div className="p-5">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{name}</h3>
        <p className="text-gray-600 text-sm mb-4">{description}</p>
        
        {/* Links Section */}
        <div className="flex justify-between mt-4">
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-800 transition duration-200"
          >
            <FaGithub size={20} /> GitHub
          </a>
          {youtube&&<a
            href={youtube}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-red-600 font-semibold hover:text-red-800 transition duration-200"
          >
            <FaYoutube size={20} /> Demo
          </a>}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
