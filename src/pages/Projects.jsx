// import { motion } from "framer-motion";
// import "../css/Content.css";
// import Footer from "../components/footer";
// import ProjectCard from "../components/ProjectCard";
// import "../index.css"; // Fixed import path

// const projectData = [
//   {
//     name: "ACIIDS 2025 International publications",
//     image: "https://res.cloudinary.com/tienloc/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1742303091/paper_image_uxkypp.jpg",
//     description: "Publication in cyber security field-ACIIDS, Kitakyushu, Japan. I am in charge of project management, conducting experiments and writing paper, contact me to get the paper!",
//   },
//   {
//     name: "CAKE WAI",
//     image: "https://res.cloudinary.com/tienloc/image/upload/v1740538954/%5B1%5D-cakewai.png",
//     description: "An ecomerce website that enhance user experience with interesting AI function for image generation",
//     github: "https://github.com/iseT1enLoc/cakewai",
//     youtube: "https://youtu.be/hPRtJV0SFbM?si=R2IImA0Vsdz97Czo",
//   },
//   {
//     name: "Academic advisor",
//     image: "https://res.cloudinary.com/tienloc/image/upload/v1740540217/ds317v2_pegta1.png",
//     description: "Graduation grade prediction system using Deep learning algorigthm",
//     github: "https://github.com/iseT1enLoc/ds317-data-mining-for-enterprise",
//     youtube: "https://youtu.be/co9wg8C47Jw?si=0VNTkf3Vy-PY-p-Y",
//   },
//   {
//     name: "LinkingSign",
//     image: "https://res.cloudinary.com/tienloc/image/upload/v1740539613/linkingsign_emystj.jpg",
//     description: "A mobile application that encourage people learning sign-language",
//     github: "https://github.com/iseT1enLoc/LinkingSign-mobile",
//     youtube: "",
//   },

// ];

// const Projects = () => {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       exit={{ opacity: 0, y: -20 }}
//       transition={{ duration: 0.6, ease: "easeOut" }}
//       className="about-container mt-20"
//     >
//       <h1 className="about-title">Projects</h1>
//       <p className="about-description">
//         Projects that i have done in university!
//       </p>

//       <div className="grid justify-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
//         {projectData.map((project, index) => (
//           <ProjectCard
//             key={index}
//             name={project.name}
//             image={project.image}
//             description={project.description}
//             github={project.github}
//             youtube={project.youtube}
//           />
//         ))}
//       </div>

//       <Footer />
//     </motion.div>
//   );
// };

import { motion } from "framer-motion";
import "../css/Content.css";
import Footer from "../components/footer";
import ProjectCard from "../components/ProjectCard";
import "../index.css";

const projectData = [
  {
    name: "G8Vitamin",
    date: "June 2025",
    image: "https://res.cloudinary.com/tienloc/image/upload/v1751796009/DS108FINAL_xzecb2.png",
    description: "This project is aimed to help early predict vitamin D deficiency patients based on general report metrics and relavation demographics information. ",
    github: "https://github.com/iseT1enLoc/G8Vitamin",
    youtube: "https://youtu.be/4tsfm1Lk0w0?si=LHD4H2QcsBvwQZpI",
  },
  {
    name: "RoomXpense",
    date: "May 2025",
    image: "https://res.cloudinary.com/tienloc/image/upload/v1747330384/image_fownii.png",
    description: "This project is developed to help remove the traditional spreadsheet for students who live in a group in dorm in university live",
    github: "https://github.com/iseT1enLoc/roomXpenditure",
  },
  {
    name: "ACIIDS 2025 International publications",
    date: "Feb 2025",
    image: "https://res.cloudinary.com/tienloc/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1742303091/paper_image_uxkypp.jpg",
    description: "Publication in cyber security field - ACIIDS, Kitakyushu, Japan. I am in charge of project management, conducting experiments and writing paper. Contact me to get the paper!",
  },
  {
    name: "CAKE WAI",
    date: "May 2024",
    image: "https://res.cloudinary.com/tienloc/image/upload/v1740538954/%5B1%5D-cakewai.png",
    description: "An ecommerce website that enhances user experience with interesting AI function for image generation",
    github: "https://github.com/iseT1enLoc/cakewai",
    youtube: "https://youtu.be/hPRtJV0SFbM?si=R2IImA0Vsdz97Czo",
  },
  {
    name: "Academic advisor",
    date: "Dec 2023",
    image: "https://res.cloudinary.com/tienloc/image/upload/v1740540217/ds317v2_pegta1.png",
    description: "Graduation grade prediction system using Deep Learning algorithm",
    github: "https://github.com/iseT1enLoc/ds317-data-mining-for-enterprise",
    youtube: "https://youtu.be/co9wg8C47Jw?si=0VNTkf3Vy-PY-p-Y",
  },
  {
    name: "LinkingSign",
    date: "Oct 2023",
    image: "https://res.cloudinary.com/tienloc/image/upload/v1740539613/linkingsign_emystj.jpg",
    description: "A mobile application that encourages people learning sign language",
    github: "https://github.com/iseT1enLoc/LinkingSign-mobile",
    youtube: "",
  },
];


// Framer Motion variants
const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const lineVariants = {
  initial: { height: 0 },
  animate: { height: "100%" },
};

const Projects = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="about-container mt-20"
    >
      <h1 className="about-title">Projects</h1>
      <p className="about-description">Projects that I have done in university!</p>

      <motion.div
        className="relative p-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Animated vertical line */}
        <motion.div
          initial="initial"
          animate="animate"
          variants={lineVariants}
          transition={{ duration: 1, ease: "easeOut" }}
          className="absolute left-6 top-0 w-1 bg-blue-500 rounded-full origin-top"
          style={{ height: "100%" }}
        />

        <div className="flex flex-col gap-20 pl-12">
          {projectData.map((project, index) => (
            <motion.div key={index} variants={cardVariants} className="relative">
              {/* Dot and Date */}
              <div className="absolute -left-9 top-6 flex flex-col items-center">
                <div className="w-4 h-4 bg-blue-600 border-4 border-white rounded-full shadow z-10" />
                <div className="mt-2 text-sm font-semibold text-gray-700 whitespace-nowrap">
                  {project.date}
                </div>
              </div>

              {/* Card */}
              <ProjectCard
                name={project.name}
                date={project.date}
                image={project.image}
                description={project.description}
                github={project.github}
                youtube={project.youtube}
              />
            </motion.div>
          ))}
        </div>
      </motion.div>

      <Footer />
    </motion.div>
  );
};

export default Projects;
