import React from 'react';
import './ExperienceSection.css';

const ExperienceSection = () => {
  return (
    <section id='quienes-somos' className="experience-section">
      <div className="experience-content">
        <h2>Experiencia en GymFit</h2>
        <p>
          En GymFit, te ofrecemos una experiencia única de entrenamiento. Nuestro gimnasio está equipado con las últimas
          tecnologías y un equipo de profesionales que te guiarán en cada paso de tu viaje fitness. Ya sea que estés buscando
          mejorar tu fuerza, aumentar tu resistencia o simplemente mantenerte en forma, tenemos lo que necesitas.
        </p>
        <p>
          Los beneficios de unirse a GymFit incluyen:
        </p>
        <ul>
          <li>Acceso a instalaciones de primera clase</li>
          <li>Entrenadores personales certificados</li>
          <li>Clases grupales dinámicas</li>
          <li>Programas personalizados de entrenamiento</li>
          <li>Ambiente motivador y amigable</li>
        </ul>
        <div className="star-rating">
          <span className="star">&#9733;</span>
          <span className="star">&#9733;</span>
          <span className="star">&#9733;</span>
          <span className="star">&#9733;</span>
          <span className="star">&#9733;</span>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
