import { useState, useEffect, useRef } from 'react'

function useScrollAnimation(threshold = 0.2, delayTime = 0) {
  const [delayPassed, setDelayPassed] = useState(false);
  const [inView, setInView] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false); // ✅ new lock
  const elementRef = useRef(null);

  // Delay timer
  useEffect(() => {
    const timer = setTimeout(() => {
      setDelayPassed(true);
    }, delayTime);
    return () => clearTimeout(timer);
  }, [delayTime]);

  // Scroll observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setInView(true);
          setHasAnimated(true);   // ✅ mark animation as done
          observer.disconnect();  // stop observing
        }
      },
      { threshold }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [threshold, hasAnimated]);

  return { ref: elementRef, inView, delayPassed, hasAnimated };
}

export default useScrollAnimation;
