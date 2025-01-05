import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { motion } from 'framer-motion';

interface CardContentProps {
  topicKey: string;
  isExpanded: boolean;
}

export const CardContent: React.FC<CardContentProps> = ({ topicKey, isExpanded }) => {
  const { t } = useLanguage();
  
  const content = t(`topic.${topicKey}.content`);

  return (
    <motion.div
      initial={{ height: 0, opacity: 0 }}
      animate={{ 
        height: isExpanded ? 'auto' : 0,
        opacity: isExpanded ? 1 : 0
      }}
      transition={{ duration: 0.3 }}
      className="overflow-hidden"
    >
      <div className="border-t border-gray-200 dark:border-gray-700 pt-4 mt-4">
        <div className="prose dark:prose-invert max-w-none">
          {content.split('\n\n').map((section, index) => {
            const [title, ...points] = section.split('\n');
            return (
              <div key={index} className="mb-4">
                <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">
                  {title.replace(/^\d+\.\s/, '')}
                </h4>
                <ul className="list-disc list-inside space-y-1">
                  {points.map((point, idx) => (
                    <li key={idx} className="text-gray-600 dark:text-gray-400">
                      {point.replace(/^-\s/, '')}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
};