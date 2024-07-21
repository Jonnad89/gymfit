import React from 'react';
import './MainSection.css';
import fuerza from "../assets/fuerza.jpg"
import cardio from "../assets/cardio.jpg"
import yoga from "../assets/yoga.jfif"
const MainSection = () => {
  const photos = [
    {
      src: fuerza,
      alt: 'Foto 1',
      caption: 'Entrenamiento de Fuerza'
    },
    {
      src: cardio,
      alt: 'Foto 2',
      caption: 'Cardio Intenso'
    },
    {
      src: yoga,
      alt: 'Foto 3',
      caption: 'Yoga y Flexibilidad'
    }
  ];

  return (
    <section id='ejercicios' className="main-section">
      {photos.map((photo, index) => (
        <div key={index} className="photo-card">
          <img src={photo.src} alt={photo.alt} className="photo-img" />
          <div className="photo-caption">{photo.caption}</div>
        </div>
      ))}
    </section>
  );
};

export default MainSection;
