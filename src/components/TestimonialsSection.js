import React from 'react';
import './TestimonialsSection.css';
import depoimento from '../assets/depoimento.jpg';
import depoimento1 from '../assets/depoimento1.jpg';
import depoimento2 from '../assets/depoimento2.jpg';
import depoimento3 from '../assets/depoimento3.jpg';
import depoimento4 from '../assets/depoimento4.jpg';
import depoimento5 from '../assets/depoimento5.jpg';
import depoimento6 from '../assets/depoimento6.jpg';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

function TestimonialsSection() {
   const sectionRef = useIntersectionObserver();

   const testimonials = [
      { image: depoimento, alt: 'Depoimento de Sara Pereira' },
      { image: depoimento1, alt: 'Depoimento de Cliente Confirmação' },
      { image: depoimento2, alt: 'Depoimento de Cliente Fiel' },
      { image: depoimento3, alt: 'Depoimento de Feedback Positivo' },
      { image: depoimento4, alt: 'Depoimento de Cliente Satisfeita' },
      { image: depoimento5, alt: 'Depoimento de Ludyany Guimarães' },
      { image: depoimento6, alt: 'Depoimento de Luciana' }
   ];

   return (
      <section className="testimonials-section" ref={sectionRef}>
         <div className="container">
         <h2>Depoimentos Reais dos Nossos Clientes</h2>
         <div className="rating">4,9/5 - 347 avaliações</div>
         
         <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
               <div className="testimonial-card" key={index}>
               <img src={testimonial.image} alt={testimonial.alt} />
               </div>
            ))}
         </div>
         </div>
      </section>
   );
}

export default TestimonialsSection;