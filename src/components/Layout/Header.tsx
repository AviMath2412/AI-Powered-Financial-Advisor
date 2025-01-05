import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';

export const Header: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <header className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-between"
        >
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {t('app.title')}
            </h1>
            <p className="text-xl text-blue-100">
              {t('app.subtitle')}
            </p>
          </div>
          <TrendingUp className="hidden md:block w-24 h-24 text-blue-200" />
        </motion.div>
      </div>
    </header>
  );
};