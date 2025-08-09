import React from 'react';
import './SecuritySection.css';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

function SecuritySection() {
   const sectionRef = useIntersectionObserver();

   return (
      <section className="security-section" ref={sectionRef}>
         <div className="container">
         <h2>🔒 Compra 100% Segura</h2>
         
         <div className="security-grid">
            <div className="security-item">
               <h4>Garantia de 7 Dias</h4>
               <p>Se por qualquer motivo você não ficar 100% satisfeita com nossos livros de colorir, devolvemos seu dinheiro sem perguntas!</p>
               <ul style={{ textAlign: 'left', marginTop: '15px' }}>
               <li>✓ Sem burocracias</li>
               <li>✓ Reembolso total</li>
               <li>✓ Compra 100% segura</li>
               </ul>
            </div>
            
            <div className="security-item">
               <h4>Pagamento Seguro</h4>
               <p>Sua compra é protegida pelos melhores sistemas de segurança. Dados criptografados e transação 100% segura.</p>
               <ul style={{ textAlign: 'left', marginTop: '15px' }}>
               <li>✓ SSL Certificado</li>
               <li>✓ Dados protegidos</li>
               <li>✓ Transação segura</li>
               </ul>
            </div>
            
            <div className="security-item">
               <h4>Acesso Imediato</h4>
               <p>Após a confirmação do pagamento, você recebe imediatamente todos os 35 livros de colorir em seu email.</p>
               <ul style={{ textAlign: 'left', marginTop: '15px' }}>
               <li>✓ Download instantâneo</li>
               <li>✓ Arquivos em alta qualidade</li>
               <li>✓ Suporte incluso</li>
               </ul>
            </div>
         </div>
         
         <div style={{ marginTop: '40px' }}>
            <p><strong>✓Pagamento processado por plataforma segura</strong></p>
            <p><strong>✓Criptografia SSL de 256 bits</strong></p>
            <p><strong>✓Garantia de reembolso em 7 dias</strong></p>
            <p><strong>✓Download imediato após confirmação</strong></p>
            <p><strong>✓Suporte dedicado via WhatsApp</strong></p>
            <p style={{ marginTop: '20px', fontSize: '1.1rem' }}><strong>Aceitos todos os cartões e PIX</strong></p>
         </div>
         </div>
      </section>
   );
}

export default SecuritySection;