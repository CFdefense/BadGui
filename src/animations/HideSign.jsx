import { motion } from 'framer-motion';

const HideSign = ({ start, delay, children }) => {
  return (
    <motion.div
      initial={{ opacity: 1, y: 0 }} // Start fully visible
      animate={start ? { opacity: 0, y: 75 } : { opacity: 1, y: 0 }} // Hide animation when start is true
      transition={{
        duration: delay === 0 ? 0 : 0.5, // Ternary for duration based on delay -> I used 0 to hide on page reload and any other to represent desired behavior
        delay: delay,
      }}
      style={{ position: 'relative' }} // Ensure positioning is relative so it can be manipulated
    >
      {/* Perform Animation on Children */}
      {children}
    </motion.div>
  );
};

export default HideSign;
