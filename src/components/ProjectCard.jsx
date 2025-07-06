// import React from "react";
// import "../css/Hero.css"
// import "../index.css"


// const ProjectCard = ({ name, image, description, github, youtube }) => {
//   return (
//     <div className="m-5 bg-white shadow-lg rounded-2xl overflow-hidden w-80 sm:w-96 transform transition duration-300 hover:scale-105 hover:shadow-xl">
//       <img src={image} alt={name} className="w-full h-48 object-cover" />
//       <div className="p-5">
//         <h3 className="text-xl font-bold text-gray-800 mb-2">{name}</h3>
//         <p className="text-gray-600 text-sm mb-4">{description}</p>
        
//         {/* Links Section */}
//         <div className="flex justify-between mt-4">
//           <a
//             href={github}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-800 transition duration-200"
//           >
//             <FaGithub size={20} /> GitHub
//           </a>
//           {youtube&&<a
//             href={youtube}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="flex items-center gap-2 text-red-600 font-semibold hover:text-red-800 transition duration-200"
//           >
//             <FaYoutube size={20} /> Demo
//           </a>}
//         </div>
//       </div>
//     </div>
//   );
// };
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaYoutube } from "react-icons/fa";
import "../css/Hero.css";
import "../index.css";

const ProjectCard = ({ name, image, description, github, youtube, date }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Project Card */}
      <motion.div
        layout
        onClick={() => setIsOpen(true)}
        className="cursor-pointer bg-white border border-gray-300 shadow-sm rounded-xl overflow-hidden max-w-4xl mx-auto mb-8 transition-transform hover:shadow-md"
      >
        <img src={image} alt={name} className="w-full h-56 object-cover" />
        <div className="px-6 py-4">
          <h2 className="text-xl font-serif font-semibold text-gray-800 mb-1">
            {name}
          </h2>
          {date && <p className="text-sm text-gray-500 italic mb-2">{date}</p>}
          <p className="text-gray-700 text-sm leading-relaxed mb-4">
            {description.slice(0, 140)}
            {description.length > 140 && "..."}
          </p>

          {/* Always Visible Links */}
          <div
            className="flex flex-wrap gap-4 pt-2 text-sm text-gray-700"
            onClick={(e) => e.stopPropagation()} // stop propagation to prevent opening modal
          >
            {github && (
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-blue-700 hover:text-blue-900"
              >
                <FaGithub size={18} /> <span className="hidden sm:inline">GitHub</span>
              </a>
            )}
            {youtube && (
              <a
                href={youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-red-600 hover:text-red-800"
              >
                <FaYoutube size={18} /> <span className="hidden sm:inline">Demo</span>
              </a>
            )}
          </div>
        </div>
      </motion.div>

      {/* Modal View */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Dimmed Background */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black z-40"
              onClick={() => setIsOpen(false)}
            />

            {/* Modal Container */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 30 }}
              transition={{ duration: 0.3 }}
              className="fixed z-50 inset-0 flex items-center justify-center p-6"
              onClick={() => setIsOpen(false)} // click outside closes
            >
              <div
                className="relative bg-white rounded-xl shadow-2xl w-full max-w-6xl max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()} // stop inside click from closing
              >
                {/* Image */}
                <img
                  src={image}
                  alt={name}
                  className="w-full max-h-[60vh] object-contain bg-gray-100 rounded-t-xl"
                />

                <div className="p-8">
                  {/* Title + Close */}
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h2 className="text-3xl font-serif font-bold text-gray-900">
                        {name}
                      </h2>
                      {date && (
                        <p className="text-sm text-gray-500 italic mt-1">{date}</p>
                      )}
                    </div>
                    <button
                      onClick={() => setIsOpen(false)}
                      className="text-gray-500 hover:text-gray-800 text-2xl font-bold"
                    >
                      &times;
                    </button>
                  </div>

                  {/* Full Description */}
                  <p className="text-gray-800 text-[15px] leading-relaxed mb-6">
                    {description}
                  </p>

                  {/* Links in Modal */}
                  <div className="flex flex-wrap gap-6 mt-4 text-sm">
                    {github && (
                      <a
                        href={github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-blue-700 hover:text-blue-900"
                      >
                        <FaGithub size={18} /> GitHub Repository
                      </a>
                    )}
                    {youtube && (
                      <a
                        href={youtube}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-red-600 hover:text-red-800"
                      >
                        <FaYoutube size={18} /> Demo Video
                      </a>
                    )}
                  </div>

                  {/* Instruction */}
                  <p className="text-gray-400 text-xs mt-8 text-right italic">
                    Click outside the modal or &times; to close.
                  </p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default ProjectCard;
