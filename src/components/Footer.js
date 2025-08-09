import React from 'react';
import './Footer.css';

function Footer() {
   return (
      <footer className="footer">
         <div className="container">
         <h3>💬 Dúvidas? Fale conosco!</h3>
         <p>Nossa equipe está pronta para ajudar você</p>
         <a href="https://wa.me/5585989428057?text=Olá! Tenho interesse nos livros de colorir cristãos" className="whatsapp-button" target="_blank" rel="noopener noreferrer">Falar no WhatsApp</a>
         </div>
      </footer>
   );
}

export default Footer;