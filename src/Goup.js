import React, { useState, useEffect } from 'react';



export default function YourComponent() {
  const [showScrollButton, setShowScrollButton] = useState(false);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    if (scrollY > 200) {
      setShowScrollButton(true);
    } else {
      setShowScrollButton(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
     
      {showScrollButton && (
        <button
          onClick={scrollToTop}
          className="btn btn-danger"
          style={{
            position: 'fixed',
            bottom: '22px',
            right: '20px',
            zIndex: '1000',
          }}
        >
         <i class="bi bi-arrow-up"></i>
        </button>
      )}
    </div>
  );
}
