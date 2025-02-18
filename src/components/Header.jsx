/* eslint-disable react/prop-types */
import { useState } from 'react';
import { Link } from 'react-scroll';

const Header = ({ toggleTheme, theme }) => {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <header id="header">
      <nav>
        <img src="./resources/J_logo.png" className="logo" alt="logo" />
        <input
          type="checkbox"
          id="theme-switch"
          className="theme-toggle"
          onChange={toggleTheme}
          checked={theme === 'light'}
        />
        <label htmlFor="theme-switch" className="toggle-label">
          <i className="fas fa-sun"></i>
          <i className="fas fa-moon"></i>
        </label>
        <div className="hamburger" onClick={toggleMenu}>
          <i className="fas fa-bars"></i>
        </div>
        <ul id="sidemenu" className={menuActive ? 'active' : ''}>
          <li><Link to="home" smooth={true} duration={500}>Home</Link></li>
          <li><Link to="about" smooth={true} duration={500}>About</Link></li>
          <li><Link to="skills" smooth={true} duration={500}>Skills</Link></li>
          <li><Link to="certificate" smooth={true} duration={500}>Certificates</Link></li>
          <li><Link to="projects" smooth={true} duration={500}>Projects</Link></li>
          <li><Link to="contact" smooth={true} duration={500}>Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;