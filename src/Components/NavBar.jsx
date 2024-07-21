import React, { useState } from 'react';
import './NavBar.css';

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLinkClick = () => {
    setMenuOpen(false); // Cierra el menú al hacer clic en un enlace
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        GymFit
      </div>
      <div className={`navbar-menu ${menuOpen ? 'open' : ''}`} onClick={handleMenuClick}>
        <i className={`fas ${menuOpen ? 'fa-times' : 'fa-bars'}`}></i>
      </div>
      <ul className={`navbar-links ${menuOpen ? 'active' : ''}`}>
        <li><a href="#ejercicios" onClick={handleLinkClick}>Ejercicios</a></li>
        <li><a href="#contacto" onClick={handleLinkClick}>Contacto</a></li>
        <li><a href="#quienes-somos" onClick={handleLinkClick}>Quiénes Somos</a></li>
      </ul>
    </nav>
  );
};

export default NavBar;
