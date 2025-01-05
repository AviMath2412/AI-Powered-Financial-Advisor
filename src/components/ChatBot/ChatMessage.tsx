import React from 'react';
import { Bot, User } from 'lucide-react';
import { motion } from 'framer-motion';

interface ChatMessageProps {
  text: string;
  isBot: boolean;
}

export const ChatMessage: React.FC<ChatMessageProps> = ({ text, isBot }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.3 }}
    className={`flex ${isBot ? 'justify-start' : 'justify-end'} mb-4`}
  >
    <div 
      className={`
        ${isBot ? 'bg-blue-100 dark:bg-blue-900' : 'bg-green-100 dark:bg-green-900'} 
        rounded-lg p-3 max-w-[80%] shadow-sm
        transform transition-all duration-200 hover:scale-[1.02]
      `}
    >
      {isBot ? 
        <Bot className="inline-block w-4 h-4 mr-2 text-blue-600 dark:text-blue-400" /> :
        <User className="inline-block w-4 h-4 mr-2 text-green-600 dark:text-green-400" />
      }
      <span className="text-gray-800 dark:text-gray-200">{text}</span>
    </div>
  </motion.div>
);