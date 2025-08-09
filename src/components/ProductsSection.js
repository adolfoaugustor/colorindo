import React from 'react';
import './ProductsSection.css';
import arcaDeNoe from '../assets/arca-de-noe.png';
import pascoaCrista from '../assets/pascoa-crista.png';
import daviGolias from '../assets/davi-e-golias.png';
import jonasBaleia from '../assets/jonas-e-a-baleia.png';
import adaoEva from '../assets/adao-e-eva.png';
import moises from '../assets/moises.png';
import pedroDiscipulo from '../assets/pedrodiscipulo.png';
import criacaoMundo from '../assets/criacao-do-mundo.png';
import capaMenina from '../assets/capa-menina.webp';
import capaMenino from '../assets/capa-menino.webp';
import capaYeshua from '../assets/capa-yeshua.webp';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

function ProductsSection() {
   const sectionRef = useIntersectionObserver();

   const products = [
      { image: arcaDeNoe, title: 'A Arca de Noé' },
      { image: pascoaCrista, title: 'Páscoa Cristã' },
      { image: daviGolias, title: 'Davi e Golias' },
      { image: jonasBaleia, title: 'Jonas e a Baleia' },
      { image: adaoEva, title: 'Adão e Eva' },
      { image: moises, title: 'Moisés' },
      { image: pedroDiscipulo, title: 'Pedro Discípulo' },
      { image: criacaoMundo, title: 'A Criação do Mundo' },
      { image: capaMenina, title: 'Cristão Menina' },
      { image: capaMenino, title: 'Cristão Menino' },
      { image: capaYeshua, title: 'Yeshua' }
   ];

   return (
      <section className="products-section" ref={sectionRef}>
         <div className="container">
         <h2>Conheça Nossos Livros Cristãos</h2>
         <p>Histórias bíblicas cuidadosamente ilustradas para ensinar valores cristãos de forma lúdica e educativa</p>
         
         <div className="products-grid">
            {products.map((product, index) => (
               <div className="product-card" key={index}>
               <img src={product.image} alt={product.title} />
               <h3>{product.title}</h3>
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

export default ProductsSection;