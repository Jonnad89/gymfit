import React from 'react';
import './TestimonialsSection.css';
import ana from "../assets/ana.jpg"
import luis from "../assets/luis.jpg"
import carla from "../assets/carla.jpg"
const testimonials = [
  {
    name: "Ana Gómez",
    feedback: "¡GymFit cambió mi vida! Las instalaciones son de primera y los entrenadores son muy profesionales.",
    photo: ana
  },
  {
    name: "Luis Martínez",
    feedback: "El ambiente en GymFit es muy motivador. Las clases grupales son increíbles.",
    photo: luis
  },
  {
    name: "Carla López",
    feedback: "Gracias a GymFit, he logrado alcanzar mis metas de fitness. ¡Muy recomendable!",
    photo: carla
  }
];

const TestimonialsSection = () => {
  return (
    <section className="testimonials-section">
      <h2>Testimonios</h2>
      <div className="testimonials-container">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-card">
            <img src={testimonial.photo} alt={testimonial.name} className="testimonial-photo" />
            <div className="testimonial-text">
              <p>"{testimonial.feedback}"</p>
              <p><strong>- {testimonial.name}</strong></p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;
