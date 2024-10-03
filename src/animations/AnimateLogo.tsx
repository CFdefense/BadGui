// src/animations/AnimateLogo.jsx
import React from 'react';
import { motion } from 'framer-motion';

const AnimateLogo = ({ start, delay, children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 75 }} // Default Setting
      animate={start ? { opacity: 1, y: 0 } : { opacity: 0, y: 75 }} // Control visibility based on start
      transition={{ duration: 0.5, delay: delay }}
      style={{ position: 'relative' }} // Ensure positioning is relative
    >
      {children}
    </motion.div>
  );
};

export default AnimateLogo;
