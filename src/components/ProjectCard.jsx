import React from "react";
import "../css/Hero.css"
import "../index.css"

const ProjectCard = ({ name, image, description }) => {
    return (
      <div className="m-5 bg-white shadow-lg rounded-2xl overflow-hidden w-80 transform transition duration-300 hover:scale-105 hover:shadow-xl">
        <img src={image} alt={name} className="w-full h-48 object-cover" />
        <div className="p-4">
          <h3 className="text-xl font-semibold mb-2">{name}</h3>
          <p className="text-gray-600 text-sm">{description}</p>
        </div>
      </div>
    );
  };
  

export default ProjectCard;
