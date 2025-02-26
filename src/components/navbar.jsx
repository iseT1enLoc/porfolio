import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaGithub, FaFileAlt, FaBars, FaTimes } from "react-icons/fa";
import { ExternalLink } from "lucide-react";

const Navbar = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar bg-gray-900 text-white p-4 fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center mb-20">
        {/* Logo */}
        <Link to="/" className="text-amber-50 font-bold text-xl">
          Tien Loc
        </Link>

        {/* Mobile Menu Toggle Button (Only Shows When Menu is Closed) */}
        {!isMobileMenuOpen && (
          <button
            className="lg:hidden text-white focus:outline-none z-50"
            onClick={toggleMobileMenu}
          >
            <FaBars size={30} />
          </button>
        )}

        {/* Desktop Menu */}
        <ul className="hidden lg:flex space-x-6">
          {[
            { path: "/", name: "Home" },
            { path: "/projects", name: "Projects" },
            { path: "/contact", name: "Contact" },
          ].map(({ path, name }) => (
            <li key={path}>
              <Link
                to={path}
                className={`${
                  location.pathname === path
                    ? "text-amber-400 font-bold border-b-2 border-amber-400"
                    : "hover:text-amber-400"
                } transition duration-200`}
              >
                {name}
              </Link>
            </li>
          ))}
          <li>
            <a
              href="https://github.com/iseT1enLoc"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 font-semibold hover:text-amber-500 transition duration-200"
            >
              <FaGithub size={20} /> GitHub <ExternalLink size={16} />
            </a>
          </li>
          <li>
            <a
              href="https://drive.google.com/file/d/1tvuwyPueqA5tnKhz0BKNypcH3zwytWhK/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 font-semibold hover:text-amber-500 transition duration-200"
            >
              <FaFileAlt size={20} /> Resume <ExternalLink size={16} />
            </a>
          </li>
        </ul>
      </div>

      {/* Mobile Full-Screen Overlay Menu */}
      <div
        className={`fixed top-0 right-0 w-full h-screen bg-gray-900 text-white flex flex-col items-center justify-center transform ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-500 ease-in-out lg:hidden`}
      >
        {/* Animated Close Button (Only Inside the Menu) */}
        {isMobileMenuOpen && (
          <button
            className="absolute top-5 right-5 text-white text-3xl transition-all duration-500 ease-in-out"
            onClick={toggleMobileMenu}
          >
            <FaTimes />
          </button>
        )}

        {/* Menu Items */}
        <ul className="space-y-6 text-2xl">
          {[
            { path: "/", name: "Home" },
            { path: "/projects", name: "Projects" },
            { path: "/contact", name: "Contact" },
          ].map(({ path, name }) => (
            <li key={path}>
              <Link
                to={path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`${
                  location.pathname === path
                    ? "text-amber-400 font-bold"
                    : "hover:text-amber-400"
                } transition duration-200`}
              >
                {name}
              </Link>
            </li>
          ))}
          <li>
            <a
              href="https://github.com/iseT1enLoc"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 font-semibold hover:text-amber-500 transition duration-200"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <FaGithub size={24} /> GitHub <ExternalLink size={20} />
            </a>
          </li>
          <li>
            <a
              href="https://drive.google.com/file/d/1tvuwyPueqA5tnKhz0BKNypcH3zwytWhK/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 font-semibold hover:text-amber-500 transition duration-200"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <FaFileAlt size={24} /> Resume <ExternalLink size={20} />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
