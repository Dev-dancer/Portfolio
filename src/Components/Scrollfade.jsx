import React from 'react';
import { motion } from "framer-motion";

const Scrollfade = ({ children }) => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.25 }}
    >
      {children}
    </motion.div>
  );
}

export default Scrollfade;
