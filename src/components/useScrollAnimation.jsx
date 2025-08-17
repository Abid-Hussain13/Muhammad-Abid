import { useState, useEffect, useRef } from 'react'

function useScrollAnimation(threshold = 0.2, delayTime = 0 ) {
      const [delayPassed, setDelayPassed] = useState(false);
  const [inView, setInView] = useState(false);
  const elementRef = useRef(null);

  // Delay timer
  useEffect(() => {
    const timer = setTimeout(() => {
      setDelayPassed(true);
    }, delayTime ); // wait 2 seconds
    return () => clearTimeout(timer);
  }, []);

  // Scroll observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      {threshold}
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return {ref : elementRef, inView, delayPassed}
}

export default useScrollAnimation