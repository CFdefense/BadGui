import React, { useState, useEffect } from 'react';
import logo from '/sign.png';
import AnimateLogo from '../animations/AnimateLogo';

const HomePage = () => {
  const [startAnimation, setStartAnimation] = useState(false); // Sign useState

  // Sign Use Effect -> Need to tie to useState of Word Chase
  useEffect(() => {
    //! replace w use State of Word Chase when implemented
    const timer = setTimeout(() => {
      setStartAnimation(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="text-white font-myFont w-full h-screen text-center relative">
      {/* Header and Navbar */}
      <h1 className="flex justify-center text-9xl mt-12">Freaky Food</h1>
      <ul className="flex justify-center mt-6 space-x-10 text-4xl cursor-pointer">
        <li>Explore</li>
        <li>Top Picks</li>
        <li>About</li>
        <li>Profile</li>
      </ul>

      {/* Circle Logo with animation */}
      <div className="absolute bottom-1 right-8 w-64 h-64 opacity-85">
        <AnimateLogo start={startAnimation} delay={0.25}>
          <img src={logo} alt="Logo" className="w-full h-full object-cover" />
        </AnimateLogo>
      </div>

      {/* Need Character and Character States */}
      
    </div>
  );
};

export default HomePage;
