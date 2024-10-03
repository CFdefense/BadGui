import React, { useState, useEffect } from 'react';
import logo from '/sign.png';
import AnimateLogo from '../animations/AnimateLogo';

const HomePage = () => {
  const [startAnimation, setStartAnimation] = useState(false);
  const [runawayEnabled, setRunawayEnabled] = useState(true); // Add a state to toggle hover effect

  // States to store the positions of the header and menu items
  const [headerPosition, setHeaderPosition] = useState({ x: 0, y: 0 });
  const [explorePosition, setExplorePosition] = useState({ x: 0, y: 0 });
  const [topPicksPosition, setTopPicksPosition] = useState({ x: 0, y: 0 });
  const [aboutPosition, setAboutPosition] = useState({ x: 0, y: 0 });
  const [profilePosition, setProfilePosition] = useState({ x: 0, y: 0 });

  // Start the animation for the logo after a delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setStartAnimation(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  // Function to generate random positions 
  const getRandomPosition = (elementWidth, elementHeight) => {
    // restricting to ensure they dont fly away
    const viewportWidth = 500, viewportHeight = 500;

    // Calculate the Max x and y to use for rand
    const maxX = viewportWidth - elementWidth, maxY = viewportHeight - elementHeight;

    // Calc new random x and y
    const randomX = Math.random() * maxX, randomY = Math.random() * maxY;

    return { x: randomX, y: randomY };
  };

  // Handlers to update the positions when hovering
  const handleHeaderHover = (e) => {
    if (runawayEnabled) {
      const { width, height } = e.target.getBoundingClientRect();
      setHeaderPosition(getRandomPosition(width, height));
    }
  };

  const handleExploreHover = (e) => {
    if (runawayEnabled) {
      const { width, height } = e.target.getBoundingClientRect();
      setExplorePosition(getRandomPosition(width, height));
    }
  };

  const handleTopPicksHover = (e) => {
    if (runawayEnabled) {
      const { width, height } = e.target.getBoundingClientRect();
      setTopPicksPosition(getRandomPosition(width, height));
    }
  };

  const handleAboutHover = (e) => {
    if (runawayEnabled) {
      const { width, height } = e.target.getBoundingClientRect();
      setAboutPosition(getRandomPosition(width, height));
    }
  };

  const handleProfileHover = (e) => {
    if (runawayEnabled) {
      const { width, height } = e.target.getBoundingClientRect();
      setProfilePosition(getRandomPosition(width, height));
    }
  };

  // Function to reset positions -> when sign is clicked
  const handleLogoClick = () => {
    setRunawayEnabled(false); // Disable the hover effect

    // reset positions
    setHeaderPosition({ x: 0, y: 0 });
    setExplorePosition({ x: 0, y: 0 });
    setTopPicksPosition({ x: 0, y: 0 });
    setAboutPosition({ x: 0, y: 0 });
    setProfilePosition({ x: 0, y: 0 });

    // summon mascot
    
  };

  return (
    <div className="text-white font-myFont w-full h-screen text-center relative overflow-x-hidden">
      {/* Header with hover movement */}
      <h1
        className="flex justify-center text-9xl mt-12"
        onMouseEnter={handleHeaderHover}
        style={{
          transform: `translate(${headerPosition.x}px, ${headerPosition.y}px)`,
          transition: 'transform 0.2s ease-in-out',
        }}
      >
        Freaky Food
      </h1>

      {/* Navbar with hover movement */}
      <ul className="flex justify-center mt-6 space-x-10 text-4xl cursor-pointer">
        <li
          onMouseEnter={handleExploreHover}
          style={{
            transform: `translate(${explorePosition.x}px, ${explorePosition.y}px)`,
            transition: 'transform 0.2s ease-in-out',
          }}
        >
          Explore
        </li>
        <li
          onMouseEnter={handleTopPicksHover}
          style={{
            transform: `translate(${topPicksPosition.x}px, ${topPicksPosition.y}px)`,
            transition: 'transform 0.2s ease-in-out',
          }}
        >
          Top Picks
        </li>
        <li
          onMouseEnter={handleAboutHover}
          style={{
            transform: `translate(${aboutPosition.x}px, ${aboutPosition.y}px)`,
            transition: 'transform 0.2s ease-in-out',
          }}
        >
          About
        </li>
        <li
          onMouseEnter={handleProfileHover}
          style={{
            transform: `translate(${profilePosition.x}px, ${profilePosition.y}px)`,
            transition: 'transform 0.2s ease-in-out',
          }}
        >
          Profile
        </li>
      </ul>

      {/* Circle Logo with animation */}
      <div className="absolute bottom-1 right-8 w-64 h-64 opacity-85">
        <AnimateLogo start={startAnimation} delay={0.25}>
          <img
            src={logo}
            alt="Logo"
            className="w-full h-full object-cover cursor-pointer"
            onClick={handleLogoClick} // Add click handler
          />
        </AnimateLogo>
      </div>
    </div>
  );
};

export default HomePage;
