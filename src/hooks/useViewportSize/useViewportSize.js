import { useState, useEffect } from 'react';

export default function useViewportSize() {
  function getSize() {
    return {
      width: window.innerWidth || document.documentElement.clientWidth,
      height: window.innerHeight || document.documentElement.clientHeight
    };
  }

  const [viewportSize, setViewportSize] = useState(getSize);

  useEffect(() => {
    function handleResize() {
      setViewportSize(getSize());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return viewportSize;
}
