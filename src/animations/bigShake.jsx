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
            { value: 0, duration: 200, easing: 'easeOutBounce' } // Bounce back to original position
          ],
          easing: 'easeInOutQuad',
        });
      } else {
        clearInterval(interval);
      }
    }, shakeInterval);
  };

export {}