import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import "../css/Content.css";
import Footer from "../components/footer";
import "../index.css";

const Contact = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 p-6 text-white pt-20">
        {/* Animated Contact Card */}
        <motion.div
          initial={{ y: 100, opacity: 0 }} // Start position (bottom)
          animate={{ y: 0, opacity: 1 }}   // End position (normal)
          transition={{ duration: 0.8, ease: "easeOut" }} // Smooth transition
          className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-2xl text-center text-gray-900 relative overflow-hidden"
        >
          {/* Logo Image */}
          <img 
            src="public/media/pofoliologo.jpg" 
            alt="Logo" 
            className="w-32 h-32 mx-auto mb-4 rounded-full"
          />
        
          <h2 className="text-3xl font-bold text-blue-600 mb-4">Get in Touch</h2>
          <p className="text-gray-700 mb-6">Let's connect and build something amazing together!</p>

          <div className="space-y-4">
          <div className="flex items-center justify-center space-x-3 text-lg font-medium text-gray-800">
            <FaEnvelope className="text-blue-500" />
            <span>locnvt.it@gmail.com</span>
          </div>
          <div className="flex items-center justify-center space-x-3 text-lg font-medium text-gray-800">
            <FaPhone className="text-green-500" />
            <span>+84 398541346</span>
          </div>
          <div className="grid justify-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6 p-6">
          <div className="flex items-center justify-center space-x-3 text-lg font-medium text-gray-800">
            <FaLinkedin className="text-blue-700" />
            <a href="https://www.linkedin.com/in/locnguyen5/" target="_blank" rel="noopener noreferrer" className="hover:underline">
              LinkedIn
            </a>
          </div>
          <div className="flex items-center justify-center space-x-3 text-lg font-medium text-gray-800">
            <FaFacebook className="text-blue-600" />
            <a href="https://www.facebook.com/t1enLoc.IseUIT" target="_blank" rel="noopener noreferrer" className="hover:underline">
              Facebook
            </a>
          </div>
          <div className="flex items-center justify-center space-x-3 text-lg font-medium text-gray-800">
            <FaInstagram className="text-pink-500" />
            <a href="https://www.instagram.com/iset1enloc/" target="_blank" rel="noopener noreferrer" className="hover:underline">
              Instagram
            </a>
          </div>
          <div className="flex items-center justify-center space-x-3 text-lg font-medium text-gray-800">
            <FaYoutube className="text-pink-500" />
            <a href="https://www.youtube.com/@LocNguyen-t3h" target="_blank" rel="noopener noreferrer" className="hover:underline">
              Youtube
            </a>
          </div>
          </div>
          <div className="flex items-center justify-center space-x-3 text-lg font-medium text-gray-800">
            <FaMapMarkerAlt className="text-red-500" />
            <span>Address: Dorm A, VNU Thu Duc, Ho Chi Minh City</span>
          </div>
          

        </div>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
