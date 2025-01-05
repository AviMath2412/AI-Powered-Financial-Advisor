import React, { useState } from 'react';
import { CardHeader } from './CardHeader';
import { CardContent } from './CardContent';

interface FinancialCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  topicKey: string;
}

const FinancialCard: React.FC<FinancialCardProps> = ({ title, description, icon, topicKey }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div 
      className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg 
        transition-all duration-300 cursor-pointer"
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <CardHeader title={title} icon={icon} isExpanded={isExpanded} />
      <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
      <CardContent topicKey={topicKey} isExpanded={isExpanded} />
    </div>
  );
};

export default FinancialCard;