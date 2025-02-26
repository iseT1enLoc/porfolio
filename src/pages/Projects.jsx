import { motion } from "framer-motion";
import "../css/Content.css";
import Footer from "../components/footer";
import ProjectCard from "../components/ProjectCard";
import "../index.css"; // Fixed import path

const projectData = [
  {
    name: "CAKE WAI",
    image: "https://res.cloudinary.com/tienloc/image/upload/v1740538954/%5B1%5D-cakewai.png",
    description: "An ecomerce website that enhance user experience with interesting AI function for image generation",
    github: "https://github.com/iseT1enLoc/cakewai",
    youtube: "https://youtu.be/hPRtJV0SFbM?si=R2IImA0Vsdz97Czo",
  },
  {
    name: "LinkingSign",
    image: "https://res.cloudinary.com/tienloc/image/upload/v1740539613/linkingsign_emystj.jpg",
    description: "A mobile application that encourage people learning sign-language",
    github: "https://github.com/iseT1enLoc/LinkingSign-mobile",
    youtube: "",
  },
  {
    name: "Academic advisor",
    image: "https://res.cloudinary.com/tienloc/image/upload/v1740540217/ds317v2_pegta1.png",
    description: "Graduation grade prediction system using Deep learning algorigthm",
    github: "https://github.com/iseT1enLoc/ds317-data-mining-for-enterprise",
    youtube: "https://youtu.be/co9wg8C47Jw?si=0VNTkf3Vy-PY-p-Y",
  }
];

const Projects = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="about-container mt-10"
    >
      <h1 className="about-title">Projects</h1>
      <p className="about-description">
        Projects that i have done in university!
      </p>

      <div className="grid justify-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
        {projectData.map((project, index) => (
          <ProjectCard
            key={index}
            name={project.name}
            image={project.image}
            description={project.description}
            github={project.github}
            youtube={project.youtube}
          />
        ))}
      </div>

      <Footer />
    </motion.div>
  );
};

export default Projects;
