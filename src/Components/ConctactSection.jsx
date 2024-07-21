import React from 'react';
import './ContactSection.css';

const ContactSection = () => {
  return (
    <section id="contacto" className="contact-section">
      <h2>Contacto</h2>
      <p>
        Para más información, no dudes en contactarnos a través de nuestro número de teléfono o correo electrónico.
      </p>
      <p>
        <i className="fas fa-phone"></i> +123 456 7890
      </p>
      <p>
        <i className="fas fa-envelope"></i> info@gymfit.com
      </p>
    </section>
  );
};

export default ContactSection;
