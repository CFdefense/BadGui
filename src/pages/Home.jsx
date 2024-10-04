import React, { useState, useEffect } from 'react';
import anime from 'animejs/lib/anime.es.js';
import Typed from 'typed.js';
import sign from '/sign.png';
import logo from '/logo.png';
import speak from '/speak.png';
import AnimateSign from '../animations/AnimateSign';
import AnimateFall from '../animations/AnimateFall';
import HideSign from '../animations/HideSign';

// NavBar Dialogues
const dialogues = {
  Explore: [
    "How about you explore a diet?",
    "Have you heard about 75 hard?",
    "Do you seriously want to eat out again?",
    "Are you expecting? Congratulations",
  ],
  Restaurants: [
    "You realize takeout isnt a food group, right? Just checking.",
    "Oh look, another impulse order... Your self control must be on vacation.",
    "Sure, lets get you that overpriced food. Gotta love wasting money",
    "Why cook when you can pay someone else to give you indigestion?",
  ],
  About: [
    "Nosy Bitch",
    "Looking for inspiration? Maybe try looking in the mirror.",
    "Curious? I hope youre ready for a reality check.",
    "About us? Just remember, were not here to save you from yourself.",
    "Its about time you tried a different button",
  ],
  Profile: [
    "Please dont tell us anymore about yourself",
    "Were selling all your information for profit",
    "Is that a profile or a cry for help?",
    "Your profile could use some serious work. Good luck with that.",
    "Make sure to update your BMI while youre at it..."
  ],
};

