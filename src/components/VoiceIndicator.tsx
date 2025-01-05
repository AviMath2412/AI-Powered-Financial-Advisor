import React from 'react';
import { motion } from 'framer-motion';

interface VoiceIndicatorProps {
  isListening: boolean;
}

export const VoiceIndicator: React.FC<VoiceIndicatorProps> = ({ isListening }) => (
  <div className="relative">
    {isListening && (
      <>
        {[1, 2, 3].map((i) => (
          <motion.div
            key={i}
            className="absolute inset-0 rounded-full bg-red-500"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.5, 0, 0.5]
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              delay: i * 0.2
            }}
          />
        ))}
      </>
    )}
    <div className="relative z-10 w-5 h-5 bg-red-500 rounded-full" />
  </div>
);