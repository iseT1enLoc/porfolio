import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa"; // Import GitHub icon from React Icons
import { ExternalLink } from "lucide-react"; // External link icon

const Navbar = () => {
  return (
    <nav className="navbar flex justify-around items-center p-4 bg-gray-900 text-white shadow-lg">
      <Link to="/" className="text-amber-50 font-bold text-xl">
        Tien Loc
      </Link>

      <ul className="nav-list flex space-x-6">
        <li><Link to="/" className="hover:text-amber-400">Home</Link></li>
        <li><Link to="/projects" className="hover:text-amber-400">Projects</Link></li>
        <li><Link to="/contact" className="hover:text-amber-400">Contact</Link></li>
        <li>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-amber-300 font-semibold hover:text-amber-500 transition duration-200"
          >
            <FaGithub size={20} /> GitHub <ExternalLink size={16} />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
