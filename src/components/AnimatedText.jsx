import React from 'react';
import { motion } from 'framer-motion';

const AnimatedText = () => {
  const words = ["Women", "leading", "Tech"];

  return (
    <div className="flex flex-col items-center">
      {words.map((word, index) => (
        <motion.h1
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.5 }} // Délai entre les mots
          className={`text-4xl font-bold text-white ${index === 1 ? 'text-3xl' : ''} mb-2`}
        >
          {word}
        </motion.h1>
      ))}
    </div>
  );
};
