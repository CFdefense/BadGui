// src/pages/HomePage.jsx
import React, { useState, useEffect } from 'react';
import logo from '/sign.png';
import AnimateLogo from '../animations/AnimateLogo'; // Correct the import

const HomePage = () => {
  // Create a state to control when the animation should start
  const [startAnimation, setStartAnimation] = useState(false);

  // Example: Trigger animation after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setStartAnimation(true);
    }, 3000); // 3 seconds delay to simulate an automatic trigger

    // Cleanup the timer when the component is unmounted
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="text-white font-myFont w-full h-screen text-center relative">
      {/* Header and Navbar */}
      <h1 className="flex justify-center text-9xl mt-12">Freaky Food</h1>
      <ul className="flex justify-center mt-6 space-x-10 text-4xl">
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
