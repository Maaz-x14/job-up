import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

const NavBar = () => {
  return (
    <nav className="flex items-center justify-between px-6 py-4 text-white shadow-md bg-gray-400 dark:bg-gray-900 dark:text-white">
      <div className="text-xl font-bold text-[#fff] drop-shadow-md tracking-wider" style={{ fontFamily: 'Audiowide, sans-serif' }}>
        Planet Beyond
      </div>

      <ul className="flex gap-6">
        <li><Link to="/" className="hover:underline">Home</Link></li>
        <li><Link to="/about" className="hover:underline">About</Link></li>
        <li><Link to="/contact" className="hover:underline">Contact Us</Link></li>
      </ul>
      <ThemeToggle />
    </nav>
  );
};

export default NavBar;
