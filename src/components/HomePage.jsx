import React, { useState, useEffect } from 'react';
import sign from '/sign.png';
import logo from '/logo.png';
import AnimateSign from '../animations/AnimateSign';

const HomePage = () => {
  const [startAnimation, setStartAnimation] = useState(false);
  const [runawayEnabled, setRunawayEnabled] = useState(true);
  const [animationTriggered, setAnimationTriggered] = useState(false); // State to track if hover has happened

  const [headerPosition, setHeaderPosition] = useState({ x: 0, y: 0 });
  const [explorePosition, setExplorePosition] = useState({ x: 0, y: 0 });
  const [topPicksPosition, setTopPicksPosition] = useState({ x: 0, y: 0 });
  const [aboutPosition, setAboutPosition] = useState({ x: 0, y: 0 });
  const [profilePosition, setProfilePosition] = useState({ x: 0, y: 0 });

  // Function to generate random positions 
  const getRandomPosition = (elementWidth, elementHeight) => {
    const viewportWidth = 500, viewportHeight = 500;
    const maxX = viewportWidth - elementWidth, maxY = viewportHeight - elementHeight;
    const randomX = Math.random() * maxX, randomY = Math.random() * maxY;
    return { x: randomX, y: randomY };
  };

  const handleHover = (hoverHandler) => (e) => {
    if (!animationTriggered) {
      setAnimationTriggered(true);
      setStartAnimation(true);  // Start animation after first hover
    }
    hoverHandler(e);
  };

  const handleHeaderHover = (e) => {
    if (runawayEnabled) {
      const { width, height } = e.target.getBoundingClientRect();
      setHeaderPosition(getRandomPosition(width - 250, height - 250));
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

  const handleSignClick = () => {
    setRunawayEnabled(false);
    setHeaderPosition({ x: 0, y: 0 });
    setExplorePosition({ x: 0, y: 0 });
    setTopPicksPosition({ x: 0, y: 0 });
    setAboutPosition({ x: 0, y: 0 });
    setProfilePosition({ x: 0, y: 0 });
  };

  return (
    <div className="text-white font-myFont w-full h-screen text-center relative overflow-x-hidden">
      <h1
        className="flex justify-center text-9xl mt-12"
        onMouseEnter={handleHover(handleHeaderHover)}
        style={{
          transform: `translate(${headerPosition.x}px, ${headerPosition.y}px)`,
          transition: 'transform 0.2s ease-in-out',
        }}
      >
        Freaky Food
      </h1>

      <ul className="flex justify-center mt-6 space-x-10 text-4xl cursor-pointer">
        <li
          onMouseEnter={handleHover(handleExploreHover)}
          style={{
            transform: `translate(${explorePosition.x}px, ${explorePosition.y}px)`,
            transition: 'transform 0.2s ease-in-out',
          }}
        >
          Explore
        </li>
        <li
          onMouseEnter={handleHover(handleTopPicksHover)}
          style={{
            transform: `translate(${topPicksPosition.x}px, ${topPicksPosition.y}px)`,
            transition: 'transform 0.2s ease-in-out',
          }}
        >
          Top Picks
        </li>
        <li
          onMouseEnter={handleHover(handleAboutHover)}
          style={{
            transform: `translate(${aboutPosition.x}px, ${aboutPosition.y}px)`,
            transition: 'transform 0.2s ease-in-out',
          }}
        >
          About
        </li>
        <li
          onMouseEnter={handleHover(handleProfileHover)}
          style={{
            transform: `translate(${profilePosition.x}px, ${profilePosition.y}px)`,
            transition: 'transform 0.2s ease-in-out',
          }}
        >
          Profile
        </li>
      </ul>

      <div className="absolute -bottom-2 right-8 w-64 -mb-7 opacity-85">
        <AnimateSign start={startAnimation} delay={3}>
          <img
            src={sign}
            alt="Sign"
            className="w-full h-full object-cover cursor-pointer"
            onClick={handleSignClick}
          />
        </AnimateSign>
      </div>
        <div className="absolute top-[-500px] -right-12 space-y-20">
          <img
            src={logo}
            alt="Logo"
            className=''
          />
        </div>
      
    </div>
  );
};

export default HomePage;
