import { useState } from "react";
import { NavLink } from "react-router-dom";
//import { Menu, X } from "lucide-react"; // hamburger icons (optional)
import { Menu, X } from "lucide-react";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="  bg-blue-500 px-4 py-3 shadow-md">
      <div className="flex justify-between items-center">
        <div className="text-white text-2xl font-bold">Portfolio</div>

        {/* Menu Icon - shown on small screens */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-5 text-white text-lg font-semibold">
          <NavLink to="/" className="hover:text-black">
            Home
          </NavLink>
          <NavLink to="/Skills" className="hover:text-black">
            Skills
          </NavLink>
          <NavLink to="/Project" className="hover:text-black">
            Project
          </NavLink>
          <NavLink to="/ContactMe" className="hover:text-black">
            Contact Me
          </NavLink>
          <NavLink to="/About" className="hover:text-black">
            About
          </NavLink>
          <div>
            <a href="../../public/Dharmu (1).pdf" download>
              Download Resume
            </a>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="flex flex-col md:hidden mt-2 gap-2 text-white text-lg">
          <NavLink to="/" onClick={toggleMenu} className="hover:text-black">
            Home
          </NavLink>
          <NavLink
            to="/Skills"
            onClick={toggleMenu}
            className="hover:text-black"
          >
            Skills
          </NavLink>
          <NavLink
            to="/Project"
            onClick={toggleMenu}
            className="hover:text-black"
          >
            Project
          </NavLink>
          <NavLink
            to="/ContactMe"
            onClick={toggleMenu}
            className="hover:text-black"
          >
            Contact Me
          </NavLink>
          <NavLink
            to="/About"
            onClick={toggleMenu}
            className="hover:text-black"
          >
            About
          </NavLink>
        </div>
      )}
    </nav>
  );
};

export default Header;
