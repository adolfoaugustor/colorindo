import React, { useState } from 'react';
import './FAQSection.css';

function FAQSection() {
   const [activeIndex, setActiveIndex] = useState(null);

   const toggleFaq = (index) => {
      setActiveIndex(activeIndex === index ? null : index);
   };

   const faqItems = [
      {
         question: 'Como recebo os livros?',
         answer: 'Após a confirmação do pagamento, você receberá um email com o link para download de todos os 35 livros de colorir em formato PDF de alta qualidade.'
      },
      {
         question: 'Posso imprimir quantas vezes quiser?',
         answer: 'Sim! Você tem acesso vitalício e pode imprimir os livros quantas vezes desejar, para uso pessoal, familiar, células e escola dominical.'
      },
      {
         question: 'Qual a faixa etária recomendada?',
         answer: 'Os livros são ideais para crianças de 3 a 12 anos, com diferentes níveis de complexidade para acompanhar o desenvolvimento da criança.'
      },
      {
         question: 'Os arquivos funcionam em qualquer impressora?',
         answer: 'Sim! Os arquivos estão em formato PDF otimizado para impressão em qualquer impressora doméstica ou profissional, em papel A4 comum.'
      },
      {
         question: 'Preciso de internet para usar os livros?',
         answer: 'Não! Após o download, você pode usar os livros offline. Imprima e use quando e onde quiser, sem dependência de internet.'
      },
      {
         question: 'Como funciona a garantia de 7 dias?',
         answer: 'Se você não ficar satisfeita com o material, basta entrar em contato conosco em até 7 dias e devolvemos 100% do seu dinheiro, sem perguntas.'
      },
      {
         question: 'Que tipo de papel devo usar?',
         answer: 'Recomendamos papel sulfite A4 comum (75g) ou papel mais grosso (120g) para melhor resultado. Evite papel muito fino que pode borrar.'
      },
      {
         question: 'Os livros têm versículos bíblicos?',
         answer: 'Sim! Cada livro contém versículos bíblicos relacionados à história, ajudando no aprendizado e memorização das escrituras.'
      },
      {
         question: 'Quanto tempo demora para receber?',
         answer: 'O acesso é imediato! Assim que o pagamento for confirmado (geralmente em poucos minutos), você recebe o email com os links de download.'
      }
   ];

   return (
      <section className="faq-section">
         <div className="container">
         <h2>Perguntas Frequentes</h2>
         
         {faqItems.map((item, index) => (
            <div className="faq-item" key={index}>
               <div 
               className="faq-question" 
               onClick={() => toggleFaq(index)}
               >
               {item.question}
               </div>
               <div className={`faq-answer ${activeIndex === index ? 'active' : ''}`}>
               {item.answer}
               </div>
            </div>
         ))}
         
         <div style={{ textAlign: 'center', marginTop: '40px' }}>
            <a href="https://pay.kiwify.com.br/byaeuOo?coupon=PAPAI" className="cta-button">
               TIREI MINHAS DÚVIDAS, QUERO COMPRAR
            </a>
         </div>
         </div>
      </section>
   );
}

export default FAQSection;