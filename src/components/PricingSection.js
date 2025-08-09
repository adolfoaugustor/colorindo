import React from 'react';
import './PricingSection.css';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

function PricingSection() {
   const sectionRef = useIntersectionObserver();

   return (
      <section className="pricing-section" id="oferta" ref={sectionRef}>
         <div className="container">
         <div className="offer-banner">
            <h3>OFERTA LIMITADA - Apenas no dia 27/07/25</h3>
         </div>
         
         <h2>Escolha Sua Oferta Especial</h2>
         <p>Livros de qualidade profissional para enriquecer seus momentos de fé</p>

         <div className="pricing-cards">
            <div className="pricing-card">
               <h3>Pacote Básico</h3>
               <div className="price-old">R$ 47,00</div>
               <div style={{ color: '#e74c3c', fontWeight: 'bold', margin: '10px 0' }}>-79%</div>
               <div className="price-new">R$ 10,00</div>
               <div className="savings">Você economiza R$ 37,00</div>
               
               <ul className="features-list">
               <li>35 Livros de Colorir Completos</li>
               <li>Download Imediato</li>
               <li>Acesso Vitalício</li>
               <li>Garantia de 7 dias</li>
               </ul>
               
               <a href="https://pay.kiwify.com.br/byaeuOo" className="cta-button" style={{ width: '100%', textAlign: 'center', marginTop: '20px' }}>QUERO O PACOTE BÁSICO</a>
            </div>
            
            <div className="pricing-card popular">
               <div className="popular-badge">MAIS VENDIDO</div>
               <h3>Pacote Premium</h3>
               <div className="price-old">R$ 73,70</div>
               <div style={{ color: '#e74c3c', fontWeight: 'bold', margin: '10px 0' }}>-77%</div>
               <div className="price-new">R$ 17,00</div>
               <div className="savings">Você economiza R$ 56,70</div>
               
               <h4 style={{ margin: '20px 0 15px 0', color: '#2c3e50' }}>TUDO DO PACOTE BÁSICO +</h4>
               
               <div className="bonus-section">
               <div className="bonus-item">
                  <span>🎁</span>
                  <span><strong>BÔNUS 1:</strong> Desafio Bíblico (7 dias)</span>
                  <span className="bonus-price">R$ 5,90</span>
               </div>
               
               <div className="bonus-item">
                  <span>🎁</span>
                  <span><strong>BÔNUS 2:</strong> Versículos Ilustrados para memorização</span>
                  <span className="bonus-price">R$ 9,90</span>
               </div>
               
               <div className="bonus-images">
                  <img src="https://luzdoceukidsbr.netlify.app/assets/image_1753440167020-BtEfqc-k.png" alt="Versículo 1" />
                  <img src="https://luzdoceukidsbr.netlify.app/assets/image_1753440170263-vn8CxeDA.png" alt="Versículo 2" />
                  <img src="https://luzdoceukidsbr.netlify.app/assets/image_1753440173833-CST0qpYL.png" alt="Versículo 3" />
                  <img src="https://luzdoceukidsbr.netlify.app/assets/image_1753440179181-D9GSxIRi.png" alt="Versículo 4" />
                  <img src="https://luzdoceukidsbr.netlify.app/assets/image_1753440190840-5APnGjdy.png" alt="Versículo 5" />
               </div>
               
               <div className="bonus-item">
                  <span>🎁</span>
                  <span><strong>BÔNUS 3:</strong> Plano Devocional</span>
                  <span className="bonus-price">R$ 10,90</span>
               </div>
               </div>
               <p>OBS: Lembra de marcar a caixinha pra adicionar o pacote Premium!</p>
               <a href="https://pay.kiwify.com.br/byaeuOo" className="cta-button" style={{ width: '100%', textAlign: 'center', marginTop: '20px' }}>QUERO O PACOTE PREMIUM</a>
            </div>
         </div>
         </div>
      </section>
   );
}

export default PricingSection;