const Home = () => {
  const [startAnimation, setStartAnimation] = useState(false); // trigger for starting sign appear
  const [startFallAnimation, setFallAnimation] = useState(false); // set fall animation
  const [runawayEnabled, setRunawayEnabled] = useState(true); // toggle for enabling or disabling text running away
  const [animationTriggered, setAnimationTriggered] = useState(false); // if we have triggered animation
  const [hoverTriggered, setHoverTriggered] = useState(false); // if hover has been triggered initially
  const [currentDialogue, setCurrentDialogue] = useState(''); // for typed element
  const [currentDialogueIndex, setCurrentDialogueIndex] = useState(0); // to traverse dialogues in order
  
  // log init states
  const [headerPosition, setHeaderPosition] = useState({ x: 0, y: 0 });
  const [explorePosition, setExplorePosition] = useState({ x: 0, y: 0 });
  const [RestaurantsPosition, setRestaurantsPosition] = useState({ x: 0, y: 0 });
  const [aboutPosition, setAboutPosition] = useState({ x: 0, y: 0 });
  const [profilePosition, setProfilePosition] = useState({ x: 0, y: 0 });

  // method to calculate random position to move text for runaway 
  const getRandomPosition = (elementWidth, elementHeight) => {
    const viewportWidth = 500, viewportHeight = 500;
    const maxX = viewportWidth - elementWidth, maxY = viewportHeight - elementHeight;
    const randomX = Math.random() * maxX, randomY = Math.random() * maxY;
    return { x: randomX, y: randomY };
  };

  // trigger animations when init element hovered
  const handleHover = (hoverHandler) => (e) => {
    if (!animationTriggered) {
      setAnimationTriggered(true);
      setStartAnimation(true);
      setHoverTriggered(true);
    }
    hoverHandler(e);
  };

  // Handles for element loc calculations
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

  const handleRestaurantsHover = (e) => {
    if (runawayEnabled) {
      const { width, height } = e.target.getBoundingClientRect();
      setRestaurantsPosition(getRandomPosition(width, height));
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

  // Method to handle the event of the sign click 
  const handleSignClick = () => {
    setRunawayEnabled(false);
    setHeaderPosition({ x: 0, y: 0 });
    setExplorePosition({ x: 0, y: 0 });
    setRestaurantsPosition({ x: 0, y: 0 });
    setAboutPosition({ x: 0, y: 0 });
    setProfilePosition({ x: 0, y: 0 });

    // Start Logo Animations
    setFallAnimation(true);

    // Promise var to be used to exec after time delay
    const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

    // Wait a bit, then start shaking
    delay(1250).then(() => {
      shakeScreen();
    });

    // Start the hide sign animation
    delay(1800).then(() => {
      setStartAnimation(false); // Hide the sign after some time
    });
    
    // final big shake on impact
    delay(3900).then(() => {
      bigShake();
    });
  };


  // Effect to update currentDialogue with welcome message after sign animation
  useEffect(() => {
    if (startFallAnimation) {
      const timer = setTimeout(() => {
        setCurrentDialogue("Welcome to Freaky Foods... Oh its you again...");
      }, 5900);

      return () => clearTimeout(timer); // Cleanup 
    }
  }, [startFallAnimation]);

  // Use Effect to Detect and Reinitialize Typed.js whenever currentDialogue changes
  useEffect(() => {
    if (currentDialogue) {
      const options = {
        strings: [currentDialogue],
        typeSpeed: 35,
        backSpeed: 50,
        loop: false,
        showCursor: false,
      };
      const typed = new Typed('.typed-element', options);
      return () => {
        typed.destroy(); // Cleanup on unmount
      };
    }
  }, [currentDialogue]);

  // Method to handle and update current dialogue option in typed.js element
  const handleListItemClick = (item) => {
    const dialoguesForItem = dialogues[item];
    
    if (currentDialogueIndex < dialoguesForItem.length) {
      setCurrentDialogue(dialoguesForItem[currentDialogueIndex]);
      setCurrentDialogueIndex(currentDialogueIndex + 1);
    } else {
      // Reset the index if we reach the end
      setCurrentDialogueIndex(0);
      setCurrentDialogue(dialoguesForItem[0]);
    }
  };

  // anime effect to shake the screen before logo appears
  const shakeScreen = () => {
    const shakeInterval = 100; // Interval for shaking
    const shakeDuration = 2800; // Total duration for shake
    const startTime = Date.now();

    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;

      if (elapsed < shakeDuration) {
        anime({
          targets: 'body',
          translateX: [
            { value: -10, duration: shakeInterval / 2 },
            { value: 10, duration: shakeInterval / 2 },
            { value: 0, duration: shakeInterval / 2 }
          ],
          easing: 'easeInOutQuad',
        });
      } else {
        clearInterval(interval);
      }
    }, shakeInterval);
  };

  // Anime Animation For Big Stomp on Impact
  const bigShake = () => {
    const shakeInterval = 150; // Interval for shaking
    const shakeDuration = 300; // Total duration for shake
    const startTime = Date.now();

    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;

      if (elapsed < shakeDuration) {
        anime({
          targets: 'body',
          translateX: [
            { value: -100, duration: shakeInterval / 3 },
            { value: 50, duration: shakeInterval / 3 },
            { value: -100, duration: shakeInterval / 3 },
            { value: 50, duration: shakeInterval / 3 },
          ],
          translateY: [
            { value: -100, duration: 200, easing: 'easeInOutQuad' }, // Upward movement
            { value: 0, duration: 200, easing: 'easeOutBounce' }, // Bounce back to original position
            { value: -50, duration: 200, easing: 'easeInOutQuad' }, // Upward movement
            { value: 0, duration: 200, easing: 'easeOutBounce' } // Bounce back to original position
          ],
          easing: 'easeInOutQuad',
        });
      } else {
        clearInterval(interval);
      }
    }, shakeInterval);
  };

  return (
    <div className="text-white font-myFont w-full h-screen text-center relative overflow-x-hidden">
      {/* Header Element */}
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

      {/* Navbar Elements */}
      <ul className="flex justify-center mt-6 space-x-10 text-4xl cursor-pointer">
        <li
          onClick={() => handleListItemClick('Explore')}
          onMouseEnter={handleHover(handleExploreHover)}
          style={{
            transform: `translate(${explorePosition.x}px, ${explorePosition.y}px)`,
            transition: 'transform 0.2s ease-in-out',
          }}
        >
          Explore
        </li>
        <li
          onClick={() => handleListItemClick('Restaurants')}
          onMouseEnter={handleHover(handleRestaurantsHover)}
          style={{
            transform: `translate(${RestaurantsPosition.x}px, ${RestaurantsPosition.y}px)`,
            transition: 'transform 0.2s ease-in-out',
          }}
        >
          Restaurants
        </li>
        <li
          onClick={() => handleListItemClick('About')}
          onMouseEnter={handleHover(handleAboutHover)}
          style={{
            transform: `translate(${aboutPosition.x}px, ${aboutPosition.y}px)`,
            transition: 'transform 0.2s ease-in-out',
          }}
        >
          About
        </li>
        <li
          onClick={() => handleListItemClick('Profile')}
          onMouseEnter={handleHover(handleProfileHover)}
          style={{
            transform: `translate(${profilePosition.x}px, ${profilePosition.y}px)`,
            transition: 'transform 0.2s ease-in-out',
          }}
        >
          Profile
        </li>
      </ul>
      
      {/* Sign Rendering */}
      <div className="absolute -bottom-2 right-12 w-64 -mb-7 opacity-85">
        {/* Conditional rendering of the sign */}
        {startAnimation ? (
          <AnimateSign start={startAnimation} delay={3}>
            <img
              src={sign}
              alt="Sign"
              className="w-full h-full object-cover cursor-pointer"
              onClick={handleSignClick}
            />
          </AnimateSign>
        ) : (
          
          <HideSign start={!startAnimation} delay={hoverTriggered ? 2.15 : 0}>
            <img
              src={sign}
              alt="Sign"
              className="w-full h-full object-cover"
            />
          </HideSign>
        )}
      </div>

      {/* Logo Rendering */}
      <div className="absolute top-[-500px] right-0">
        <AnimateFall start={startFallAnimation} delay={4}>
          <img
            src={logo}
            alt="Logo"
          />
        </AnimateFall>
      </div>

      {/* Text Box Picture */}
      <div className='flex absolute -rotate-12' style={{ right: '350px', bottom: '210px'}}>
        <AnimateSign start={startFallAnimation} delay={5}>
        <img
          src={speak}
          alt="speak"
          className='z-40'
          />
        </AnimateSign>
        
        {/* Text For Text Box */}
        <AnimateSign start={startFallAnimation} delay={5.8}> 
        <div className="absolute z-50 text-3xl text-red-500 text-left typed-element" style={{right: '60px', top: '8px', width: '300px', overflowWrap: 'break-word', transform: 'rotate(-2deg)', lineHeight: '1.0'}}>
          {/* Typed Element Types Here */}
        </div>
        </AnimateSign>
      </div>
    </div>
  );
};

export default Home;
