import "./NavBar.css";
import { NavLink } from "react-router-dom";
import logo from "../assets/YKlogo.svg";

const NavBar = () => {
  return (
    <>
      <nav className="navbar">
        <ul className="navLinks">
          <li>
            <NavLink to="/"><img src={logo} alt="Yayoi Kusama logo" /></NavLink>
          </li>
        </ul>
        <ul className="navLinks">
          <li>
            <NavLink to="/gallery">Gallery</NavLink>
          </li>
          <li>
            <NavLink to="/timeline">Timeline</NavLink>
          </li>
          <li>
            <NavLink to="/copyright">Copyright</NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
