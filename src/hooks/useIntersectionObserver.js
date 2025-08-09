import { useEffect, useRef } from 'react';

function useIntersectionObserver(options = {}) {
   const ref = useRef(null);
   
   useEffect(() => {
      const observerOptions = {
         threshold: options.threshold || 0.1,
         rootMargin: options.rootMargin || '0px 0px -50px 0px'
      };

      const observer = new IntersectionObserver(function(entries) {
         entries.forEach(entry => {
         if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
         }
         });
      }, observerOptions);

      if (ref.current) {
         observer.observe(ref.current);
      }

      return () => {
         if (ref.current) {
         observer.unobserve(ref.current);
         }
      };
   }, [options.threshold, options.rootMargin]);

  return ref;
}

export default useIntersectionObserver;