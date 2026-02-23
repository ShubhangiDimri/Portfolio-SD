import { useState, useEffect } from 'react';

const CursorGlow = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let rafId;

    const updateMousePosition = (e) => {
      // Use requestAnimationFrame for smooth performance
      if (rafId) {
        cancelAnimationFrame(rafId);
      }
      
      rafId = requestAnimationFrame(() => {
        setMousePosition({
          x: e.clientX,
          y: e.clientY
        });
      });
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    // Add event listeners
    document.addEventListener('mousemove', updateMousePosition);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      if (rafId) {
        cancelAnimationFrame(rafId);
      }
      document.removeEventListener('mousemove', updateMousePosition);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div
      className={`fixed inset-0 pointer-events-none z-30 transition-opacity duration-300 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
      style={{
        background: `radial-gradient(circle 600px at ${mousePosition.x}px ${mousePosition.y}px, 
          rgba(59, 130, 246, 0.12) 0%, 
          rgba(96, 165, 250, 0.06) 25%, 
          rgba(255, 255, 255, 0.03) 50%, 
          transparent 70%)`
      }}
    />
  );
};

export default CursorGlow;