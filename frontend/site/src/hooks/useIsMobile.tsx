import { useState, useEffect } from 'react';

const useIsMobile = () => {

  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {

    const handleResize = () => {
      setIsMobile(window.matchMedia("(max-width: 768px)").matches);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
    
  }, []);

  return isMobile;
};

export default useIsMobile;
