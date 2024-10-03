import React from 'react';
import { motion } from 'framer-motion';

const AnimateSign = ({ start, delay, children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 75 }} // Default Setting
      animate={start ? { opacity: 1, y: 0 } : { opacity: 0, y: 75 }} // Tenerary for animation behavior
      transition={{ duration: 0.5, delay: delay }} // duration of animation and custom delay before execution
      style={{ position: 'relative' }} // Ensure positioning is relative so it can be manipulated
    >
      {/* Perform Animation on Children */}
      {children}
    </motion.div>
  );
};

export default AnimateSign;
