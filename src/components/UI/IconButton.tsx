import React from 'react';
import { motion } from 'framer-motion';

interface IconButtonProps {
  icon: React.ReactNode;
  onClick: () => void;
  label: string;
  className?: string;
}

export const IconButton: React.FC<IconButtonProps> = ({
  icon,
  onClick,
  label,
  className = ''
}) => (
  <motion.button
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
    onClick={onClick}
    title={label}
    className={`p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700
      transition-colors duration-200 ${className}`}
  >
    {icon}
  </motion.button>
);