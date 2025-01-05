import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FinancialCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const FinancialCard: React.FC<FinancialCardProps> = ({ title, description, icon }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg 
      transition-all duration-300 cursor-pointer"
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-full mr-4">
            {icon}
          </div>
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{title}</h3>
        </div>
        {isExpanded ? (
          <ChevronUp className="w-5 h-5 text-gray-500 dark:text-gray-400" />
        ) : (
          <ChevronDown className="w-5 h-5 text-gray-500 dark:text-gray-400" />
        )}
      </div>
      <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
      
      {isExpanded && (
        <div className="border-t border-gray-200 dark:border-gray-700 pt-4 mt-4">
          <div className="space-y-4">
            {/* Placeholder for dynamic content */}
            <p className="text-gray-600 dark:text-gray-300">
              Additional information and resources will be displayed here.
              You can customize this section based on your needs.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default FinancialCard;