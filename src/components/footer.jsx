import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faLinkedinIn,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Contact Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <ul className="space-y-2 text-gray-400">
            <li>Email: locnvt.it@gmail.com</li>
            <li>Phone: +84 367263198</li>
            <li>Address: Dorm A, VNU Thu Duc, Ho Chi Minh City</li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#" className="hover:text-gray-200">About Us</a></li>
            <li><a href="#" className="hover:text-gray-200">Services</a></li>
            <li><a href="#" className="hover:text-gray-200">Portfolio</a></li>
            <li><a href="#" className="hover:text-gray-200">Contact</a></li>
            <li><a href="#" className="hover:text-gray-200">FAQ</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div className="flex flex-col items-center">
        <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
        <div className="flex space-x-4 text-amber-50">
          <a href="https://www.facebook.com/t1enLoc.IseUIT" className="text-gray-400 hover:text-blue-400">
            <FontAwesomeIcon icon={faFacebookF} size="lg" />
          </a>
          <a href="https://www.youtube.com/@LocNguyen-t3h" className="text-gray-400 hover:text-blue-300">
            <FontAwesomeIcon icon={faYoutube} size="lg" />
          </a>
          <a href="https://www.instagram.com/iset1enloc/" className="text-gray-400 hover:text-pink-500">
            <FontAwesomeIcon icon={faInstagram} size="lg" />
          </a>
          <a href="https://www.linkedin.com/in/locnguyen5/" className="text-gray-400 hover:text-blue-500">
            <FontAwesomeIcon icon={faLinkedinIn} size="lg" />
          </a>
        </div>
      </div>

      </div>

      {/* Bottom Bar */}
      <div className="mt-10 border-t border-gray-700 text-center text-gray-500 text-sm py-4">
        &copy; {new Date().getFullYear()} Cakewai. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
