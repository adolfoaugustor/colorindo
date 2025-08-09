import React from 'react';
import './UsageSection.css';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

function UsageSection() {
   const sectionRef = useIntersectionObserver();

   const usages = [
      {
         title: 'Células e Grupos',
         description: 'Transforme suas células em momentos especiais! Engaje crianças e fortaleça vínculos familiares com atividades que ensinam enquanto divertem.'
      },
      {
         title: 'Escola Dominical',
         description: 'Revolucione suas aulas! Recursos visuais profissionais que tornam o aprendizado bíblico interativo, memorável e cheio de significado.'
      },
      {
         title: 'Devocional Familiar',
         description: 'Crie tradições duradouras! Fortaleça a fé em família com momentos especiais que ensinam valores cristãos de forma natural e divertida.'
      },
      {
         title: 'Ministério Infantil',
         description: 'Potencialize seu ministério! Material profissional que facilita o ensino bíblico e mantém as crianças atentas e participativas.'
      },
      {
         title: 'Aconselhamento',
         description: 'Ferramenta terapêutica! Ajude crianças a expressarem sentimentos e aprender valores através da arte e reflexão bíblica.'
      },
      {
         title: 'Eventos Especiais',
         description: 'Momentos únicos! Ideal para retiros, acampamentos, festivais e eventos especiais da igreja com atividades que marcam vidas.'
      }
   ];

   return (
      <section className="usage-section" ref={sectionRef}>
         <div className="container">
         <h2>Onde Usar Nossos Livros</h2>
         <p>Versatilidade comprovada em diversos contextos cristãos</p>
         
         <div className="usage-grid">
            {usages.map((usage, index) => (
               <div className="usage-card" key={index}>
               <h3>{usage.title}</h3>
               <p>{usage.description}</p>
               </div>
            ))}
         </div>
         
         <div style={{ textAlign: 'center' }}>
            <a href="#oferta" className="cta-button">QUERO VER AS OFERTAS</a>
         </div>
         </div>
      </section>
   );
}

export default UsageSection;