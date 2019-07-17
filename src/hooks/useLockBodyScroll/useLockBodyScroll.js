import { useLayoutEffect } from 'react';

/**
 * Prevents scrolling of body until component unmounts
 */
export default function useLockBodyScroll() {
  useLayoutEffect(() => {
    // Store original body overflow value
    const previousOverflow = document.body.style.overflow;

    // Prevent body from scrolling
    document.body.style.overflow = 'hidden';

    // Reset body overflow attribute to original value
    return () => {
      document.body.style.overflow = previousOverflow || '';
    };
  }, []); // Empty array ensures effect is only run on mount and unmount
}
