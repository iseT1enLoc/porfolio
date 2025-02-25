import { motion } from "framer-motion";
import "../css/Content.css";
import Footer from "../components/footer";
import ProjectCard from "../components/ProjectCard";
import "../index.css"; // Fixed import path

const Projects = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }} // Start with opacity 0 and move slightly down
      animate={{ opacity: 1, y: 0 }} // Animate to normal position
      exit={{ opacity: 0, y: -20 }} // Fade out when exiting
      transition={{ duration: 0.6, ease: "easeOut" }} // Smooth transition
      className="about-container mt-10"
    >
      <h1 className="about-title">Projects Page</h1>
      <p className="about-description">I have a lot of projects needed to be done this year!!</p>
      
      <div className="grid justify-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
        {Array.from({ length: 6 }).map((_, index) => (
          <ProjectCard
            key={index}
            name={`Project ${index + 1}`}
            image={"https://www.ntaskmanager.com/wp-content/uploads/2020/02/what-is-project-management.png"}
            description={"This project showcases my best work, including web development, UI/UX design, and backend integration. It highlights my expertise in React, Node.js, and modern frameworks, providing a seamless and interactive user experience. Fully responsive and optimized for performance, this portfolio demonstrates my creativity and technical skills in building web applications."}
          />
        ))}
      </div>

      <Footer />
    </motion.div>
  );
};

export default Projects;
