import { useEffect, useState } from 'react';

export default function useIsMobile() {
  const [isMobile, setIsMobile] = useState(window.innerWidth);

  useEffect(() => {
    const onResize = () => {
      setIsMobile(window.outerWidth);
    };

    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, [isMobile]);

  return isMobile;
}
