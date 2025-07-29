import React from 'react';

// The main Hero functional component
const Hero = () => {
  return (
    // Hero Component Container
    // Uses Tailwind CSS for responsive styling, centering, and shadows.
    <div className="relative w-full bg-param-blue  overflow-hidden p-8 md:p-12 min-h-[500px]">
      <div className="relative z-10 text-center text-white">
        {/* Headline */}
        <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
          Uniform T-Shirts Engineered for Everyday Performance.
        </h1>
        {/* Subheadline */}
        <p className="text-lg md:text-xl mb-6  opacity-90">
          From round-neck classics to corporate collars — we export premium-quality T-shirts and hosiery uniforms built for durability, comfort, and style.
        </p>
      
        
      </div>
    </div>
  );
};

// Export the Hero component as default so it can be imported and used in other files
export default Hero;