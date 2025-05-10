import "../css/Content.css"
import Footer from "../components/footer"
import "../index.css"
import { motion } from "framer-motion";

const About = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
        <motion.div 
          initial={{ opacity: 0, y: 50 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1 }}
          viewport={{ once: true, amount: 0.3 }} // Ensures animation triggers only once
          className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-3xl text-center"
        >
          <motion.h2 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2 }}
            viewport={{ once: true }}
            className="text-3xl font-semibold text-gray-800 mb-4"
          >
            About Me
          </motion.h2>
          
          <motion.img 
            src="public/media/pofoliologo.jpg" 
            alt="Profile" 
            className="w-50 h-50 rounded-full mx-auto mb-4 border-4 border-blue-500"
            initial={{ opacity: 0, rotateY: 180 }}
            whileInView={{ opacity: 1, rotateY: 0 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true }}
          />

          <motion.p 
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-gray-600"
          >
            Hello!I am Nguyen Vo Tien Loc-a junior student at University of Information Technology UIT,HCM VNU. I'm a passionate developer with a love for building beautiful and functional web applications. 
            I specialize in Golang, Python, and modern web technologies. Let's create something amazing together!
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
};
export default About;