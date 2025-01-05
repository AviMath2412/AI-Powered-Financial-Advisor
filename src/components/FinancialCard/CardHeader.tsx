import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface CardHeaderProps {
  title: string;
  icon: React.ReactNode;
  isExpanded: boolean;
}

export const CardHeader: React.FC<CardHeaderProps> = ({ title, icon, isExpanded }) => (
  <div className="flex items-center justify-between p-6">
    <div className="flex items-center space-x-4">
      <motion.div
        whileHover={{ rotate: 15 }}
        className="p-3 bg-blue-100 dark:bg-blue-900 rounded-full"
      >
        {icon}
      </motion.div>
      <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
        {title}
      </h3>
    </div>
    <motion.div
      animate={{ rotate: isExpanded ? 180 : 0 }}
      transition={{ duration: 0.2 }}
    >
      {isExpanded ? (
        <ChevronUp className="w-5 h-5 text-gray-500 dark:text-gray-400" />
      ) : (
        <ChevronDown className="w-5 h-5 text-gray-500 dark:text-gray-400" />
      )}
    </motion.div>
  </div>
);