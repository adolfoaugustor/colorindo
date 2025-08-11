// src/hooks/useIntersectionObserver.js
import { useCallback, useEffect, useState } from 'react';

function useIntersectionObserver(options = {}) {
   const [node, setNode] = useState(null);

   // Callback ref: React chamará isso com o elemento DOM atual
   const ref = useCallback((el) => {
      setNode(el);
   }, []);

   useEffect(() => {
      if (!node) return;

      const observerOptions = {
         threshold: options.threshold ?? 0.1,
         rootMargin: options.rootMargin ?? '0px 0px -50px 0px',
      };

      const observer = new IntersectionObserver((entries) => {
         entries.forEach((entry) => {
         if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            // Opcional: pare após a primeira interseção
            observer.unobserve(entry.target);
         }
         });
      }, observerOptions);

      observer.observe(node);

      return () => {
         observer.unobserve(node);
         observer.disconnect();
      };
   }, [node, options.threshold, options.rootMargin]);

   return ref; // Uso: <div ref={ref} />
}

export default useIntersectionObserver;