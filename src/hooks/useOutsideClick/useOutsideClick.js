import { useRef, useEffect } from 'react';

/**
 * Executes given callback when click occurs outside element
 * @param {Function} handler - Callback to execute when clicked outside element
 */
export default function useOutsideClick(handler) {
  const ref = useRef(null);

  useEffect(() => {
    const listener = e => {
      if (!ref.current || ref.current.contains(e.target)) {
        return;
      }
      handler(e);
    };

    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);
    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [ref, handler]);

  return ref;
}
