import React from 'react';
import { motion } from 'framer-motion';

const AnimateFall = ({ start, delay, children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 0, filter: 'blur(10px)' }} // Start above the view with blur
      animate={start ? { opacity: 1, y: 1120, filter: 'blur(0px)' } : { opacity: 0, y: 0, filter: 'blur(10px)' }} // Control visibility and blur based on start
      transition={{ duration: 0.15, delay: delay }} // Duration of animation and delay before execution
      style={{ position: 'relative' }} // Ensure positioning is relative
    >
      {/* Perform Animation on Children */}
      {children}
    </motion.div>
  );
};

export default AnimateFall;
