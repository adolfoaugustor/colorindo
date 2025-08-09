import React from 'react';
import './Header.css';
import colorindoLogo from '../assets/colorindo-com-fe.jfif';
import livrosImage from '../assets/35livros.png';

function Header() {
   return (
      <header className="header">
         <div className="container">
         <img src={colorindoLogo} alt="Luz do Céu Kids" className="fade-in" />
         
         <img src={livrosImage} alt="35 Livros de Colorir Cristãos" className="hero-image fade-in" />
         
         <h1 className="fade-in">35 Livros de Colorir Cristãos</h1>
         <p className="fade-in">Transforme momentos especiais com sua família, célula e escola dominical</p>
         
         <div className="features fade-in">
            <div className="feature">
               <span>⭐</span>
               <span>Células</span>
            </div>
            <div className="feature">
               <span>🏠</span>
               <span>Escola Dominical</span>
            </div>
            <div className="feature">
               <span>❤️</span>
               <span>Devocional Familiar</span>
            </div>
         </div>
         
         <a href="#oferta" className="cta-button fade-in">QUERO VER AS OFERTAS</a>
         </div>
      </header>
   );
}

export default Header;