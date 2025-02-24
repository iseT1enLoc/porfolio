import { Link } from "react-router-dom";
import "../css/Navbar.css"; // Import the CSS file

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="text-amber-50 font-bold">Tien Loc</Link>
      <ul className="nav-list">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li>
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
            Github
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
