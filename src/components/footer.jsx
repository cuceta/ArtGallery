import "./footer.css";
import { NavLink } from "react-router-dom";


const Footer = () => {
  return (
    <>
      <footer className="footer">
        <ul className="footerLinks">
          <li>
            <NavLink to="/">Yayoi Kusama</NavLink>
          </li>
        </ul>
        <ul className="footerLinks">
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
      </footer>
    </>
  );
};

export default Footer;