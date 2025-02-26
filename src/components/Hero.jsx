import { motion } from "framer-motion";
import "../css/Hero.css";
import "../index.css";

const Hero = () => {
  return (
    <section
      className="pt-20 relative flex items-center justify-center min-h-screen bg-gray-900 text-white"
      style={{
        backgroundImage:
          "url('https://assets.goal.com/images/v3/blt2aaca933046f8b00/Cristiano%20Ronaldo%20Portugal%202024%20(4).jpg?auto=webp&format=pjpg&width=1080&quality=60')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark overlay for better text visibility */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      <div className="relative max-w-6xl w-full flex flex-col md:flex-row items-center text-center md:text-left p-8">
        {/* Left Content with Animation */}
        <motion.div
          className="md:w-1/2"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-5xl font-extrabold leading-tight">
            ONCE BEGUN, DON'T LOOK BACK
          </h1>
          <p className="text-lg text-gray-200 mt-4">
            Passionate lifelong learner & creative developer, always exploring new technologies to build innovative projects.
          </p>
          <a
            href="https://youtu.be/E3VrV4hXDDg?si=APeoRIomUJa3AE_q"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-block bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-lg text-lg font-medium shadow-lg hover:scale-105 transition-transform"
          >
            🌍 View My Favorite Place!
          </a>
        </motion.div>

        {/* Right: Avatar Image with Animation */}
        <motion.div
          className="md:w-1/2 flex justify-center mt-8 md:mt-0"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
        >
          <img
            src="https://media.licdn.com/dms/image/v2/D4D03AQEak6ML_bpuAg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1730914226888?e=1746057600&v=beta&t=VFbG3sViPkM4UkHOfVcsamqvW_3mRlFGCdKyv03HxaA"
            alt="Avatar"
            className="w-48 h-48 md:w-56 md:h-56 rounded-full shadow-lg border-4 border-white hover:scale-110 transition-transform"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

