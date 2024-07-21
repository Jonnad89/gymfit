import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer id='contacto' className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h2>GymFit</h2>
          <p>
            En GymFit, nos dedicamos a ofrecerte las mejores instalaciones y servicios para alcanzar tus objetivos fitness.
            Únete a nosotros y descubre cómo podemos ayudarte a transformar tu vida.
          </p>
        </div>
        <div className="footer-section links">
          <h2>Enlaces Rápidos</h2>
          <ul>
            <li><a href="#ejercicios">Ejercicios</a></li>
            <li><a href="#contacto">Contacto</a></li>
            <li><a href="#quienes-somos">Quiénes Somos</a></li>
          </ul>
        </div>
        <div className="footer-section contact">
          <h2>Contacto</h2>
          <p>
            <i className="fas fa-map-marker-alt"></i> Calle Falsa 123, Ciudad, País
          </p>
          <p>
            <i className="fas fa-phone"></i> +123 456 7890
          </p>
          <p>
            <i className="fas fa-envelope"></i> info@gymfit.com
          </p>
        </div>
      </div>
      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} GymFit | Todos los derechos reservados.
      </div>
    </footer>
  );
};

export default Footer;
