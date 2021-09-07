import { useState, useEffect } from 'react';

export default function useScroll() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollTop, setScrollTop] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window !== undefined ? window.pageYOffset : 80;

      setIsScrolled(scrollTop > 50);
      setScrollTop(scrollTop);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return { isScrolled, scrollTop };
}
