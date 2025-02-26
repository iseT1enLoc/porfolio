import { Link, useLocation } from "react-router-dom";
import { FaGithub, FaFileAlt } from "react-icons/fa";
import { ExternalLink } from "lucide-react";

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="navbar flex justify-around items-center p-4 bg-gray-900 text-white shadow-lg">
      <Link to="/" className="text-amber-50 font-bold text-xl">
        Tien Loc
      </Link>

      <ul className="nav-list flex space-x-6">
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
            <FaFileAlt  size={20} /> Resume <ExternalLink size={16} />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

