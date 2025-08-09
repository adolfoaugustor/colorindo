import React from 'react';
import './BenefitsSection.css';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

function BenefitsSection() {
   const sectionRef = useIntersectionObserver();

   const benefits = [
      {
         title: 'Valores Cristãos Sólidos',
         description: 'Histórias bíblicas cuidadosamente adaptadas que ensinam amor, fé, perdão e bondade de forma natural e memorável'
      },
      {
         title: 'Desenvolvimento Completo',
         description: 'Estimula criatividade, coordenação motora fina, concentração e habilidades cognitivas essenciais para o crescimento'
      },
      {
         title: 'Tempo de Qualidade',
         description: 'Momentos especiais em família longe das telas, fortalecendo vínculos e criando memórias duradouras'
      },
      {
         title: 'Acesso Vitalício',
         description: 'Download instantâneo após compra, imprima ilimitadamente, use offline, sem dependência de internet'
      },
      {
         title: 'Conteúdo Seguro',
         description: 'Material 100% cristão, livre de violência, desenvolvido por educadores cristãos experientes'
      },
      {
         title: 'Qualidade Premium',
         description: 'Ilustrações profissionais, alta resolução para impressão, papel e formato otimizados para crianças'
      }
   ];

   return (
      <section className="benefits-section" ref={sectionRef}>
         <div className="container">
         <h2>Benefícios Únicos e Comprovados</h2>
         <p>Para o desenvolvimento das crianças</p>
         
         <div className="benefits-grid">
            {benefits.map((benefit, index) => (
               <div className="benefit-card" key={index}>
               <h3>{benefit.title}</h3>
               <p>{benefit.description}</p>
               </div>
            ))}
         </div>
         </div>
      </section>
   );
}

export default BenefitsSection;